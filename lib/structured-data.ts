/**
 * Structured Data (JSON-LD) Utilities
 * Centralized functions for generating schema.org structured data
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://respirelyf.com'

export interface FAQItem {
  question: string
  answer: string
}

export interface AuthorInfo {
  name: string
  credentials?: string
  url?: string
}

export interface ReviewerInfo {
  name: string
  credentials?: string
  url?: string
}

/**
 * Generate FAQPage schema
 */
export function generateFAQPageSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  }
}

/**
 * Generate Article schema (for blog posts)
 */
export function generateArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  author,
  image,
  url,
}: {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  author?: AuthorInfo
  image?: string
  url: string
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'Respire LYF',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icons/respirelyf_logo.png`,
      },
    },
    url: url.startsWith('http') ? url : `${siteUrl}${url}`,
  }

  if (dateModified) {
    schema.dateModified = dateModified
  }

  if (author) {
    schema.author = {
      '@type': 'Person',
      name: author.name,
      ...(author.credentials && { jobTitle: author.credentials }),
      ...(author.url && { url: author.url }),
    }
  }

  if (image) {
    schema.image = image.startsWith('http') ? image : `${siteUrl}${image}`
  }

  return schema
}

/**
 * Generate MedicalWebPage schema for health content
 */
export function generateMedicalWebPageSchema({
  name,
  description,
  url,
  author,
  reviewer,
  datePublished,
  dateModified,
  medicalSpecialty = 'Pulmonology',
}: {
  name: string
  description: string
  url: string
  author?: AuthorInfo
  reviewer?: ReviewerInfo
  datePublished?: string
  dateModified?: string
  medicalSpecialty?: string
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name,
    description,
    url: url.startsWith('http') ? url : `${siteUrl}${url}`,
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: medicalSpecialty,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Respire LYF',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icons/respirelyf_logo.png`,
      },
    },
  }

  if (author) {
    schema.author = {
      '@type': 'Person',
      name: author.name,
      ...(author.credentials && { jobTitle: author.credentials }),
    }
  }

  if (reviewer) {
    schema.reviewedBy = {
      '@type': 'Person',
      name: reviewer.name,
      ...(reviewer.credentials && { jobTitle: reviewer.credentials }),
    }
  }

  if (datePublished) {
    schema.datePublished = datePublished
  }

  if (dateModified) {
    schema.dateModified = dateModified
  }

  return schema
}

/**
 * Safely stringify JSON-LD for use in dangerouslySetInnerHTML
 */
export function stringifySchema(schema: object): string {
  return JSON.stringify(schema, null, 0)
}
