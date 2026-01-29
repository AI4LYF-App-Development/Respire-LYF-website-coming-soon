const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://respirelyf.com'

interface PageBreadcrumbsProps {
  items: Array<{
    name: string
    url: string
  }>
}

export default function PageBreadcrumbs({ items }: PageBreadcrumbsProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}
