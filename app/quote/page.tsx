"use client";

import type { Metadata } from "next";
import useWeb3Forms from "@web3forms/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle, Calculator } from "lucide-react";
import { QuoteFormData } from "@/types";
import { HeroSection } from "@/components/ui/hero-section";
import { cn } from "@/lib/utils";

const metadata: Metadata = {
  title: "Get Quote",
  description:
    "Get a free quote for cardboard bale recycling services. Calculate your potential revenue and start turning waste into profit.",
  keywords: [
    "cardboard recycling quote",
    "free quote",
    "cardboard bale pickup",
    "recycling assessment",
    "waste management quote",
  ],
};

// Define form data type with botcheck
type FormData = QuoteFormData & {
  botcheck: string;
};

export default function QuotePage(): JSX.Element {
  // Web3Forms access key
  const apiKey = "53534de8-540c-4885-9ca4-44cffb30f0f7";

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const monthlyVolume = watch("monthlyVolume");
  const equipmentNeeds = watch("equipmentNeeds");

  // Setup Web3Forms hook
  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Cardboard Bale Recycling",
      subject: "New Quote Request",
    },
    onSuccess: (msg, _data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, _data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

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
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register("name", {
                            required: "Name is required",
                            maxLength: {
                              value: 80,
                              message: "Name cannot exceed 80 characters",
                            },
                          })}
                          className={cn(
                            "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                            errors.name ? "border-red-300" : "border-gray-300"
                          )}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

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
                          <option value="CA">California</option>
                          <option value="TX">Texas</option>
                          <option value="FL">Florida</option>
                          <option value="NY">New York</option>
                          <option value="IL">Illinois</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="OH">Ohio</option>
                          <option value="GA">Georgia</option>
                          <option value="NC">North Carolina</option>
                          <option value="MI">Michigan</option>
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
                          <option value="2-5">2-5 tons</option>
                          <option value="5-10">5-10 tons</option>
                          <option value="10-25">10-25 tons</option>
                          <option value="25-50">25-50 tons</option>
                          <option value="50-100">50-100 tons</option>
                          <option value="100+">100+ tons</option>
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
                        {...register("specialRequirements")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Any special requirements, access restrictions, or additional information..."
                      />
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
                        {...register("message")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Any questions or additional information..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full btn-primary justify-center text-lg py-4",
                      isSubmitting && "opacity-75 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
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
