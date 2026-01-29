'use client'

import Link from 'next/link'
import { useState } from 'react'
import { APP_STORE_URL } from '@/lib/constants'

const BASE_URL = 'https://app.respirelyf.com'

type OpenInAppFallbackProps = {
  path: string
  searchParams?: string
}

export default function OpenInAppFallback({ path, searchParams = '' }: OpenInAppFallbackProps) {

  const universalLink = searchParams
    ? `${BASE_URL}/${path}?${searchParams}`
    : `${BASE_URL}/${path}`

  const [copied, setCopied] = useState(false)

  const copyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(universalLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ background: 'radial-gradient(circle at center, rgba(80, 167, 226, 0.08) 0%, rgba(255, 255, 255, 1) 75%)' }}>
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Open in Respire LYF App
        </h1>
        <p className="text-gray-600">
          Have the app? Copy the link below, paste it into Notes (or Messages), then tap the link there to open the app. Don&apos;t have the app? Download it from the App Store.
        </p>

        <button
          type="button"
          onClick={copyLink}
          className="inline-flex items-center justify-center w-full bg-[#2894D9] text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-[#217cb8] transition-colors shadow-lg"
        >
          {copied ? 'Copied! Paste in Notes and tap' : 'Copy link (open in app)'}
        </button>

        {APP_STORE_URL ? (
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full bg-black text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg"
          >
            Download on the App Store
          </a>
        ) : (
          <p className="text-sm text-gray-500">
            Set <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_APP_STORE_ID</code> in your environment to show the App Store button.
          </p>
        )}

        <p className="text-sm text-gray-500">
          Universal links open the app when tapped from Notes, Messages, or Mail—not from inside Safari.
        </p>
        <Link href="/" className="text-[#2894D9] font-medium hover:underline">
          Back to website
        </Link>
      </div>
    </div>
  )
}
