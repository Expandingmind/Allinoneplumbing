import { 
  Wrench, 
  Droplets, 
  Flame, 
  Search, 
  Zap, 
  ShowerHead, 
  Gauge,
  Clock,
  Shield,
  CheckCircle
} from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Nav } from "@/components/Nav";
import { HomeHero } from "@/components/Hero";
import { ServiceAreaGrid } from "@/components/ServiceAreaGrid";
import { ServiceCard } from "@/components/ServiceCard";
import { TripFeeBanner } from "@/components/PromoBanner";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { HomeFAQ } from "@/components/FAQ";
import { QuoteForm } from "@/components/QuoteForm";
import { CTASticky } from "@/components/CTASticky";
import { services } from "@/lib/services";

const whyChooseUsFeatures = [
  {
    icon: Clock,
    title: "Fast Response",
    description: "Same-day service available. We're here when you need us most, including 24/7 emergency calls."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your protection. Professional technicians with years of experience."
  },
  {
    icon: CheckCircle,
    title: "Upfront Pricing",
    description: "Transparent quotes before we start. No hidden fees, no surprises on your bill."
  },
  {
    icon: Gauge,
    title: "Quality Guarantee",
    description: "We stand behind our work with comprehensive warranties on parts and labor."
  }
];

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Nav />
      
      <main>
        <HomeHero />
        
        <ServiceAreaGrid />
        
        {/* Expert Plumbing Services */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Expert Plumbing Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional solutions for all your plumbing needs, from routine maintenance to emergency repairs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const icons = [Droplets, Flame, Flame, Search, Wrench, ShowerHead, Zap, Clock];
                const Icon = icons[index] || Wrench;
                
                return (
                  <ServiceCard
                    key={service.slug}
                    title={service.name}
                    description={service.blurb}
                    icon={Icon}
                    href={`/services/${service.slug}`}
                  />
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose All In One Plumbing?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the difference of working with South Florida's trusted plumbing professionals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUsFeatures.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <TripFeeBanner />
        
        <TestimonialCarousel />
        
        <HomeFAQ />
        
        <QuoteForm />
      </main>
      
      <CTASticky />
      
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">All In One Plumbing</span>
              </div>
              <p className="text-secondary-foreground/80 mb-4">
                South Florida's trusted plumbing professionals. Licensed, insured, and ready to serve you 24/7.
              </p>
              <p className="text-sm text-secondary-foreground/60">
                License #CFC1430361 • Insured & Bonded
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.slice(0, 4).map((service) => (
                  <li key={service.slug}>
                    <a 
                      href={`/services/${service.slug}`}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/rates" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/portfolio" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/service-areas" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    Service Areas
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="text-secondary-foreground/80">
                  {process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100"}
                </p>
                <p className="text-secondary-foreground/80">
                  allinplumbingsolutions@gmail.com
                </p>
                <p className="text-secondary-foreground/80">
                  24/7 Emergency Service
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
            <p>&copy; 2024 All In One Plumbing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
