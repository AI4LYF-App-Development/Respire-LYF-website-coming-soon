'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import { ArrowRight } from 'lucide-react'

export default function ScientificEvidence() {
  
  return (
    <section id="evidence" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 text-center">
              Scientific Evidence
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-gray-700 text-center mb-12">
              Published research and clinical validation supporting the MD-RIC approach
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <a
                href="https://your-app-reference-hub-url"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
                Explore Reference Hub
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  )
}
