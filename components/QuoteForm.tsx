"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  zip: z.string().min(5, "Please enter a valid ZIP code"),
  service: z.string().min(1, "Please select a service"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  description: z.string().optional(),
  // Honeypot field to catch bots
  website: z.string().optional().default(""),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [startTime] = React.useState(Date.now());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    // Basic bot protection
    if (data.website) {
      return; // Honeypot triggered
    }

    const timeToComplete = Date.now() - startTime;
    if (timeToComplete < 3000) {
      return; // Filled out too quickly, likely a bot
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Add tracking data
      const submissionData = {
        ...data,
        utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
        utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
        gclid: new URLSearchParams(window.location.search).get('gclid') || '',
        timeToComplete,
        timestamp: new Date().toISOString(),
      };

      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        
        // Track conversion
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
            value: 1,
            currency: 'USD',
          });
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Quote form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote-form" className="py-16 px-4 bg-card">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-muted-foreground">
            No obligation, upfront pricing in minutes
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-center">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              Quote Request Received!
            </h3>
            <p className="text-green-700">
              We'll contact you within 15 minutes during business hours.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 text-center">
            <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-red-900 mb-2">
              Something went wrong
            </h3>
            <p className="text-red-700">
              Please call us directly at {process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100"}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input
                {...register('name')}
                type="text"
                className={cn(
                  "w-full px-4 py-3 rounded-lg border bg-background text-foreground",
                  errors.name ? "border-red-500" : "border-border"
                )}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input
                {...register('phone')}
                type="tel"
                className={cn(
                  "w-full px-4 py-3 rounded-lg border bg-background text-foreground",
                  errors.phone ? "border-red-500" : "border-border"
                )}
                placeholder="(555) 123-4567"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-foreground mb-2">
                ZIP Code *
              </label>
              <input
                {...register('zip')}
                type="text"
                className={cn(
                  "w-full px-4 py-3 rounded-lg border bg-background text-foreground",
                  errors.zip ? "border-red-500" : "border-border"
                )}
                placeholder="33101"
              />
              {errors.zip && (
                <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                Service Needed *
              </label>
              <select
                {...register('service')}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border bg-background text-foreground",
                  errors.service ? "border-red-500" : "border-border"
                )}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.name}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
              Preferred Time *
            </label>
            <select
              {...register('preferredTime')}
              className={cn(
                "w-full px-4 py-3 rounded-lg border bg-background text-foreground",
                errors.preferredTime ? "border-red-500" : "border-border"
              )}
            >
              <option value="">Select preferred time</option>
              <option value="morning">Morning (8 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
              <option value="evening">Evening (5 PM - 8 PM)</option>
              <option value="asap">As soon as possible</option>
            </select>
            {errors.preferredTime && (
              <p className="text-red-500 text-sm mt-1">{errors.preferredTime.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
              Describe Your Issue (Optional)
            </label>
            <textarea
              {...register('description')}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground"
              placeholder="Please describe your plumbing issue in detail..."
            />
          </div>

          {/* Honeypot field - hidden from users */}
          <input
            {...register('website')}
            type="text"
            className="absolute -left-9999px"
            tabIndex={-1}
            autoComplete="off"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground py-4 px-6 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Get Free Quote
              </>
            )}
          </button>

          <p className="text-center text-sm text-muted-foreground">
            By submitting this form, you agree to receive text messages and calls about your service request.
            Message and data rates may apply.
          </p>
        </form>
      </div>
    </section>
  );
}
