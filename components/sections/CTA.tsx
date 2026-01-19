'use client'

import ScrollReveal from '@/components/animations/ScrollReveal'
import { Download } from 'lucide-react'

interface CTAProps {
  onJoinWaitlist: () => void
}

export default function CTA({ onJoinWaitlist }: CTAProps) {
  
  return (
    <section id="cta" className="section-padding bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Transform Your Respiratory Health?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join thousands already discovering...
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={onJoinWaitlist}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Join Waitlist
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-400 transition-colors shadow-lg">
                <Download className="mr-2 w-5 h-5" />
                Download Magazines
              </button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-red-400 font-semibold">Clinical trials in progress</span>
              </div>
              <div className="flex items-center gap-2">
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Expert Backed</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Available on App Store</span>
              </div>
            </div>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  )
}
