import { Check } from "lucide-react";
import { PricingTier } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  tier: PricingTier;
  featured?: boolean;
  className?: string;
}

export function PricingCard({
  tier,
  featured = false,
  className,
}: PricingCardProps): JSX.Element {
  return (
    <div
      className={cn(
        "relative bg-white rounded-xl p-8 border-2 transition-all duration-300 hover:shadow-xl",
        featured
          ? "border-primary-500 ring-4 ring-primary-100 scale-105"
          : "border-gray-200 hover:border-primary-300",
        className
      )}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
        <p className="text-gray-600 mb-4">{tier.description}</p>

        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">
            {formatCurrency(tier.pricePerTon)}
          </span>
          <span className="text-gray-600 ml-2">per ton</span>
        </div>

        <div className="text-sm text-gray-500">
          Volume: {tier.minVolume}
          {tier.maxVolume ? `-${tier.maxVolume}` : "+"} tons/month
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-primary-600" />
            </div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={cn(
          "w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200",
          featured
            ? "bg-primary-500 hover:bg-primary-600 text-white"
            : "bg-gray-100 hover:bg-gray-200 text-gray-900"
        )}
      >
        Get Started
      </button>
    </div>
  );
}
