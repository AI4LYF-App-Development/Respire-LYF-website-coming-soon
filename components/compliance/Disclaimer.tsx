'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'

export default function Disclaimer() {
  
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          
          <ScrollReveal>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Disclaimer
            </h3>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-sm text-gray-700 leading-relaxed">
              The MD-RIC is not FDA-cleared as a medical device. This platform is for informational and educational purposes only. 
              It does not constitute medical advice, diagnosis, or treatment. All correlations represent observational findings from 
              user-generated data—they do not establish causation. Individual responses vary significantly. All health-related 
              decisions should be made in consultation with qualified healthcare professionals.
            </p>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  )
}
