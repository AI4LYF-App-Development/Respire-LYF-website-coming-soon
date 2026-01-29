# Cookie & Analytics Context for Privacy Policy

**Purpose:** Technical context about cookies and analytics used on Respire LYF website  
**Date:** ${new Date().toISOString().split('T')[0]}  
**For:** Privacy Policy Section 7 - Cookies and Tracking Technologies

---

## Current Implementation Analysis

### 1. Google Analytics 4 (GA4)

**Service:** Google Analytics 4  
**Measurement ID:** G-8C50SFZF8V  
**Implementation:** Via Firebase Analytics and direct GA4 script injection  
**Location:** `components/analytics/AnalyticsProvider.tsx`, `lib/analytics.ts`

**What it does:**
- Tracks page views
- Tracks user interactions (button clicks, form submissions, modal opens/closes)
- Tracks scroll depth
- Tracks video engagement
- Tracks custom events

**Cookies Used by Google Analytics:**
Google Analytics automatically sets the following cookies:

1. **`_ga`** (2 years)
   - Purpose: Distinguishes unique users
   - Type: Analytics cookie
   - Requires Consent: **YES** (in EU/UK/CCPA jurisdictions)

2. **`_ga_<MEASUREMENT_ID>`** (2 years)
   - Purpose: Persists session state
   - Type: Analytics cookie
   - Requires Consent: **YES** (in EU/UK/CCPA jurisdictions)

3. **`_gid`** (24 hours)
   - Purpose: Distinguishes unique users
   - Type: Analytics cookie
   - Requires Consent: **YES** (in EU/UK/CCPA jurisdictions)

4. **`_gat`** (1 minute)
   - Purpose: Throttles request rate
   - Type: Analytics cookie
   - Requires Consent: **YES** (in EU/UK/CCPA jurisdictions)

**Note:** Google Analytics may also use other cookies depending on configuration.

---

### 2. Firebase Analytics

**Service:** Firebase Analytics (Google)  
**Implementation:** Integrated with Firebase app initialization  
**Location:** `lib/firebase.ts`

**What it does:**
- Provides analytics infrastructure
- Works in conjunction with GA4
- Uses same Measurement ID: G-8C50SFZF8V

**Cookies:** Uses same cookies as Google Analytics 4 (see above)

---

### 3. localStorage Usage

**Technology:** Browser localStorage (not a cookie, but similar privacy consideration)  
**Location:** `lib/abTesting.ts`

**What it stores:**
- A/B testing variant assignments
- Purpose: Ensures consistent user experience across sessions

**Privacy Note:** localStorage is not a cookie but stores data locally in the browser. It's not sent to servers automatically but can be accessed by JavaScript on the same domain.

---

### 4. Next.js Framework Cookies

**Service:** Next.js (React framework)  
**Potential Cookies:**
- Next.js may use cookies for:
  - Session management
  - CSRF protection
  - Route optimization

**Note:** These are typically strictly necessary for website functionality.

---

## Cookie Classification

### Strictly Necessary Cookies

**Definition:** Cookies that are essential for the website to function and cannot be switched off.

**Current Strictly Necessary Cookies:**
- **Next.js session cookies** (if any) - Required for basic website functionality
- **CSRF tokens** (if any) - Required for security

**Note:** Currently, the website does not explicitly set any strictly necessary cookies beyond what Next.js may use for basic functionality. However, you should verify this in production.

---

### Analytics Cookies (Require Consent)

**Definition:** Cookies used to collect information about how visitors use the website.

**Current Analytics Cookies:**
All Google Analytics cookies require consent in:
- **EU/UK** (GDPR compliance required)
- **California** (CCPA compliance required)
- **Other jurisdictions** with privacy laws

**Cookies:**
- `_ga` - Analytics cookie (2 years)
- `_ga_<MEASUREMENT_ID>` - Analytics cookie (2 years)
- `_gid` - Analytics cookie (24 hours)
- `_gat` - Analytics cookie (1 minute)

**Consent Required:** **YES** - These cookies require user consent before being set in GDPR/CCPA jurisdictions.

---

## Legal Requirements

### GDPR (EU/UK)

**Requirement:** 
- Analytics cookies require **explicit consent** before being set
- Users must be able to opt-out
- Cookie banner must be shown before cookies are set
- Privacy policy must clearly explain cookie usage

**Current Status:** 
- ❌ No cookie consent banner implemented
- ⚠️ Google Analytics cookies are being set without consent
- ⚠️ This may violate GDPR if serving EU/UK users

### CCPA (California)

**Requirement:**
- Must disclose cookie usage
- Must provide opt-out mechanism
- "Do Not Sell" option required (if applicable)

**Current Status:**
- ⚠️ No explicit opt-out mechanism for analytics cookies
- ⚠️ Privacy policy should be updated with cookie details

