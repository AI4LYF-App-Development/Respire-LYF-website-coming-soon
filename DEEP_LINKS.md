# Deep Links (Universal Links) – Respire LYF

This document describes how Universal Links work for `https://app.respirelyf.com`, how the website and iOS app connect, and how attribution is handled.

---

## 1. Supported URLs

**Canonical domain:** `https://app.respirelyf.com`

Marketing and product can use:

- **Path-based:** `https://app.respirelyf.com/paywall`, `https://app.respirelyf.com/youtube`, etc.
- **Single base URL with query:** `https://app.respirelyf.com/?dl_target=dashboard&utm_source=facebook&utm_medium=social`

Paths are normalized to lowercase on the app; the website redirects capitalized variants to lowercase (e.g. `/YouTube` → `/youtube`) so links work either way.

---

## 2. AASA (Apple App Site Association)

**Source of truth:** The AASA file is served at:

- `https://app.respirelyf.com/.well-known/apple-app-site-association`

**Important:** The AASA file and path list are **unchanged** by the UTM/attribution work. Do not add new paths for new marketing channels; use query parameters (UTMs and `dl_target`) instead.

**Current paths** (unchanged):

- `/`
- `/paywall`
- `/onboarding`
- `/invite`, `/invite/*`
- `/report/*`, `/insights/*`, `/referr/*`
- `/youtube`, `/instagram`, `/facebook`, `/reddit`, `/x`, `/tiktok`
- `/respire-website`, `/email`

---

## 3. Query parameters

### UTM (attribution)

All standard UTM parameters are supported and passed through; the app parses and stores them for attribution:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

### Destination: `dl_target`

Use `dl_target` to choose the in-app destination without adding new AASA paths:

| Value        | Effect in app                          |
|-------------|----------------------------------------|
| `paywall`   | Paywall flow (or login → paywall)      |
| `dashboard` | Dashboard / marketing flow             |
| `onboarding`| Onboarding                             |

Optional future values (not implemented yet): `report:<id>`, `insights:<id>`.

If `dl_target` is missing, the app uses the **URL path** to decide the flow (see routing rules below).

---

## 4. Routing rules (app behavior)

When the user opens a Universal Link and the app launches:

| Condition                         | Destination in app                          |
|----------------------------------|---------------------------------------------|
| Path is `/paywall` or `dl_target=paywall` | If logged in → Paywall; else → Login → Paywall |
| Path is `/` or a marketing path, or `dl_target=dashboard` | If logged in → Dashboard; else if first time (onboarding not seen) → Onboarding; else → Login → Dashboard |
| `dl_target=onboarding`           | Onboarding                                  |

**Marketing paths:** `/youtube`, `/instagram`, `/facebook`, `/reddit`, `/x`, `/tiktok`, `/respire-website`, `/email`, `/onboarding`, `/`

---

## 5. Attribution (analytics and storage)

- **Event:** When the app opens via a Universal Link, it logs a Firebase Analytics event `deep_link_opened` with: `url`, `path`, and any present UTM / `dl_target` parameters.
- **First-touch:** Stored once (first time the user ever opens the app via a link). Event `first_touch_attributed` is logged when that happens.
- **Last-touch:** Updated on every Universal Link open.
- **Storage:** First-touch and last-touch are stored **locally only** (UserDefaults). They are **not** sent to the backend in the current implementation.

---

## 6. Future: sending attribution to the backend

When you are ready to send attribution to the backend:

- The iOS app exposes `AttributionStore.currentAttributionForBackend()`, which returns a dictionary with `first_touch` and `last_touch` (each with fields like source, medium, campaign, landing_path, timestamp, etc.).
- Call this at **login success** (or after token refresh) and attach the result to the login (or profile) API payload. No change to AASA or link format is required.

---

## 7. App not installed → redirect to App Store

