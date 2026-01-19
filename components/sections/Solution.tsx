'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'

export default function Solution() {
  
  return (
    <section id="solution" data-section="solution" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Your Breathing Story Goes Deeper
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Explore comprehensive educational materials that may affect your breathing.
            </p>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  )
}
