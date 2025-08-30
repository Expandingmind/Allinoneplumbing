import { ArrowRight, Phone } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    action: () => void;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

export function Hero({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta,
  backgroundImage 
}: HeroProps) {
  const companyPhone = process.env.NEXT_PUBLIC_PHONE || "(305) 555-0100";
  
  return (
    <section 
      className="relative bg-secondary text-secondary-foreground py-20 px-4"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-secondary/80" />
      )}
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCta && (
              <button
                onClick={primaryCta.action}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                {primaryCta.text}
                <ArrowRight className="h-5 w-5" />
              </button>
            )}
            
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="border border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-foreground/10 transition-colors flex items-center justify-center gap-2"
              >
                {secondaryCta.text}
              </a>
            )}
            
            <a
              href={`tel:${companyPhone}`}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: {companyPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default Hero for Home Page
export function HomeHero() {
  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <Hero
      title="Fast, Reliable Plumbing—24/7 in Miami"
      subtitle="Upfront pricing, licensed & insured techs, same-day service."
      primaryCta={{
        text: "Get Your Free Quote Now",
        action: scrollToQuote
      }}
      secondaryCta={{
        text: "Check Rates",
        href: "/rates"
      }}
    />
  );
}
