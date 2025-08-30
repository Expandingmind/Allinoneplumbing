import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle
} from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Nav } from "@/components/Nav";
import { QuoteForm } from "@/components/QuoteForm";
import { CTASticky } from "@/components/CTASticky";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact All In One Plumbing | Get Your Free Quote Today",
  description: "Contact All In One Plumbing for fast, reliable service. Call (305) 555-0100 or request a free quote. 24/7 emergency service available.",
};

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    primary: process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100",
    secondary: "24/7 Emergency Line",
    action: `tel:${process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100"}`,
    description: "Speak directly with our team for immediate assistance"
  },
  {
    icon: MessageCircle,
    title: "Text Us",
    primary: process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100",
    secondary: "Quick Response",
    action: `sms:${(process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100").replace(/[^\d]/g, '')}`,
    description: "Send us a text for non-emergency inquiries"
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: process.env.NEXT_PUBLIC_EMAIL || "info@allinone-plumbing.com",
    secondary: "General Inquiries",
    action: `mailto:${process.env.NEXT_PUBLIC_EMAIL || "info@allinone-plumbing.com"}`,
    description: "Email us for quotes and general questions"
  }
];

const businessHours = [
  { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "Emergency Calls Only" },
  { day: "Holidays", hours: "Emergency Service Available" }
];

const serviceAreas = [
  "Miami-Dade County",
  "Broward County", 
  "Palm Beach County",
  "Miami",
  "Fort Lauderdale",
  "West Palm Beach",
  "Cape Coral",
  "Fort Myers"
];

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Nav />
      
      <main>
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us Today
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 max-w-3xl mx-auto">
              Ready to solve your plumbing problems? Get in touch for fast, professional service across South Florida.
            </p>
            
            <div className="bg-primary/20 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-6 w-6 text-primary" />
                <span className="text-xl font-semibold">24/7 Emergency Service Available</span>
              </div>
              <p className="text-secondary-foreground/80">
                Plumbing problems don't wait for business hours, and neither do we.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Methods */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the contact method that works best for you
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.action}
                  className="group bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <method.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  
                  <div className="text-xl font-medium text-primary mb-1">
                    {method.primary}
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-4">
                    {method.secondary}
                  </div>
                  
                  <p className="text-muted-foreground">
                    {method.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Business Info */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Business Hours */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">
                    Business Hours
                  </h2>
                </div>
                
                <div className="bg-card rounded-lg p-6">
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                        <span className="font-medium text-foreground">
                          {schedule.day}
                        </span>
                        <span className="text-muted-foreground">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-primary font-semibold text-center">
                      Emergency services available 24/7/365
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Service Areas */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">
                    Service Areas
                  </h2>
                </div>
                
                <div className="bg-card rounded-lg p-6">
                  <p className="text-muted-foreground mb-6">
                    We proudly serve residential and commercial customers throughout:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                    <p className="text-secondary text-center">
                      Don't see your area? Call us - we may still be able to help!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Emergency Contact CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Plumbing Emergency?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Don't wait! Emergency plumbing issues can cause serious damage. 
              Call us now for immediate assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100"}`}
                className="bg-primary-foreground text-primary px-8 py-4 rounded-lg text-xl font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Phone className="h-6 w-6" />
                CALL NOW: {process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100"}
              </a>
              
              <a
                href={`sms:${(process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100").replace(/[^\d]/g, '')}`}
                className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/10 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Text Emergency
              </a>
            </div>
            
            <p className="text-primary-foreground/80 text-sm mt-6">
              Available 24 hours a day, 7 days a week, 365 days a year
            </p>
          </div>
        </section>
        
        <QuoteForm />
      </main>
      
      <CTASticky />
    </>
  );
}
