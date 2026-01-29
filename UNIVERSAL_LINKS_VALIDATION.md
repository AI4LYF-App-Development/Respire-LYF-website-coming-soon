# Apple Universal Links Validation Checklist

## Pre-Deployment Validation

### Code Validation

- [ ] **AASA Route Handler Created**
  - File exists: `app/.well-known/apple-app-site-association/route.ts`
  - Route handler exports `GET` function
  - Uses `NextResponse.json()` to return JSON

- [ ] **AASA Content Verification**
  - App ID format: `2BUR257KMS.com.ai4lyf.RespireLYF`
  - Team ID: `2BUR257KMS`
  - Bundle ID: `com.ai4lyf.RespireLYF`
  - Paths array includes all required routes:
    - `/`
    - `/paywall`
    - `/onboarding`
    - `/report/*`
    - `/insights/*`
    - `/referr/*`

- [ ] **Headers Configuration**
  - Content-Type: `application/json`
  - Cache-Control: `public, max-age=3600, must-revalidate`
  - X-Content-Type-Options: `nosniff`

- [ ] **Next.js Configuration**
  - `next.config.js` headers don't interfere with `.well-known` paths
  - No redirects configured for `.well-known` paths

## Deployment Validation

### Vercel Configuration

- [ ] **Domain Added**
  - `app.respirelyf.com` added to Vercel project
  - Domain status shows as "Valid Configuration" or "Ready"

- [ ] **DNS Configuration**
  - CNAME or A record configured for `app.respirelyf.com`
  - DNS propagated (check with `dig` or `nslookup`)
  - DNS points to Vercel infrastructure

- [ ] **Deployment Status**
  - Project deployed successfully
  - No deployment errors
  - Latest deployment is live

- [ ] **Subdomain Accessibility**
  - `https://app.respirelyf.com` loads correctly
  - No DEPLOYMENT_NOT_FOUND error
  - HTTPS certificate is active (no SSL warnings)

## AASA File Validation

### URL Accessibility

- [ ] **Endpoint Accessible**
  - URL: `https://app.respirelyf.com/.well-known/apple-app-site-association`
  - Returns 200 status code (not 404, 301, or 302)
  - No redirects (direct response)

### Response Format

- [ ] **Content Type**
  - Header: `Content-Type: application/json`
  - Not `text/html` or `text/plain`
  - Browser shows raw JSON (not HTML page)

- [ ] **Response Body**
  - Valid JSON format
  - No HTML wrapper or error messages
  - Matches expected AASA structure

- [ ] **JSON Structure Validation**
  ```json
  {
    "applinks": {
      "apps": [],
      "details": [
        {
          "appID": "2BUR257KMS.com.ai4lyf.RespireLYF",
          "paths": [
            "/",
            "/paywall",
            "/onboarding",
            "/report/*",
            "/insights/*",
            "/referr/*"
          ]
        }
      ]
    }
  }
  ```

### Testing Commands

**1. Test AASA File Accessibility**
```bash
curl -I https://app.respirelyf.com/.well-known/apple-app-site-association
```
**Expected**: Status 200, Content-Type: application/json

**2. Test Full Response**
```bash
curl https://app.respirelyf.com/.well-known/apple-app-site-association
```
**Expected**: Raw JSON output matching AASA structure

**3. Verify Content-Type Header**
```bash
curl -H "Accept: application/json" -v https://app.respirelyf.com/.well-known/apple-app-site-association 2>&1 | grep -i "content-type"
```
**Expected**: `content-type: application/json`

**4. Check for Redirects**
```bash
curl -I -L https://app.respirelyf.com/.well-known/apple-app-site-association
```
**Expected**: Single 200 response (no 301/302 redirects)

**5. Validate JSON Structure**
```bash
curl -s https://app.respirelyf.com/.well-known/apple-app-site-association | jq .
```
**Expected**: Valid JSON that can be parsed by jq

**6. Test with Browser**
- Open: `https://app.respirelyf.com/.well-known/apple-app-site-association`
- **Expected**: Browser shows/downloads JSON file
- **NOT Expected**: HTML page or error message

