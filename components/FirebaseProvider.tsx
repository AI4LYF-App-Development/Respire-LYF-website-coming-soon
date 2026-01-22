'use client'

import { useEffect } from 'react'
import { app, analytics } from '@/lib/firebase'

export default function FirebaseProvider() {
  useEffect(() => {
    // Verify Firebase connection
    if (app) {
      console.log('✅ Firebase connected successfully!')
      console.log('Firebase App:', app.name)
      console.log('Firebase Project ID:', app.options.projectId)
      
      // Log analytics status
      if (analytics) {
        console.log('✅ Firebase Analytics initialized')
      } else {
        console.log('⚠️ Firebase Analytics not available (SSR)')
      }
    } else {
      console.error('❌ Firebase connection failed!')
    }
  }, [])

  // This component doesn't render anything
  return null
}
