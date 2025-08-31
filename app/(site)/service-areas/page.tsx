import { 
  MapPin,
  Phone,
  Clock,
  CheckCircle
} from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Nav } from "@/components/Nav";
import { QuoteForm } from "@/components/QuoteForm";
import { CTASticky } from "@/components/CTASticky";
import { cities } from "@/lib/cities";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | All In One Plumbing - South Florida Coverage",
  description: "Professional plumbing services across South Florida. Serving Miami, Fort Lauderdale, West Palm Beach, Cape Coral, Fort Myers and surrounding areas.",
};

const serviceHighlights = [
  "Emergency 24/7 service",
  "Licensed & insured",
  "Upfront pricing",
  "Same-day service available",
  "Local South Florida company",
  "Residential & commercial"
];

export default function ServiceAreasPage() {
  const companyPhone = process.env.NEXT_PUBLIC_PHONE || "(954) 657-3429";
  
  return (
    <>
      <TopBar />
      <Nav />
      
      <main>
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Service Areas
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 max-w-3xl mx-auto">
              Professional plumbing services throughout South Florida. 
              Local expertise with the reliability you can count on.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Local South Florida Company</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Areas Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Where We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Click on your city to see local services, contact information, and area-specific details.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.filter(city => city.slug !== "by-request").map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 text-primary rounded-lg p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <MapPin className="h-6 w-6" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        ZIP: {city.zipPrefix}xxx
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>Local: {city.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Same-day service available</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-primary font-medium group-hover:underline">
                    View Local Services →
                  </div>
                </Link>
              ))}
              
              {/* By Request Service */}
              <div className="bg-muted/50 border border-dashed border-border rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-muted text-muted-foreground rounded-lg p-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Don't See Your Area?
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Special service areas
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  We may still be able to help! Call us to discuss service in your area.
                </p>
                
                <a
                  href={`tel:${companyPhone}`}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Call to Inquire
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Highlights */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Makes Us Local Experts
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-card rounded-lg p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Local Knowledge, Professional Service
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  As a South Florida-based company, we understand the unique plumbing challenges 
                  of our region - from hard water issues to hurricane preparedness. Our local 
                  technicians know the building codes, common problems, and best solutions for 
                  each area we serve.
                </p>
                <a
                  href={`tel:${companyPhone}`}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Your Local Experts
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Coverage Map Placeholder */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Service Coverage Map
            </h2>
            
            <div className="bg-muted/50 rounded-lg p-12 max-w-4xl mx-auto">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground text-lg mb-6">
                Interactive Service Area Map Coming Soon
              </p>
              <p className="text-muted-foreground">
                Currently serving Miami-Dade, Broward, and Palm Beach counties with plans to expand.
              </p>
            </div>
          </div>
        </section>
        
        <QuoteForm />
      </main>
      
      <CTASticky />
    </>
  );
}
