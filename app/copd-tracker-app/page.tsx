import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'
import { generatePageMetadata } from '@/lib/seo'
import { generateMedicalWebPageSchema, stringifySchema } from '@/lib/structured-data'

export const metadata: Metadata = generatePageMetadata(
  'COPD Tracker App',
  'Monitor and track COPD symptoms with Respire LYF. Understand patterns in your chronic obstructive pulmonary disease management through intelligent data analysis.',
  '/copd-tracker-app'
)

export default function COPDTrackerApp() {
  const schema = generateMedicalWebPageSchema({
    name: 'COPD Tracker App',
    description: 'Monitor and track COPD symptoms with Respire LYF. Understand patterns in your chronic obstructive pulmonary disease management through intelligent data analysis.',
    url: '/copd-tracker-app',
    medicalSpecialty: 'Pulmonology',
  })

  return (
    <>
      <PageBreadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'COPD Tracker App', url: '/copd-tracker-app' },
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
              COPD Tracker App
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Track COPD symptoms and understand patterns in your chronic obstructive pulmonary disease management
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">COPD Management Support</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Respire LYF provides comprehensive tracking for individuals managing COPD. Monitor symptoms, medication adherence, and lifestyle factors that may impact your respiratory health.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform helps you identify trends and correlations in your COPD management, supporting better conversations with your healthcare team.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tracking Features</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Monitor COPD symptoms and flare-ups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Track medication and treatment adherence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Monitor breathing patterns and peak flow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Track environmental and lifestyle factors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Understand long-term trends in your condition</span>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Disclaimer</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Respire LYF is not a medical device and does not provide medical advice. This platform is designed to support awareness and understanding of your personal data. All health-related decisions should be made in consultation with qualified healthcare professionals.
              </p>
            </section>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8">
              <Link 
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#2894D9] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#217cb8] transition-colors"
              >
                Get Started with Respire LYF
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
