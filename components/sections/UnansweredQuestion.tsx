'use client'

import Image from 'next/image'
import Icon from '@/components/ui/Icon'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function UnansweredQuestion() {
  return (
    <section id="challenge" className="relative w-full min-h-screen flex items-center justify-center pt-5 pb-5 px-6 md:px-12 lg:px-24 border-t border-gray-200/50">
      
      <div className="relative z-10 w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <ScrollReveal delay={0} direction="up" className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">GLOBAL HEALTH CRISIS</span>
          </div>
          
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-primary dark:text-sky-400">
              700 Million <br className="hidden md:block"/> People.
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#131118] dark:text-white tracking-tight leading-[1.1]">
              One Unanswered Question.
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl font-medium">
            Globally, <span className="font-bold text-[#131118] dark:text-white">700 million people</span> live with chronic respiratory conditions. Despite medications and tracking tools, most still can&apos;t answer the most critical question affecting their daily lives.
          </p>
          
          <div className="mt-4 p-6 rounded-xl bg-white dark:bg-surface-dark border-l-4 border-primary shadow-figma-panel relative overflow-hidden group">
            <div className="absolute top-4 left-4 opacity-10 text-primary dark:text-white pointer-events-none">
              <Icon name="format_quote" size={64} className="text-primary dark:text-white opacity-10" />
            </div>
            <p className="relative z-10 text-xl font-semibold italic text-[#131118] dark:text-white group-hover:text-primary transition-colors duration-300">
              &ldquo;Why is my breathing so unpredictable?&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Edba4uzahHxI68YE-y15vOlxO-LIQtMQkLWEYxSG0yHK2r8QmuJYIDGiTaMZstakmDOI1zD3vtvPAm3hH_3mp1_88MaY5obxcY5aIhJyNK2KvaFVtR9QbY1xm2_HAIZ8WrVOv0zzXCqGZv1rtd9YJb7J5qhHKUB6BbqpxB3bG3JvWYWbJMkBzxvpgvhY-8vzb03OEOzJUwZF1IMIagfDY2t2Az9FfguNPL3C-StFuthAbnweieOyoXbiCis1SWT3dYVPlNwiSMo"
                  alt="Patient"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">A universal patient concern</span>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2} direction="up" className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px] aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white/30 backdrop-blur-xl">
            <Image
              src="/icons/700_img2.jpg"
              alt="Respiratory care"
              fill
              className="object-cover"
              sizes="520px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/35 via-blue-900/15 to-transparent"></div>
            <div className="absolute inset-0 bg-white/20"></div>
            
            <div className="absolute top-4 left-4 right-4 flex items-center justify-start text-white/90 gap-2">
              <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-semibold">Respiratory Study</span>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="w-full max-w-[480px] rounded-2xl p-5 shadow-glass border border-white/50 bg-white/80 backdrop-blur-4xl text-gray-900">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-9 w-9 rounded-xl bg-blue-100 flex items-center justify-center text-primary shadow-inner border border-blue-50">
                        <Icon name="vital_signs" size={18} className="text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">Respiratory Pattern</span>
                        <span className="text-[11px] text-gray-600 font-semibold">Monitoring Active</span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-gray-700 bg-white px-2.5 py-1 rounded-full border border-gray-200 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                    LIVE
                  </span>
                </div>
                
                <div className="relative w-full h-32 bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-gray-800/70"></div>
                  <div className="absolute inset-y-3 left-1/3 border-l border-dashed border-gray-800/60"></div>
                  <div className="absolute inset-y-3 left-2/3 border-l border-dashed border-gray-800/60"></div>
                  
                  <div className="absolute left-2 top-2 text-[9px] font-semibold text-gray-800 bg-white/90 px-1 rounded">98–100% (High)</div>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[9px] font-semibold text-gray-800 bg-white/90 px-1 rounded">95–97% (Normal)</div>
                  <div className="absolute left-2 bottom-2 text-[9px] font-semibold text-gray-800 bg-white/90 px-1 rounded">&lt;95% (Low)</div>
                  
                  <div className="absolute bottom-2 left-1/3 -translate-x-1/2 text-[9px] font-semibold text-gray-800 bg-white/90 px-1 rounded">Morning</div>
                  <div className="absolute bottom-2 left-2/3 -translate-x-1/2 text-[9px] font-semibold text-gray-800 bg-white/90 px-1 rounded">Midday</div>
                  <div className="absolute bottom-2 right-2 text-[9px] font-semibold text-gray-800 bg-white/90 px-1 rounded">Evening</div>
                  <div className="absolute bottom-2 left-2 text-[9px] font-semibold text-gray-800 bg-white/0 px-1 rounded"></div>
                  <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="respireArea" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#0D99FF" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#0D99FF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,80 C40,80 55,40 90,40 S130,80 170,80 S205,25 240,25 S275,65 300,65 L300,120 L0,120 Z" fill="url(#respireArea)" />
                    <path d="M0,80 C40,80 55,40 90,40 S130,80 170,80 S205,25 240,25 S275,65 300,65" fill="none" stroke="#0D99FF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="90" cy="40" r="6" fill="#fff" stroke="#0D99FF" strokeWidth="2.8" />
                    <circle cx="240" cy="25" r="7" fill="#ef4444" stroke="#fff" strokeWidth="3" />
                  </svg>
                  <div className="absolute bottom-2 left-3 text-[10px] font-semibold text-gray-500"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mt-4 text-sm text-gray-900">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.1em]">Avg Rate</span>
                    <span className="text-base font-extrabold text-gray-900 flex items-center gap-1">18 <span className="text-[10px] text-gray-600 font-semibold">bpm</span></span>
                    <span className="text-[11px] text-gray-500">Within morning</span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-gray-200 pl-3">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.1em]">Variability</span>
                    <span className="text-base font-extrabold text-red-600 flex items-center gap-1">High <Icon name="warning" size={14} className="text-red-600" /></span>
                    <span className="text-[11px] text-gray-500">Irregular spikes</span>
                  </div>
                  <div className="flex flex-col gap-1 border-l border-gray-200 pl-3">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.1em]">O2 Sat</span>
                    <span className="text-base font-extrabold text-primary">98%</span>
                    <span className="text-[11px] text-gray-500">Healthy range</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/60 text-xs text-gray-800 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span className="font-semibold text-[11px] text-primary uppercase tracking-wide">Unpredictability</span>
              <span className="text-gray-800">“Why does it happen now?”</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