## iOS App Configuration Validation

### Xcode Configuration

- [ ] **Associated Domains Entitlement**
  - App has Associated Domains capability enabled
  - Domain configured: `applinks:app.respirelyf.com`
  - Entitlement file includes correct domain

- [ ] **App ID Configuration**
  - Bundle ID: `com.ai4lyf.RespireLYF`
  - Team ID: `2BUR257KMS`
  - App ID format: `2BUR257KMS.com.ai4lyf.RespireLYF`

- [ ] **Code Signing**
  - App signed with correct Team ID
  - Provisioning profile includes Associated Domains
  - App is properly signed for distribution

### Universal Link Handling

- [ ] **URL Handling Code**
  - App implements `UIApplicationDelegate` methods:
    - `application(_:continue:restorationHandler:)`
    - Or `scene(_:continue:)` for SwiftUI
  - App handles deep link routes correctly
  - Paths match AASA file paths

## Universal Link Behavior Testing

### With App Installed

- [ ] **Link Opens App**
  - Tap link: `https://app.respirelyf.com/`
  - App opens (not Safari)
  - Correct screen/route displayed

- [ ] **Path Routing**
  - Test each path:
    - `https://app.respirelyf.com/paywall` → Opens paywall screen
    - `https://app.respirelyf.com/onboarding` → Opens onboarding
    - `https://app.respirelyf.com/report/123` → Opens report
    - `https://app.respirelyf.com/insights/456` → Opens insights
    - `https://app.respirelyf.com/referr/789` → Opens referrer

- [ ] **Long Press Behavior**
  - Long press on link shows app icon
  - "Open in RespireLYF" option appears

### Without App Installed

- [ ] **Link Opens Website**
  - Tap link: `https://app.respirelyf.com/`
  - Opens in Safari (not app)
  - Website loads correctly

- [ ] **No Smart Banner Interference**
  - No JavaScript redirects interfering
  - No smart app banners blocking links
  - Clean website experience

## Common Issues & Troubleshooting

### Issue: AASA File Returns 404

**Symptoms**: 
- URL returns 404 Not Found
- Browser shows "Page not found"

**Diagnosis**:
```bash
curl -I https://app.respirelyf.com/.well-known/apple-app-site-association
```

**Solutions**:
1. Verify route handler exists: `app/.well-known/apple-app-site-association/route.ts`
2. Check deployment logs for errors
3. Verify file path is correct (no `.json` extension)
4. Clear Vercel cache and redeploy
5. Check Next.js routing configuration

### Issue: AASA File Returns HTML

**Symptoms**:
- Browser shows HTML page instead of JSON
- Content-Type is `text/html`

**Diagnosis**:
```bash
curl -I https://app.respirelyf.com/.well-known/apple-app-site-association | grep -i content-type
```

**Solutions**:
1. Verify route handler sets `Content-Type: application/json`
2. Check Next.js is routing correctly to route handler
3. Verify no redirects are interfering
4. Test with cURL to see raw response
5. Check browser isn't caching old HTML version

### Issue: Wrong Content-Type Header

**Symptoms**:
- Content-Type is not `application/json`
- May be `text/plain`, `application/octet-stream`, etc.

**Diagnosis**:
```bash
curl -I https://app.respirelyf.com/.well-known/apple-app-site-association
```

**Solutions**:
1. Verify route handler explicitly sets Content-Type header
2. Use `NextResponse.json()` which sets Content-Type automatically
3. Check Next.js config doesn't override headers
4. Verify deployment includes latest code changes

### Issue: Redirects (301/302)

**Symptoms**:
- URL redirects to another location
- Status code is 301 or 302

**Diagnosis**:
```bash
curl -I -L https://app.respirelyf.com/.well-known/apple-app-site-association
```

**Solutions**:
1. Check Vercel redirects configuration
2. Verify Next.js redirects in `next.config.js`
3. Check for trailing slash redirects
4. Ensure route handler returns directly (no redirects)
5. Verify no middleware is redirecting

### Issue: Cached Old Version

**Symptoms**:
- AASA file shows old content
- Changes not reflected after deployment

