'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import { Shield, Star, Users } from 'lucide-react'

export default function TrustBadges() {
  
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">4.8/5 Rating</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-semibold">HIPAA Compliant</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-semibold">Expert Backed</span>
              </div>
            </ScrollReveal>
            
          </div>
        </div>
      </div>
    </section>
  )
}

