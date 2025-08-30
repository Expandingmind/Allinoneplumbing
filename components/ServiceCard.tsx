import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  priceFrom?: number;
  href?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  priceFrom, 
  href 
}: ServiceCardProps) {
  const CardContent = (
    <div className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-primary/10 text-primary rounded-lg p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <div className="mt-auto flex items-center justify-between">
        {priceFrom !== undefined && (
          <div className="text-sm text-muted-foreground">
            {priceFrom > 0 ? `From ${formatPrice(priceFrom)}` : "Call for pricing"}
          </div>
        )}
        
        {href && (
          <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
            <span className="text-sm font-medium">Learn More</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
