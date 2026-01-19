import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'RespireLYF - Multi-Determinant Respiratory Intelligence Co-Pilot',
    description: 'Transform scattered symptoms into clear patterns. Discover your personal respiratory fingerprint with the world\'s first MD-RIC platform.',
    keywords: [
      'asthma management',
      'COPD tracking',
      'respiratory health',
      'breathing analysis',
      'health determinants',
      'respiratory intelligence'
    ],
    authors: [{ name: 'RespireLYF' }],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://respirelyf.com',
      siteName: 'RespireLYF',
      title: 'RespireLYF - Your Respiratory Health Co-Pilot',
      description: 'Discover what really affects your breathing through comprehensive multi-determinant analysis',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'RespireLYF - Your Respiratory Health Co-Pilot',
      description: 'Transform scattered symptoms into clear patterns',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: 'https://respirelyf.com'
    }
  }
}

