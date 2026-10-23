"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle, Calculator } from "lucide-react";
import { QuoteFormData } from "@/types";
import { HeroSection } from "@/components/ui/hero-section";
import { cn } from "@/lib/utils";
import { serviceAreas } from "@/lib/data";
import { isValidPhone, newSubmissionId, readAttribution, sendLead } from "@/lib/lead-client";
import {
  SMS_CONSENT_TEXT,
  monthlyVolumeOptions,
  serviceOptions,
  timeframeOptions,
} from "@/lib/lead-options";

const FORM_FIELDS: (keyof QuoteFormData)[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "company",
  "address",
  "city",
  "state",
  "zipCode",
  "service",
  "monthlyVolume",
  "timeframe",
  "currentDisposalCost",
  "pickupFrequency",
  "specialRequirements",
  "message",
  "smsConsent",
];

const ERROR_MESSAGE =
  "There was an error submitting your quote request. Please try again or call us directly.";

// Define form data type with botcheck
type FormData = QuoteFormData & {
  botcheck: string;
};

export default function QuotePage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const monthlyVolume = watch("monthlyVolume");
  const equipmentNeeds = watch("equipmentNeeds");

  // Made on load, kept across failed tries, renewed after a success.
  const submissionId = useRef("");
  const attribution = useRef<Record<string, string>>({});

  useEffect(() => {
    submissionId.current = newSubmissionId();
    attribution.current = readAttribution();
  }, []);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setMessage("");
    if (!submissionId.current) submissionId.current = newSubmissionId();

    // A filled honeypot goes to the server too, which answers as for a success.
    const result = await sendLead(data, submissionId.current, attribution.current);

    if (result.kind === "ok") {
      setIsSuccess(true);
      setMessage("Thank you for your quote request. Our team will review your information and contact you within 24 hours with a detailed proposal.");
      submissionId.current = newSubmissionId();
      reset();
    } else {
      setIsSuccess(false);
      if (result.kind === "fields") {
        let shown = false;
        for (const name of FORM_FIELDS) {
          const fieldMessage = result.fields[name];
          if (fieldMessage) {
            setError(name, { type: "server", message: fieldMessage });
            shown = true;
          }
        }
        setMessage(shown ? "Please check the highlighted fields." : ERROR_MESSAGE);
      } else if (result.kind === "too-many") {
        setMessage("Too many requests. Please wait a moment and try again.");
      } else {
        setMessage(ERROR_MESSAGE);
      }
    }
    setLoading(false);
  };

  // Reset success message after 5 seconds
  useEffect(() => {
    if (isSubmitSuccessful && isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, isSuccess]);

  const estimateRevenue = (): string => {
    if (!monthlyVolume) return "$0 - $0";

    const volume = parseInt(monthlyVolume.split("-")[0]);
    let minRate = 80;
    let maxRate = 100;

    if (volume >= 50) {
      minRate = 100;
      maxRate = 120;
    } else if (volume >= 10) {
      minRate = 90;
      maxRate = 110;
    }

    const minRevenue = volume * minRate;
    const maxRevenue = volume * maxRate;

    return `$${minRevenue.toLocaleString()} - $${maxRevenue.toLocaleString()}`;
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        subtitle="📊 Free Assessment"
        title="Get Your Custom Quote"
        description="Discover how much revenue you can generate from your cardboard waste. Fill out our comprehensive form for a detailed assessment and pricing proposal."
        primaryCta={{
          text: "Start Quote Form",
          href: "#quote-form",
        }}
      />

      {/* Quote Form Section */}
      <section id="quote-form" className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Request Your Free Quote
              </h2>
              <p className="text-xl text-gray-600">
                Provide details about your business and cardboard waste to
                receive an accurate assessment.
              </p>
            </div>

            {isSubmitSuccessful && isSuccess && (
              <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-1">
                    Quote Request Submitted!
                  </h3>
                  <p className="text-green-700">
                    {message ||
                      "Thank you for your quote request. Our team will review your information and contact you within 24 hours with a detailed proposal."}
                  </p>
                </div>
              </div>
            )}

            {!isSuccess && message && (
              <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-1">
                    Submission Error
                  </h3>
                  <p className="text-red-700">
                    {message ||
                      "There was an error submitting your quote request. Please try again or call us directly at (800) CARDBOARD."}
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Quote Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Hidden honeypot field for spam prevention */}
                  <input
                    type="checkbox"
                    className="hidden"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("botcheck")}
                  />

                  {/* Business Information */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Business Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          autoComplete="given-name"
                          {...register("firstName", {
                            required: "First name is required",
                            maxLength: {
                              value: 80,
                              message: "First name cannot exceed 80 characters",
                            },
                          })}
                          className={cn(
                            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                            errors.firstName ? "border-red-300" : "border-gray-300"
                          )}
                          placeholder="First name"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          autoComplete="family-name"
                          {...register("lastName", {
                            required: "Last name is required",
                            maxLength: {
                              value: 80,
                              message: "Last name cannot exceed 80 characters",
                            },
                          })}
                          className={cn(
                            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                            errors.lastName ? "border-red-300" : "border-gray-300"
                          )}
                          placeholder="Last name"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Please enter a valid email address",
                            },
                          })}
                          className={cn(
                            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                            errors.email ? "border-red-300" : "border-gray-300"
                          )}
                          placeholder="your@company.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          autoComplete="tel"
                          {...register("phone", {
                            required: "Phone number is required",
                            validate: (value) =>
                              isValidPhone(value) || "Please enter a valid phone number",
                          })}
                          className={cn(
                            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                            errors.phone ? "border-red-300" : "border-gray-300"
                          )}
                          placeholder="(555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        {...register("company", {
                          required: "Company name is required",
                          maxLength: {
                            value: 120,
                            message: "Company name cannot exceed 120 characters",
                          },
                        })}
                        className={cn(
                          "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                          errors.company ? "border-red-300" : "border-gray-300"
                        )}
                        placeholder="Your company"
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.company.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Location Information */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Location Information
                    </h3>

                    <div className="mb-4">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Business Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        {...register("address", {
                          required: "Address is required",
                          maxLength: {
                            value: 200,
                            message: "Address cannot exceed 200 characters",
                          },
                        })}
                        className={cn(
                          "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                          errors.address ? "border-red-300" : "border-gray-300"
                        )}
                        placeholder="Street address"
                      />
                      {errors.address && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.address.message}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          {...register("city", {
                            required: "City is required",
                            maxLength: {
                              value: 80,
                              message: "City cannot exceed 80 characters",
                            },
                          })}
                          className={cn(
                            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                            errors.city ? "border-red-300" : "border-gray-300"
                          )}
                          placeholder="City"
                        />
                        {errors.city && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.city.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          State *
                        </label>
                        <select
                          id="state"
                          {...register("state", {
                            required: "State is required",
                          })}
                          className={cn(
                            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                            errors.state ? "border-red-300" : "border-gray-300"
                          )}
                        >
                          <option value="">Select state</option>
                          {serviceAreas
                            .filter((area) => area.active)
                            .sort((a, b) => a.state.localeCompare(b.state))
                            .map((area) => (
                              <option key={area.state} value={area.state}>
                                {area.state}
                              </option>
                            ))}
                        </select>
                        {errors.state && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.state.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="zipCode"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          {...register("zipCode", {
                            required: "ZIP code is required",
                            pattern: {
                              value: /^\d{5}(-\d{4})?$/,
                              message: "Please enter a valid ZIP code",
                            },
                          })}
                          className={cn(
                            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                            errors.zipCode
                              ? "border-red-300"
                              : "border-gray-300"
                          )}
                          placeholder="12345"
                        />
                        {errors.zipCode && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.zipCode.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Waste Details */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Cardboard Waste Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          How Can We Help? *
                        </label>
                        <select
                          id="service"
                          {...register("service", {
                            required: "Please choose how we can help",
                          })}
                          className={cn(
                            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                            errors.service ? "border-red-300" : "border-gray-300"
                          )}
                        >
                          <option value="">Select an option</option>
                          {serviceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.service.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="timeframe"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          When do you need this?
                        </label>
                        <select
                          id="timeframe"
                          {...register("timeframe")}
                          className={cn(
                            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                            errors.timeframe ? "border-red-300" : "border-gray-300"
                          )}
                        >
                          <option value="">Select a timeframe</option>
                          {timeframeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.timeframe && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.timeframe.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="monthlyVolume"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Monthly Volume (tons) *
                        </label>
                        <select
                          id="monthlyVolume"
                          {...register("monthlyVolume", {
                            required: "Monthly volume is required",
                          })}
                          className={cn(
                            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                            errors.monthlyVolume
                              ? "border-red-300"
                              : "border-gray-300"
                          )}
                        >
                          <option value="">Select volume range</option>
                          {monthlyVolumeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.monthlyVolume && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.monthlyVolume.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="currentDisposalCost"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Current Monthly Disposal Cost
                        </label>
                        <input
                          type="number"
                          id="currentDisposalCost"
                          {...register("currentDisposalCost", {
                            valueAsNumber: true,
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="$500"
                        />
                        {errors.currentDisposalCost && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.currentDisposalCost.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="pickupFrequency"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Preferred Pickup Frequency *
                        </label>
                        <select
                          id="pickupFrequency"
                          {...register("pickupFrequency", {
                            required: "Pickup frequency is required",
                          })}
                          className={cn(
                            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                            errors.pickupFrequency
                              ? "border-red-300"
                              : "border-gray-300"
                          )}
                        >
                          <option value="">Select frequency</option>
                          <option value="weekly">Weekly</option>
                          <option value="bi-weekly">Bi-weekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                        {errors.pickupFrequency && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.pickupFrequency.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Equipment Rental Needed
                        </label>
                        <div className="flex items-center gap-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              value="true"
                              {...register("equipmentNeeds")}
                              className="mr-2"
                            />
                            Yes
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              value="false"
                              {...register("equipmentNeeds")}
                              className="mr-2"
                            />
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="specialRequirements"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Special Requirements or Comments
                      </label>
                      <textarea
                        id="specialRequirements"
                        rows={3}
                        {...register("specialRequirements", {
                          maxLength: {
                            value: 1000,
                            message: "Special requirements cannot exceed 1000 characters",
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Any special requirements, access restrictions, or additional information..."
                      />
                      {errors.specialRequirements && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.specialRequirements.message}
                        </p>
                      )}
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Additional Message
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        {...register("message", {
                          maxLength: {
                            value: 2000,
                            message: "Message cannot exceed 2000 characters",
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Any questions or additional information..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="flex items-start gap-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        {...register("smsConsent")}
                        className="mt-1"
                      />
                      {SMS_CONSENT_TEXT}
                    </label>
                    {errors.smsConsent && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.smsConsent.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || loading}
                    className={cn(
                      "w-full btn-primary justify-center text-lg py-4",
                      (isSubmitting || loading) && "opacity-75 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting || loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Submitting Quote Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Quote Request
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Quote Summary */}
              <div className="space-y-6">
                <div className="bg-primary-50 rounded-lg p-6 sticky top-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Calculator className="w-5 h-5 text-primary-600" />
                    <h3 className="text-lg font-bold text-gray-900">
                      Estimated Revenue
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">
                        Monthly Volume
                      </div>
                      <div className="font-semibold text-gray-900">
                        {monthlyVolume || "Not selected"}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-600 mb-1">
                        Estimated Revenue Range
                      </div>
                      <div className="text-2xl font-bold text-primary-600">
                        {estimateRevenue()}
                      </div>
                      <div className="text-xs text-gray-500">per month</div>
                    </div>

                    {equipmentNeeds === "true" && (
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          Equipment Rental
                        </div>
                        <div className="text-sm text-gray-600">
                          Baler rental available
                        </div>
                        <div className="text-sm text-gray-600">
                          Typically $200-500/month
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary-200">
                    <p className="text-xs text-gray-600">
                      * Estimates based on current market rates and typical
                      material quality. Actual pricing may vary based on
                      specific conditions.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    What Happens Next?
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        1
                      </div>
                      <div>
                        <div className="font-medium">Quote Review</div>
                        <div className="text-gray-600">
                          We review your information within 4 hours
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        2
                      </div>
                      <div>
                        <div className="font-medium">Initial Contact</div>
                        <div className="text-gray-600">
                          Our team contacts you within 24 hours
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        3
                      </div>
                      <div>
                        <div className="font-medium">Site Assessment</div>
                        <div className="text-gray-600">
                          Optional on-site evaluation if needed
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        4
                      </div>
                      <div>
                        <div className="font-medium">Proposal</div>
                        <div className="text-gray-600">
                          Detailed pricing and service proposal
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
