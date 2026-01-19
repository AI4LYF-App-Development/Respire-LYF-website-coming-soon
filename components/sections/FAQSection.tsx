'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { ChevronDown } from 'lucide-react'

export default function FAQSection() {
  
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const faqs = [
    {
      question: 'How does MD-RIC work?',
      answer: 'MD-RIC (Multi-Determinant Respiratory Intelligence Co-Pilot) automatically tracks 10 health determinants and 5 indicators, then uses AI to identify patterns and correlations that explain your breathing patterns.',
    },
    {
      question: 'Do I need additional hardware?',
      answer: 'No additional hardware is required. RespireLYF works with your existing smartphone and can integrate with smartwatches if you have one.',
    },
    {
      question: 'Is my health data secure?',
      answer: 'Yes, RespireLYF is HIPAA compliant and uses industry-standard encryption to protect your health data. Your privacy and security are our top priorities.',
    },
    {
      question: 'How accurate are the predictions?',
      answer: 'Our AI continuously learns from your data to provide increasingly accurate predictions. The more you use the app, the better it understands your unique breathing patterns.',
    },
    {
      question: 'Can I share data with my doctor?',
      answer: 'Yes, you can export and share your health reports with your healthcare provider to support better treatment decisions.',
    },
  ]
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transition-transform ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}

