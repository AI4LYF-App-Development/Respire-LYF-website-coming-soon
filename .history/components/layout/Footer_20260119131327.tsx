'use client'

import Icon from '@/components/ui/Icon'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="about" className="relative bg-black pt-24 pb-0 border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-900/20 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="layout-container mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10">
                  <Image
                    src="/icons/respirelyf_logo.png"
                    alt="Respire LYF logo"
                    fill
                    className="object-contain drop-shadow-sm"
                    sizes="40px"
                    priority
                  />
                </div>
                <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
                  Respire LYF
                </h2>
              </div>
              <p className="text-lg font-medium text-primary italic">
                Your patterns are waiting.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 shadow-sm relative overflow-hidden group hover:border-white/20 transition-colors">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Our Mission
              </h3>
              <p className="text-slate-300 leading-relaxed text-base font-medium">
                Transforming respiratory care through intelligent, multi-determinant analysis that reveals the hidden patterns affecting your breathing. We believe every person deserves to understand their personal respiratory fingerprint.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="h-full bg-[#101622] rounded-[2.5rem] p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-2xl">
              <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/10 shadow-inner">
                  <Icon name="rocket_launch" size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Ready to Start?</h3>
                <p className="text-slate-300 text-[15px] mb-10 leading-relaxed max-w-sm">
                  Discover Your Personal Respiratory Fingerprint. Join thousands taking control of their respiratory health.
                </p>
              </div>
              
              <div className="relative z-10 mt-auto">
                <button className="w-full flex items-center justify-center gap-3 bg-white text-[#101622] rounded-xl px-4 py-3 hover:bg-gray-100 transition-colors group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.61-.69.82-1.27 2-1.08 3.15 1.19.09 2.42-.83 3.07-1.65z"></path>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-semibold uppercase tracking-wider leading-none"></div>
                    <div className="text-base font-bold leading-none mt-0.5">Download Now</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 lg:gap-16 mb-20 pt-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="mark_email_unread" size={20} className="text-primary" />
              <h3 className="text-lg font-bold text-white">Contact</h3>
            </div>
            <ul className="space-y-2 text-[15px] text-slate-400">
              <li>Questions about MD-RIC?</li>
              <li>Partnership inquiries?</li>
              <li>Healthcare provider collaboration?</li>
            </ul>
            <a className="inline-flex items-center gap-1.5 mt-4 text-primary font-bold hover:gap-3 transition-all" href="#">
              Get in Touch <Icon name="arrow_forward" size={18} className="text-primary" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 pb-16">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="info" size={22} className="text-primary" />
            <h3 className="text-lg font-bold text-white">Disclaimer</h3>
          </div>
          <p className="text-slate-400 leading-relaxed text-[15px]">
          All information on this site is for general awareness only and does not constitute medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
      
      <div className="bg-[#101622] border-t border-white/5 py-6 px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm font-medium text-center md:text-left">
            © 2025 Respire LYF. All rights reserved. <span className="mx-2 text-slate-600">|</span>
            <a className="text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a> <span className="mx-2 text-slate-600">|</span>
            <a className="text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a>
          </p>
          <div className="flex items-center gap-5">
            <a 
              className="text-slate-400 hover:text-white transition-colors" 
              href="https://twitter.com/respirelyf" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow Respire LYF on X (Twitter)"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
            <a 
              className="text-slate-400 hover:text-white transition-colors" 
              href="https://reddit.com/r/respirelyf" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow Respire LYF on Reddit"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"></path></svg>
            </a>
            <a 
              className="text-slate-400 hover:text-white transition-colors" 
              href="https://www.facebook.com/respirelyf" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow Respire LYF on Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.525 0h-21.05c-.813 0-1.475.662-1.475 1.475v21.05c0 .813.662 1.475 1.475 1.475h11.337v-9.167h-3.083v-3.583h3.083v-2.642c0-3.053 1.865-4.713 4.59-4.713 1.305 0 2.427.097 2.754.141v3.19l-1.89.001c-1.482 0-1.77.704-1.77 1.736v2.287h3.541l-.461 3.583h-3.08v9.167h6.038c.813 0 1.475-.662 1.475-1.475v-21.05c0-.813-.662-1.475-1.475-1.475z"></path></svg>
            </a>
            <a 
              className="text-slate-400 hover:text-white transition-colors" 
              href="https://www.instagram.com/respirelyf" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow Respire LYF on Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
            <a 
              className="text-slate-400 hover:text-white transition-colors" 
              href="https://www.youtube.com/@respirelyf" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Subscribe to Respire LYF on YouTube"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
