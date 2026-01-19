'use client'

import Image from 'next/image'
import Icon from '@/components/ui/Icon'

export default function BreathingStory() {
  return (
    <main id="solution" data-section="solution" className="flex-1 w-full max-w-[1440px] mx-auto p-6 md:p-10 flex flex-col justify-center relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full shadow-sm w-fit">
              <Icon name="auto_awesome" size={18} className="text-primary" />
              <span className="text-xs font-bold text-gray-700 tracking-wide uppercase">INSIGHT ANALYSIS</span>
            </div>
            <h1 className="text-[#131118] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Your Breathing Story <span className="text-primary dark:text-sky-400">Goes Deeper</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed md:max-w-[90%]">
              Every breath you take is influenced by a complex web of factors—some obvious, many hidden. Respire LYF connects the dots between your daily choices and your respiratory health.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[650px] aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-gray-200 rounded-full opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-gray-200 rounded-full opacity-30 animate-spin" style={{ animationDuration: '60s' }}></div>
            
            <div className="absolute inset-4 md:inset-10 rounded-[2rem] overflow-hidden shadow-2xl bg-white z-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDDKLcMPtn92wPlqeO4U5MYch_gOEOZyMi-79srdHUvm-YLP6AjhP069Oy9AkBd7sZeDwbPxzW22oIcmQu-ABEypGbdEHe_ryDUDYhzyrvWZl6D-xCw2X8EZaNoUdlcju1iTWGyN_hFQa8BSwZNLI9aJwmUb0m4RSFkvesQBSM0S8be3N-dDlxEWjc2wUmHFW53PdUy_va30Xif7fnmJSrDEa8F8UhgRp3ZAJnOsAPnqwsA8ePrdiEtJgC97kLgAF_XxlvXLXWpt0"
                alt="Woman doing yoga breathing exercise outdoors in nature"
                fill
                className="object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="absolute top-[5%] right-[0%] md:right-[-5%] w-[180px] glass-panel p-4 rounded-xl shadow-glass animate-float">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="cloud" size={14} className="text-blue-500" />
                <span className="text-xs font-bold text-gray-500 uppercase">Air Quality</span>
              </div>
              <div className="text-[#131118] text-xl font-bold mb-1">Moderate</div>
              <div className="flex items-center gap-1 text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded w-fit">
                <Icon name="warning" size={14} className="text-orange-600" />
                <span>+5% Impact</span>
              </div>
            </div>
            
            <div className="absolute bottom-[10%] left-[0%] md:left-[-5%] w-[200px] glass-panel p-4 rounded-xl shadow-glass z-20">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-500 uppercase mb-1">Stress Correlation</span>
                  <span className="text-[#131118] text-2xl font-bold">High</span>
                </div>
                <div className="size-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                  <Icon name="trending_up" size={18} className="text-red-500" />
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <div className="bg-red-400 h-full rounded-full w-[75%]"></div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-right">Above average</p>
            </div>
            
            <div className="absolute top-[40%] left-[-10%] hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 z-10">
              <div className="size-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-bold text-gray-700">Resting HR: 62</span>
            </div>
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 drop-shadow-sm" style={{ overflow: 'visible' }}>
              <path d="M 50% 50% Q 80% 40% 90% 15%" fill="none" stroke="url(#gradient-line-1)" strokeDasharray="4 4" strokeWidth="2"></path>
              <path d="M 50% 50% Q 20% 60% 10% 85%" fill="none" stroke="url(#gradient-line-2)" strokeDasharray="4 4" strokeWidth="2"></path>
              <defs>
                <linearGradient id="gradient-line-1" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0 }}></stop>
                  <stop offset="100%" style={{ stopColor: '#590df2', stopOpacity: 0.6 }}></stop>
                </linearGradient>
                <linearGradient id="gradient-line-2" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0 }}></stop>
                  <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 0.6 }}></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </main>
  )
}

