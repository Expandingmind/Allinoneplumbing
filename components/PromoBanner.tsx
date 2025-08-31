"use client";

import * as React from "react";
import { X, Star } from "lucide-react";

interface PromoBannerProps {
  message: string;
  dismissible?: boolean;
}

export function PromoBanner({ message, dismissible = true }: PromoBannerProps) {
  const [isDismissed, setIsDismissed] = React.useState(false);

  if (isDismissed) {
    return null;
  }

  return (
    <div className="bg-primary text-primary-foreground py-3 px-4 relative">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2">
          <Star className="h-5 w-5 fill-current" />
          <span className="font-medium text-lg">{message}</span>
          <Star className="h-5 w-5 fill-current" />
        </div>
        
        {dismissible && (
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-primary-foreground/20 rounded transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}

// Pre-configured promo banners
export function DrainSpecialBanner() {
  return (
    <PromoBanner message="Free Drain Inspection with Service Call!" />
  );
}

export function TripFeeBanner() {
  return (
    <PromoBanner message="24/7 Emergency Service Available - Call Today!" />
  );
}
