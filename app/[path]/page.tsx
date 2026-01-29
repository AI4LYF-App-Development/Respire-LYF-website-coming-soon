import { notFound } from 'next/navigation'
import OpenInAppFallback from '@/components/OpenInAppFallback'

const MARKETING_PATHS = new Set([
  'youtube',
  'instagram',
  'facebook',
  'reddit',
  'x',
  'tiktok',
  'respire-website',
  'email',
  'onboarding'
])

type PageProps = {
  params: Promise<{ path: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function PathFallbackPage({ params, searchParams }: PageProps) {

  const { path } = await params
  const resolvedSearchParams = await searchParams

  const normalizedPath = path.toLowerCase()
  if (!MARKETING_PATHS.has(normalizedPath)) {
    notFound()
  }

  const query = new URLSearchParams()
  Object.entries(resolvedSearchParams).forEach(([key, value]) => {
    if (typeof value === 'string') {
      query.set(key, value)
    } else if (Array.isArray(value) && value[0]) {
      query.set(key, value[0])
    }
  })
  const searchParamsString = query.toString()

  return (
    <OpenInAppFallback
      path={normalizedPath}
      searchParams={searchParamsString}
    />
  )
}
