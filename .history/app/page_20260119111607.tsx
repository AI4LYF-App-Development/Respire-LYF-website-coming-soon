'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/sections/Hero'
import Determinants from '@/components/sections/Determinants'
import BreathingStory from '@/components/sections/BreathingStory'
import WaitlistModal from '@/components/modals/WaitlistModal'
import GlobalCardReveal from '@/components/animations/GlobalCardReveal'

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
      <GlobalCardReveal />
      <Hero onJoinWaitlist={() => {
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
