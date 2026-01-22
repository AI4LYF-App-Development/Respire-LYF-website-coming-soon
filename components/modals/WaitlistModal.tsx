'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

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

  // When opened with a prefill email + forceSubmitted, jump straight to success
  useEffect(() => {
    if (isOpen && forceSubmitted) {
      setFormData(prev => ({ ...prev, email: prefillEmail || '' }))
      setErrors({})
      setIsSubmitted(true)
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
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          email: '',
        })
      } else {
        setErrors({ submit: 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setErrors({ submit: 'Network error. Please try again.' })
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
                        <li>🔔 You'll receive priority updates</li>
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
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                      <p className="text-sm text-gray-600">We'll notify you when early access opens.</p>
                    </div>
                    
                    {errors.submit && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-600">{errors.submit}</p>
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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



