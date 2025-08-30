import { 
  Wrench, 
  Droplets, 
  Flame, 
  Search, 
  Zap, 
  ShowerHead, 
  Clock,
  Phone
} from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Nav } from "@/components/Nav";
import { ServiceCard } from "@/components/ServiceCard";
import { QuoteForm } from "@/components/QuoteForm";
import { CTASticky } from "@/components/CTASticky";
import { services } from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Plumbing Services | All In One Plumbing",
  description: "Complete plumbing services in South Florida. Drain cleaning, water heater repair, leak detection, and more. Licensed and insured professionals.",
};

const serviceIcons = [Droplets, Flame, Flame, Search, Wrench, ShowerHead, Zap, Clock];

export default function ServicesPage() {
  const companyPhone = process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100";
  
  return (
    <>
      <TopBar />
      <Nav />
      
      <main>
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Plumbing Services
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 max-w-3xl mx-auto">
              From routine maintenance to emergency repairs, our licensed professionals provide comprehensive plumbing solutions across South Florida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${companyPhone}`}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now: {companyPhone}
              </a>
              
              <button
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-foreground/10 transition-colors"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional solutions for every plumbing need. Click any service to learn more about our process and pricing.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = serviceIcons[index] || Wrench;
                
                return (
                  <ServiceCard
                    key={service.slug}
                    title={service.name}
                    description={service.blurb}
                    icon={Icon}
                    priceFrom={service.priceFrom}
                    href={`/services/${service.slug}`}
                  />
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Why Choose Our Services */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Service Excellence Guaranteed
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  24/7 Availability
                </h3>
                <p className="text-muted-foreground">
                  Emergency services available around the clock. We're here when plumbing problems can't wait.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Expert Technicians
                </h3>
                <p className="text-muted-foreground">
                  Licensed, insured professionals with years of experience and ongoing training.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Advanced Equipment
                </h3>
                <p className="text-muted-foreground">
                  State-of-the-art tools and technology for accurate diagnosis and efficient repairs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <QuoteForm />
      </main>
      
      <CTASticky />
    </>
  );
}
