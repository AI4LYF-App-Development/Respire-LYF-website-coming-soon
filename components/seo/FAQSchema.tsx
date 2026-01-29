'use client'

import { generateFAQPageSchema, stringifySchema, type FAQItem } from '@/lib/structured-data'

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  if (!faqs || faqs.length === 0) return null

  const schema = generateFAQPageSchema(faqs)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(schema) }}
    />
  )
}
