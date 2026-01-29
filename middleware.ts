import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { APP_STORE_ID } from '@/lib/constants'

const APP_LINK_HOST = 'app.respirelyf.com'
const AASA_PATH = '/.well-known/apple-app-site-association'

const DEEP_LINK_PATHS = new Set([
  '', 'paywall', 'onboarding', 'invite', 'report', 'insights', 'referr',
  'youtube', 'instagram', 'facebook', 'reddit', 'x', 'tiktok', 'email', 'respire-website'
])

function shouldRedirectToAppStore(host: string, pathname: string): boolean {

  if (pathname === AASA_PATH) return false

  const hostname = (host ?? '').split(':')[0]

  if (hostname === APP_LINK_HOST) return true

  if (hostname === 'localhost' || hostname.startsWith('127.0.0.1')) {

    const segment = pathname.replace(/^\/|\/$/g, '').toLowerCase().split('/')[0]
    return DEEP_LINK_PATHS.has(segment)
  }

  return false
}

/**
 * When the app is not installed, Universal Links open in the browser.
 * Redirect directly to the App Store (no fallback page) for app.respirelyf.com
 * and for localhost deep-link paths (e.g. /email, /paywall).
 */
export function middleware(request: NextRequest) {

  const host = request.headers.get('host') ?? request.nextUrl.hostname
  const pathname = request.nextUrl.pathname

  if (!shouldRedirectToAppStore(host, pathname)) return NextResponse.next()

  const appStoreId = process.env.NEXT_PUBLIC_APP_STORE_ID || APP_STORE_ID
  if (appStoreId) {

    const appStoreUrl = `https://apps.apple.com/app/id${appStoreId}`
    return NextResponse.redirect(appStoreUrl, 302)
  }

  return NextResponse.next()
}

export const config = {

  matcher: '/:path*'
}
