/**
 * A/B Testing Utility
 * Assigns users to variants consistently using localStorage
 */

type Variant = 'A' | 'B'

/**
 * Gets or assigns a variant for A/B testing
 * Uses localStorage to ensure consistent assignment across sessions
 * @param testName - Unique name for the test (e.g., 'description-text')
 * @returns 'A' or 'B' variant
 */
export function getABVariant(testName: string): Variant {
  if (typeof window === 'undefined') {
    // Server-side: default to A
    return 'A'
  }

  const storageKey = `ab_test_${testName}`
  
  // Check if user already has an assigned variant
  const storedVariant = localStorage.getItem(storageKey) as Variant | null
  
  if (storedVariant === 'A' || storedVariant === 'B') {
    return storedVariant
  }
  
  // New user: randomly assign variant (50/50 split)
  const variant: Variant = Math.random() < 0.5 ? 'A' : 'B'
  
  // Store the variant for consistency
  localStorage.setItem(storageKey, variant)
  
  // Optional: Log for analytics
  console.log(`[A/B Test] ${testName}: Assigned variant ${variant}`)
  
  return variant
}

/**
 * Clears A/B test assignment (useful for testing)
 * @param testName - Name of the test to clear
 */
export function clearABVariant(testName: string): void {
  if (typeof window === 'undefined') return
  
  const storageKey = `ab_test_${testName}`
  localStorage.removeItem(storageKey)
}
