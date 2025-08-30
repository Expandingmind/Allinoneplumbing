"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";

export function CTASticky() {
  const companyPhone = process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100";
  const smsNumber = companyPhone.replace(/[^\d]/g, '');

  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-card border-t border-border p-3">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${companyPhone}`}
            className="flex flex-col items-center gap-1 bg-primary text-primary-foreground py-3 px-2 rounded-lg text-center hover:opacity-90 transition-opacity"
          >
            <Phone className="h-5 w-5" />
            <span className="text-xs font-medium">Call</span>
          </a>
          
          <a
            href={`sms:${smsNumber}`}
            className="flex flex-col items-center gap-1 bg-secondary text-secondary-foreground py-3 px-2 rounded-lg text-center hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs font-medium">Text</span>
          </a>
          
          <button
            onClick={scrollToQuote}
            className="flex flex-col items-center gap-1 bg-accent text-accent-foreground py-3 px-2 rounded-lg text-center hover:opacity-90 transition-opacity"
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs font-medium">Book</span>
          </button>
        </div>
      </div>
    </div>
  );
}
