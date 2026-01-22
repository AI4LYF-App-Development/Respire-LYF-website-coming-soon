import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'

import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata(
  'Terms of Service',
  'Terms of Service for Respire LYF - Read our terms and conditions for using our services. Includes medical disclaimer and user responsibilities.',
  '/terms-of-service'
)

export default function TermsOfService() {
  return (
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
              Terms of Service
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Updated</span>
              <span className="text-sm font-bold text-gray-700">
                {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-12 sm:space-y-16">
            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">1.</span>
                <span>Acceptance of Terms</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                By accessing and using the Respire LYF website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">2.</span>
                <span>Use License</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 pl-8 sm:pl-12">
                Permission is granted to temporarily access the materials on Respire LYF&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-12 sm:pl-16 space-y-3 text-lg text-gray-700">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">3.</span>
                <span>Medical Disclaimer</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-6">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    <strong className="text-amber-700">IMPORTANT:</strong> The information provided by Respire LYF is for informational and educational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                <li>Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition</li>
                <li>Never disregard professional medical advice or delay in seeking it because of something you have read on our website</li>
                <li>If you think you may have a medical emergency, call your doctor or emergency services immediately</li>
                <li>Respire LYF does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the website</li>
                </ul>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">4.</span>
                <span>User Accounts and Registration</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 pl-8 sm:pl-12">
                When you create an account or register for our services, you agree to:
              </p>
              <ul className="list-disc pl-12 sm:pl-16 space-y-3 text-lg text-gray-700">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your information to keep it accurate</li>
                <li>Maintain the security of your password and identification</li>
                <li>Accept all responsibility for activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">5.</span>
                <span>User Conduct</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 pl-8 sm:pl-12">
                You agree not to use the service to:
              </p>
              <ul className="list-disc pl-12 sm:pl-16 space-y-3 text-lg text-gray-700">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful, offensive, or illegal content</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Attempt to gain unauthorized access to any portion of the service</li>
                <li>Collect or store personal data about other users</li>
                <li>Use automated systems to access the service without permission</li>
              </ul>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">6.</span>
                <span>Intellectual Property Rights</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                All content, features, and functionality of the Respire LYF website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of Respire LYF or its content suppliers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">7.</span>
                <span>Privacy Policy</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs your use of the website, to understand our practices. You can find our Privacy Policy at <Link href="/privacy-policy" className="text-[#2894D9] hover:underline font-semibold">/privacy-policy</Link>.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">8.</span>
                <span>Limitation of Liability</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 pl-8 sm:pl-12">
                In no event shall Respire LYF, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-12 sm:pl-16 space-y-3 text-lg text-gray-700">
                <li>Your use or inability to use the service</li>
                <li>Any conduct or content of third parties on the service</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from the service</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the service</li>
              </ul>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">9.</span>
                <span>Disclaimer of Warranties</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, Respire LYF excludes all representations, warranties, conditions, and terms relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose, and/or the use of reasonable care and skill).
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">10.</span>
                <span>Indemnification</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                You agree to defend, indemnify, and hold harmless Respire LYF and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s fees), resulting from or arising out of your use and access of the service, or a breach of these Terms.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">11.</span>
                <span>Termination</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms. If you wish to terminate your account, you may simply discontinue using the service.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">12.</span>
                <span>Governing Law</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which Respire LYF operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">13.</span>
                <span>Changes to Terms</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">14.</span>
                <span>Contact Information</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gradient-to-r from-[#2894D9]/10 to-[#256096]/10 border-l-4 border-[#2894D9] p-6 rounded-r-lg">
                  <p className="text-lg text-gray-800">
                    <strong className="text-gray-900">Email:</strong>{' '}
                    <a href="mailto:contact@respirelyf.com" className="text-[#2894D9] hover:text-[#217cb8] font-semibold underline">
                      contact@respirelyf.com
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200/50">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-[#2894D9] hover:text-[#217cb8] font-semibold text-lg transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
