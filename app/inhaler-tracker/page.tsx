import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'
import { generatePageMetadata } from '@/lib/seo'
import { generateMedicalWebPageSchema, stringifySchema } from '@/lib/structured-data'

export const metadata: Metadata = generatePageMetadata(
  'Inhaler Tracker',
  'Track your inhaler use with Respire LYF. Monitor medication timing, technique, and effectiveness to better manage your respiratory condition.',
  '/inhaler-tracker'
)

export default function InhalerTracker() {
  const schema = generateMedicalWebPageSchema({
    name: 'Inhaler Tracker',
    description: 'Track your inhaler use with Respire LYF. Monitor medication timing, technique, and effectiveness to better manage your respiratory condition.',
    url: '/inhaler-tracker',
    medicalSpecialty: 'Pulmonology',
  })

  return (
    <>
      <PageBreadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Inhaler Tracker', url: '/inhaler-tracker' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(schema) }}
      />
      <div className="min-h-screen relative" style={{ background: 'radial-gradient(circle at center, rgba(80, 167, 226, 0.08) 0%, rgba(255, 255, 255, 1) 75%)' }}>
        <PageHeader />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24">
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Inhaler Tracker
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Monitor and track your inhaler usage patterns for better respiratory health management
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Inhaler Tracking</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Respire LYF provides detailed tracking of your inhaler use, helping you understand patterns in medication timing, frequency, and how it relates to your symptoms and overall respiratory health.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By tracking inhaler use alongside other health determinants, you can identify correlations and trends that support better management of your condition.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Can Track</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Inhaler use frequency and timing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Correlation with symptom patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Medication adherence over time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Integration with wearable devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Historical usage patterns and trends</span>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Disclaimer</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Respire LYF is not a medical device and does not provide medical advice. This tracking tool is designed to support awareness of your medication use patterns. Always follow your healthcare provider&apos;s instructions for inhaler use and consult them for medical decisions.
              </p>
            </section>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8">
              <Link 
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#2894D9] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#217cb8] transition-colors"
              >
                Learn More
              </Link>
              <Link 
                href="/faqs"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#2894D9] text-[#2894D9] px-6 py-3 rounded-xl font-semibold hover:bg-[#2894D9] hover:text-white transition-colors"
              >
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
