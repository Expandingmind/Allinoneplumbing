import { Phone, Shield, Clock } from "lucide-react";

export function TopBar() {
  const companyPhone = process.env.NEXT_PUBLIC_PHONE || "(954) 657-3429";
  
  return (
    <div className="bg-secondary text-secondary-foreground py-2 px-4 text-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Licensed & Insured</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>24/7 Emergency Service</span>
          </div>
        </div>
        
        <div className="hidden md:flex">
          <a 
            href={`tel:${companyPhone}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-semibold">{companyPhone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
