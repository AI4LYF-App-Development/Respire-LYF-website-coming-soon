import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'
import { generatePageMetadata } from '@/lib/seo'
import { generateMedicalWebPageSchema, stringifySchema } from '@/lib/structured-data'

export const metadata: Metadata = generatePageMetadata(
  'Cough Tracker App',
  'Track and monitor cough patterns with Respire LYF. Understand frequency, timing, and potential triggers to better manage respiratory symptoms.',
  '/cough-tracker-app'
)

export default function CoughTrackerApp() {
  const schema = generateMedicalWebPageSchema({
    name: 'Cough Tracker App',
    description: 'Track and monitor cough patterns with Respire LYF. Understand frequency, timing, and potential triggers to better manage respiratory symptoms.',
    url: '/cough-tracker-app',
    medicalSpecialty: 'Pulmonology',
  })

  return (
    <>
      <PageBreadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Cough Tracker App', url: '/cough-tracker-app' },
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
              Cough Tracker App
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Monitor cough patterns and understand what may be triggering your symptoms
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Cough Tracking</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Respire LYF helps you track cough frequency, timing, and severity. By monitoring these patterns alongside other health determinants, you can identify potential correlations and trends that may be affecting your respiratory health.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform integrates with Apple Watch for automatic cough detection, making it easier to maintain accurate records without manual logging.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tracking Capabilities</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Automatic cough detection with Apple Watch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Manual logging of cough episodes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Pattern analysis over time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Correlation with environmental and lifestyle factors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Trend identification and insights</span>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Note</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Respire LYF is designed to support awareness of cough patterns. It does not provide medical advice, diagnosis, or treatment. Persistent or severe cough should be evaluated by a qualified healthcare professional.
              </p>
            </section>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8">
              <Link 
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#2894D9] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#217cb8] transition-colors"
              >
                Discover Respire LYF
              </Link>
              <Link 
                href="/faqs"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#2894D9] text-[#2894D9] px-6 py-3 rounded-xl font-semibold hover:bg-[#2894D9] hover:text-white transition-colors"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
