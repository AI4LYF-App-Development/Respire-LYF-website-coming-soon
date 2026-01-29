import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'

import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata(
  'Terms of Use',
  'Terms of Use for Respire LYF - Read our terms and conditions for using our services. Includes medical disclaimer and user responsibilities.',
  '/terms-of-service'
)

export default function TermsOfService() {
  return (
    <>
      <PageBreadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Terms of Use', url: '/terms-of-service' },
      ]} />
      <div className="min-h-screen relative" style={{ background: 'radial-gradient(circle at center, rgba(80, 167, 226, 0.08) 0%, rgba(255, 255, 255, 1) 75%)' }}>
      {/* Background Radial Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-28">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.14), transparent 50%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 15%, rgba(34,211,238,0.12), transparent 50%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 15% 80%, rgba(125,211,252,0.12), transparent 55%)' }}></div>
      </div>

      <div className="relative z-10">
        <PageHeader />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-24">
          {/* Hero Section */}
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Terms of Use
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Updated</span>
              <span className="text-sm font-bold text-gray-700">
                January 24, 2026
              </span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              By accessing or using the Respire LYF application (&quot;Respire LYF,&quot; &quot;the App,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Use (&quot;Terms&quot;). If you do not agree, you must not use the application.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-12 sm:space-y-16">
            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">1.</span>
                <span>Purpose of the App</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF is an AI-powered respiratory wellness application designed to support users in observing and understanding patterns and trends related to respiratory symptoms and daily behaviors.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The application brings together multiple contextual factors within a unified platform and examines their relationships with user-reported respiratory indicators over time. This approach allows Respire LYF to surface meaningful patterns and contextual associations within a user&apos;s personal data.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF provides informational and supportive insights only. The application does not provide medical advice, diagnoses, treatment recommendations, or health predictions, and is not intended to replace professional medical judgment or care.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">2.</span>
                <span>No Medical Advice</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF is not a medical device and does not provide medical advice.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The app does not diagnose, treat, cure, or prevent disease.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Always consult a qualified healthcare professional for medical decisions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Do not delay or change treatment based on this app.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">3.</span>
                <span>Emergency Use</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF is <strong>not for emergency use</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  If you experience severe breathing difficulty or life-threatening symptoms, <strong>call local emergency services immediately</strong>.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">4.</span>
                <span>AI &amp; Data Limitations</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Respire LYF uses artificial intelligence, user input, wearable data, and environmental information to generate insights. You acknowledge and understand that:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                  <li>AI-generated insights are not definitive or guaranteed.</li>
                  <li>Data may be limited, delayed, inaccurate, or unavailable.</li>
                  <li>Wearable devices and environmental data sources have inherent limitations.</li>
                  <li>Insights are informational only and should not be relied upon for medical decision-making.</li>
                </ul>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">5.</span>
                <span>User Responsibilities</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                  <li>Use the app responsibly and as intended</li>
                  <li>Continue following professional medical advice</li>
                  <li>Not rely on the App for diagnosis, treatment, or emergencies</li>
                </ul>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">6.</span>
                <span>Eligibility</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  You must be <strong>12 years or older</strong> to use Respire LYF.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you are under 18, you may use the App only with the consent and supervision of a parent or legal guardian. The parent or guardian is responsible for the minor&apos;s use of the App and compliance with these Terms.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">7.</span>
                <span>Intellectual Property</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  All content, features, algorithms, designs, and materials within Respire LYF are owned by Respire LYF or its licensors and are protected by intellectual property laws.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You may not copy, modify, distribute, reverse engineer, or misuse any portion of the App without prior written permission.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">8.</span>
                <span>No Guarantees</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF does not guarantee any health outcomes, symptom improvement, or specific results from use of the App.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">9.</span>
                <span>Limitation of Liability</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law, Respire LYF shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of the App or reliance on its content.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">10.</span>
                <span>Termination</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We reserve the right, at our sole discretion, to suspend or terminate your access to Respire LYF if you violate these Terms or misuse the App.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">11.</span>
                <span>Privacy &amp; Data Use</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your use of Respire LYF is also governed by our Privacy Policy, which explains how we collect, use, store, and protect your information, including data from user input, connected devices, and other sources.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  By using Respire LYF, you consent to the data practices described in the Privacy Policy.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">12.</span>
                <span>Governing Law</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of the State of California, United States, without regard to conflict of law principles.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">13.</span>
                <span>Arbitration &amp; No Class Actions</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Any dispute arising out of or relating to Respire LYF shall be resolved exclusively through binding arbitration, except where small-claims court is permitted.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Disputes must be brought individually. You waive the right to participate in class actions or representative proceedings.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">14.</span>
                <span>Updates to These Terms</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We may update these Terms from time to time. Continued use of Respire LYF after changes are posted constitutes acceptance of the updated Terms.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">15.</span>
                <span>Contact</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  If you have any questions about these Terms of Use, please contact us at:
                </p>
                <div className="bg-gradient-to-r from-[#2894D9]/10 to-[#256096]/10 border-l-4 border-[#2894D9] p-6 rounded-r-lg">
                  <p className="text-lg text-gray-800">
                    <strong className="text-gray-900">Email:</strong>{' '}
                    <a href="mailto:contact@aiforlife.ai" className="text-[#2894D9] hover:text-[#217cb8] font-semibold underline">
                    contact@aiforlife.ai
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Final Note */}
            <section className="relative mt-16 pt-8 border-t border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Final Note</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Respire LYF supports awareness — <strong>medical decisions remain between you and your healthcare provider</strong>.
              </p>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200/50 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-[#2894D9] hover:text-[#217cb8] font-semibold text-lg transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>Back to Home</span>
            </Link>
            <Link 
              href="/faqs"
              className="inline-flex items-center gap-2 text-[#2894D9] hover:text-[#217cb8] font-semibold text-lg transition-colors"
            >
              <span>View FAQs</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
