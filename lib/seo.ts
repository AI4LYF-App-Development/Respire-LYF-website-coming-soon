import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://respirelyf.com'
const siteName = 'Respire LYF'
const defaultTitle = 'Respire LYF - All-in-One Respiratory Co-Pilot'
const defaultDescription = 'Transform scattered symptoms into clear patterns. Discover your personal respiratory fingerprint with the world\'s first MD-RIC platform. Understand how sleep, stress, food, hydration, and 10 key determinants affect your breathing. Track everything free, understand everything premium.'

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
        { url: '/icons/respirelyf_logo.png', sizes: '32x32', type: 'image/png' },
        { url: '/icons/respirelyf_logo.png', sizes: '192x192', type: 'image/png' },
        { url: '/icons/respirelyf_logo.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/icons/respirelyf_logo.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: '/icons/respirelyf_logo.png',
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
      url: siteUrl,
      siteName: siteName,
      title: defaultTitle,
      description: defaultDescription,
      images: [
        {
          url: '/icons/respirelyf_logo.png', // Fallback to logo if OG image doesn't exist
          width: 1200,
          height: 630,
          alt: 'Respire LYF - Respiratory Health Intelligence Platform',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultTitle,
      description: defaultDescription,
      images: ['/icons/respirelyf_logo.png'], // Fallback to logo
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
      languages: {
        'en-US': siteUrl,
        'en': siteUrl,
      },
    },
    verification: {
      // Add your verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
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
    },
  }
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '',
  image?: string
): Metadata {
  const fullTitle = `${title} | ${siteName}`
  const fullUrl = `${siteUrl}${path}`
  
  return {
    title: fullTitle,
    description,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: siteName,
      images: image ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        }
      ] : [
        {
          url: '/icons/respirelyf_logo.png',
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
      images: image ? [image] : ['/icons/respirelyf_logo.png'],
      creator: '@RespireLYF',
      site: '@RespireLYF',
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        'en-US': fullUrl,
        'en': fullUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

