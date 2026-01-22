'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import Icon from '@/components/ui/Icon'
import Image from 'next/image'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
  iconSrc?: string | null
  iconName?: string
}

// Extract YouTube video ID from URL
function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

// Get YouTube thumbnail URL
function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

export default function VideoModal({ isOpen, onClose, videoUrl, title, iconSrc, iconName }: VideoModalProps) {
  const videoId = getYouTubeVideoId(videoUrl)
  const thumbnailUrl = videoId ? getYouTubeThumbnail(videoId) : null
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : null

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!embedUrl) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden relative z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 pt-4 pb-4 relative z-10">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
                <div className="flex items-center gap-3 mt-2">
                  {iconSrc && (
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-slate-100 shrink-0 flex items-center justify-center">
                      <Image src={iconSrc} alt={title} width={24} height={24} className="object-contain" />
                    </div>
                  )}
                  {!iconSrc && iconName && (
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-slate-100 shrink-0 flex items-center justify-center">
                      <Icon name={iconName} size={24} className="text-[#256096]" />
                    </div>
                  )}
                  <h2 className="text-xl sm:text-2xl font-bold text-[#256096] flex-1">
                    {title}
                  </h2>
                </div>
              </div>

              {/* Video Container */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={embedUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={title}
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
