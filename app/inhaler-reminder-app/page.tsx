import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'
import { generatePageMetadata } from '@/lib/seo'
import { generateMedicalWebPageSchema, stringifySchema } from '@/lib/structured-data'

export const metadata: Metadata = generatePageMetadata(
  'Inhaler Reminder App',
  'Never miss a dose with Respire LYF\'s inhaler reminder app. Track medication use, set reminders, and monitor your inhaler technique for better asthma and COPD management.',
  '/inhaler-reminder-app'
)

export default function InhalerReminderApp() {
  const schema = generateMedicalWebPageSchema({
    name: 'Inhaler Reminder App',
    description: 'Never miss a dose with Respire LYF\'s inhaler reminder app. Track medication use, set reminders, and monitor your inhaler technique for better asthma and COPD management.',
    url: '/inhaler-reminder-app',
    medicalSpecialty: 'Pulmonology',
  })

  return (
    <>
      <PageBreadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Inhaler Reminder App', url: '/inhaler-reminder-app' },
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
              Inhaler Reminder App
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay on track with your medication schedule and improve inhaler technique tracking
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Inhaler Reminders</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Respire LYF helps you stay consistent with your inhaler medication schedule. Set personalized reminders, track each use, and monitor your technique to ensure you&apos;re getting the most from your treatment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform integrates with wearable devices like Apple Watch to automatically track inhaler use, making it easier to maintain your medication routine.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Features</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Customizable medication reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Automatic tracking with Apple Watch integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Inhaler technique monitoring and tips</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Medication adherence insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Historical tracking and pattern analysis</span>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Information</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Respire LYF is designed to support medication adherence awareness. It does not replace medical advice or professional guidance on medication use. Always follow your healthcare provider&apos;s instructions for inhaler use and medication timing.
              </p>
            </section>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8">
              <Link 
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#2894D9] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#217cb8] transition-colors"
              >
                Explore Respire LYF
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