### Other Jurisdictions

Various states and countries have similar requirements. Check local laws for:
- Brazil (LGPD)
- Canada (PIPEDA)
- Australia (Privacy Act)
- Other US states with privacy laws

---

## Recommendations for Privacy Policy

### Section 7: Cookies and Tracking Technologies

**Suggested Content:**

#### 7.1 Types of Cookies We Use

We use the following types of cookies on our website:

**Strictly Necessary Cookies**
These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as setting privacy preferences, logging in, or filling in forms. You can set your browser to block these cookies, but some parts of the website may not work as a result.

**Analytics Cookies**
These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics 4 to track:
- Page views and navigation patterns
- User interactions (button clicks, form submissions)
- Scroll depth and time on page
- Video engagement

These cookies require your consent before being set. You can opt-out of analytics cookies at any time.

#### 7.2 Specific Cookies We Use

**Google Analytics Cookies:**
- `_ga` - Used to distinguish unique users (expires: 2 years)
- `_ga_<MEASUREMENT_ID>` - Used to persist session state (expires: 2 years)
- `_gid` - Used to distinguish unique users (expires: 24 hours)
- `_gat` - Used to throttle request rate (expires: 1 minute)

**Purpose:** These cookies are used to collect information about how visitors use our website. The information is used to compile reports and help us improve the website.

**Third-Party Service:** Google Analytics (Google LLC)
- Privacy Policy: https://policies.google.com/privacy
- Opt-out: https://tools.google.com/dlpage/gaoptout

#### 7.3 Managing Cookies

You can control and manage cookies in several ways:

**Browser Settings:**
Most browsers allow you to refuse or accept cookies. You can also delete cookies that have already been set. Please note that blocking cookies may impact your experience on our website.

**Google Analytics Opt-Out:**
You can opt-out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on: https://tools.google.com/dlpage/gaoptout

**Cookie Consent:**
We will implement a cookie consent banner that allows you to accept or reject analytics cookies. You can change your preferences at any time.

#### 7.4 Local Storage

In addition to cookies, we use browser localStorage to store:
- A/B testing variant assignments (to ensure consistent user experience)

Local storage data is stored locally on your device and is not automatically sent to our servers. You can clear localStorage through your browser settings.

---

## Implementation Checklist

### Immediate Actions Required:

- [ ] **Add Cookie Consent Banner**
  - Implement a cookie consent solution (e.g., Cookiebot, OneTrust, or custom solution)
  - Block Google Analytics until consent is given
  - Allow users to opt-out

- [ ] **Update Privacy Policy**
  - Add detailed cookie section (see recommendations above)
  - List all cookies with purpose and expiration
  - Explain consent requirements
  - Provide opt-out instructions

- [ ] **Update Cookie Implementation**
  - Only load Google Analytics after consent is given
  - Implement consent management
  - Store consent preferences

- [ ] **Legal Review**
  - Have privacy policy reviewed by legal counsel
  - Ensure compliance with GDPR, CCPA, and other applicable laws
  - Verify cookie disclosure requirements

---

## Technical Implementation Notes

### Current State:
- ✅ Google Analytics 4 is implemented
- ✅ Firebase Analytics is initialized
- ✅ Event tracking is comprehensive
- ❌ No cookie consent mechanism
- ❌ Analytics cookies are set without consent
- ⚠️ May violate GDPR/CCPA if serving users in those jurisdictions

### Recommended Changes:

1. **Add Cookie Consent Library:**
   ```bash
   npm install react-cookie-consent
   # or
   npm install @cookiebot/react
   ```

2. **Block GA Until Consent:**
   - Only load GA scripts after user consents
   - Use consent management platform (CMP)

3. **Update AnalyticsProvider:**
   - Check for consent before initializing GA
   - Respect user's cookie preferences

---

## Summary

### Strictly Necessary Cookies:
- **Next.js framework cookies** (if any) - Required for basic functionality
- **No other strictly necessary cookies** currently set by the application

### Analytics Cookies (Require Consent):
- **Google Analytics cookies** (`_ga`, `_ga_<ID>`, `_gid`, `_gat`) - **YES, consent required**
- **Firebase Analytics** - Uses same cookies as GA4 - **YES, consent required**

### Consent Requirements:
- **GDPR (EU/UK):** ✅ **REQUIRED** - Must obtain consent before setting analytics cookies
- **CCPA (California):** ✅ **REQUIRED** - Must provide opt-out mechanism
- **Other jurisdictions:** Check local laws

### Current Compliance Status:
- ⚠️ **Non-compliant** - Analytics cookies are being set without consent
- ⚠️ **Action required** - Need to implement cookie consent banner
- ⚠️ **Privacy policy needs update** - Add detailed cookie section

---

*This document provides technical context for updating the Privacy Policy. Legal review is recommended before finalizing cookie disclosures.*
