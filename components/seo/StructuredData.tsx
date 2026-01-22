const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://respirelyf.com'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Respire LYF',
    url: siteUrl,
    logo: `${siteUrl}/icons/respirelyf_logo.png`,
    description: 'All-in-One Respiratory Co-Pilot - Transform scattered symptoms into clear patterns. Track everything free, understand everything premium.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@respirelyf.com',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'en',
    },
    sameAs: [
      'https://x.com/RespireLYF',
      'https://www.youtube.com/@respirelyf',
      'https://www.instagram.com/respire.lyf',
      'https://www.facebook.com/profile.php?id=61581530281991',
    ],
    foundingDate: '2024',
    legalName: 'Respire LYF',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Respire LYF',
    url: siteUrl,
    description: 'Transform scattered symptoms into clear patterns. Discover your personal respiratory fingerprint with the world\'s first MD-RIC platform. Track everything free, understand everything premium.',
    publisher: {
      '@type': 'Organization',
      name: 'Respire LYF',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icons/respirelyf_logo.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-US',
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Respire LYF',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    description: 'All-in-One Respiratory Co-Pilot for asthma and COPD management. Track everything free, understand everything premium.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1',
      bestRating: '5',
      worstRating: '1',
    },
    featureList: [
      'All-in-one respiratory analysis',
      'Health determinant tracking',
      'Health indicator monitoring',
      'Personalized breathing insights',
      'Asthma and COPD management',
    ],
  }

  const medicalEntitySchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalEntity',
    name: 'Respire LYF',
    description: 'Respiratory health intelligence platform for asthma and COPD management',
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Pulmonology',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalEntitySchema) }}
      />
    </>
  )
}
