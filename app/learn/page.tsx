import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata(
  'Learn About Asthma & Respiratory Health | Respire LYF',
  'Educational resources about asthma symptoms, triggers, and respiratory health management. Learn about different types of asthma, symptom patterns, and how to better understand your respiratory health.',
  '/learn'
)

export default function LearnPage() {
  return (
    <>
      <PageBreadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Learn', url: '/learn' },
      ]} />
      <div className="min-h-screen relative" style={{ background: 'radial-gradient(circle at center, rgba(80, 167, 226, 0.08) 0%, rgba(255, 255, 255, 1) 75%)' }}>
        <PageHeader />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24">
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Learn About Respiratory Health
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Educational resources to help you better understand asthma, COPD, and respiratory health
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Asthma Symptoms</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Asthma symptoms can vary widely from person to person and may change over time. Understanding different types of asthma symptoms and their patterns can help you better manage your condition and communicate with your healthcare provider.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/learn/asthma-symptoms" className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Asthma Symptoms Overview</h3>
                  <p className="text-gray-700">Learn about common asthma symptoms, how they present, and what to watch for.</p>
                </Link>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm opacity-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Silent Asthma Symptoms</h3>
                  <p className="text-gray-700">Coming soon - Understanding silent asthma and symptoms that may not be immediately obvious.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm opacity-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Silent Asthma Attack Symptoms</h3>
                  <p className="text-gray-700">Coming soon - Recognizing the signs of a silent asthma attack and when to seek medical attention.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm opacity-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eosinophilic Asthma Symptoms</h3>
                  <p className="text-gray-700">Coming soon - Understanding eosinophilic asthma, its unique symptoms, and management approaches.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm opacity-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Allergy Asthma Symptoms</h3>
                  <p className="text-gray-700">Coming soon - How allergies can trigger asthma symptoms and what to know about allergic asthma.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm opacity-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Asthma and Cold Symptoms</h3>
                  <p className="text-gray-700">Coming soon - Understanding how respiratory infections can affect asthma and what symptoms to watch for.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm opacity-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Adult Onset Asthma Symptoms</h3>
                  <p className="text-gray-700">Coming soon - Recognizing asthma symptoms that develop in adulthood and how they differ from childhood asthma.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm opacity-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Severe Asthma Attack Symptoms</h3>
                  <p className="text-gray-700">Coming soon - Critical information about recognizing and responding to severe asthma attacks.</p>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Track Your Symptoms</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Understanding symptoms is the first step. Tracking them over time helps you identify patterns and better manage your respiratory health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/asthma-tracker-app"
                  className="inline-flex items-center justify-center gap-2 bg-[#2894D9] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#217cb8] transition-colors"
                >
                  Start Tracking Your Asthma
                </Link>
                <Link 
                  href="/asthma-diary-app"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#2894D9] text-[#2894D9] px-6 py-3 rounded-xl font-semibold hover:bg-[#2894D9] hover:text-white transition-colors"
                >
                  Keep an Asthma Diary
                </Link>
              </div>
            </section>

            <section className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Medical Disclaimer</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The information provided in these educational resources is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare professionals with any questions you may have regarding a medical condition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you experience a medical emergency or severe breathing difficulty, call local emergency services immediately.
              </p>
              <div className="mt-4">
                <Link href="/editorial-policy" className="text-[#2894D9] hover:underline font-semibold">
                  Read our full Editorial Policy →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
