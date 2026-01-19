'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'

export default function HowItWorksSection() {
  
  const steps = [
    {
      number: '1',
      title: 'Track Everything',
      description: 'Automatically monitor 10 health determinants and 5 indicators in one unified platform.',
    },
    {
      number: '2',
      title: 'Connect the Dots',
      description: 'MD-RIC AI analyzes patterns and correlations across all your health data.',
    },
    {
      number: '3',
      title: 'Get Insights',
      description: 'Receive personalized predictions and actionable recommendations for better breathing.',
    },
  ]
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-12 text-center">
              How It Works
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}

