'use client'

import { useState } from 'react'
import Image from 'next/image'
import Icon from '@/components/ui/Icon'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function FragmentationCrisis() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleJoinBeta = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }
    setEmailError('')
    const event = new CustomEvent('openWaitlist', { detail: { email } })
    window.dispatchEvent(event)
    setEmail('')
  }
  
  return (
    <>
      <section className="relative pt-16 pb-14 px-4 sm:px-6 lg:px-10 max-w-[1500px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-sm w-fit mx-auto mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">CURRENT LANDSCAPE</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-display font-bold mb-6 leading-[1.15] tracking-[-0.02em] text-slate-900 dark:text-white break-words">
            The Fragmentation Crisis
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
            Managing respiratory health today means juggling multiple disconnected tools—symptom trackers, weather apps, medication reminders, fitness devices—each capturing fragments of your story, but none revealing how they connect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <ScrollReveal delay={0.1} direction="up">
            <div className="group glass-panel rounded-2xl p-8 h-full flex flex-col border border-figma-border dark:border-figma-border-dark shadow-lg shadow-slate-200/70 dark:shadow-black/20 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icon name="disconnected" size={28} className="text-orange-600 dark:text-orange-400" />
            </div>
            <div className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">70%</div>
            <h3 className="text-lg font-semibold mb-3">Disconnected Data</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Patients report that their data is siloed across different platforms, making it impossible to see correlations between triggers and symptoms.
            </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} direction="up">
            <div className="group glass-panel rounded-2xl p-8 h-full flex flex-col border border-figma-border dark:border-figma-border-dark shadow-lg shadow-slate-200/70 dark:shadow-black/20 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
            <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icon name="apps" size={28} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">5+ Apps</div>
            <h3 className="text-lg font-semibold mb-3">App Fatigue</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              The average patient switches between more than five distinct apps to manage their chronic respiratory condition effectively.
            </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3} direction="up">
            <div className="group glass-panel rounded-2xl p-8 h-full flex flex-col border border-figma-border dark:border-figma-border-dark shadow-lg shadow-slate-200/70 dark:shadow-black/20 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icon name="reactive" size={28} className="text-red-600 dark:text-red-400" />
            </div>
            <div className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Reactive Care</div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Current tools focus on managing symptoms after they appear, rather than helping users understand what led up to them.
            </p>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="glass-panel rounded-3xl border border-figma-border dark:border-figma-border-dark overflow-hidden shadow-xl">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Intelligence Layer Visualization</div>
          </div>
          
          <div className="p-8 lg:p-12 relative min-h-[600px] flex flex-col chart-grid bg-white dark:bg-[#1a202c]">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-green-600 font-bold uppercase tracking-wide text-sm bg-white dark:bg-slate-800 px-3 py-1 rounded shadow-sm z-10 border border-green-200 dark:border-green-900">Proactive</div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 font-bold uppercase tracking-wide text-sm bg-white dark:bg-slate-800 px-3 py-1 rounded shadow-sm z-10 border border-slate-200 dark:border-slate-700">Reactive</div>
            <div
              className="absolute top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-800/95 px-3 py-1 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 text-slate-600 font-bold uppercase tracking-wide text-xs whitespace-nowrap z-20"
              style={{ left: '100px' }} // adjust this to move Single Signal along x-axis
            >
              Single Signal
            </div>
            <div
              className="absolute top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-800/95 px-3 py-1 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 text-slate-600 font-bold uppercase tracking-wide text-xs whitespace-nowrap z-20"
              style={{ right: '100px' }} // adjust this to move Multi-Signal along x-axis
            >
              Multi-Signal Intelligence
            </div>
            
            <div className="relative flex-grow border-l-2 border-b-2 border-slate-300 dark:border-slate-600 m-8">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <div className="bg-blue-50/30 dark:bg-blue-900/5"></div>
                <div className="bg-blue-100/30 dark:bg-blue-900/20 border-l border-b border-dashed border-blue-200 dark:border-blue-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-200/20 pointer-events-none"></div>
                </div>
                <div className="bg-slate-50/50 dark:bg-slate-800/50"></div>
                <div className="bg-blue-50/30 dark:bg-blue-900/5"></div>
              </div>
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-green-500 z-0"></div>
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-blue-500 z-0"></div>
              
              {/* Data points */}
              <div className="absolute left-[12%] top-[70%] flex flex-col items-center gap-1">
                <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg ring-4 ring-white dark:ring-slate-800"></div>
                <span className="text-[12px] font-semibold text-slate-900">Smart Inhaler</span>
              </div>
              <div className="absolute left-[20%] top-[55%] flex flex-col items-center gap-1">
                <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg ring-4 ring-white dark:ring-slate-800"></div>
                <span className="text-[12px] font-semibold text-slate-900">Cough only</span>
              </div>
              <div className="absolute left-[36%] top-[78%] flex flex-col items-center gap-1">
                <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg ring-4 ring-white dark:ring-slate-800"></div>
                <span className="text-[12px] font-semibold text-slate-900 text-center leading-tight">Environmental<br />Signals</span>
              </div>
              <div className="absolute left-[30%] top-[88%] flex flex-col items-center gap-1">
                <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg ring-4 ring-white dark:ring-slate-800"></div>
                <span className="text-[12px] font-semibold text-slate-900 whitespace-nowrap">Symptom Diaries</span>
              </div>
              <div className="absolute left-[22%] top-[72%] flex flex-col items-center gap-1">
                <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg ring-4 ring-white dark:ring-slate-800"></div>
                <span className="text-[12px] font-semibold text-slate-900 whitespace-nowrap">COPD Education</span>
              </div>
              <div className="absolute left-[30%] top-[64%] flex flex-col items-center gap-1">
                <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg ring-4 ring-white dark:ring-slate-800"></div>
                <span className="text-[12px] font-semibold text-slate-900 whitespace-nowrap">Asthma Awareness</span>
              </div>
              <div className="absolute left-[34%] top-[52%] flex flex-col items-center gap-1">
                <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg ring-4 ring-white dark:ring-slate-800"></div>
                <span className="text-[12px] font-semibold text-slate-900 whitespace-nowrap">General Health</span>
              </div>
              
              {/* Respire LYF center */}
              <div className="absolute right-[3%] top-[12%] z-20">
                <div className="relative group">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full shadow-lg ring-4 ring-white dark:ring-slate-800 z-30"></div>
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-15"></div>
                  <div className="absolute -inset-4 bg-primary/10 rounded-full animate-pulse-slow"></div>
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-primary/80 flex items-center justify-center relative overflow-hidden transition-all duration-300 transform hover:scale-105">
                    <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10"></div>
                    <Image src="/icons/respirelyf_logo.png" alt="Respire LYF" width={60} height={60} className="relative z-10 object-contain drop-shadow-[0_8px_18px_rgba(13,153,255,0.35)]" />
                  </div>
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span className="text-sm font-bold text-primary whitespace-nowrap bg-white/90 dark:bg-slate-800/90 backdrop-blur px-3 py-1 rounded-full shadow-sm border border-primary/20 dark:border-primary/30"><span style={{ color: '#2894D9' }}>Respire</span> <span style={{ color: '#256096' }}>LYF</span>™</span>
                    <span className="text-[10px] text-slate-500 mt-1">Live Your Fullest</span>
                  </div>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] font-bold h-8 px-3.5 rounded-full shadow-md flex items-center justify-center gap-1.5 border border-primary ring-2 ring-primary/20 whitespace-nowrap leading-none">
                    <Image src="/icons/md_ric_img.png" alt="MD-RIC" width={16} height={16} className="object-contain drop-shadow-sm shrink-0" />
                    <span>MD-RIC</span>
                  </div>
                </div>
              </div>
              
              <svg className="absolute top-1/2 right-1/2 w-[400px] h-[400px] pointer-events-none overflow-visible -z-10 opacity-30">
                <path className="animate-pulse" d="M -150 200 Q -50 150 0 0" fill="none" stroke="#3b82f6" strokeDasharray="4 4" strokeWidth="2"></path>
                <path d="M -250 250 Q -100 200 0 0" fill="none" stroke="#ef4444" strokeDasharray="4 4" strokeWidth="2"></path>
                <path d="M -200 300 Q -80 200 0 0" fill="none" stroke="#eab308" strokeDasharray="4 4" strokeWidth="2"></path>
              </svg>
            </div>
          </div>

          {/* Set a fixed height for the loop gradient bar; adjust h-[520px] as needed */}
          <div className="absolute right-6 top-12 h-[600px] w-16 hidden lg:flex flex-col items-center justify-between py-4">
            <div className="bg-white/95 dark:bg-slate-900/85 px-3 py-1 rounded-full text-[11px] font-bold uppercase text-green-600 border border-green-200 shadow-sm whitespace-nowrap">Closed Loop</div>
            <div className="w-2 h-full rounded-full bg-gradient-to-b from-green-500 via-yellow-400 to-red-500 shadow-inner"></div>
            <div className="bg-white/95 dark:bg-slate-900/85 px-3 py-1 rounded-full text-[11px] font-bold uppercase text-red-600 border border-red-200 shadow-sm whitespace-nowrap">Open Loop</div>
          </div>
          
  
        </div>
      </section>
      
  
    </>
  )
}
