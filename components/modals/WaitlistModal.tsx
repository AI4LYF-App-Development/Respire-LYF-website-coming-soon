'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { trackModalInteraction, trackFormSubmission, trackButtonClick } from '@/lib/analytics'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  prefillEmail?: string
  forceSubmitted?: boolean
}

export default function WaitlistModal({ isOpen, onClose, prefillEmail, forceSubmitted }: WaitlistModalProps) {
  
  const [formData, setFormData] = useState({
    email: '',
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Track modal open/close
  useEffect(() => {
    if (isOpen) {
      trackModalInteraction('WaitlistModal', 'open')
    }
  }, [isOpen])

  // When opened with a prefill email + forceSubmitted, jump straight to success
  useEffect(() => {
    if (isOpen && forceSubmitted) {
      setFormData(prev => ({ ...prev, email: prefillEmail || '' }))
      setErrors({})
      setIsSubmitted(true)
      trackFormSubmission('waitlist', true)
    }
  }, [isOpen, forceSubmitted, prefillEmail])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
    const requestBody = {
      email: formData.email,
      source: 'WEBSITE',
      timezone: userTimezone
    }
    
    console.log('🚀 [WaitlistModal] API Call Started:', {
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
        body: JSON.stringify(requestBody),
      })
      
      console.log('📡 [WaitlistModal] API Response Received:', {
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
          console.warn('⚠️ [WaitlistModal] Non-JSON response:', text)
          data = { detail: text || `Server returned status ${response.status}` }
        }
      } catch (parseError) {
        console.error('⚠️ [WaitlistModal] Failed to parse response:', parseError)
        data = { detail: `Server returned status ${response.status}` }
      }
      
      console.log('📦 [WaitlistModal] Response Data:', {
        data,
        timestamp: new Date().toISOString()
      })
      
      // Handle success responses (200 OK or 201 Created)
      if (response.status === 200 || response.status === 201) {
        console.log('✅ [WaitlistModal] Success:', {
          status: response.status,
          message: data.detail || 'Email submitted successfully',
          email: formData.email,
          timestamp: new Date().toISOString()
        })
        trackFormSubmission('waitlist', true)
        setIsSubmitted(true)
        setFormData({
          email: '',
        })
      } else {
        // Handle API errors (400, 402, 422, 500, 503, 504)
        let errorMessage = 'Something went wrong. Please try again.'
        
        if (data.detail) {
          // Handle 422 where detail is an array of error objects
          if (Array.isArray(data.detail)) {
            const errorDescriptions = data.detail.map((err: any) => 
              err.error_description || err.field ? `${err.field}: ${err.error_description}` : JSON.stringify(err)
            ).join(', ')
            errorMessage = errorDescriptions || 'Validation error. Please check your input.'
          } else {
            // Regular error message
            errorMessage = data.detail
          }
        } else if (data.message) {
          errorMessage = data.message
        }
        
        trackFormSubmission('waitlist', false, errorMessage)
        console.error('❌ [WaitlistModal] API Error:', {
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
        // Likely a CORS issue
        errorMessage = 'Unable to connect to the server. This may be a CORS (Cross-Origin) issue. Please contact support.'
        console.error('🚫 [WaitlistModal] CORS Error Detected:', {
          error: error.message,
          suggestion: 'Consider using a Next.js API route as a proxy',
          timestamp: new Date().toISOString()
        })
      } else if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`
      }
      
      console.error('💥 [WaitlistModal] Network/Exception Error:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        timestamp: new Date().toISOString()
      })
      setErrors({ submit: errorMessage })
    } finally {
      setIsLoading(false)
      console.log('🏁 [WaitlistModal] API Call Completed:', {
        timestamp: new Date().toISOString()
      })
    }
  }
  
  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({
      email: '',
    })
    setErrors({})
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
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 pt-4 pb-4 relative">
                <button
                  onClick={handleClose}
                  className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
                <h2 className="w-full text-center text-2xl font-bold text-gray-900 mt-8">
                  {isSubmitted ? "You're on the waitlist." : "Be the first to understand what's really affecting your breathing."}
                </h2>
              </div>
              
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8 space-y-2"
                  >
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-0 -mt-8">
                      Thanks for joining <span style={{ color: '#2894D9' }}>Respire</span> <span style={{ color: '#256096' }}>LYF</span>. Early users help shape how this platform evolves.
                    </p>
                    <div className="space-y-2 text-left max-w-xl mx-auto text-gray-800">
                      <p className="font-bold">What happens next:</p>
                      <ul className="space-y-2 text-sm text-left">
                        <li>📩 A confirmation email is on its way</li>
                        <li>🔔 You&apos;ll receive priority updates</li>
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                        Email address*
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
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                      <p className="text-sm text-gray-600">We&apos;ll notify you when early access opens.</p>
                    </div>
                    
                    {errors.submit && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-600">{errors.submit}</p>
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-[#2894D9] hover:bg-[#217cb8] text-white rounded-lg font-semibold transition-colors"
                    >
                      Get Early Access
                    </button>
                    
                    <p className="text-xs text-gray-500">
                    We use your information only to provide timely early access updates and details.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}



