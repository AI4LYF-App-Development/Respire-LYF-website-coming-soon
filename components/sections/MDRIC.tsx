'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import { Brain, Target, TrendingUp } from 'lucide-react'

export default function MDRIC() {
  
  const features = [
    {
      icon: Brain,
      title: 'MD-RIC Intelligence',
      description: 'Advanced AI that connects all your health determinants and indicators to reveal personalized breathing patterns.',
    },
    {
      icon: Target,
      title: 'Precision Tracking',
      description: 'Automatically track 10 health determinants and 5 indicators without additional hardware or manual entry.',
    },
    {
      icon: TrendingUp,
      title: 'Wellness Optimization',
      description: 'Get actionable insights and predictions to optimize your respiratory health based on your unique fingerprint.',
    },
  ]
  
  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4 text-center">
              The MD-RIC Framework
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Multi-Determinant Respiratory Intelligence Co-Pilot
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                  <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
          
        </div>
      </div>
    </section>
  )
}

