import { notFound } from "next/navigation";
import { 
  Phone,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Wrench
} from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Nav } from "@/components/Nav";
import { FAQ } from "@/components/FAQ";
import { QuoteForm } from "@/components/QuoteForm";
import { CTASticky } from "@/components/CTASticky";
import { services } from "@/lib/services";
import { formatPrice } from "@/lib/utils";
import type { Metadata } from "next";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Service-specific content
const serviceContent: Record<string, {
  problems: string[];
  process: string[];
  included: string[];
  faq: Array<[string, string]>;
}> = {
  "drain-cleaning": {
    problems: [
      "Slow drains in kitchen or bathroom",
      "Complete drain blockages",
      "Recurring clogs that return quickly",
      "Bad odors from drains",
      "Gurgling sounds from pipes"
    ],
    process: [
      "Video inspection to identify the blockage",
      "Professional drain snaking or augering",
      "High-pressure water jetting if needed",
      "Final inspection to ensure clear flow",
      "Prevention tips and maintenance advice"
    ],
    included: [
      "Complete drain inspection",
      "Professional drain cleaning",
      "Disposal of all debris",
      "Post-service flow testing",
      "90-day service guarantee"
    ],
    faq: [
      ["How long does drain cleaning take?", "Most drain cleaning services are completed within 1-2 hours, depending on the severity of the blockage."],
      ["Will you damage my pipes?", "No, we use professional-grade equipment designed to clean drains safely without damaging your plumbing."],
      ["How often should I have drains cleaned?", "For prevention, we recommend professional drain cleaning every 1-2 years, or sooner if you notice slow drainage."]
    ]
  },
  "water-heater-repair": {
    problems: [
      "No hot water or lukewarm water",
      "Strange noises from water heater",
      "Water heater leaking",
      "Inconsistent water temperature",
      "High energy bills from inefficient heating"
    ],
    process: [
      "Complete diagnostic inspection",
      "Identify the root cause of the problem",
      "Explain repair options and costs",
      "Professional repair with quality parts",
      "Test system for proper operation"
    ],
    included: [
      "Comprehensive diagnostic service",
      "Professional repair work",
      "Quality replacement parts",
      "System performance testing",
      "1-year warranty on repairs"
    ],
    faq: [
      ["How long do water heater repairs take?", "Most repairs can be completed within 2-3 hours, though complex issues may require additional time."],
      ["Should I repair or replace my water heater?", "We'll assess your unit's age, condition, and efficiency to recommend the most cost-effective solution."],
      ["Do you service all water heater brands?", "Yes, our technicians are trained to work on all major water heater brands and models."]
    ]
  },
  // Add more service-specific content as needed...
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  
  return {
    title: `${service.name} Services | All In One Plumbing`,
    description: `Professional ${service.name.toLowerCase()} services in South Florida. ${service.blurb} Licensed and insured technicians.`,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug);
  const content = serviceContent[params.slug];
  
  if (!service) {
    notFound();
  }
  
  const companyPhone = process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100";
  
  return (
    <>
      <TopBar />
      <Nav />
      
      <main>
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.name}
              </h1>
              <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8">
                {service.blurb}
              </p>
              
              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Same-day service</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span>Licensed & insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Upfront pricing</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${companyPhone}`}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: {companyPhone}
                </a>
                
                <button
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-foreground/10 transition-colors flex items-center justify-center gap-2"
                >
                  Get Free Quote
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Details */}
        {content && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Problems We Solve */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Problems We Solve
                  </h2>
                  <ul className="space-y-3">
                    {content.problems.map((problem, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Our Process */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Our Process
                  </h2>
                  <ol className="space-y-3">
                    {content.process.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-0.5 shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                
                {/* What's Included */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    What's Included
                  </h2>
                  <ul className="space-y-3">
                    {content.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Wrench className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Pricing */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transparent Pricing
            </h2>
            <div className="max-w-md mx-auto bg-card rounded-lg p-8 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">
                {service.priceFrom > 0 ? `From ${formatPrice(service.priceFrom)}` : "Call for Pricing"}
              </div>
              <p className="text-muted-foreground mb-6">
                Upfront pricing with no hidden fees. Trip fee waived with repair.
              </p>
              <a
                href={`tel:${companyPhone}`}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Get Exact Quote
              </a>
            </div>
          </div>
        </section>
        
        {/* Before/After Gallery Placeholder */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Work Speaks for Itself
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              See examples of our professional {service.name.toLowerCase()} work. Quality results, every time.
            </p>
            <div className="bg-muted/50 rounded-lg p-12">
              <p className="text-muted-foreground">
                Before & After Gallery Coming Soon
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        {content && content.faq.length > 0 && (
          <FAQ
            title={`${service.name} FAQ`}
            items={content.faq.map(([q, a]) => ({ question: q, answer: a }))}
            className="bg-muted/50"
          />
        )}
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Don't let plumbing problems disrupt your day. Call now or request a free quote.
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
