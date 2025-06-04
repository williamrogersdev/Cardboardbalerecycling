"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQItem } from "@/types";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
  className?: string;
}

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our cardboard recycling services.",
  className,
}: FAQSectionProps): JSX.Element {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string): void => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className={cn("section-padding bg-gray-50", className)}>
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-600">{description}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openItems.has(faq.id);

              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  <div
                    className={cn(
                      "transition-all duration-300 ease-in-out overflow-hidden",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
