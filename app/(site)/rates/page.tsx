import { 
  Phone,
  CheckCircle,
  Clock,
  Shield,
  Star
} from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Nav } from "@/components/Nav";
import { QuoteForm } from "@/components/QuoteForm";
import { CTASticky } from "@/components/CTASticky";
import { formatPrice } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Pricing & Rates | All In One Plumbing",
  description: "Upfront plumbing prices with no hidden fees. Service calls from $79, drain cleaning from $129, water heater installs from $899.",
};

const pricingCards = [
  {
    title: "Service Call",
    subtitle: "Weekday",
    price: 79,
    description: "Diagnostic visit to assess your plumbing issue",
    features: [
      "Professional diagnosis",
      "Written estimate",
      "No obligation quote",
      "Trip fee waived with repair"
    ],
    popular: false
  },
  {
    title: "Drain Clearing",
    subtitle: "Special",
    price: 129,
    description: "Professional drain cleaning service",
    features: [
      "Video inspection included",
      "Professional equipment",
      "90-day guarantee",
      "Same-day service"
    ],
    popular: true
  },
  {
    title: "Water Heater Install",
    subtitle: "Starting",
    price: 899,
    description: "Complete water heater installation",
    features: [
      "Removal of old unit",
      "Professional installation",
      "Code compliance",
      "1-year warranty"
    ],
    popular: false
  }
];

export default function RatesPage() {
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
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 max-w-3xl mx-auto">
              No surprises, no hidden fees. Get upfront pricing on all our plumbing services with our honest, transparent approach.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Upfront Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Same Day Service</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Service Rates
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fair, competitive pricing for quality plumbing services. Final price determined after diagnosis.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingCards.map((card) => (
                <div
                  key={card.title}
                  className={`relative bg-card rounded-lg border p-8 ${
                    card.popular 
                      ? 'border-primary ring-2 ring-primary/20' 
                      : 'border-border'
                  }`}
                >
                  {card.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current" />
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {card.subtitle}
                    </p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">
                        {formatPrice(card.price)}
                      </span>
                      <span className="text-muted-foreground ml-2">+</span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm">
                      {card.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {card.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`tel:${companyPhone}`}
                    className={`block w-full py-3 px-6 rounded-lg text-center font-semibold transition-opacity hover:opacity-90 ${
                      card.popular
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    Call for Service
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-muted/50 rounded-lg p-6 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Important Pricing Notes
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Final pricing determined after complete diagnosis</li>
                  <li>• Trip fee waived when you proceed with recommended repairs</li>
                  <li>• Weekend and holiday service may include additional charges</li>
                  <li>• All work includes parts warranty and satisfaction guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Our Pricing is Fair */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Our Pricing is Fair
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No Hidden Costs
                </h3>
                <p className="text-muted-foreground">
                  What we quote is what you pay. No surprise charges or hidden fees.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Quality Parts
                </h3>
                <p className="text-muted-foreground">
                  We use only high-quality parts and materials that are built to last.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Expert Service
                </h3>
                <p className="text-muted-foreground">
                  Licensed, insured technicians with years of professional experience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Time Value
                </h3>
                <p className="text-muted-foreground">
                  Fast, efficient service that gets your plumbing working quickly.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need an Exact Quote?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Every plumbing situation is unique. Get a precise quote tailored to your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${companyPhone}`}
                className="bg-primary-foreground text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call: {companyPhone}
              </a>
              
              <button
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Get Free Quote
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
