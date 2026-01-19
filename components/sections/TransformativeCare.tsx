'use client'

import Icon from '@/components/ui/Icon'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Image from 'next/image'
import { Download } from 'lucide-react'

interface TransformativeCareProps {
  onJoinWaitlist: () => void
}

export default function TransformativeCare({ onJoinWaitlist }: TransformativeCareProps) {
  const cards = [
    {
      iconImage: '/icons/mdric-icon.png',
      title: 'MD-RIC Intelligence',
      description: 'Daily MEEPs learn your unique patterns, weekly insights reveal your strongest health connections, and monthly reports give you real talking points for doctor visits—all tailored to your personal data.',
      image: '/icons/brain_intellegence.png',
    },
    {
      iconImage: '/icons/watch_icon.svg',
      title: 'Precision Tracking',
      description: 'Advanced detection captures coughs, seamlessly tracks inhaler use through your existing smartwatch, and alerts you to technique issues in real-time—no extra devices needed.',
      image: '/icons/precison-tracking.jpg',
    },
    {
      iconImage: '/images/determinants/supplement.png',
      title: 'Wellness Optimization',
      description: 'Get supplement recommendations based on your specific patterns, discover respiratory-friendly food choices, and access expert educational content designed for asthma and COPD management.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAiVQAIze1D_OJrRSCyPHJJK2ch80Y8ZOwLa_OyWUeQz2DvvAKx7P-Kgf8f0UwDei7TarelC5pOQUDdgGOSZsDxmQSps5q1aWMKKf1vXk6LwI0OKT_K7N3EnsZN1ZSaPe--qA2xU637P-hYfyqMs936hTaETzvJ0Qe7RXPe6Gc2BTFyfLyIPG3fIfTG6-NePyyHUTAGfWu0aKiNG7-gMy0siIt91j7sbRa3ScgdmG6mvquWgDG3RkTo6m-xHLFgr2j_GsCeO2NId8',
    },
  ]

  const trustBadges = [
    'Peer-reviewed research foundation',
    'HIPAA-secure data protection',
    'Healthcare provider trusted',
  ]

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 h-full w-full [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Personalized Respiratory Intelligence</span>
          </span>
          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight text-[#111418] sm:text-5xl lg:text-6xl">
            Experience Transformative <span className="text-primary">Respiratory Care</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            The groundbreaking technology that turns your daily choices into a crystal-clear breathing roadmap.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 0.12} direction="up">
              <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/50 bg-white/60 p-1 shadow-figma transition-all duration-300 hover:-translate-y-2 hover:shadow-figma-hover glass-card glass-panel card-interact">
                <div className="relative h-56 w-full overflow-hidden rounded-xl bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index === 0}
                  />
                  <div className="absolute top-4 left-4 z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 shadow-md shadow-primary/15 border border-primary/25 ring-2 ring-primary/10 backdrop-blur-sm">
                    {card.iconImage ? (
                      <Image
                        src={card.iconImage}
                        alt={card.title}
                        width={card.iconImage.includes('lyfhub_icon') ? 42 : 38}
                        height={card.iconImage.includes('lyfhub_icon') ? 42 : 38}
                        className={`object-contain ${card.iconImage.includes('lyfhub_icon') ? 'w-11 h-11' : 'w-10 h-10'}`}
                      />
                    ) : (
                      <Icon name="help" size={24} className="text-primary" />
                    )}
              </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl font-bold text-[#111418] group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {card.description}
              </p>
                
                </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-12 rounded-3xl border border-white/60 bg-gradient-to-br from-white/80 to-blue-50/50 p-8 shadow-sm backdrop-blur-sm sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl" />
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-3xl font-extrabold tracking-tight text-[#111418] sm:text-4xl max-w-2xl text-center">
            Ready to transform your respiratory health?
          </h3>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 text-center">
            Join thousands already discovering their personal respiratory fingerprint through intelligent health monitoring.
          </p>
            <div className="mt-8 flex flex-col w-full sm:w-auto sm:flex-row justify-center gap-4">
            <button
              onClick={onJoinWaitlist}
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white transition-all bg-primary rounded-xl shadow-lg hover:bg-primary-hover hover:shadow-primary/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Join Waitlist
            </button>
              <button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-gray-700 transition-all bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 gap-2">
              Download Magazines
                <Download size={18} className="text-gray-700" />
            </button>
          </div>
            <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-y-3 gap-x-8 pt-6 sm:pt-8">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-primary shrink-0">
                    <Icon name="check" size={14} />
                  </div>
                  <span className="text-sm font-medium text-gray-600 whitespace-nowrap">{badge}</span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
