"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { ContactFormData } from "@/types";
import { cn } from "@/lib/utils";
import { isValidPhone, newSubmissionId, readAttribution, sendLead } from "@/lib/lead-client";
import {
  SMS_CONSENT_TEXT,
  monthlyVolumeOptions,
  serviceOptions,
  timeframeOptions,
} from "@/lib/lead-options";

interface ContactFormProps {
  title?: string;
  description?: string;
  className?: string;
}

// Define form data type with botcheck
type FormData = ContactFormData & {
  botcheck: string;
};

const FORM_FIELDS: (keyof ContactFormData)[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "company",
  "address",
  "zipCode",
  "service",
  "monthlyVolume",
  "timeframe",
  "message",
  "smsConsent",
];

const ERROR_MESSAGE =
  "There was an error submitting your form. Please try again or call us directly.";

const inputClass = (hasError?: boolean) =>
  cn(
    "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
    hasError ? "border-red-300" : "border-gray-300"
  );

export function ContactForm({
  title = "Get In Touch",
  description = "Ready to start recycling? Contact us for a free consultation.",
  className,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
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
      setMessage("Thank you! We'll contact you within 24 hours to discuss your recycling needs.");
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

  return (
    <div className={cn("bg-white rounded-lg p-6 card-shadow", className)}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {isSuccess && message && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <p className="text-green-700">{message}</p>
        </div>
      )}

      {!isSuccess && message && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-700">{message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Hidden honeypot field for spam prevention */}
        <input
          type="checkbox"
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          {...register("botcheck")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className={inputClass(!!errors.firstName)}
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
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
              className={inputClass(!!errors.lastName)}
              placeholder="Last name"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className={inputClass(!!errors.email)}
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
              className={inputClass(!!errors.phone)}
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              autoComplete="organization"
              {...register("company", {
                maxLength: {
                  value: 120,
                  message: "Company name cannot exceed 120 characters",
                },
              })}
              className={inputClass(!!errors.company)}
              placeholder="Your company"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
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
              autoComplete="postal-code"
              {...register("zipCode", {
                required: "ZIP code is required",
                pattern: {
                  value: /^\d{5}(-\d{4})?$/,
                  message: "Please enter a valid ZIP code",
                },
              })}
              className={inputClass(!!errors.zipCode)}
              placeholder="12345"
            />
            {errors.zipCode && (
              <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Street Address
          </label>
          <input
            type="text"
            id="address"
            autoComplete="street-address"
            {...register("address", {
              maxLength: {
                value: 200,
                message: "Address cannot exceed 200 characters",
              },
            })}
            className={inputClass(!!errors.address)}
            placeholder="Street address"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className={inputClass(!!errors.service)}
            >
              <option value="">Select an option</option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
            )}
          </div>

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
              className={inputClass(!!errors.monthlyVolume)}
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
            className={inputClass(!!errors.timeframe)}
          >
            <option value="">Select a timeframe</option>
            {timeframeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.timeframe && (
            <p className="mt-1 text-sm text-red-600">{errors.timeframe.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message *
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
              maxLength: {
                value: 1000,
                message: "Message cannot exceed 1000 characters",
              },
            })}
            className={inputClass(!!errors.message)}
            placeholder="Tell us about your cardboard recycling needs..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
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
            <p className="mt-1 text-sm text-red-600">{errors.smsConsent.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || loading}
          className={cn(
            "w-full btn-primary justify-center",
            (isSubmitting || loading) && "opacity-75 cursor-not-allowed"
          )}
        >
          {isSubmitting || loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
