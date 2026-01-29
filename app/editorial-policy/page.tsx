import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata(
  'Editorial Policy & Medical Disclaimer',
  'Learn about Respire LYF\'s editorial standards, medical disclaimer, and how we ensure responsible health information presentation.',
  '/editorial-policy'
)

export default function EditorialPolicy() {
  return (
    <>
      <PageBreadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Editorial Policy', url: '/editorial-policy' },
      ]} />
      <div className="min-h-screen relative" style={{ background: 'radial-gradient(circle at center, rgba(80, 167, 226, 0.08) 0%, rgba(255, 255, 255, 1) 75%)' }}>
        <PageHeader />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Editorial Policy & Medical Disclaimer
            </h1>
            <p className="text-lg text-gray-600">
              Our commitment to responsible health information
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Editorial Standards</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Respire LYF is committed to providing accurate, evidence-based information about respiratory health. However, it is essential to understand the limitations and purpose of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical Disclaimer</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <p className="text-lg font-semibold text-red-900 mb-4">
                  Respire LYF is NOT a medical device and does NOT provide medical advice, diagnosis, or treatment.
                </p>
                <p className="text-lg text-red-800 mb-4">
                  This platform is designed for informational and educational purposes only. It is intended to support awareness and understanding of your personal health data through tracking and pattern recognition.
                </p>
                <p className="text-lg text-red-800">
                  All health-related decisions should be made in consultation with qualified healthcare professionals. Never disregard professional medical advice or delay seeking it because of information on this platform.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Respire LYF Does</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Helps you track symptoms, medication use, and lifestyle factors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Identifies patterns and correlations in your personal data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Provides educational information about respiratory health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Supports data organization for discussions with healthcare providers</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Respire LYF Does NOT Do</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Provide medical diagnosis or treatment recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Replace professional medical care or advice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Establish causation between tracked factors and health outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Provide emergency medical services</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Correlations vs. Causation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Respire LYF identifies correlations—patterns where two or more factors appear to be related. It is crucial to understand that:
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <p className="text-lg text-yellow-900">
                  <strong>Correlation does not equal causation.</strong> Just because two factors appear together does not mean one causes the other. Many factors may be involved, and individual responses vary significantly.
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                All insights and correlations represent observational findings from user-generated data. They should be discussed with healthcare professionals who can help interpret them in the context of your individual health situation.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Situations</h2>
              <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 mb-6">
                <p className="text-xl font-bold text-red-900 mb-2">Medical Emergency</p>
                <p className="text-lg text-red-800 mb-4">
                  If you experience a medical emergency, severe breathing difficulty, or life-threatening symptoms:
                </p>
                <p className="text-2xl font-bold text-red-900">
                  Call local emergency services immediately (e.g., 911 in the United States)
                </p>
                <p className="text-lg text-red-800 mt-4">
                  Do NOT rely on Respire LYF for emergency medical care. This platform is not designed for emergency situations and cannot provide immediate medical assistance.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Privacy and Security</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Your health data is encrypted and stored securely. We never share your personal information with third parties without your explicit consent. For detailed information about how we handle your data, please review our <Link href="/privacy-policy" className="text-[#2894D9] hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Content Accuracy</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We strive to provide accurate, up-to-date information. However, medical knowledge evolves, and individual circumstances vary. Information on this platform:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Is based on current medical understanding at the time of publication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>May not apply to every individual situation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Should be verified with qualified healthcare professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>Is subject to updates as new information becomes available</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">User Responsibility</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                By using Respire LYF, you acknowledge that:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>You understand this platform is not a substitute for professional medical care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>You will consult healthcare professionals for medical decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>You will seek emergency care when experiencing severe symptoms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3">•</span>
                  <span>You understand the limitations of correlation analysis</span>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                If you have questions about our editorial policy or medical disclaimer, please contact us at:
              </p>
              <p className="text-lg text-gray-900 font-semibold">
                Email: <a href="mailto:contact@aiforlife.ai" className="text-[#2894D9] hover:underline">contact@aiforlife.ai</a>
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-[#2894D9] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#217cb8] transition-colors"
                >
                  Return to Home
                </Link>
                <Link 
                  href="/terms-of-service"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#2894D9] text-[#2894D9] px-6 py-3 rounded-xl font-semibold hover:bg-[#2894D9] hover:text-white transition-colors"
                >
                  Read Terms of Service
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
