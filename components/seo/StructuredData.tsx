const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://respirelyf.com'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Respire LYF',
    url: siteUrl,
    logo: `${siteUrl}/icons/respirelyf_logo.png`,
    description: 'Transforming respiratory care through intelligent, all-in-one analysis that reveals the hidden patterns affecting your breathing. We believe every person deserves to understand their personal respiratory fingerprint.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@aiforlife.ai',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'en-US',
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
    description: 'Transforming respiratory care through intelligent, all-in-one analysis that reveals the hidden patterns affecting your breathing. We believe every person deserves to understand their personal respiratory fingerprint.',
    publisher: {
      '@type': 'Organization',
      name: 'Respire LYF',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icons/respirelyf_logo.png`,
      },
    },
    // SearchAction removed - no search functionality exists on site
    inLanguage: 'en-US',
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Respire LYF',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    description: 'Transforming respiratory care through intelligent, all-in-one analysis that reveals the hidden patterns affecting your breathing. We believe every person deserves to understand their personal respiratory fingerprint.',
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
    ],
  }

  const healthTopicSchema = {
    '@context': 'https://schema.org',
    '@type': 'HealthTopic',
    name: 'Respiratory Health Management',
    description: 'Comprehensive respiratory health tracking and analysis for asthma and COPD management',
    audience: {
      '@type': 'Audience',
      audienceType: 'Patients with respiratory conditions',
    },
    specialty: {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(healthTopicSchema) }}
      />
    </>
  )
}
