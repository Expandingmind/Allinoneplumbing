export function localBusinessJSONLD({ 
  name, 
  phone, 
  address, 
  sameAs 
}: { 
  name: string; 
  phone: string; 
  address: string; 
  sameAs: string[] 
}) {
  return { 
    "@context": "https://schema.org", 
    "@type": "LocalBusiness", 
    name, 
    telephone: phone, 
    address, 
    sameAs 
  };
}

export function serviceJSONLD({ 
  name, 
  description, 
  url 
}: { 
  name: string; 
  description: string; 
  url: string 
}) {
  return { 
    "@context": "https://schema.org", 
    "@type": "Service", 
    name, 
    description, 
    areaServed: "Local", 
    url 
  };
}

export function faqJSONLD(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({ 
      "@type": "Question", 
      name: q, 
      acceptedAnswer: { 
        "@type": "Answer", 
        text: a 
      } 
    })),
  };
}
