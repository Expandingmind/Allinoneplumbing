import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  href?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  image,
  href 
}: ServiceCardProps) {
  const CardContent = (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50 h-full flex flex-col">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={`${title} service`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
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
        
        {href && (
          <div className="mt-auto flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
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
