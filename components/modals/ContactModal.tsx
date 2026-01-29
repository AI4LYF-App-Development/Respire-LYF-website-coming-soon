'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Copy, Mail } from 'lucide-react'
import { trackModalInteraction, trackFormSubmission } from '@/lib/analytics'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const COMPANY_EMAIL = 'contact@aiforlife.ai' // Update with your actual email

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  useEffect(() => {
    if (isOpen) {
      trackModalInteraction('ContactModal', 'open')
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false)
      setFormData({ email: '', message: '' })
      setErrors({})
      setEmailCopied(false)
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.message || formData.message.trim() === '') {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }
    
    setIsLoading(true)
    setErrors({})
    
    const apiUrl = '/api/waitlist'
    const requestBody = {
      email: formData.email,
      source: 'WEBSITE',
      message: formData.message.trim().length > 0 ? formData.message.trim().substring(0, 1000) : undefined
    }
    
    console.log('🚀 [ContactModal] API Call Started:', {
      url: apiUrl,
      method: 'POST',
      body: requestBody,
      timestamp: new Date().toISOString()
    })
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          source: 'WEBSITE',
          message: formData.message.trim().length > 0 ? formData.message.trim().substring(0, 1000) : undefined
        }),
      })
      
      console.log('📡 [ContactModal] API Response Received:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries()),
        timestamp: new Date().toISOString()
      })
      
      let data: any = {}
      try {
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          data = await response.json()
        } else {
          const text = await response.text()
          console.warn('⚠️ [ContactModal] Non-JSON response:', text)
          data = { detail: text || `Server returned status ${response.status}` }
        }
      } catch (parseError) {
        console.error('⚠️ [ContactModal] Failed to parse response:', parseError)
        data = { detail: `Server returned status ${response.status}` }
      }
      
      console.log('📦 [ContactModal] Response Data:', {
        data,
        timestamp: new Date().toISOString()
      })
      
      if (response.status === 200 || response.status === 201) {
        console.log('✅ [ContactModal] Success:', {
          status: response.status,
          responseMessage: data.detail || 'Email submitted successfully',
          email: formData.email,
          userMessage: formData.message,
          timestamp: new Date().toISOString()
        })
        trackFormSubmission('contact', true)
        setIsSubmitted(true)
        setFormData({ email: '', message: '' })
      } else {
        let errorMessage = 'Something went wrong. Please try again.'
        
        if (data.detail) {
          if (Array.isArray(data.detail) && data.detail.length > 0 && data.detail[0].error_description) {
            errorMessage = data.detail[0].error_description
          } else if (typeof data.detail === 'string') {
            errorMessage = data.detail
          }
        } else if (data.message) {
          errorMessage = data.message
        }
        
        trackFormSubmission('contact', false, errorMessage)
        console.error('❌ [ContactModal] API Error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorMessage,
          data,
          timestamp: new Date().toISOString()
        })
        setErrors({ submit: errorMessage })
      }
    } catch (error) {
      let errorMessage = 'Network error. Please check your connection and try again.'
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        errorMessage = 'Unable to connect to the server. This may be a CORS (Cross-Origin) issue. Please contact support.'
        console.error('🚫 [ContactModal] CORS Error Detected:', {
          error: error.message,
          suggestion: 'Consider using a Next.js API route as a proxy',
          timestamp: new Date().toISOString()
        })
      } else {
        console.error('💥 [ContactModal] Network/Exception Error:', {
          error,
          message: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined,
          timestamp: new Date().toISOString()
        })
      }
      setErrors({ submit: errorMessage })
    } finally {
      setIsLoading(false)
      console.log('🏁 [ContactModal] API Call Completed:', {
        timestamp: new Date().toISOString()
      })
    }
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY_EMAIL)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy email:', error)
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({ email: '', message: '' })
    setErrors({})
    setEmailCopied(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
              
              <div className="sticky top-0 bg-white border-b border-gray-200 px-5 pt-4 pb-3 relative">
                <button
                  onClick={handleClose}
                  className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
                <h2 className="w-full text-center text-2xl font-bold text-gray-900 mt-8 mb-2">
                  {isSubmitted ? "Thank you!" : "Get in Touch"}
                </h2>
                {!isSubmitted && (
                  <p className="text-center text-sm text-gray-600 mb-4">
                    Send us a message and we&apos;ll get back to you by email.
                  </p>
                )}
              </div>
              
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8 space-y-2"
                  >
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                      Thank you for reaching out! We&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-6">
                    {/* Email Support Team Section */}
                    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Mail className="w-5 h-5 text-[#2894D9]" />
                        <h3 className="text-base font-semibold text-gray-900">Email our support team</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <a 
                          href={`mailto:${COMPANY_EMAIL}`}
                          className="text-[#2894D9] hover:text-[#217cb8] font-medium text-base flex-1"
                        >
                          {COMPANY_EMAIL}
                        </a>
                        <button
                          onClick={handleCopyEmail}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                          title="Copy email"
                        >
                          <Copy className="w-4 h-4" />
                          {emailCopied ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">Or send us a message</span>
                      </div>
                    </div>

                    {/* Message Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                          Your Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#2894D9] ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="you@example.com"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          We&apos;ll use this email to reply to your message.
                        </p>
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                          Message*
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#2894D9] resize-none ${
                            errors.message ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Tell us how we can help."
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                        )}
                      </div>
                      
                      {errors.submit && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-sm text-red-600">{errors.submit}</p>
                        </div>
                      )}
                      
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full px-6 py-3 bg-[#2894D9] hover:bg-[#217cb8] disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors"
                      >
                        {isLoading ? 'Sending...' : 'Send message'}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
