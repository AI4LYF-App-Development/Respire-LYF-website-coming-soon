'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import WaitlistModal from '@/components/modals/WaitlistModal'

export default function PageHeader() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <>
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 flex items-center justify-between relative z-30">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image
              src="/icons/respirelyf_logo.png"
              alt="Respire LYF logo"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 40px, 48px"
              priority
            />
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-charcoal font-display">
            <span style={{ color: '#2894D9' }}>Respire</span> <span style={{ color: '#256096' }}>LYF</span>
          </h2>
        </Link>
        <div className="flex items-center gap-4 sm:gap-8">
          <button 
            onClick={() => setIsWaitlistOpen(true)}
            className="bg-primary hover:bg-[#4296d1] text-white text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all shadow-lg shadow-primary/20 border border-white/30 hover:border-white/50"
          >
            Join Waitlist
          </button>
        </div>
      </header>
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  )
}
