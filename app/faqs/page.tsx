import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/layout/PageHeader'
import PageBreadcrumbs from '@/components/seo/PageBreadcrumbs'
import FAQSchema from '@/components/seo/FAQSchema'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata(
  'FAQs',
  'Frequently Asked Questions about Respire LYF - Learn about our respiratory wellness application, how it works, and what you should know before using it.',
  '/faqs'
)

export default function FAQs() {
  // Extract FAQs for schema
  const faqs = [
    {
      question: 'What is Respire LYF meant to help me with?',
      answer: 'Respire LYF helps you identify patterns and trends in your respiratory symptoms over time by bringing together information from different aspects of your daily life. Viewing these factors together allows Respire LYF to surface correlations that may be difficult to notice when data is considered in isolation. Respire LYF is designed to support awareness and understanding of your personal data. It does not provide medical advice or replace professional medical decision-making.',
    },
    {
      question: 'What exactly should I use Respire LYF for — and what should I not use it for?',
      answer: 'Use Respire LYF to reflect on symptom trends, explore how changes in daily context relate to those trends, and prepare more informed questions for discussions with your healthcare provider. The app supports an ongoing feedback process focused on observation and understanding, rather than intervention. Do not use Respire LYF for diagnosis, treatment decisions, medical advice, or emergencies. Always rely on qualified healthcare professionals for medical care.',
    },
    {
      question: 'What does Respire LYF mean by a "pattern" or "trend"?',
      answer: 'A pattern or trend shows repeated associations over time, not a medical conclusion. These insights are meant to support reflection, not explain causes or predict outcomes.',
    },
    {
      question: 'Why might Respire LYF show something different from how I feel today?',
      answer: 'Respire LYF looks at longer-term trends, while how you feel can change from day to day. Both perspectives are valid and may not always align at a given moment. In addition to daily inputs, Respire LYF considers historical patterns and notable changes over time, helping place individual days within a broader context.',
    },
    {
      question: 'Can Respire LYF ever be wrong or limited?',
      answer: 'Yes. Insights depend on available data, which may be limited, delayed, or inaccurate. They should be viewed as supportive information, not definitive answers.',
    },
    {
      question: 'Should I change anything immediately based on what the app shows?',
      answer: 'No. Respire LYF does not recommend changes to treatment, medication, or care plans. Any health decisions should be made with a qualified healthcare professional.',
    },
    {
      question: 'What should I do if an insight makes me worried or confused?',
      answer: 'Take a pause and avoid jumping to conclusions. If concerns persist, discuss them with a healthcare professional.',
    },
    {
      question: 'Can Respire LYF help during an asthma attack or breathing emergency?',
      answer: 'No. Respire LYF is not for emergency use. If you experience severe breathing difficulty or a medical emergency, call local emergency services immediately.',
    },
    {
      question: 'What if my symptoms suddenly get worse while using the app?',
      answer: 'Worsening symptoms should always be taken seriously. Seek medical care promptly, regardless of what the app shows.',
    },
    {
      question: 'How does Respire LYF decide what insights to show me?',
      answer: 'Respire LYF uses AI to look for patterns and associations in your data. It does not understand your full medical history or make clinical judgments.',
    },
    {
      question: 'Does Respire LYF know my full medical history?',
      answer: 'No. Respire LYF only uses information you choose to share and supported data sources. It does not automatically access your medical records.',
    },
    {
      question: 'Does Respire LYF learn or change over time?',
      answer: 'Insights may adapt as more data becomes available. This does not replace personalized medical care or professional judgment.',
    },
    {
      question: 'What if I forget to log symptoms or don\'t use the app every day?',
      answer: 'That\'s completely okay. Respire LYF is designed to work with real-world, imperfect use.',
    },
    {
      question: 'What if my wearable or environmental data seems inaccurate?',
      answer: 'Wearables and environmental data have limitations. Use them as context, not facts, and rely on professional advice for decisions.',
    },
    {
      question: 'Do I need perfect or complete data for Respire LYF to be useful?',
      answer: 'No. Respire LYF is designed for everyday use, not precision tracking. Its role is to support awareness, not require perfection.',
    },
    {
      question: 'Is Respire LYF a medical device?',
      answer: 'No. Respire LYF is not a medical device and does not provide medical advice.',
    },
    {
      question: 'How should I use Respire LYF alongside my doctor\'s advice?',
      answer: 'Use Respire LYF to notice trends and organize questions. Medical decisions should always be made with your healthcare provider.',
    },
    {
      question: 'How do I connect my Apple Watch to Respire LYF?',
      answer: 'Follow the step-by-step guide in the app to connect your Apple Watch and install the Respire LYF Watch app. This will enable automatic tracking of your inhaler use and cough detection.',
    },
    {
      question: 'What\'s the difference between "My Plan" and "My Care Plan"?',
      answer: '"My Plan" shows what is due today. It\'s a daily view that brings together everything you need to do for the current day. "My Care Plan" shows how things are scheduled over time, reflecting the routines and schedules you\'ve set up.',
    },
    {
      question: 'What does it mean when the app says "Your personalized care plan is ready"?',
      answer: 'It means the LYF Hub has personalized supplement suggestions based on the symptoms and health profile you\'ve shared, using categorization approaches informed by peer-reviewed research. This personalization helps surface relevant supplements and is not medical advice or treatment guidance.',
    },
  ]

  return (
    <>
      <PageBreadcrumbs items={[
        { name: 'Home', url: '/' },
        { name: 'FAQs', url: '/faqs' },
      ]} />
      <FAQSchema faqs={faqs} />
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
              FAQs
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Frequently Asked Questions about Respire LYF
            </p>
          </div>

          {/* FAQs Content */}
          <div className="prose prose-slate max-w-none space-y-12 sm:space-y-16">
            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                1. What is Respire LYF meant to help me with?
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF helps you identify patterns and trends in your respiratory symptoms over time by bringing together information from different aspects of your daily life. Viewing these factors together allows Respire LYF to surface correlations that may be difficult to notice when data is considered in isolation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF is designed to support awareness and understanding of your personal data. It does not provide medical advice or replace professional medical decision-making.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                2. What exactly should I use Respire LYF for — and what should I not use it for?
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Use Respire LYF to reflect on symptom trends, explore how changes in daily context relate to those trends, and prepare more informed questions for discussions with your healthcare provider. The app supports an ongoing feedback process focused on observation and understanding, rather than intervention.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Do not use Respire LYF for diagnosis, treatment decisions, medical advice, or emergencies. Always rely on qualified healthcare professionals for medical care.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                3. What does Respire LYF mean by a &quot;pattern&quot; or &quot;trend&quot;?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A pattern or trend shows repeated associations over time, not a medical conclusion.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  These insights are meant to support reflection, not explain causes or predict outcomes.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                4. Why might Respire LYF show something different from how I feel today?
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF looks at longer-term trends, while how you feel can change from day to day. Both perspectives are valid and may not always align at a given moment.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In addition to daily inputs, Respire LYF considers historical patterns and notable changes over time, helping place individual days within a broader context. This can highlight when usual patterns are disrupted or when recent experiences differ from longer-term trends, even if those differences are not immediately noticeable.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                5. Can Respire LYF ever be wrong or limited?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Yes. Insights depend on available data, which may be limited, delayed, or inaccurate.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  They should be viewed as supportive information, not definitive answers.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                6. Should I change anything immediately based on what the app shows?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  No. Respire LYF does not recommend changes to treatment, medication, or care plans.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Any health decisions should be made with a qualified healthcare professional.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                7. What should I do if an insight makes me worried or confused?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Take a pause and avoid jumping to conclusions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  If concerns persist, discuss them with a healthcare professional.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                8. Can Respire LYF help during an asthma attack or breathing emergency?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  No. Respire LYF is not for emergency use.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  If you experience severe breathing difficulty or a medical emergency, call local emergency services immediately.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                9. What if my symptoms suddenly get worse while using the app?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Worsening symptoms should always be taken seriously.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Seek medical care promptly, regardless of what the app shows.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                10. How does Respire LYF decide what insights to show me?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Respire LYF uses AI to look for patterns and associations in your data.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  It does not understand your full medical history or make clinical judgments.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                11. Does Respire LYF know my full medical history?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  No. Respire LYF only uses information you choose to share and supported data sources.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  It does not automatically access your medical records.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                12. Does Respire LYF learn or change over time?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Insights may adapt as more data becomes available.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  This does not replace personalized medical care or professional judgment.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                13. What if I forget to log symptoms or don&apos;t use the app every day?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  That&apos;s completely okay.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Respire LYF is designed to work with real-world, imperfect use.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                14. What if my wearable or environmental data seems inaccurate?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wearables and environmental data have limitations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Use them as context, not facts, and rely on professional advice for decisions.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                15. Do I need perfect or complete data for Respire LYF to be useful?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  No. Respire LYF is designed for everyday use, not precision tracking.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Its role is to support awareness, not require perfection.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                16. Is Respire LYF a medical device?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  No. Respire LYF is not a medical device and does not provide medical advice.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                17. How should I use Respire LYF alongside my doctor&apos;s advice?
              </h3>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Use Respire LYF to notice trends and organize questions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Medical decisions should always be made with your healthcare provider.
                </p>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                18. How do I connect my Apple Watch to Respire LYF?
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Follow this step-by-step guide to connect your Apple Watch and install the Respire LYF Watch app. This will enable automatic tracking of your inhaler use and cough detection.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-2">Step 1: Pair Your Apple Watch</p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Hold your Apple Watch near your iPhone and follow the on-screen instructions to pair.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-2">Step 2: Install Watch App</p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Open the Watch app on your iPhone, scroll to &apos;Available Apps&apos;, and tap &apos;Install&apos; next to Respire LYF Watch.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-2">Step 3: Open on Both Devices</p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Open Respire LYF on both your iPhone and Apple Watch. The watch icon should turn green when connected.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 mb-2">Step 4: Start Tracking</p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      On your Apple Watch, tap &apos;Inhaler Use&apos; or &apos;Cough Tracker&apos; to begin automatic monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                19. What&apos;s the difference between &quot;My Plan&quot; and &quot;My Care Plan&quot;?
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-bold text-gray-900 mb-2">&quot;My Plan&quot;</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    shows what is due today. It&apos;s a daily view that brings together everything you need to do for the current day, based on your schedules and settings.
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900 mb-2">&quot;My Care Plan&quot;</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    shows how things are scheduled over time. It reflects the routines, schedules, and plans you&apos;ve set up to repeat across multiple days.
                  </p>
                </div>
              </div>
            </section>

            <section className="relative">
              <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2894D9] to-[#256096] rounded-full opacity-20"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                20. What does it mean when the app says &quot;Your personalized care plan is ready&quot;?
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  It means the LYF Hub has personalized the supplement suggestions based on the symptoms and health profile you&apos;ve shared, using categorization approaches informed by peer-reviewed research on symptom-based wellness support.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This personalization helps surface relevant supplements and is not medical advice or treatment guidance.
                </p>
              </div>
            </section>

            {/* Final Reassurance */}
            <section className="relative mt-16 pt-8 border-t border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Final Reassurance</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Respire LYF is here to help you understand your patterns, not to tell you what to do.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                You remain in control of your health decisions.
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
              href="/terms-of-service"
              className="inline-flex items-center gap-2 text-[#2894D9] hover:text-[#217cb8] font-semibold text-lg transition-colors"
            >
              <span>View Terms of Use</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