When the user taps a Universal Link and the app is **not** installed, iOS opens the URL in the browser (Safari). The **website** (app.respirelyf.com) then redirects the user to the App Store so they can install the app.

- **Middleware** (`middleware.ts`): For every request to host `app.respirelyf.com`, except `/.well-known/apple-app-site-association`, the server responds with a **302 redirect** to the App Store page: `https://apps.apple.com/app/id{NEXT_PUBLIC_APP_STORE_ID}`.
- **Requirement:** Set `NEXT_PUBLIC_APP_STORE_ID` in the website environment (e.g. Vercel) to your app's numeric App Store ID. If it is not set, no redirect occurs and the request is handled by the normal pages (e.g. fallback UI with "Download on the App Store" button).
- **AASA is unchanged:** Requests to `/.well-known/apple-app-site-association` are never redirected, so Universal Link validation continues to work.

Casing redirects (e.g. `/YouTube` → `/youtube`) are configured in `next.config.js` for the main site; the app subdomain redirects to the App Store before any page is rendered.

---

## 8. Examples for marketing

**Open app → dashboard flow (with UTM):**

```
https://app.respirelyf.com/?dl_target=dashboard&utm_source=facebook&utm_medium=social&utm_campaign=jan_launch
```

**Open app → paywall flow (path + UTM):**

```
https://app.respirelyf.com/paywall?utm_source=youtube&utm_medium=video&utm_campaign=video1
```

**Open app → paywall via single link:**

```
https://app.respirelyf.com/?dl_target=paywall&utm_source=linkedin&utm_medium=social
```

**Path-based (dashboard flow):**

```
https://app.respirelyf.com/instagram?utm_source=instagram&utm_medium=social
```

After redirect, `/Instagram?...` becomes `/instagram?...` and the app receives the same path and query.

---

## 9. Testing deep link analytics (Firebase)

When a user lands in the app via any Universal Link (`https://app.respirelyf.com/...`), the app sends Firebase Analytics events. Use the steps below to confirm they are received.

### Events sent

| Event name | When |
|------------|------|
| `deep_link_opened` | Every time a Universal Link is opened (host `app.respirelyf.com`). |
| `first_touch_attributed` | Only the first time this device/user ever opens the app via a deep link. |

**Parameters** (for both events): `url`, `path`, and when present: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `dl_target`.

### Option A: Firebase DebugView (recommended)

1. **Enable debug mode for Firebase Analytics**
   - In Xcode: **Product → Scheme → Edit Scheme…**
   - Select **Run** on the left, open the **Arguments** tab.
   - Under **Arguments Passed On Launch**, add:  
     `-FIRAnalyticsDebugEnabled`
   - Close the dialog and run the app from Xcode.

2. **Stream events in Firebase**
   - In [Firebase Console](https://console.firebase.google.com), open your project.
   - Go to **Analytics → DebugView**.
   - Choose your app / device from the dropdown (your device appears after you run the app with the flag above).

3. **Trigger a deep link**
   - On the device/simulator, open a link that goes to `app.respirelyf.com` (e.g. from Notes or Messages):  
     `https://app.respirelyf.com/paywall?utm_source=test`
   - When the app opens, in DebugView you should see:
     - `deep_link_opened` with `url`, `path`, and `utm_source` (and any other params).
     - `first_touch_attributed` with the same params **only** the first time this device opens via a link (clear app data or use a fresh install to see it again).

### Option B: Xcode console

The app logs a single debug line when it sends deep link analytics (using `Logger.printDebug`). In the Xcode console you will see something like:

```
🔵 [env] [DeepLinkAnalytics.logDeepLinkOpened] ----→ Deep link analytics: deep_link_opened url=... path=... firstTouch=true params=[...]
```

- **firstTouch=true** means `first_touch_attributed` was also sent.
- **firstTouch=false** means only `deep_link_opened` was sent.

This confirms the code path ran and what parameters were passed; use DebugView to confirm events actually reach Firebase.
