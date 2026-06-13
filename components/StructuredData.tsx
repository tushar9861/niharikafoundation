export function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Niharika Foundation",
    "description": "Educational Charitable Trust dedicated to empowering students through scholarships and community development in Odisha",
    "url": "https://niharikafoundation.org",
    "logo": "https://niharikafoundation.org/niharika-logo.png",
    "sameAs": [
      "https://facebook.com/niharikafoundation",
      "https://instagram.com/niharikafoundation",
      "https://wa.me/918763979798"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+91-8763-979-798",
      "email": "info@niharikafoundation.org"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Baleshwar",
      "addressRegion": "Odisha",
      "addressCountry": "India"
    },
    "founder": {
      "@type": "Person",
      "name": "Rutuick Jee"
    },
    "areaServed": {
      "@type": "GeoShape",
      "name": "Odisha"
    },
    "nonprofit": {
      "@type": "Organization",
      "name": "Niharika Foundation"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
