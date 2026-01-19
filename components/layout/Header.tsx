'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '@/components/ui/Icon'

const navLinks = [
  { label: 'The Solution', href: '#solution' },
  { label: 'About Us', href: '#about' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
    const sectionGroups = navLinks.map((link) => {
      const base = Array.from(document.querySelectorAll(link.href)) as HTMLElement[]
      const extra =
        link.href === '#solution'
          ? (Array.from(document.querySelectorAll('[data-section="solution"]')) as HTMLElement[])
          : []
      const unique = Array.from(new Set([...base, ...extra])).filter(Boolean) as HTMLElement[]
      return { href: link.href, elements: unique }
    })

    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportPoint = scrollY + 220 // anchor offset to account for sticky header
      let current: string = ''

      sectionGroups.forEach((group) => {
        group.elements.forEach((section) => {
          const rect = section.getBoundingClientRect()
          const top = rect.top + scrollY
          const bottom = top + rect.height
          if (viewportPoint >= top && viewportPoint < bottom) {
            current = group.href
          }
        })
      })

      setActiveHref(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleJoinWaitlist = () => {
    const event = new CustomEvent('openWaitlist')
    window.dispatchEvent(event)
  }

  return (
    <header className="sticky top-6 z-50 w-full bg-transparent">
      <div className="mx-auto mt-4 flex h-16 w-full max-w-7xl items-center justify-between px-4 lg:px-4 rounded-full bg-transparent backdrop-blur-md border border-white/150 shadow-lg shadow-slate-900/20">
        <Link href="/" className="flex items-center gap-2 cursor-pointer group select-none">
          <div className="relative w-9 h-9">
            <Image
              src="/icons/respirelyf_logo.png"
              alt="Respire LYF logo"
              fill
              className="object-contain transition-transform duration-200 group-hover:scale-105"
              sizes="36px"
              priority
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-figma-dark">Respire LYF</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((item) => {
            const isActive = activeHref === item.href
            const inactiveColor = activeHref === '' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className={`relative text-[15px] font-medium transition-all duration-300 ease-out px-4 py-2 rounded-full ${
                  isActive 
                    ? 'text-figma-blue bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg shadow-black/10' 
                    : `${inactiveColor} hover:bg-white/30 hover:backdrop-blur-sm`
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        
        <div className="flex items-center gap-3">
         
          
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isOpen ? 'close' : 'menu'} size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-figma-border bg-gradient-to-br from-white/95 via-slate-50/95 to-blue-50/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((item) => {
              const isActive = activeHref === item.href
              const inactiveColor = activeHref === '' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-[15px] font-medium px-4 py-2 rounded-full transition-all duration-300 ease-out ${
                    isActive 
                      ? 'text-figma-blue bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg shadow-black/10' 
                      : `${inactiveColor} hover:bg-white/30`
                  }`}
                  onClick={() => {
                    setActiveHref(item.href)
                    setIsOpen(false)
                  }}
                >
                  {item.label}
                </Link>
              )
            })}
            <button
              onClick={() => {
                setIsOpen(false)
                handleJoinWaitlist()
              }}
              className="block w-full text-left px-4 py-2 bg-figma-blue text-white rounded-lg hover:bg-figma-hover transition-colors"
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
