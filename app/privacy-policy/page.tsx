import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'

import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata(
  'Privacy Policy',
  'Privacy Policy for Respire LYF - Learn how we collect, use, and protect your personal information. Understand our commitment to data security and your privacy rights.',
  '/privacy-policy'
)

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                <span>Introduction</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                Welcome to Respire LYF (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">2.</span>
                <span>Information We Collect</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.1 Personal Information</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700">
                    <li>Email address</li>
                    <li>Name (if provided)</li>
                    <li>Contact information</li>
                    <li>Health-related information you choose to share</li>
                    <li>Messages or communications you send to us</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.2 Automatically Collected Information</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">3.</span>
                <span>How We Use Your Information</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 pl-8 sm:pl-12">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-12 sm:pl-16 space-y-3 text-lg text-gray-700">
                <li>To provide, maintain, and improve our services</li>
                <li>To communicate with you about our services, updates, and promotional materials</li>
                <li>To respond to your inquiries, comments, or questions</li>
                <li>To send you newsletters, waitlist updates, and other communications (with your consent)</li>
                <li>To analyze usage patterns and improve user experience</li>
                <li>To detect, prevent, and address technical issues or security threats</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">4.</span>
                <span>Information Sharing and Disclosure</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 pl-8 sm:pl-12">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-12 sm:pl-16 space-y-3 text-lg text-gray-700">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">5.</span>
                <span>Data Security</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">6.</span>
                <span>Your Rights and Choices</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  You have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 mb-6">
                  <li><strong>Access:</strong> You can request access to your personal information</li>
                  <li><strong>Correction:</strong> You can request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> You can request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> You can opt-out of marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> You can request a copy of your data in a portable format</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To exercise these rights, please contact us at <a href="mailto:contact@respirelyf.com" className="text-[#2894D9] hover:text-[#217cb8] font-semibold underline">contact@respirelyf.com</a>.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">7.</span>
                <span>Cookies and Tracking Technologies</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">8.</span>
                <span>Third-Party Links</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">9.</span>
                <span>Children&apos;s Privacy</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">10.</span>
                <span>Changes to This Privacy Policy</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">11.</span>
                <span>Contact Us</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy, please contact us at:
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
