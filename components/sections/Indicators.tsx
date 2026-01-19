'use client'

import Image from 'next/image'
import Icon from '@/components/ui/Icon'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Indicators() {
  const asthmaScore = 18
  const asthmaTotal = 25
  const asthmaPercent = (asthmaScore / asthmaTotal) * 100
  const asthmaLevel = (asthmaScore / asthmaTotal) * 5
  let asthmaColor = 'bg-green-500'
  if (asthmaLevel <= 1) {
    asthmaColor = 'bg-red-400'
  } else if (asthmaLevel <= 2) {
    asthmaColor = 'bg-orange-400'
  } else if (asthmaLevel <= 3) {
    asthmaColor = 'bg-yellow-400'
  }

  const copdScore = 34
  const copdTotal = 40
  const copdPercent = (copdScore / copdTotal) * 100
  const copdLevel = (copdScore / copdTotal) * 5
  let copdColor = 'bg-red-500'
  if (copdLevel <= 1) {
    copdColor = 'bg-green-500'
  } else if (copdLevel <= 3) {
    copdColor = 'bg-orange-400'
  }
  
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="relative z-10 w-full max-w-4xl text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-sm w-fit mx-auto mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">RESPIRATORY SIGNALS</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] leading-tight tracking-tight mb-6">
          What Your Lungs Are <br className="hidden md:block"/>
          <span className="text-primary dark:text-sky-400">Quietly Telling You</span>
          </h2>
        <p className="text-lg md:text-xl text-figma-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
            While Determinants track inputs, Indicators observe outputs — how breathing patterns manifest day to day.
          </p>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl flex flex-col gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ScrollReveal delay={0.1} direction="up">
            <div className="card-transition bg-white rounded-3xl p-6 border border-white/60 shadow-card flex flex-col justify-between h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center border border-indigo-100 shadow-sm">
                  <Image src="/icons/breathing-score.png" alt="Breathing Score" width={28} height={28} />
                </div>
                <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full border border-green-100">Daily</span>
              </div>
              <h3 className="text-xl font-bold text-figma-text-primary mb-2">Breathing Score</h3>
              <p className="text-figma-text-secondary text-sm leading-relaxed mb-6">Rate breathing in 30 seconds daily on a 5-point scale and watch how hidden patterns emerge.</p>
              <div className="mt-auto bg-slate-50 rounded-xl p-4 border border-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Current Score</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg font-bold text-emerald-600">4<span className="text-xs text-slate-400 font-normal ml-0.5">/5</span></span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">Good</span>
                  </div>
                </div>
                <div className="flex gap-1.5 h-3 w-full mb-3">
                  <div className="flex-1 bg-gradient-to-r from-green-300 to-green-500 rounded-sm opacity-60"></div>
                  <div className="flex-1 bg-gradient-to-r from-green-300 to-green-500 rounded-sm opacity-80"></div>
                  <div className="flex-1 bg-gradient-to-r from-green-300 to-green-500 rounded-sm"></div>
                  <div className="flex-1 bg-gradient-to-r from-green-300 to-green-500 rounded-sm shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                  <div className="flex-1 bg-slate-200 rounded-sm"></div>
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-medium border-t border-slate-100 pt-2 mt-2">
                  <span>Previous: 3/5</span>
                  <span className="text-emerald-600 flex items-center gap-0.5">
                    <Icon name="trending_up" size={12} className="text-emerald-600" /> +4%
                  </span>
                </div>
              </div>
            </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} direction="up">
            <div className="card-transition bg-white rounded-3xl p-6 border border-white/60 shadow-card flex flex-col justify-between h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center border border-indigo-100 shadow-sm">
                  <Image src="/icons/surveys.png" alt="Check-in" width={26} height={26} />
                </div>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full border border-primary/20">Weekly</span>
              </div>
              <h3 className="text-xl font-bold text-figma-text-primary mb-2">Weekly Check-in</h3>
              <p className="text-figma-text-secondary text-sm leading-relaxed mb-6">A validated clinical questionnaire providing standardized asthma/COPD control measures.</p>
              <div className="mt-auto bg-slate-50 rounded-xl p-4 border border-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all space-y-3">
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Asthma</span>
                    <span className="text-primary">{asthmaScore}/{asthmaTotal}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5">
                    <div className={`${asthmaColor} h-1.5 rounded-full relative`} style={{ width: `${asthmaPercent}%` }}>
                      <div className="absolute -right-1 -top-0.5 w-2.5 h-2.5 bg-white border-2 border-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> COPD </span>
                    <span className="text-primary">{copdScore}/{copdTotal}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5">
                    <div className={`${copdColor} h-1.5 rounded-full relative`} style={{ width: `${copdPercent}%` }}>
                      <div className="absolute -right-1 -top-0.5 w-2.5 h-2.5 bg-white border-2 border-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3} direction="up">
            <div className="card-transition bg-white rounded-3xl p-6 border border-white/60 shadow-card flex flex-col justify-between h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center border border-orange-100 shadow-sm">
                  <Image src="/icons/cough.png" alt="Cough" width={26} height={26} />
                </div>
                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-full border border-slate-200">Auto</span>
              </div>
              <h3 className="text-xl font-bold text-figma-text-primary mb-2">Cough</h3>
              <p className="text-figma-text-secondary text-sm leading-relaxed mb-6">Intelligent automatic wet/dry cough classification with day/night pattern analysis.</p>
              <div className="mt-auto bg-slate-50 rounded-xl p-4 border border-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">24h Analysis</span>
                  <div className="flex gap-3 text-[9px] font-bold">
                    <span className="flex items-center gap-1 text-orange-400"><span className="w-2 h-2 rounded-full bg-orange-300"></span> Dry</span>
                    <span className="flex items-center gap-1 text-primary"><span className="w-2 h-2 rounded-full bg-primary"></span> Wet</span>
                  </div>
                </div>
                <div className="relative h-12 w-full flex items-end justify-between gap-[3px] overflow-hidden">
                  {[20, 40, 60, 80, 55, 30, 25, 70, 90, 65, 35, 15].map((height, i) => {
                    const colors = [i % 2 === 0 ? 'bg-orange-400' : 'bg-primary']
                    return (
                      <div key={i} className={`w-1.5 ${colors} rounded-full`} style={{ height: `${height}%` }}></div>
                    )
                  })}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-100"></div>
                </div>
              </div>
            </div>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          <ScrollReveal delay={0.1} direction="up">
            <div className="card-transition bg-white rounded-3xl p-6 lg:p-8 border border-white/60 shadow-card flex flex-col md:flex-row gap-6 h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center border border-teal-100 shadow-sm">
                  <Image src="/icons/peak_flow.png" alt="Peak Flow" width={22} height={22} />
                </div>
                <h3 className="text-xl font-bold text-figma-text-primary">Peak Flow</h3>
              </div>
              <p className="text-figma-text-secondary text-sm leading-relaxed mb-4">Track peak flow readings and turn simple numbers into clear breathing trends.</p>
            </div>
            <div className="w-full md:w-56 bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between relative group-hover:bg-white transition-colors">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Weekly Avg</div>
                  <span className="bg-green-100 text-green-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 border border-green-200">
                    <Icon name="trending_up" size={10} className="text-green-600" /> Good
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-teal-600">450 <span className="text-xs font-semibold text-slate-400 ml-0.5">L/min</span></div>
              </div>
              <div className="mt-4 relative h-16 w-full">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <defs>
                    <linearGradient id="flowGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#0d9488" stopOpacity="0.2"></stop>
                      <stop offset="100%" stopColor="#0d9488" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <line stroke="#e2e8f0" strokeDasharray="2,2" strokeWidth="0.5" x1="0" x2="100" y1="0" y2="0"></line>
                  <line stroke="#e2e8f0" strokeDasharray="2,2" strokeWidth="0.5" x1="0" x2="100" y1="20" y2="20"></line>
                  <line stroke="#e2e8f0" strokeDasharray="2,2" strokeWidth="0.5" x1="0" x2="100" y1="40" y2="40"></line>
                  <path d="M0,35 C20,32 40,15 60,25 S80,10 100,5" fill="none" stroke="#0d9488" strokeLinecap="round" strokeWidth="2.5" vectorEffect="non-scaling-stroke"></path>
                  <path d="M0,35 C20,32 40,15 60,25 S80,10 100,5 V40 H0 Z" fill="url(#flowGradient)" stroke="none"></path>
                  <circle className="fill-teal-600" cx="20" cy="30" r="1.5"></circle>
                  <circle className="fill-teal-600" cx="60" cy="25" r="1.5"></circle>
                  <circle className="fill-white stroke-teal-600 stroke-2" cx="100" cy="5" r="3"></circle>
                </svg>
              </div>
            </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} direction="up">
            <div className="card-transition bg-white rounded-3xl p-6 lg:p-8 border border-white/60 shadow-card flex flex-col md:flex-row gap-6 h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center border border-rose-100 shadow-sm">
                  <Image src="/icons/vitals_icon.png" alt="Vitals" width={22} height={22} />
                </div>
                <h3 className="text-xl font-bold text-figma-text-primary">Vitals</h3>
              </div>
              <p className="text-figma-text-secondary text-sm leading-relaxed mb-4">Smartwatch vitals — heart rate, breathing rate, oxygen levels, and temperature — combined into breathing intelligence.</p>
            </div>
            <div className="w-full md:w-56 bg-slate-50 rounded-2xl p-3 border border-slate-100 grid grid-cols-2 gap-2.5 group-hover:bg-white transition-colors h-full content-center">
                <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center relative overflow-hidden">
                  <div className="flex items-center gap-1.5 mb-1 z-10">
                    <Image src="/icons/heart.fill.svg" alt="HR" width={14} height={14} className="w-3.5 h-3.5" />
                    <span className="text-[9px] text-slate-400 font-bold uppercase">HR</span>
                  </div>
                  <div className="text-sm font-bold text-slate-700 z-10">72 <span className="text-[9px] font-medium text-slate-400">bpm</span></div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Image src="/icons/drop.degreesign.fill.svg" alt="SpO2" width={14} height={14} className="w-3.5 h-3.5" />
                    <span className="text-[9px] text-slate-400 font-bold uppercase">SpO2</span>
                  </div>
                  <div className="text-sm font-bold text-slate-700">98<span className="text-[9px] font-medium text-slate-400">%</span></div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Image src="/icons/lungs.fill.svg" alt="RR" width={14} height={14} className="w-3.5 h-3.5" />
                    <span className="text-[9px] text-slate-400 font-bold uppercase">RR</span>
                  </div>
                  <div className="text-sm font-bold text-slate-700">16 <span className="text-[9px] font-medium text-slate-400">bpm</span></div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Image src="/icons/thermometer.variable.svg" alt="Temp" width={14} height={14} className="w-3.5 h-3.5" />
                    <span className="text-[9px] text-slate-400 font-bold uppercase">Temp</span>
                  </div>
                  <div className="text-sm font-bold text-slate-700">98.6<span className="text-[9px] font-medium text-slate-400">°F</span></div>
                </div>
            </div>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="relative py-16 flex flex-col items-center justify-center text-center">
          <ScrollReveal delay={0.3} direction="fade">
            <div className="glass-morphism px-8 md:px-12 py-10 rounded-[2rem] shadow-glass max-w-4xl w-full border border-white relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Icon name="hub" size={32} className="text-white" />
            </div>
            <div className="text-left flex-1">
              <p className="text-figma-text-secondary text-lg md:text-xl font-medium mb-1">Individually, These Signals Say Little</p>
              <h3 className="text-2xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                Together, They Explain <span className="text-primary">Everything!</span>
              </h3>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-44 h-44">
                {[
                  { src: '/icons/breathing-score.png', alt: 'Breathing Score', angle: -90 },
                  { src: '/icons/surveys.png', alt: 'Weekly Check-in', angle: -18 },
                  { src: '/icons/cough.png', alt: 'Cough', angle: 54 },
                  { src: '/icons/peak_flow.png', alt: 'Peak Flow', angle: 126 },
                  { src: '/icons/vitals_icon.png', alt: 'Vitals', angle: 198 },
                ].map((item) => {
                  const radius = 64 // px radius to keep icons inside the card
                  const theta = (item.angle * Math.PI) / 180
                  const center = 88 // px (half of 11rem / 44)
                  const x = center + radius * Math.cos(theta)
                  const y = center + radius * Math.sin(theta)
                  return (
                    <div
                      key={item.alt}
                      className="absolute w-12 h-12 rounded-full bg-white border-[1.5px] border-white ring-2 ring-primary/15 shadow-md flex items-center justify-center"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <Image src={item.src} alt={item.alt} width={22} height={22} className="w-7 h-7 object-contain" />
                    </div>
                  )
                })}
              </div>
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
