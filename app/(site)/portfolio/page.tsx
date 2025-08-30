import { 
  Phone,
  Filter,
  Star,
  Calendar
} from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Nav } from "@/components/Nav";
import { QuoteForm } from "@/components/QuoteForm";
import { CTASticky } from "@/components/CTASticky";
import { services } from "@/lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Before/After Gallery | All In One Plumbing",
  description: "See our professional plumbing work. Before and after photos of completed projects across South Florida. Quality results, every time.",
};

// Placeholder portfolio items - in a real app, these would come from a CMS or database
const portfolioItems = [
  {
    id: 1,
    title: "Complete Bathroom Renovation Plumbing",
    service: "pipe-repair",
    location: "Miami, FL",
    description: "Full bathroom plumbing renovation including new fixtures, water lines, and drain system.",
    beforeImage: "/images/portfolio/bathroom-before-1.jpg",
    afterImage: "/images/portfolio/bathroom-after-1.jpg",
    testimonial: "Outstanding work from start to finish. Professional, clean, and on schedule."
  },
  {
    id: 2,
    title: "Tankless Water Heater Installation",
    service: "water-heater-install",
    location: "Fort Lauderdale, FL",
    description: "Replaced old tank water heater with high-efficiency tankless unit, including gas line upgrade.",
    beforeImage: "/images/portfolio/water-heater-before-1.jpg",
    afterImage: "/images/portfolio/water-heater-after-1.jpg",
    testimonial: "Love our new tankless water heater! Endless hot water and much more space."
  },
  {
    id: 3,
    title: "Kitchen Sink & Disposal Installation",
    service: "drain-cleaning",
    location: "West Palm Beach, FL",
    description: "New kitchen sink installation with garbage disposal and updated plumbing connections.",
    beforeImage: "/images/portfolio/kitchen-before-1.jpg",
    afterImage: "/images/portfolio/kitchen-after-1.jpg",
    testimonial: "Perfect installation. Clean work and attention to detail was impressive."
  },
  {
    id: 4,
    title: "Sewer Line Repair & Replacement",
    service: "sewer-line-services",
    location: "Cape Coral, FL",
    description: "Trenchless sewer line replacement to resolve recurring backup issues.",
    beforeImage: "/images/portfolio/sewer-before-1.jpg",
    afterImage: "/images/portfolio/sewer-after-1.jpg",
    testimonial: "No more backups! The trenchless method saved our landscaping."
  },
  {
    id: 5,
    title: "Emergency Pipe Burst Repair",
    service: "emergency-24-7",
    location: "Fort Myers, FL",
    description: "Emergency response for burst pipe, including water damage prevention and complete repair.",
    beforeImage: "/images/portfolio/emergency-before-1.jpg",
    afterImage: "/images/portfolio/emergency-after-1.jpg",
    testimonial: "They saved our home! Fast response and professional emergency service."
  },
  {
    id: 6,
    title: "Whole Home Repiping Project",
    service: "pipe-repair",
    location: "Miami, FL",
    description: "Complete home repiping from galvanized to PEX, improving water pressure and quality.",
    beforeImage: "/images/portfolio/repipe-before-1.jpg",
    afterImage: "/images/portfolio/repipe-after-1.jpg",
    testimonial: "Huge improvement in water pressure throughout the house. Great job!"
  }
];

export default function PortfolioPage() {
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
              Our Work Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 max-w-3xl mx-auto">
              See the quality of our plumbing work through before and after photos of completed projects across South Florida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${companyPhone}`}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call: {companyPhone}
              </a>
              
              <button
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-foreground/10 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Schedule Service
              </button>
            </div>
          </div>
        </section>
        
        {/* Filter Section (Placeholder) */}
        <section className="py-8 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">Filter by service type (coming soon)</span>
            </div>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => {
                const service = services.find(s => s.slug === item.service);
                
                return (
                  <div key={item.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Before/After Images Placeholder */}
                    <div className="relative">
                      <div className="aspect-video bg-muted/50 flex items-center justify-center">
                        <div className="text-center">
                          <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                            <Calendar className="h-8 w-8" />
                          </div>
                          <p className="text-muted-foreground text-sm">Before/After Photos</p>
                        </div>
                      </div>
                      
                      {service && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {service.name}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-3">
                        {item.location}
                      </p>
                      
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      
                      {item.testimonial && (
                        <div className="border-t border-border pt-4">
                          <div className="flex items-center gap-1 mb-2">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star key={i} className="h-4 w-4 text-primary fill-current" />
                            ))}
                          </div>
                          <blockquote className="text-muted-foreground text-sm italic">
                            "{item.testimonial}"
                          </blockquote>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Want to See More?
                </h3>
                <p className="text-muted-foreground mb-6">
                  We have hundreds of satisfied customers across South Florida. 
                  Call us to discuss your project and see more examples of our work.
                </p>
                <a
                  href={`tel:${companyPhone}`}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call to See More Examples
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quality Promise */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Quality Promise
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Professional Results
                </h3>
                <p className="text-muted-foreground">
                  Every project meets our high standards for quality and craftsmanship.
                </p>
              </div>
              
              <div>
                <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  On-Time Completion
                </h3>
                <p className="text-muted-foreground">
                  We respect your schedule and complete projects when promised.
                </p>
              </div>
              
              <div>
                <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Follow-Up Support
                </h3>
                <p className="text-muted-foreground">
                  We stand behind our work with warranties and ongoing support.
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
