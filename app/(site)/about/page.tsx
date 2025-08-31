import { 
  Phone,
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
  Wrench,
  Star
} from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Nav } from "@/components/Nav";
import { QuoteForm } from "@/components/QuoteForm";
import { CTASticky } from "@/components/CTASticky";
import { ScrollToQuoteButton } from "@/components/ScrollToQuoteButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About All In One Plumbing | Licensed South Florida Plumbers",
  description: "Learn about our licensed, insured plumbing team serving South Florida. Over 15 years of experience with 24/7 emergency service.",
};

const teamMembers = [
  {
    name: "Mike Rodriguez",
    role: "Master Plumber & Owner",
    experience: "18+ years",
    certifications: "Master Plumber License, Backflow Certified"
  },
  {
    name: "Sarah Johnson",
    role: "Service Manager",
    experience: "12+ years", 
    certifications: "Journeyman Plumber, Customer Service Excellence"
  },
  {
    name: "David Martinez",
    role: "Senior Technician",
    experience: "15+ years",
    certifications: "Gas Line Certified, Water Heater Specialist"
  }
];

const companyStats = [
  { icon: Users, number: "5,000+", label: "Happy Customers" },
  { icon: Wrench, number: "15+", label: "Years Experience" },
  { icon: Award, number: "A+", label: "BBB Rating" },
  { icon: Star, number: "4.9", label: "Average Review" }
];

export default function AboutPage() {
  const companyPhone = process.env.NEXT_PUBLIC_PHONE || "(954) 657-3429";
  
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
                About All In One Plumbing
              </h1>
              <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8">
                Serving South Florida with professional plumbing services since 2008. 
                Licensed, insured, and committed to exceptional customer service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${companyPhone}`}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call: {companyPhone}
                </a>
                
                <ScrollToQuoteButton className="border border-secondary-foreground/30 text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-foreground/10 transition-colors">
                  Get Free Quote
                </ScrollToQuoteButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* Company Stats */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {companyStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-xl leading-relaxed mb-8">
                All In One Plumbing was founded in 2008 with a simple mission: provide South Florida 
                homeowners with honest, reliable plumbing services at fair prices. What started as a 
                one-person operation has grown into a trusted team of licensed professionals.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Over the years, we've built our reputation on transparency, quality workmanship, and 
                exceptional customer service. We believe in treating every home like our own and every 
                customer like family. That's why we provide upfront pricing, stand behind our work with 
                comprehensive warranties, and are available 24/7 for emergency calls.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, we're proud to serve thousands of satisfied customers across Miami-Dade, Broward, 
                and Palm Beach counties. From simple repairs to complex installations, we bring the same 
                level of professionalism and care to every job.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Licensed, experienced professionals dedicated to solving your plumbing problems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-card rounded-lg p-6 text-center">
                  <div className="bg-primary/10 text-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mb-3">
                    {member.experience} experience
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.certifications}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Licenses & Insurance */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Licensed & Insured
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Full credentials and insurance for your complete protection and peace of mind.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Licensing
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Florida State Contractor License #CFC1430361</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Master Plumber Certification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Backflow Prevention Certified</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Gas Line Installation Certified</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Award className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Insurance
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">$1M General Liability Insurance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Workers' Compensation Coverage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Bonded & Insured Technicians</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Property Protection Guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Integrity
                </h3>
                <p className="text-muted-foreground">
                  Honest communication, fair pricing, and transparent business practices in every interaction.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Excellence
                </h3>
                <p className="text-muted-foreground">
                  Commitment to quality workmanship and continuous improvement in all our services.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Reliability
                </h3>
                <p className="text-muted-foreground">
                  Dependable service when you need it most, including 24/7 emergency availability.
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
