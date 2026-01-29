import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'
import { generatePageMetadata } from '@/lib/seo'
import { generateMedicalWebPageSchema, stringifySchema } from '@/lib/structured-data'

export const metadata: Metadata = generatePageMetadata(
  'Asthma Tracker App - Monitor Symptoms, Triggers & Medication | Respire LYF',
  'Track and manage your asthma symptoms with Respire LYF. Monitor triggers, medication use, and breathing patterns. Free asthma diary app with intelligent pattern analysis for better respiratory health management.',
  '/asthma-tracker-app'
)

export default function AsthmaTrackerApp() {
  const schema = generateMedicalWebPageSchema({
    name: 'Asthma Tracker App',
    description: 'Track and manage your asthma symptoms with Respire LYF. Monitor triggers, medication use, and breathing patterns to better understand your respiratory health.',
    url: '/asthma-tracker-app',
    medicalSpecialty: 'Pulmonology',
  })

  return (
    <>
      <PageBreadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Asthma Tracker App', url: '/asthma-tracker-app' },
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
              Asthma Tracker App
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Monitor your asthma symptoms, track triggers, and understand patterns in your respiratory health with intelligent data analysis
            </p>
          </div>

          {/* Primary CTA */}
          <div className="text-center mb-16">
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#2894D9] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#217cb8] transition-colors shadow-lg"
            >
              Start Tracking Your Asthma Symptoms
            </Link>
          </div>

          <div className="prose prose-slate max-w-none space-y-12">
            {/* Who It's For */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who This Asthma Tracker App Is For</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Respire LYF&apos;s asthma tracker is designed for anyone managing asthma who wants to better understand their symptoms and triggers. Whether you&apos;re newly diagnosed or have been managing asthma for years, this app helps you:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3 font-bold">•</span>
                  <span><strong>Track asthma control:</strong> Monitor daily symptoms, severity, and how well your current treatment plan is working</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3 font-bold">•</span>
                  <span><strong>Identify triggers:</strong> Discover patterns between environmental factors, activities, and asthma flare-ups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3 font-bold">•</span>
                  <span><strong>Improve medication adherence:</strong> Track inhaler use and medication timing to ensure you&apos;re following your treatment plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2894D9] mr-3 font-bold">•</span>
                  <span><strong>Prepare for doctor visits:</strong> Bring organized data and insights to your healthcare provider for more productive conversations</span>
                </li>
              </ul>
            </section>

            {/* What It Tracks */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What This Asthma Tracker App Tracks</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Respire LYF provides comprehensive tracking across multiple aspects of your asthma management:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Asthma Symptoms</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Daily symptom severity</li>
                    <li>• Cough frequency and timing</li>
                    <li>• Shortness of breath episodes</li>
                    <li>• Wheezing occurrences</li>
                    <li>• Chest tightness</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Rescue Inhaler Use</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Inhaler usage frequency</li>
                    <li>• Automatic tracking with Apple Watch</li>
                    <li>• Timing and context of use</li>
                    <li>• Correlation with symptoms</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Triggers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Weather conditions</li>
                    <li>• Air quality index</li>
                    <li>• Pollen levels</li>
                    <li>• Indoor air quality factors</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Lifestyle Factors</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sleep quality and duration</li>
                    <li>• Stress levels</li>
                    <li>• Physical activity</li>
                    <li>• Food and hydration</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How It Helps */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How This Asthma Tracker App Helps You</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Action Plan Support</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    By tracking your symptoms and medication use, Respire LYF helps you understand how well your asthma action plan is working. You can identify when symptoms are well-controlled versus when you might need to adjust your approach with your healthcare provider.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Trend Insights</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our intelligent analysis reveals patterns over time that might not be obvious day-to-day. For example, you might discover that your symptoms worsen on days with high pollen counts, or that poor sleep quality correlates with increased inhaler use.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Better Doctor Conversations</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Bring organized data and insights to your appointments. Instead of trying to remember when symptoms occurred, you can show your healthcare provider clear patterns and trends, leading to more informed treatment decisions.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features & Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2894D9] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Symptom Tracking</h3>
                    <p className="text-gray-700">Log daily symptoms, severity, and patterns to understand your asthma better over time.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2894D9] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatic Inhaler Tracking</h3>
                    <p className="text-gray-700">Apple Watch integration automatically tracks inhaler use, so you don&apos;t have to remember to log it.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2894D9] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Pattern Recognition</h3>
                    <p className="text-gray-700">AI-powered analysis identifies correlations between triggers, symptoms, and lifestyle factors.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2894D9] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Free to Start</h3>
                    <p className="text-gray-700">Track everything free. Upgrade to premium for deeper insights and advanced pattern analysis.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I install the asthma tracker app?</h3>
                  <p className="text-gray-700">
                    Respire LYF is a web-based platform accessible from any device. Simply visit our website to get started. No app store download required.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Does it work with my inhaler?</h3>
                  <p className="text-gray-700">
                    Yes! If you have an Apple Watch, Respire LYF can automatically track when you use your inhaler. You can also manually log inhaler use on any device.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Is my data private and secure?</h3>
                  <p className="text-gray-700">
                    Absolutely. Your health data is encrypted and stored securely. We never share your personal information. See our <Link href="/privacy-policy" className="text-[#2894D9] hover:underline">Privacy Policy</Link> for details.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I share my data with my doctor?</h3>
                  <p className="text-gray-700">
                    Yes, you can export your data and insights to share with your healthcare provider during appointments. This helps facilitate more productive conversations about your asthma management.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Is this app a replacement for medical care?</h3>
                  <p className="text-gray-700">
                    No. Respire LYF is designed to support awareness and understanding of your personal data. It does not provide medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical decisions.
                  </p>
                </div>
              </div>
            </section>

            {/* Trust Blocks */}
            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Medical Disclaimer</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Respire LYF is not a medical device and is not FDA-cleared. This platform is for informational and educational purposes only. It does not constitute medical advice, diagnosis, or treatment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                All correlations and insights represent observational findings from user-generated data—they do not establish causation. Individual responses vary significantly. All health-related decisions should be made in consultation with qualified healthcare professionals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you experience a medical emergency or severe breathing difficulty, call local emergency services immediately. Do not rely on Respire LYF for emergency medical care.
              </p>
              <div className="mt-6">
                <Link href="/editorial-policy" className="text-[#2894D9] hover:underline font-semibold">
                  Read our full Editorial Policy →
                </Link>
              </div>
            </section>

            {/* Secondary CTAs */}
            <section className="text-center space-y-4 pt-8">
              <h2 className="text-2xl font-bold text-gray-900">Ready to Start Tracking Your Asthma?</h2>
              <p className="text-lg text-gray-600">
                Join thousands of people taking control of their respiratory health
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-[#2894D9] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#217cb8] transition-colors shadow-lg"
                >
                  Get Started Free
                </Link>
                <Link 
                  href="/faqs"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#2894D9] text-[#2894D9] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#2894D9] hover:text-white transition-colors"
                >
                  View FAQs
                </Link>
              </div>
            </section>

            {/* Related Links */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/copd-tracker-app" className="text-[#2894D9] hover:underline font-semibold">
                  COPD Tracker App →
                </Link>
                <Link href="/inhaler-reminder-app" className="text-[#2894D9] hover:underline font-semibold">
                  Inhaler Reminder App →
                </Link>
                <Link href="/inhaler-tracker" className="text-[#2894D9] hover:underline font-semibold">
                  Inhaler Tracker →
                </Link>
                <Link href="/cough-tracker-app" className="text-[#2894D9] hover:underline font-semibold">
                  Cough Tracker App →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
