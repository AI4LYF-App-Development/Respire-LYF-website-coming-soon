import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import FirebaseProvider from '@/components/FirebaseProvider'
import AnalyticsProvider from '@/components/analytics/AnalyticsProvider'
import StructuredData from '@/components/seo/StructuredData'
import './globals.css'
import { generateMetadata } from '@/lib/seo'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap'
})

export const metadata: Metadata = generateMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <StructuredData />
        <AnalyticsProvider />
        <FirebaseProvider />
        {children}
        <div className="bg-white">
          <Footer />
        </div>
      </body>
    </html>
  )
}

