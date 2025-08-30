"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  items: FAQItem[];
  className?: string;
}

export function FAQ({ title, items, className }: FAQProps) {
  const [openItems, setOpenItems] = React.useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className={cn("py-16 px-4", className)}>
      <div className="container mx-auto max-w-3xl">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
          </div>
        )}
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {item.question}
                </h3>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform shrink-0",
                    openItems.includes(index) && "rotate-180"
                  )}
                />
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pre-configured FAQ sections
export function HomeFAQ() {
  const faqItems: FAQItem[] = [
    {
      question: "Do you provide upfront pricing?",
      answer: "Yes, we provide transparent upfront pricing before any work begins. No hidden fees or surprises on your bill."
    },
    {
      question: "Are you available for emergency calls?",
      answer: "Absolutely! We offer 24/7 emergency plumbing services. Call us anytime for urgent plumbing issues."
    },
    {
      question: "What areas do you service?",
      answer: "We service Miami-Dade, Broward, and Palm Beach counties, including Miami, Fort Lauderdale, West Palm Beach, Cape Coral, and Fort Myers."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed and insured. All our technicians are certified professionals with years of experience."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "We stand behind our work with comprehensive warranties on both parts and labor. Specific warranty terms vary by service type."
    }
  ];

  return <FAQ title="Frequently Asked Questions" items={faqItems} />;
}
