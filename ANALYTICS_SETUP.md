# Analytics Setup Guide

## Google Analytics Measurement ID from Firebase

### Current Setup
Your Firebase configuration already includes the Measurement ID: **`G-8C50SFZF8V`**

The analytics system is configured to automatically use this ID from your Firebase config, so **no additional setup is required!**

---

## How to Find Your Measurement ID in Firebase Console

If you need to find or verify your Measurement ID in the future, follow these steps:

### Method 1: From Firebase Console

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/
   - Select your project: **respire-lyf**

2. **Navigate to Project Settings**
   - Click the gear icon (⚙️) next to "Project Overview"
   - Select "Project settings"

3. **Find Your Web App Configuration**
   - Scroll down to the "Your apps" section
   - Find your web app (or click "Add app" if you haven't added one)
   - Look for the `measurementId` field in the config
   - It will look like: `measurementId: "G-XXXXXXXXXX"`

### Method 2: From Google Analytics

1. **Go to Google Analytics**
   - Visit: https://analytics.google.com/
   - Select your property (should be linked to your Firebase project)

2. **Navigate to Admin**
   - Click "Admin" (gear icon) in the bottom left
   - Select "Data Streams" under "Property"

3. **Find Your Web Stream**
   - Click on your web data stream
   - The Measurement ID will be displayed at the top (format: `G-XXXXXXXXXX`)

### Method 3: From Firebase Config File

The Measurement ID is already in your `lib/firebase.ts` file:

```typescript
const firebaseConfig = {
  // ... other config
  measurementId: "G-8C50SFZF8V"  // ← This is your Measurement ID
};
```

---

## How It Works

The analytics system automatically:
1. ✅ Reads the Measurement ID from your Firebase config
2. ✅ Falls back to `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable if needed
3. ✅ Initializes Google Analytics 4 on page load
4. ✅ Tracks all user interactions automatically

---

## Optional: Using Environment Variable

If you prefer to use an environment variable instead (or for a different Measurement ID), you can add this to your `.env.local` file:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-8C50SFZF8V
```

**Note:** The Firebase config takes priority, so if both are set, Firebase config will be used.

---

## Verification

To verify analytics is working:

1. **Check Browser Console**
   - Open your website in development mode
   - Open browser DevTools (F12)
   - Look for: `✅ Firebase Analytics initialized`
   - Look for: `📊 Analytics Event:` logs when you interact with the site

2. **Check Google Analytics Real-Time**
   - Go to Google Analytics
   - Navigate to "Reports" → "Real-time"
   - Interact with your website
   - You should see events appearing in real-time

---

## Tracked Events

The following events are automatically tracked:

- ✅ Page views
- ✅ Scroll depth (25%, 50%, 75%, 90%, 100%)
- ✅ Button clicks (Read Magazine, Watch Video, Join Waitlist, etc.)
- ✅ Card interactions
- ✅ Modal opens/closes
- ✅ Form submissions (success/error)
- ✅ Video interactions

---

## Support

If you need to change the Measurement ID or set up a new one:
1. Update it in `lib/firebase.ts` under `measurementId`
2. Or set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in your environment variables
3. Restart your development server
