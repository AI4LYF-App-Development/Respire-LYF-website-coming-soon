'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView, trackScrollDepth } from '@/lib/analytics'
import { app } from '@/lib/firebase'

/**
 * Analytics Provider Component
 * Initializes Google Analytics and tracks page views
 */
export default function AnalyticsProvider() {
  const pathname = usePathname()

  useEffect(() => {
    // Get Measurement ID from Firebase config, environment variable, or hardcoded fallback
    // Priority: Firebase config > Environment variable > Hardcoded fallback
    const firebaseMeasurementId = app?.options?.measurementId as string | undefined
    const envMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    const hardcodedMeasurementId = 'G-8C50SFZF8V'
    const gaMeasurementId = firebaseMeasurementId || envMeasurementId || hardcodedMeasurementId

    if (gaMeasurementId && typeof window !== 'undefined') {
      // Load Google Analytics script
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaMeasurementId}', {
          page_path: window.location.pathname,
        });
      `
      document.head.appendChild(script2)
    }
  }, [])

  // Track page views on route change
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname, document.title)
    }
  }, [pathname])

  // Track scroll depth
  useEffect(() => {
    if (typeof window === 'undefined') return

    let scrollDepthTracked = new Set<number>()
    const scrollDepths = [25, 50, 75, 90, 100]

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollPercentage = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      )

      scrollDepths.forEach((depth) => {
        if (scrollPercentage >= depth && !scrollDepthTracked.has(depth)) {
          scrollDepthTracked.add(depth)
          trackScrollDepth(depth)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
