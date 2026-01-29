'use client'

import { useState, useEffect } from 'react'
import WhatIfQuestionsSlider from '@/components/sections/WhatIfQuestionsSlider'
import Determinants from '@/components/sections/Determinants'
import WaitlistModal from '@/components/modals/WaitlistModal'
import GlobalCardReveal from '@/components/animations/GlobalCardReveal'
import SEOContent from '@/components/seo/SEOContent'
import { trackButtonClick } from '@/lib/analytics'

export default function HomePage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [waitlistEmail, setWaitlistEmail] = useState<string | undefined>(undefined)
  const [forceSubmitted, setForceSubmitted] = useState(false)
  
  useEffect(() => {
    const handleOpenWaitlist = (event?: CustomEvent) => {
      const incomingEmail = event?.detail?.email as string | undefined
      setWaitlistEmail(incomingEmail)
      setForceSubmitted(!!incomingEmail)
      setIsWaitlistOpen(true)
    }
    
    window.addEventListener('openWaitlist', handleOpenWaitlist as EventListener)
    
    return () => {
      window.removeEventListener('openWaitlist', handleOpenWaitlist as EventListener)
    }
  }, [])
  
  return (
    <main className="min-h-screen">
      <SEOContent />
      <GlobalCardReveal />
      <WhatIfQuestionsSlider onJoinWaitlist={() => {
        trackButtonClick('Join Waitlist', 'hero_section')
        setForceSubmitted(false)
        setWaitlistEmail(undefined)
        setIsWaitlistOpen(true)
      }} />
      <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <Determinants />
      </div>
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        prefillEmail={waitlistEmail}
        forceSubmitted={forceSubmitted}
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </main>
  )
}
