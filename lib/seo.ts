import { Metadata } from 'next'

// Ensure consistent URL (no www redirect issues)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://respirelyf.com'
const siteName = 'Respire LYF'
const defaultTitle = 'Respire LYF'
const defaultDescription = 'Transforming respiratory care through intelligent, all-in-one analysis that reveals the hidden patterns affecting your breathing. We believe every person deserves to understand their personal respiratory fingerprint.'
const facebookAppId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: `%s | ${siteName}`
    },
    description: defaultDescription,
    applicationName: siteName,
    keywords: [
      'asthma management',
      'COPD tracking',
      'respiratory health',
      'breathing analysis',
      'health determinants',
      'respiratory intelligence',
      'asthma symptoms',
      'breathing patterns',
      'respiratory care',
      'lung health',
      'inhaler technique',
      'medication timing',
      'sleep and breathing',
      'stress and asthma',
      'respiratory wellness',
      'asthma control',
      'COPD management',
      'respiratory monitoring',
      'health tracking',
      'breathing exercises',
      'respiratory therapy',
      'pulmonary health',
      'asthma triggers',
      'respiratory symptoms',
      'health indicators',
      'free tracking',
      'premium insights',
      'health monitoring',
      'respiratory analytics'
    ],
    authors: [{ name: 'Respire LYF', url: siteUrl }],
    creator: 'Respire LYF',
    publisher: 'Respire LYF',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icons/respirelyf_logo.png', sizes: '32x32', type: 'image/png' },
        { url: '/icons/respirelyf_logo.png', sizes: '192x192', type: 'image/png' },
        { url: '/icons/respirelyf_logo.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/icons/respirelyf_logo.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
    },
    manifest: '/manifest.json',
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: siteName,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteUrl, // Ensure this matches your canonical URL
      siteName: siteName,
      title: defaultTitle,
      description: defaultDescription,
      images: [
        {
          url: `${siteUrl}/icons/respirelyf_logo.png`, // Absolute URL for better SEO
          width: 1200,
          height: 630,
          alt: 'Respire LYF - Respiratory Health Intelligence Platform',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description: defaultDescription,
      images: [`${siteUrl}/icons/respirelyf_logo.png`], // Absolute URL for better SEO
      creator: '@RespireLYF',
      site: '@RespireLYF',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: siteUrl,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
      // Bing verification is added via other.meta tag
    },
    category: 'Health Technology',
    classification: 'Health & Wellness',
    other: {
      'theme-color': '#2894D9',
      'color-scheme': 'light',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': siteName,
      'format-detection': 'telephone=no',
      'referrer': 'origin-when-cross-origin',
      ...(facebookAppId && { 'fb:app_id': facebookAppId }),
      ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION }),
    },
  }
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '',
  image?: string,
  noindex: boolean = false
): Metadata {
  const fullTitle = `${title} | ${siteName}`
  const fullUrl = `${siteUrl}${path}`
  
  return {
    title: fullTitle,
    description,
    keywords: [
      'respirelyf',
      'respiratory health',
      'asthma management',
      'COPD tracking',
      title.toLowerCase(),
    ],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: siteName,
      images: image ? [
        {
          url: image.startsWith('http') ? image : `${siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        }
      ] : [
        {
          url: `${siteUrl}/icons/respirelyf_logo.png`,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: image ? [image.startsWith('http') ? image : `${siteUrl}${image}`] : [`${siteUrl}/icons/respirelyf_logo.png`],
      creator: '@RespireLYF',
      site: '@RespireLYF',
    },
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      ...(noindex && {
        googleBot: {
          index: false,
          follow: false,
        },
      }),
    },
  }
}