**Diagnosis**:
- Check deployment timestamp
- Compare with expected content

**Solutions**:
1. Clear Vercel cache (redeploy)
2. Use browser incognito mode
3. Add cache-busting query parameter: `?v=timestamp`
4. Wait for CDN cache to expire (up to 1 hour)
5. Check Cache-Control headers are correct

### Issue: Universal Links Not Working

**Symptoms**:
- Links open in Safari instead of app
- App doesn't respond to links

**Diagnosis**:
1. Verify AASA file is accessible and valid
2. Check iOS app Associated Domains configuration
3. Verify Team ID and Bundle ID match exactly
4. Test on physical device (not simulator)

**Solutions**:
1. **AASA File Issues**:
   - Verify AASA file is accessible
   - Check JSON is valid
   - Verify paths match app routes
   - Wait 24-48 hours for Apple to refresh cache

2. **iOS App Issues**:
   - Verify Associated Domains entitlement
   - Check domain format: `applinks:app.respirelyf.com`
   - Verify app is signed with correct Team ID
   - Reinstall app after AASA changes

3. **Testing Issues**:
   - Test on physical device (not simulator)
   - Use Safari to test links (not other browsers)
   - Long press link to see "Open in App" option
   - Wait 24-48 hours after AASA deployment

4. **Apple Cache Issues**:
   - Apple caches AASA files for 24-48 hours
   - Changes may not appear immediately
   - Use Apple's AASA validator tool
   - Wait for cache refresh

### Issue: DEPLOYMENT_NOT_FOUND

**Symptoms**:
- Vercel shows "DEPLOYMENT_NOT_FOUND" page
- Subdomain doesn't load

**Solutions**:
1. Verify domain is added in Vercel project settings
2. Check DNS is pointing to correct Vercel project
3. Redeploy project after adding domain
4. Verify project is not paused or deleted
5. Wait for DNS propagation (up to 48 hours)

## Apple AASA Validator

**Official Validator Tool**:
- URL: https://search.developer.apple.com/appsearch-validation-tool/
- Enter: `https://app.respirelyf.com/.well-known/apple-app-site-association`
- Verify validation passes

**Expected Results**:
- ✅ File is accessible
- ✅ Valid JSON format
- ✅ App ID matches
- ✅ Paths are valid

## Testing Timeline

### Immediate (After Deployment)
- [ ] AASA file is accessible
- [ ] Returns correct Content-Type
- [ ] Valid JSON structure
- [ ] No redirects

### 1-2 Hours After Deployment
- [ ] DNS fully propagated
- [ ] SSL certificate active
- [ ] CDN cache updated
- [ ] All paths accessible

### 24-48 Hours After Deployment
- [ ] Apple AASA cache refreshed
- [ ] Universal Links working on iOS
- [ ] Test all deep link paths
- [ ] Verify app opens correctly

## Fallback Strategy

If Universal Links fail after proper setup:

1. **Verify AASA File**
   - Confirm file is accessible and valid
   - Check with Apple's validator tool
   - Verify JSON structure is correct

2. **Check iOS App Configuration**
   - Verify Associated Domains entitlement
   - Check Team ID and Bundle ID match
   - Ensure app is properly signed

3. **Alternative Deep Linking**
   - Consider Branch.io for universal deep linking
   - Use Firebase Dynamic Links as fallback
   - Implement smart app banners
   - Use custom URL schemes as backup

4. **Support Resources**
   - Apple Developer Documentation
   - Vercel Support for domain issues
   - iOS Developer Forums
   - Test with Apple's validation tools

## Success Criteria

✅ **AASA File**
- Accessible at correct URL
- Returns raw JSON
- Content-Type: application/json
- Status 200 (no redirects)

✅ **Domain Configuration**
- Subdomain resolves correctly
- HTTPS certificate active
- No DEPLOYMENT_NOT_FOUND error

✅ **Universal Links**
- Links open app when installed
- Links open website when app not installed
- All paths route correctly
- No interference from smart banners

✅ **iOS App**
- Associated Domains configured
- Deep link handling implemented
- All routes work correctly
