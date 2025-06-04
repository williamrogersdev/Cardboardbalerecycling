import { Star, Quote } from "lucide-react";
import { TestimonialData } from "@/types";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: TestimonialData;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps): JSX.Element {
  return (
    <div
      className={cn("bg-white rounded-xl p-6 card-shadow relative", className)}
    >
      <div className="absolute top-4 right-4 text-primary-200">
        <Quote className="w-8 h-8" />
      </div>

      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < testimonial.rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            )}
          />
        ))}
      </div>

      <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
        "{testimonial.content}"
      </blockquote>

      <div className="border-t pt-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-primary-600 font-semibold text-lg">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <div className="font-semibold text-gray-900">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-600">{testimonial.role}</div>
            <div className="text-sm text-primary-600 font-medium">
              {testimonial.company}
            </div>
            <div className="text-xs text-gray-500">{testimonial.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
