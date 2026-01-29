// ============================================================================
// ANALYTICS EVENT TRACKING
// ============================================================================

import { app } from './firebase'

/**
 * Get Google Analytics Measurement ID
 * Priority: Firebase config > Environment variable > Hardcoded fallback
 */
function getMeasurementId(): string {
  if (typeof window === 'undefined') return ''
  
  // Try to get from Firebase config first
  const firebaseMeasurementId = app?.options?.measurementId as string | undefined
  if (firebaseMeasurementId) {
    return firebaseMeasurementId
  }
  
  // Fallback to environment variable
  const envMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  if (envMeasurementId) {
    return envMeasurementId
  }
  
  // Hardcoded fallback
  return 'G-8C50SFZF8V'
}

/**
 * Event categories for analytics tracking
 */
export enum EventCategory {
  USER_INTERACTION = 'user_interaction',
  NAVIGATION = 'navigation',
  CONTENT_ENGAGEMENT = 'content_engagement',
  FORM_SUBMISSION = 'form_submission',
  MODAL_INTERACTION = 'modal_interaction',
  SCROLL_BEHAVIOR = 'scroll_behavior',
  TIME_ON_PAGE = 'time_on_page',
}

/**
 * Event actions for analytics tracking
 */
export enum EventAction {
  // Button clicks
  CLICK_READ_MAGAZINE = 'click_read_magazine',
  CLICK_WATCH_VIDEO = 'click_watch_video',
  CLICK_JOIN_WAITLIST = 'click_join_waitlist',
  CLICK_STAY_TUNED = 'click_stay_tuned',
  CLICK_GET_IN_TOUCH = 'click_get_in_touch',
  
  // Card interactions
  CARD_VIEW = 'card_view',
  CARD_CLICK = 'card_click',
  
  // Modal interactions
  MODAL_OPEN = 'modal_open',
  MODAL_CLOSE = 'modal_close',
  
  // Form interactions
  FORM_START = 'form_start',
  FORM_SUBMIT = 'form_submit',
  FORM_ERROR = 'form_error',
  
  // Navigation
  PAGE_VIEW = 'page_view',
  SCROLL_DEPTH = 'scroll_depth',
  
  // Video interactions
  VIDEO_PLAY = 'video_play',
  VIDEO_PAUSE = 'video_pause',
  VIDEO_COMPLETE = 'video_complete',
}

/**
 * Event labels for analytics tracking
 */
export interface EventLabels {
  card_name?: string
  card_id?: string
  determinant_name?: string
  modal_name?: string
  form_name?: string
  button_name?: string
  page_path?: string
  scroll_depth?: number
  time_on_page?: number
  error_message?: string
  video_title?: string
  video_url?: string
}

/**
 * Track custom event
 */
export function trackEvent(
  category: EventCategory,
  action: EventAction,
  label?: string,
  value?: number,
  customLabels?: EventLabels
) {
  if (typeof window === 'undefined') return

  const eventData = {
    event_category: category,
    event_action: action,
    event_label: label,
    value: value,
    ...customLabels,
  }

  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', action, {
      category,
      label,
      value,
      ...customLabels,
    })
  }

  // Custom event dispatch for other analytics tools
  window.dispatchEvent(
    new CustomEvent('analytics:track', {
      detail: eventData,
    })
  )

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Analytics Event:', eventData)
  }
}

/**
 * Track page view
 */
export function trackPageView(path: string, title?: string) {
  if (typeof window === 'undefined') return

  trackEvent(
    EventCategory.NAVIGATION,
    EventAction.PAGE_VIEW,
    title || path,
    undefined,
    { page_path: path }
  )

  // Google Analytics 4 page view
  if (window.gtag) {
    const measurementId = getMeasurementId()
    if (measurementId) {
      window.gtag('config', measurementId, {
        page_path: path,
        page_title: title,
      })
    }
  }
}

/**
 * Track button click
 */
export function trackButtonClick(
  buttonName: string,
  location?: string,
  additionalData?: EventLabels
) {
  let action: EventAction

  switch (buttonName.toLowerCase()) {
    case 'read magazine':
      action = EventAction.CLICK_READ_MAGAZINE
      break
    case 'watch video':
      action = EventAction.CLICK_WATCH_VIDEO
      break
    case 'join waitlist':
      action = EventAction.CLICK_JOIN_WAITLIST
      break
    case 'stay tuned':
      action = EventAction.CLICK_STAY_TUNED
      break
    case 'get in touch':
      action = EventAction.CLICK_GET_IN_TOUCH
      break
    default:
      action = EventAction.CLICK_JOIN_WAITLIST
  }

  trackEvent(
    EventCategory.USER_INTERACTION,
    action,
    buttonName,
    undefined,
    {
      button_name: buttonName,
      ...additionalData,
    }
  )
}

/**
 * Track card interaction
 */
export function trackCardInteraction(
  cardId: string,
  cardName: string,
  interactionType: 'view' | 'click' | 'read_magazine' | 'watch_video'
) {
  const action =
    interactionType === 'view'
      ? EventAction.CARD_VIEW
      : interactionType === 'click'
      ? EventAction.CARD_CLICK
      : interactionType === 'read_magazine'
      ? EventAction.CLICK_READ_MAGAZINE
      : EventAction.CLICK_WATCH_VIDEO

  trackEvent(
    EventCategory.CONTENT_ENGAGEMENT,
    action,
    cardName,
    undefined,
    {
      card_id: cardId,
      card_name: cardName,
      determinant_name: cardName,
    }
  )
}

/**
 * Track modal interaction
 */
export function trackModalInteraction(
  modalName: string,
  action: 'open' | 'close'
) {
  trackEvent(
    EventCategory.MODAL_INTERACTION,
    action === 'open' ? EventAction.MODAL_OPEN : EventAction.MODAL_CLOSE,
    modalName,
    undefined,
    {
      modal_name: modalName,
    }
  )
}

/**
 * Track form submission
 */
export function trackFormSubmission(
  formName: string,
  success: boolean,
  errorMessage?: string
) {
  trackEvent(
    EventCategory.FORM_SUBMISSION,
    success ? EventAction.FORM_SUBMIT : EventAction.FORM_ERROR,
    formName,
    success ? 1 : 0,
    {
      form_name: formName,
      error_message: errorMessage,
    }
  )
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: number) {
  trackEvent(
    EventCategory.SCROLL_BEHAVIOR,
    EventAction.SCROLL_DEPTH,
    `${depth}%`,
    depth,
    {
      scroll_depth: depth,
    }
  )
}

/**
 * Track video interaction
 */
export function trackVideoInteraction(
  videoTitle: string,
  videoUrl: string,
  action: 'play' | 'pause' | 'complete'
) {
  const eventAction =
    action === 'play'
      ? EventAction.VIDEO_PLAY
      : action === 'pause'
      ? EventAction.VIDEO_PAUSE
      : EventAction.VIDEO_COMPLETE

  trackEvent(
    EventCategory.CONTENT_ENGAGEMENT,
    eventAction,
    videoTitle,
    undefined,
    {
      video_title: videoTitle,
      video_url: videoUrl,
    }
  )
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | object,
      config?: object
    ) => void
  }
}
