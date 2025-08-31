"use client";

import * as React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Maria Rodriguez",
    location: "Miami, FL",
    rating: 5,
    comment: "Outstanding service! They fixed our water heater the same day with transparent communication. Professional and courteous team."
  },
  {
    name: "David Thompson",
    location: "Fort Lauderdale, FL",
    rating: 5,
    comment: "Called for an emergency drain clog at 10 PM and they were here within an hour. Excellent work and fair service. Highly recommend!"
  },
  {
    name: "Jennifer Lee",
    location: "West Palm Beach, FL",
    rating: 5,
    comment: "Been using them for years. Always reliable, always professional. They installed our new tankless water heater perfectly."
  },
  {
    name: "Robert Martinez",
    location: "Cape Coral, FL",
    rating: 5,
    comment: "Great experience from start to finish. Clear communication, no surprises, and they left everything clean. Will definitely use again."
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    const interval = setInterval(next, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={cn(
          "h-5 w-5",
          i < rating ? "text-primary fill-current" : "text-muted-foreground"
        )} 
      />
    ));
  };

  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real reviews from satisfied customers across South Florida
          </p>
        </div>

        <div className="relative">
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].location}
                </p>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={previous}
                  className="p-2 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <blockquote className="text-lg text-muted-foreground leading-relaxed">
              "{testimonials[currentIndex].comment}"
            </blockquote>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
