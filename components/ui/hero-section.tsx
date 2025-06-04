import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  className,
}: HeroSectionProps): JSX.Element {
  return (
    <section
      className={cn(
        "relative gradient-bg section-padding overflow-hidden",
        className
      )}
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(22, 163, 74, 0.8), rgba(14, 165, 233, 0.8)), url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-primary-100 text-primary-700 rounded-full mb-4">
              {subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={primaryCta.href}
              className="btn-primary text-lg px-8 py-4"
            >
              {primaryCta.text}
              <ArrowRight className="w-5 h-5" />
            </Link>

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="btn-outline text-lg px-8 py-4"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full opacity-20 blur-3xl" />
      </div>
    </section>
  );
}
