"use client";

import useWeb3Forms from "@web3forms/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { ContactFormData } from "@/types";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  title?: string;
  description?: string;
  className?: string;
}

// Define form data type with botcheck
type FormData = ContactFormData & {
  botcheck: string;
};

export function ContactForm({
  title = "Get In Touch",
  description = "Ready to start recycling? Contact us for a free consultation.",
  className,
}: ContactFormProps): JSX.Element {
  // Web3Forms access key
  const apiKey = "53534de8-540c-4885-9ca4-44cffb30f0f7";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  // Setup Web3Forms hook
  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Cardboard Bale Recycling",
      subject: "New Contact Form Submission",
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

  return (
    <div className={cn("bg-white rounded-lg p-6 card-shadow", className)}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {isSubmitSuccessful && isSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <p className="text-green-700">
            {message ||
              "Thank you! We'll contact you within 24 hours to discuss your recycling needs."}
          </p>
        </div>
      )}

      {!isSuccess && message && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-700">
            {message ||
              "There was an error submitting your form. Please try again or call us directly."}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Hidden honeypot field for spam prevention */}
        <input
          type="checkbox"
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
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
            Company Name
          </label>
          <input
            type="text"
            id="company"
            {...register("company")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Your company"
          />
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
            className={cn(
              "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
              errors.message ? "border-red-300" : "border-gray-300"
            )}
            placeholder="Tell us about your cardboard recycling needs..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full btn-primary justify-center",
            isSubmitting && "opacity-75 cursor-not-allowed"
          )}
        >
          {isSubmitting ? (
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
