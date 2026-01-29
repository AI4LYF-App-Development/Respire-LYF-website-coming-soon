# Vercel Domain Configuration for Apple Universal Links

## Overview
This document outlines the steps to configure the `app.respirelyf.com` subdomain on Vercel and ensure proper deployment for Apple Universal Links.

## Prerequisites
- Vercel account with access to the RespireLYF project
- DNS access to `respirelyf.com` domain
- Project already deployed on Vercel

## Step-by-Step Configuration

### 1. Add Subdomain to Vercel Project

1. **Navigate to Vercel Dashboard**
   - Go to https://vercel.com/dashboard
   - Select the RespireLYF project

2. **Access Project Settings**
   - Click on the project name
   - Go to **Settings** tab
   - Click on **Domains** in the left sidebar

3. **Add Domain**
   - Click **Add** or **Add Domain** button
   - Enter: `app.respirelyf.com`
   - Click **Add** to confirm

4. **Verify Domain Status**
   - Wait for Vercel to verify the domain
   - Status should show as **Valid Configuration** or **Ready**

### 2. Configure DNS Records

You need to add a DNS record pointing `app.respirelyf.com` to Vercel. Vercel will provide the exact DNS configuration needed.

**Option A: CNAME Record (Recommended)**
- **Type**: CNAME
- **Name**: `app`
- **Value**: Vercel-provided CNAME target (e.g., `cname.vercel-dns.com` or similar)
- **TTL**: 3600 (or default)

**Option B: A Record (If CNAME not supported)**
- **Type**: A
- **Name**: `app`
- **Value**: Vercel-provided IP addresses (usually multiple)
- **TTL**: 3600 (or default)

**DNS Configuration Steps:**
1. Log in to your DNS provider (e.g., Cloudflare, GoDaddy, Namecheap)
2. Navigate to DNS management for `respirelyf.com`
3. Add the CNAME or A record as provided by Vercel
4. Save the changes
5. Wait for DNS propagation (usually 5-60 minutes, can take up to 48 hours)

### 3. Verify DNS Configuration

**Check DNS Propagation:**
```bash
# Check CNAME record
dig app.respirelyf.com CNAME

# Check A record
dig app.respirelyf.com A

# Alternative using nslookup
nslookup app.respirelyf.com
```

**Expected Results:**
- CNAME should point to Vercel's domain
- A records should point to Vercel's IP addresses
- DNS should resolve correctly

### 4. Redeploy Project

After adding the domain:

1. **Trigger Redeployment**
   - Go to **Deployments** tab in Vercel dashboard
   - Click **Redeploy** on the latest deployment, OR
   - Push a new commit to trigger automatic deployment

2. **Verify Deployment**
   - Wait for deployment to complete
   - Check deployment status shows **Ready**

### 5. Verify Subdomain is Live

**Test URL Accessibility:**
1. Open browser and navigate to: `https://app.respirelyf.com`
2. **Expected**: Website loads correctly
3. **NOT Expected**: DEPLOYMENT_NOT_FOUND error or 404 page

**If DEPLOYMENT_NOT_FOUND appears:**
- Verify domain is correctly added in Vercel dashboard
- Check DNS records are properly configured
- Wait for DNS propagation (can take up to 48 hours)
- Try redeploying the project
- Clear browser cache and try again

### 6. Verify AASA File Accessibility

**Test AASA Endpoint:**
1. Navigate to: `https://app.respirelyf.com/.well-known/apple-app-site-association`
2. **Expected**: Raw JSON response (not HTML)
3. **Verify Headers**: 
   - Content-Type: `application/json`
   - Status: 200 (not 404 or redirect)

**Using cURL:**
```bash
# Test AASA file accessibility
curl -I https://app.respirelyf.com/.well-known/apple-app-site-association

# Test with full response
curl https://app.respirelyf.com/.well-known/apple-app-site-association

# Verify Content-Type
curl -H "Accept: application/json" https://app.respirelyf.com/.well-known/apple-app-site-association
```

**Expected Response:**
```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "6752850093.com.ai4lyf.RespireLYF",
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

## Troubleshooting

### Issue: Domain Not Resolving
**Symptoms**: DNS lookup fails or times out
**Solutions**:
- Verify DNS records are correctly configured
- Check DNS provider's propagation status
- Wait for DNS propagation (up to 48 hours)
- Verify domain spelling is correct

### Issue: DEPLOYMENT_NOT_FOUND Error
**Symptoms**: Vercel shows deployment not found page
**Solutions**:
- Verify domain is added in Vercel project settings
- Check DNS is pointing to correct Vercel project
- Redeploy the project after adding domain
- Verify project is not paused or deleted

### Issue: SSL Certificate Not Available
**Symptoms**: HTTPS not working, certificate errors
**Solutions**:
- Vercel automatically provisions SSL certificates
- Wait 5-10 minutes after domain addition
- Verify DNS is correctly configured
- Check Vercel dashboard for SSL status

### Issue: AASA File Returns 404
**Symptoms**: AASA endpoint returns 404 Not Found
**Solutions**:
- Verify route handler is deployed: `app/.well-known/apple-app-site-association/route.ts`
- Check deployment logs for errors
- Verify file path is correct (no `.json` extension)
- Clear Vercel cache and redeploy

### Issue: AASA File Returns HTML
**Symptoms**: Browser shows HTML page instead of JSON
**Solutions**:
- Verify route handler sets `Content-Type: application/json`
- Check Next.js routing is working correctly
- Verify no redirects are interfering
- Test with cURL to see raw response

## Post-Deployment Checklist

- [ ] Domain `app.respirelyf.com` added to Vercel project
- [ ] DNS records configured and propagated
- [ ] Subdomain resolves correctly (no DEPLOYMENT_NOT_FOUND)
- [ ] HTTPS certificate is active
- [ ] Website loads at `https://app.respirelyf.com`
- [ ] AASA file accessible at `https://app.respirelyf.com/.well-known/apple-app-site-association`
- [ ] AASA file returns raw JSON (not HTML)
- [ ] Content-Type header is `application/json`
- [ ] Status code is 200 (not 404 or redirect)

## Additional Notes

- DNS propagation can take 5 minutes to 48 hours depending on TTL and DNS provider
- Vercel automatically provisions SSL certificates (usually within 5-10 minutes)
- Always test AASA file accessibility after deployment
- Keep DNS records updated if Vercel changes their infrastructure
- Monitor Vercel dashboard for any domain-related warnings or errors
