import { notFound } from "next/navigation";
import { 
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  Wrench,
  Star
} from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Nav } from "@/components/Nav";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQ } from "@/components/FAQ";
import { QuoteForm } from "@/components/QuoteForm";
import { CTASticky } from "@/components/CTASticky";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";
import type { Metadata } from "next";

interface CityPageProps {
  params: {
    city: string;
  };
}

// City-specific content
const cityContent: Record<string, {
  description: string;
  localServices: string[];
  neighborhoods: string[];
  faq: Array<[string, string]>;
}> = {
  "miami-fl": {
    description: "Serving Miami and surrounding neighborhoods with professional plumbing services. Our Miami team understands the unique challenges of older buildings, high-rise condos, and hurricane-related plumbing issues.",
    localServices: [
      "High-rise condo plumbing",
      "Historic building pipe repair",
      "Hurricane damage restoration",
      "Commercial property maintenance"
    ],
    neighborhoods: [
      "Downtown Miami", "Miami Beach", "Coral Gables", "Coconut Grove", 
      "Brickell", "Little Havana", "Wynwood", "Aventura"
    ],
    faq: [
      ["Do you service high-rise condos in Miami?", "Yes, we have extensive experience working in Miami's high-rise buildings and condominiums, including coordination with building management."],
      ["Can you help with hurricane-related plumbing damage?", "Absolutely. We provide emergency restoration services for hurricane and storm damage, including water line repairs and fixture replacement."],
      ["Do you work on older Miami buildings?", "Yes, we specialize in working with Miami's historic and older buildings, understanding the unique plumbing challenges they present."]
    ]
  },
  "fort-lauderdale-fl": {
    description: "Professional plumbing services throughout Fort Lauderdale and Broward County. We're familiar with the area's coastal challenges and diverse property types.",
    localServices: [
      "Coastal property maintenance",
      "Boat dock plumbing",
      "Pool equipment connections",
      "Beach house services"
    ],
    neighborhoods: [
      "Las Olas", "Victoria Park", "Colee Hammock", "Tarpon River",
      "Harbor Beach", "Rio Vista", "Lauderdale-by-the-Sea"
    ],
    faq: [
      ["Do you service waterfront properties?", "Yes, we have extensive experience with waterfront and coastal properties, understanding the unique challenges of saltwater exposure."],
      ["Can you work on boat dock plumbing?", "Absolutely. We provide plumbing services for boat docks, marinas, and waterfront facilities."],
      ["Do you install pool equipment connections?", "Yes, we handle all plumbing connections for pool equipment, including heaters, pumps, and filtration systems."]
    ]
  },
  // Add more city-specific content as needed...
};

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = cities.find(c => c.slug === params.city);
  
  if (!city) {
    return {
      title: "City Not Found",
    };
  }
  
  return {
    title: `Plumbing Services in ${city.name} | All In One Plumbing`,
    description: `Professional plumbing services in ${city.name}. Licensed, insured, 24/7 emergency service. Call ${city.phone} for same-day service.`,
  };
}

export default function CityPage({ params }: CityPageProps) {
  const city = cities.find(c => c.slug === params.city);
  const content = cityContent[params.city];
  
  if (!city) {
    notFound();
  }
  
  const companyPhone = city.phone || process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100";
  
  return (
    <>
      <TopBar />
      <Nav />
      
      <main>
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-8 w-8 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Plumbing Services in {city.name}
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8">
                {content?.description || `Professional plumbing services throughout ${city.name} and surrounding areas. Licensed, insured, and ready to help 24/7.`}
              </p>
              
              {/* Local Contact Info */}
              <div className="bg-secondary-foreground/10 rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Local Number</div>
                      <div className="text-lg">{companyPhone}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Service Hours</div>
                      <div>24/7 Emergency Available</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${companyPhone}`}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call {city.name}: {companyPhone}
                </a>
                
                <button
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-foreground/10 transition-colors"
                >
                  Get Free Local Quote
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Offered Locally */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Services in {city.name}
              </h2>
              <p className="text-xl text-muted-foreground">
                Complete plumbing solutions for your local area
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.slice(0, 6).map((service, index) => {
                const icons = [Wrench, Wrench, Wrench, Wrench, Wrench, Wrench];
                const Icon = icons[index];
                
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
        
        {/* Local Specialties */}
        {content && content.localServices.length > 0 && (
          <section className="py-16 px-4 bg-muted/50">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                  Local Specialties in {city.name}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {content.localServices.map((specialty, index) => (
                    <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg">
                      <Star className="h-6 w-6 text-primary shrink-0" />
                      <span className="text-foreground font-medium">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Coverage Map Placeholder */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {city.name} Service Area Map
            </h2>
            
            <div className="bg-muted/50 rounded-lg p-12 max-w-4xl mx-auto mb-8">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground text-lg mb-4">
                Interactive {city.name} Service Map Coming Soon
              </p>
              {content && content.neighborhoods.length > 0 && (
                <div>
                  <p className="text-muted-foreground mb-4">We proudly serve these {city.name} neighborhoods:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {content.neighborhoods.map((neighborhood, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <p className="text-muted-foreground">
              Don't see your specific neighborhood? Call us - we may still serve your area!
            </p>
          </section>
        
        {/* Local FAQ */}
        {content && content.faq.length > 0 && (
          <FAQ
            title={`Frequently Asked Questions - ${city.name}`}
            items={content.faq.map(([q, a]) => ({ question: q, answer: a }))}
            className="bg-muted/50"
          />
        )}
        
        {/* Local CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Plumbing Service in {city.name}?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Local expertise, professional service. Call now for same-day service in {city.name}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${companyPhone}`}
                className="bg-primary-foreground text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call {city.name}: {companyPhone}
              </a>
              
              <button
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Get Local Quote
              </button>
            </div>
          </div>
        </section>
        
        <QuoteForm />
      </main>
      
      <CTASticky />
    </>
  );
}
