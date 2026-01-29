import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'
import { generatePageMetadata } from '@/lib/seo'
import { generateArticleSchema, stringifySchema } from '@/lib/structured-data'

export const metadata: Metadata = generatePageMetadata(
  'Asthma Symptoms: Types, Patterns & What to Watch For | Respire LYF',
  'Learn about common asthma symptoms, how they present, and what patterns to watch for. Understand different types of asthma symptoms and how tracking them can help manage your condition.',
  '/learn/asthma-symptoms'
)

export default function AsthmaSymptomsPage() {
  const schema = generateArticleSchema({
    headline: 'Asthma Symptoms: Types, Patterns & What to Watch For',
    description: 'Learn about common asthma symptoms, how they present, and what patterns to watch for. Understand different types of asthma symptoms and how tracking them can help manage your condition.',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    url: '/learn/asthma-symptoms',
  })

  return (
    <>
      <PageBreadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Learn', url: '/learn' },
        { name: 'Asthma Symptoms', url: '/learn/asthma-symptoms' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(schema) }}
      />
      <div className="min-h-screen relative" style={{ background: 'radial-gradient(circle at center, rgba(80, 167, 226, 0.08) 0%, rgba(255, 255, 255, 1) 75%)' }}>
        <PageHeader />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Asthma Symptoms: Types, Patterns & What to Watch For
            </h1>
            <p className="text-lg text-gray-600">
              Understanding asthma symptoms is the first step toward better management
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Asthma Symptoms</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Asthma symptoms can vary from person to person and may change over time. The most common symptoms include:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3 font-bold">•</span>
                  <span><strong>Shortness of breath:</strong> Feeling like you can&apos;t get enough air, especially during physical activity or at night</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3 font-bold">•</span>
                  <span><strong>Coughing:</strong> Persistent cough, often worse at night or early morning, or triggered by exercise or cold air</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3 font-bold">•</span>
                  <span><strong>Wheezing:</strong> A whistling or squeaky sound when breathing, especially when exhaling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3 font-bold">•</span>
                  <span><strong>Chest tightness:</strong> Feeling of pressure or constriction in the chest</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Symptom Patterns</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Asthma symptoms often follow patterns that can be identified through consistent tracking. These patterns may relate to:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Time of Day</h3>
                  <p className="text-gray-700">Symptoms may be worse at night (nocturnal asthma) or in the early morning hours.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Triggers</h3>
                  <p className="text-gray-700">Symptoms may occur after exposure to allergens, exercise, cold air, or stress.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Activity Level</h3>
                  <p className="text-gray-700">Exercise-induced asthma causes symptoms during or after physical activity.</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Factors</h3>
                  <p className="text-gray-700">Weather changes, air quality, and pollen levels can trigger symptoms.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Seek Medical Attention</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <p className="text-lg font-semibold text-red-900 mb-2">Seek immediate medical care if you experience:</p>
                <ul className="space-y-2 text-red-800">
                  <li>• Severe shortness of breath</li>
                  <li>• Rapid breathing or inability to speak in full sentences</li>
                  <li>• Blue or gray lips or fingernails</li>
                  <li>• Symptoms that don&apos;t improve after using rescue inhaler</li>
                  <li>• Peak flow readings in the red zone</li>
                </ul>
              </div>
            </section>

            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Track Your Symptoms</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Understanding your symptom patterns is key to better asthma management. Respire LYF helps you track symptoms, identify triggers, and recognize patterns over time.
              </p>
              <Link 
                href="/asthma-tracker-app"
                className="inline-flex items-center justify-center gap-2 bg-[#2894D9] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#217cb8] transition-colors"
              >
                Start Tracking Your Asthma Symptoms
              </Link>
            </section>

            <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Disclaimer</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                This information is for educational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical decisions related to your asthma. If you experience a medical emergency, call local emergency services immediately.
              </p>
              <div className="mt-4">
                <Link href="/editorial-policy" className="text-[#2894D9] hover:underline font-semibold">
                  Read our Editorial Policy →
                </Link>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/learn" className="text-[#2894D9] hover:underline">
                  All Learn Articles →
                </Link>
                <Link href="/asthma-tracker-app" className="text-[#2894D9] hover:underline">
                  Asthma Tracker App →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
