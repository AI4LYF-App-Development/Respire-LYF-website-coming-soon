import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'

import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata(
  'Privacy Policy',
  'Privacy Policy for Respire LYF - Learn how we collect, use, and protect your personal information. Understand our commitment to data security and your privacy rights.',
  '/privacy-policy'
)

const LAST_UPDATED = 'January 24, 2026'

export default function PrivacyPolicy() {
  return (
    <>
      <PageBreadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'Privacy Policy', url: '/privacy-policy' },
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
              Privacy Policy
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Updated</span>
              <span className="text-sm font-bold text-gray-700">
                {LAST_UPDATED}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-12 sm:space-y-16">
            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">1.</span>
                <span>Introduction &amp; Purpose</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF (&quot;Respire LYF,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and personal data of individuals who access or use our website, mobile application, and related services (collectively, the &quot;Services&quot;).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This Privacy Policy explains in detail how Respire LYF collects, uses, processes, stores, shares, and protects personal data, and the rights available to users under applicable data protection laws.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF is a <strong>wellness, awareness, and informational platform</strong> designed to help users observe patterns related to respiratory symptoms and contextual lifestyle or environmental factors. <strong>Respire LYF does not provide medical advice, diagnosis, treatment, or predictions, and is not a medical device.</strong> The Services are not intended to replace professional medical judgment.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">2.</span>
                <span>Data Controller Identification</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 pl-8 sm:pl-12">
                <strong>AI4LYF is the data controller</strong> for personal data processed through the Respire LYF website and mobile application, as defined under applicable data protection laws.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold pl-8 sm:pl-12 mb-2">Contact details:</p>
              <ul className="list-disc pl-12 sm:pl-16 space-y-2 text-lg text-gray-700">
                <li>Privacy inquiries: <a href="mailto:privacy@aiforlife.ai" className="text-[#2894D9] hover:text-[#217cb8] font-semibold underline">privacy@aiforlife.ai</a></li>
                <li>Data protection contact: <a href="mailto:dpo@aiforlife.ai" className="text-[#2894D9] hover:text-[#217cb8] font-semibold underline">dpo@aiforlife.ai</a></li>
              </ul>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">3.</span>
                <span>Regulatory Framework &amp; Compliance</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 pl-8 sm:pl-12">
                Respire LYF&apos;s data practices are designed to comply with applicable privacy and data protection laws, including where applicable:
              </p>
              <ul className="list-disc pl-12 sm:pl-16 space-y-2 text-lg text-gray-700 mb-4">
                <li>EU General Data Protection Regulation (GDPR)</li>
                <li>UK GDPR and Data Protection Act 2018</li>
                <li>California Consumer Privacy Act (CCPA) / CPRA</li>
                <li>Other applicable U.S. state privacy laws</li>
                <li>General international data protection principles</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                We apply the core principles of lawfulness, fairness, transparency, data minimization, purpose limitation, storage limitation, integrity, confidentiality, and accountability.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">4.</span>
                <span>Scope of This Privacy Policy</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 pl-8 sm:pl-12">
                This Privacy Policy applies to:
              </p>
              <ul className="list-disc pl-12 sm:pl-16 space-y-2 text-lg text-gray-700 mb-4">
                <li>The Respire LYF website</li>
                <li>The Respire LYF mobile application</li>
                <li>User onboarding and account management</li>
                <li>Customer support and communications</li>
                <li>Analytics, research, and system improvement activities</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                This policy does <strong>not</strong> apply to third-party websites, devices, or services that may be linked to or integrated with Respire LYF.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">5.</span>
                <span>Definitions</span>
              </h2>
              <ul className="list-disc pl-12 sm:pl-16 space-y-2 text-lg text-gray-700">
                <li><strong>Personal Data:</strong> Information relating to an identified or identifiable individual.</li>
                <li><strong>Sensitive Personal Data:</strong> Categories of data afforded additional legal protection.</li>
                <li><strong>Anonymised Data:</strong> Data irreversibly processed so individuals cannot be identified.</li>
                <li><strong>Aggregated Data:</strong> Data combined across multiple users without individual identification.</li>
                <li><strong>Processing:</strong> Any operation performed on personal data.</li>
              </ul>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">6.</span>
                <span>Categories of Personal Data Collected</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.1 Data You Provide Voluntarily</h3>
                  <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-4">
                    <li>Email address and authentication credentials</li>
                    <li>Optional profile information</li>
                    <li>Self-reported symptom reflections or wellness inputs</li>
                    <li>Manually entered respiratory metrics</li>
                    <li>Communications with support or feedback channels</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed">Providing this data is voluntary, but certain features may not function without it.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.2 Automatically Collected Technical Data</h3>
                  <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700">
                    <li>IP address (used only for general location inference)</li>
                    <li>Device type, operating system, and app version</li>
                    <li>Browser type (website)</li>
                    <li>Log files, timestamps, crash reports</li>
                    <li>Performance and usage analytics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.3 Respiratory &amp; Contextual Wellness Data</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">If enabled by the user, Respire LYF may process:</p>
                  <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-4">
                    <li>Cough events (frequency, timing, dry/wet classification)</li>
                    <li>Inhaler usage events (timing and detection)</li>
                    <li>Manually entered peak flow or respiratory values</li>
                    <li>Environmental context such as pollen, humidity, temperature, and air quality</li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Audio clarification:</strong> Respire LYF does <strong>not</strong> record, store, or analyze intelligible speech, conversations, or continuous audio. Any signal processing is limited to detecting predefined respiratory-related events.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.4 Data We Do NOT Collect</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">To be explicit, Respire LYF does <strong>not</strong> intentionally collect:</p>
                  <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700">
                    <li>Medical records or physician notes</li>
                    <li>Insurance or employer data</li>
                    <li>Financial account or payment details</li>
                    <li>Precise GPS location data</li>
                    <li>Biometric identifiers (fingerprints, facial scans, voiceprints)</li>
                    <li>Genetic data</li>
                    <li>Data from children (see Section 16)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">7.</span>
                <span>Legal Basis for Processing</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF processes personal data only where permitted by law. Depending on the context, processing is based on one or more of the following legal bases:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-6">
                  <li><strong>Consent</strong>, where you have explicitly provided it</li>
                  <li><strong>Performance of a contract</strong>, where processing is necessary to provide the Services</li>
                  <li><strong>Compliance with legal obligations</strong>, where required by law</li>
                  <li><strong>Legitimate interests</strong>, where processing is necessary to operate, secure, and improve the Services, and where such interests are not overridden by your rights and freedoms</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Consent Management &amp; Withdrawal</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Where processing of personal data is based on consent, Respire LYF obtains such consent through <strong>clear and affirmative user actions</strong>, such as during onboarding flows, in-app prompts, feature-specific settings, or other explicit user controls presented at the time data collection is enabled.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">This applies in particular to:</p>
                <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-4">
                  <li>Optional wellness and respiratory-related data inputs</li>
                  <li>Features involving signal or event detection (including cough or inhaler events)</li>
                  <li>Analytics cookies, where required by applicable law</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  You may <strong>withdraw your consent at any time</strong> by adjusting the relevant settings within the Respire LYF application or by contacting us using the details provided in the <strong>Contact Information</strong> section of this Privacy Policy.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">Upon withdrawal of consent:</p>
                <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-4">
                  <li>We will stop processing the relevant data for the purposes that relied on consent</li>
                  <li>Previously collected data may be deleted or anonymised, unless retention is required for legal, security, or compliance purposes</li>
                  <li>Withdrawal of consent does not affect the lawfulness of processing carried out before the withdrawal</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Please note that withdrawing consent may limit or disable certain features of the Services that rely on such data.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">8.</span>
                <span>Purposes of Processing</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 pl-8 sm:pl-12">We process personal data to:</p>
              <ul className="list-disc pl-12 sm:pl-16 space-y-2 text-lg text-gray-700 mb-4">
                <li>Provide and operate the Services</li>
                <li>Enable pattern observation and awareness</li>
                <li>Improve functionality, stability, and user experience</li>
                <li>Provide customer support</li>
                <li>Maintain security and prevent misuse</li>
                <li>Conduct internal research and development</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                Respire LYF does <strong>not</strong> use personal data to diagnose conditions, predict health outcomes, or recommend treatments.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">9.</span>
                <span>AI, Analytics &amp; Computational Models</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF uses analytical and machine-learning techniques to:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-6">
                  <li>Identify trends and correlations across datasets</li>
                  <li>Improve system performance and reliability</li>
                  <li>Enhance informational insights provided to users</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">AI systems used by Respire LYF:</p>
                <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700">
                  <li>Do not provide medical diagnoses</li>
                  <li>Do not generate medical predictions</li>
                  <li>Do not replace healthcare professionals</li>
                  <li>Do not store individual identities within models</li>
                </ul>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">10.</span>
                <span>Use of Anonymised Data for Research &amp; Model Improvement</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF may transform personal data into <strong>anonymised and aggregated data</strong> using irreversible technical processes. Once anonymised, such data can no longer be used to identify individuals.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">We may use anonymised and aggregated data for:</p>
                <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-4">
                  <li>Internal research and analysis</li>
                  <li>Product development and innovation</li>
                  <li>Machine-learning model training and evaluation</li>
                  <li>System performance optimization</li>
                  <li>Statistical and scientific analysis</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This data cannot reasonably be re-identified and may be retained long-term for research and improvement purposes.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">11.</span>
                <span>Data Sharing &amp; Disclosure</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 pl-8 sm:pl-12">We may share personal data with:</p>
              <ul className="list-disc pl-12 sm:pl-16 space-y-2 text-lg text-gray-700 mb-4">
                <li>Cloud hosting and infrastructure providers</li>
                <li>Analytics, monitoring, and support service providers</li>
                <li>Legal or regulatory authorities when required by law</li>
                <li>Successor entities in the event of a merger, acquisition, or restructuring</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                We <strong>do not sell personal data</strong>, and we do not allow advertisers access to respiratory or wellness data.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">12.</span>
                <span>International Data Transfers</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Personal data may be processed outside your country of residence. Where required, appropriate safeguards are applied in accordance with applicable data protection laws.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Where required under law, Respire LYF will appoint an authorized representative in the European Union or United Kingdom in accordance with Article 27 of the GDPR.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">13.</span>
                <span>Data Retention</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including providing the Services, ensuring security, complying with legal obligations, and resolving disputes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Retention periods vary depending on the type of data, its purpose, and applicable legal or regulatory requirements. We periodically review stored data and delete or anonymise it when it is no longer required.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Account-related personal data is generally retained for as long as an account remains active. If an account is deleted by the user, associated personal data is deleted or anonymised within a reasonable period, unless retention is required for legal, security, or compliance purposes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In some cases, data may be deleted or anonymised following extended periods of inactivity, subject to operational and legal requirements. Retention decisions are based on factors such as data type, purpose of processing, user activity, and applicable legal obligations.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">14.</span>
                <span>User Rights &amp; Choices</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Depending on your jurisdiction, you may have certain rights regarding your personal data under applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA/CPRA).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">These rights may include the right to:</p>
                <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-6">
                  <li><strong>Access</strong> the personal data we hold about you</li>
                  <li><strong>Correct or update</strong> inaccurate or incomplete personal data</li>
                  <li><strong>Request deletion</strong> of your personal data, subject to legal and operational limitations</li>
                  <li><strong>Withdraw consent</strong> at any time where processing is based on consent</li>
                  <li><strong>Object to or restrict processing</strong> in certain circumstances</li>
                  <li><strong>Request data portability</strong>, where applicable, by receiving your data in a structured, commonly used format</li>
                  <li><strong>Opt out of certain data uses</strong>, where required by law</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  You may exercise your rights by contacting us using the details provided in the <strong>Contact Information</strong> section of this Privacy Policy. We may need to verify your identity before processing your request.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We will respond to valid requests within the timeframes required by applicable law.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  If you believe that your personal data has been processed unlawfully, you may also have the right to lodge a complaint with a relevant data protection authority.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">14.1 Exercising Your Rights – Process &amp; Timing</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">When you contact us to exercise your privacy rights:</p>
                <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700">
                  <li><strong>Response timeframe:</strong> We aim to respond to verified requests within <strong>30 days</strong>, or within the timeframe required by applicable law. Where permitted, this period may be extended if the request is complex or involves multiple data sets, and you will be informed of any extension.</li>
                  <li><strong>Identity verification:</strong> To protect your privacy and security, we may need to <strong>verify your identity</strong> before processing certain requests. Verification methods may include confirming account access, email ownership, or other reasonable checks appropriate to the nature of the request.</li>
                  <li><strong>Fees:</strong> Requests to exercise your privacy rights are <strong>free of charge</strong> in most cases. We may charge a reasonable fee or decline to act on a request only where permitted by law, such as for requests that are manifestly unfounded, excessive, or repetitive.</li>
                </ul>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">15.</span>
                <span>Data Security</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">We implement reasonable technical and organizational safeguards, including:</p>
                <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-6">
                  <li>Encryption in transit</li>
                  <li>Access controls and role-based permissions</li>
                  <li>Secure infrastructure and monitoring</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">No system can be guaranteed to be completely secure.</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">15.1 California Privacy Rights</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  If you are a California resident, you have specific rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act (CCPA/CPRA).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">Subject to applicable exceptions, these rights include:</p>
                <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700 mb-4">
                  <li><strong>Right to Know:</strong> The right to request information about the categories and specific pieces of personal data we collect, use, disclose, or retain about you, as well as the purposes for such processing.</li>
                  <li><strong>Right to Delete:</strong> The right to request deletion of personal data we have collected about you, subject to legal and operational limitations.</li>
                  <li><strong>Right to Correct:</strong> The right to request correction of inaccurate personal data.</li>
                  <li><strong>Right to Opt Out of Sale or Sharing:</strong> The right to opt out of the sale or sharing of personal data for cross-context behavioral advertising. <em>Respire LYF does not sell personal data and does not share personal data for targeted advertising.</em></li>
                  <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> The right to limit the use and disclosure of sensitive personal information to purposes permitted by law. <em>Respire LYF uses sensitive wellness-related data only to provide and operate the Services and does not use such data for advertising or profiling.</em></li>
                  <li><strong>Right to Non-Discrimination:</strong> The right not to receive discriminatory treatment for exercising your privacy rights.</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You may exercise your California privacy rights by contacting us using the details provided in the <strong>Contact Information</strong> section. We may need to verify your identity before processing your request.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">16.</span>
                <span>Children&apos;s Privacy</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                Respire LYF is not intended for children under the age of <strong>13</strong>, or under the age of <strong>16 where required by applicable local law</strong>. We do not knowingly collect personal data from children. If such data is identified, it will be deleted.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">17.</span>
                <span>Cookies &amp; Tracking Technologies</span>
              </h2>
              <div className="pl-8 sm:pl-12 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF uses cookies and similar technologies on its website to ensure basic functionality and to understand how visitors interact with the site. Cookies are small text files stored on your device when you visit a website.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cookies are <strong>not used to collect respiratory or health-related data</strong>, and analytics data collected through cookies is not used for medical, diagnostic, or treatment purposes.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">17.1 Essential Cookies</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We use <strong>essential cookies</strong> that are necessary for the website to function securely and correctly. These cookies support core features such as page navigation, security protections, session handling, and form submissions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-2">Essential cookies:</p>
                <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-4">
                  <li>Are required for the operation of the website</li>
                  <li>Do not collect personal health information</li>
                  <li>Are not used for analytics or advertising</li>
                  <li>Do not track users across websites</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Because these cookies are required for functionality, they cannot be disabled through our systems. Blocking them via browser settings may affect how the website functions.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">17.2 Analytics Cookies (Optional)</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  With your consent, Respire LYF uses <strong>Google Analytics 4, including Firebase Analytics</strong>, to collect aggregated and anonymised information about website usage, such as page views, navigation patterns, and interaction events.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-2">Analytics cookies:</p>
                <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700 mb-6">
                  <li>Are used only to understand and improve website performance and user experience</li>
                  <li>Are not used for advertising, profiling, or health-related analysis</li>
                  <li>Are used only where permitted by law and, where required, only after user consent</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">17.3 Cookie Settings &amp; Managing Preferences</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  You can manage your cookie preferences at any time.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Where required by applicable law, Respire LYF provides a cookie consent mechanism that allows you to accept or reject analytics cookies and to change or withdraw your preferences at any time.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  You may also manage cookies through your browser settings, including blocking or deleting cookies. Please note that disabling essential cookies through browser controls may affect the proper functioning of the website.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">17.4 Google Analytics Opt-Out</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You may opt out of Google Analytics tracking by installing Google&apos;s opt-out browser add-on:{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#2894D9] hover:text-[#217cb8] font-semibold underline">
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">18.</span>
                <span>Third-Party Services</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                Third-party services operate under their own privacy policies. Respire LYF is not responsible for their data practices.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">19.</span>
                <span>Limitations &amp; Disclaimers</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 pl-8 sm:pl-12">Respire LYF:</p>
              <ul className="list-disc pl-12 sm:pl-16 space-y-2 text-lg text-gray-700">
                <li>Is not a medical device</li>
                <li>Does not provide medical advice</li>
                <li>Does not guarantee health outcomes</li>
                <li>Provides informational insights only</li>
              </ul>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">20.</span>
                <span>Changes to This Policy</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed pl-8 sm:pl-12">
                We may update this Privacy Policy periodically. Material changes will be communicated through the website, app, or other appropriate channels.
              </p>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-[#2894D9] text-2xl sm:text-3xl font-black">21.</span>
                <span>Contact Information</span>
              </h2>
              <div className="pl-8 sm:pl-12">
                <div className="bg-gradient-to-r from-[#2894D9]/10 to-[#256096]/10 border-l-4 border-[#2894D9] p-6 rounded-r-lg space-y-2">
                  <p className="text-lg text-gray-800">
                    <strong className="text-gray-900">Privacy inquiries:</strong>{' '}
                    <a href="mailto:privacy@aiforlife.ai" className="text-[#2894D9] hover:text-[#217cb8] font-semibold underline">
                      privacy@aiforlife.ai
                    </a>
                  </p>
                  <p className="text-lg text-gray-800">
                    <strong className="text-gray-900">Data protection contact:</strong>{' '}
                    <a href="mailto:dpo@aiforlife.ai" className="text-[#2894D9] hover:text-[#217cb8] font-semibold underline">
                      dpo@aiforlife.ai
                    </a>
                  </p>
                </div>
              </div>
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
              href="/terms-of-service"
              className="inline-flex items-center gap-2 text-[#2894D9] hover:text-[#217cb8] font-semibold text-lg transition-colors"
            >
              <span>Terms of Service</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
