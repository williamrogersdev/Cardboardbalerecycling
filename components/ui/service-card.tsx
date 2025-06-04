import {
  Truck,
  Settings,
  DollarSign,
  Shield,
  Wrench,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  benefits?: string[];
  icon: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Truck,
  Settings,
  DollarSign,
  Shield,
  Wrench,
};

export function ServiceCard({
  title,
  description,
  features,
  benefits,
  icon,
  className,
}: ServiceCardProps): JSX.Element {
  const IconComponent = iconMap[icon] || Settings;

  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 card-shadow hover:shadow-2xl transition-all duration-300 group",
        className
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg group-hover:bg-primary-500 transition-colors duration-300">
          <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
            Features
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {benefits && benefits.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Benefits
            </h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
