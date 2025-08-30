import Link from "next/link";
import { MapPin } from "lucide-react";
import { cities } from "@/lib/cities";

const serviceAreas = [
  { number: "01", city: cities[0], description: "Complete plumbing services" },
  { number: "02", city: cities[1], description: "Emergency & routine repairs" },
  { number: "03", city: cities[2], description: "Water heater specialists" },
  { number: "04", city: cities[3], description: "Drain cleaning & jetting" },
  { number: "05", city: cities[4], description: "Pipe repair & replacement" },
  { number: "06", city: cities[5], description: "Custom service areas" },
];

export function ServiceAreaGrid() {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional plumbing services across South Florida. Licensed, insured, and ready to help.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area) => (
            <Link
              key={area.number}
              href={`/service-areas/${area.city.slug}`}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary rounded-lg p-3 font-bold text-2xl min-w-[60px] text-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {area.number}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {area.city.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-3">
                    {area.description}
                  </p>
                  
                  <div className="text-sm text-muted-foreground">
                    Call: {area.city.phone}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
