import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'
import { generatePageMetadata } from '@/lib/seo'
import { generateMedicalWebPageSchema, stringifySchema } from '@/lib/structured-data'

export const metadata: Metadata = generatePageMetadata(
  'Asthma Diary App - Daily Symptom Log & Pattern Tracking | Respire LYF',
  'Keep a comprehensive asthma diary with Respire LYF. Log daily symptoms, triggers, and medication use. Track patterns over time to better understand your asthma and improve management.',
  '/asthma-diary-app'
)

export default function AsthmaDiaryApp() {
  const schema = generateMedicalWebPageSchema({
    name: 'Asthma Diary App',
    description: 'Keep a comprehensive asthma diary with Respire LYF. Log daily symptoms, triggers, and medication use to track patterns over time.',
    url: '/asthma-diary-app',
    medicalSpecialty: 'Pulmonology',
  })

  return (
    <>
      <PageBreadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Asthma Diary App', url: '/asthma-diary-app' },
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
              Asthma Diary App
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Keep a comprehensive daily asthma diary to track symptoms, triggers, and medication use over time
            </p>
          </div>

          <div className="text-center mb-16">
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#2894D9] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#217cb8] transition-colors shadow-lg"
            >
              Start Your Asthma Diary
            </Link>
          </div>

          <div className="prose prose-slate max-w-none space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Keep an Asthma Diary?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                An asthma diary helps you track patterns that might not be obvious day-to-day. By logging symptoms, triggers, and medication use consistently, you can identify trends and correlations that inform better asthma management.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Respire LYF makes diary-keeping easy with automatic tracking, intelligent pattern recognition, and organized data visualization that helps you understand your respiratory health over time.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Track in Your Asthma Diary</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Symptoms</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Symptom severity (mild, moderate, severe)</li>
                    <li>• Cough frequency and timing</li>
                    <li>• Shortness of breath episodes</li>
                    <li>• Wheezing or chest tightness</li>
                    <li>• Sleep disruption due to asthma</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Medication Log</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Daily controller medication</li>
                    <li>• Rescue inhaler use</li>
                    <li>• Medication timing</li>
                    <li>• Missed doses</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Potential Triggers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Weather conditions</li>
                    <li>• Air quality</li>
                    <li>• Exercise or activity</li>
                    <li>• Stress levels</li>
                    <li>• Exposure to allergens</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lifestyle Factors</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sleep quality</li>
                    <li>• Stress and emotional state</li>
                    <li>• Food and hydration</li>
                    <li>• Physical activity levels</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Digital Asthma Diary</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#2894D9] rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatic Tracking</h3>
                    <p className="text-gray-700">Apple Watch integration automatically logs inhaler use and cough detection, so you don&apos;t have to remember every detail.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#2894D9] rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Pattern Recognition</h3>
                    <p className="text-gray-700">AI-powered analysis identifies correlations between your symptoms, triggers, and lifestyle factors that might not be obvious.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#2894D9] rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Sharing</h3>
                    <p className="text-gray-700">Export your diary data to share with your healthcare provider, making appointments more productive and informed.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Disclaimer</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Respire LYF is not a medical device and does not provide medical advice. This asthma diary app is designed to support awareness and understanding of your personal data. Always consult with qualified healthcare professionals for medical decisions related to your asthma management.
              </p>
              <div className="mt-4">
                <Link href="/editorial-policy" className="text-[#2894D9] hover:underline font-semibold">
                  Read our Editorial Policy →
                </Link>
              </div>
            </section>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8 justify-center">
              <Link 
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#2894D9] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#217cb8] transition-colors shadow-lg"
              >
                Start Your Asthma Diary
              </Link>
              <Link 
                href="/asthma-tracker-app"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#2894D9] text-[#2894D9] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#2894D9] hover:text-white transition-colors"
              >
                Learn About Asthma Tracking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
