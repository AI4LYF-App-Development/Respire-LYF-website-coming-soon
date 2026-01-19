'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import { Check } from 'lucide-react'

export default function BenefitsSection() {
  
  const patientBenefits = [
    'Understand why your breathing changes day to day',
    'Predict and prevent bad breathing days',
    'See which treatments and lifestyle changes actually work',
    'Get personalized insights without extra hardware',
  ]
  
  const clinicalBenefits = [
    'Comprehensive patient data in one place',
    'Evidence-based insights for treatment decisions',
    'Better patient engagement and adherence',
    'Reduced emergency visits through proactive care',
  ]
  
  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-12 text-center">
              Benefits for Patients & Clinicians
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  For Patients
                </h3>
                <ul className="space-y-4">
                  {patientBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  For Clinicians
                </h3>
                <ul className="space-y-4">
                  {clinicalBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            
          </div>
          
        </div>
      </div>
    </section>
  )
}

