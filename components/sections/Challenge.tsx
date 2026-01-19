'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'

export default function Challenge() {
  
  return (
    <section id="challenge" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              700 Million People. One Unanswered Question.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
              Globally, 700 million people live with chronic respiratory conditions.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
              Despite medications and tracking tools, most still can&apos;t answer:
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="space-y-4 text-2xl md:text-3xl font-semibold text-gray-900 italic">
              <p>&ldquo;Instead, why do I have good days and bad days?&rdquo;</p>
              <p>&ldquo;Why is my breathing so unpredictable?&rdquo;</p>
            </div>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  )
}
