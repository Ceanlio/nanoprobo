export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Nanoprobo",
    description: "Advanced AI platform for modern business automation and analytics",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://nanoprobo.com",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free trial available",
    },
    provider: {
      "@type": "Organization",
      name: "Nanoprobo",
      url: process.env.NEXT_PUBLIC_APP_URL || "https://nanoprobo.com",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
