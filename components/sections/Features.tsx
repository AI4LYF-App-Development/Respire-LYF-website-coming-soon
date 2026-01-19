'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import { Check } from 'lucide-react'
import { FEATURES } from '@/lib/constants'

export default function Features() {
  
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-12 text-center">
            Key Features
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {FEATURES.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  )
}
