# Facebook Open Graph Fixes

## Issues Identified from Facebook Sharing Debugger

### 1. ✅ **Title & Description Updated**
- **Old Title**: "Respire LYF - All-in-One Respiratory Co-Pilot"
- **New Title**: "Respire LYF" ✅
- **Old Description**: "Transform scattered symptoms into clear patterns..."
- **New Description**: "Transforming respiratory care through intelligent, all-in-one analysis..." ✅

**Status**: Code is updated. Facebook is showing cached data. After deployment, click "Scrape Again" in Facebook Debugger.

### 2. ⚠️ **Open Graph Image**
- Currently using: `/icons/respirelyf_logo.png`
- **Issue**: Logo may not be ideal aspect ratio (1200x630) for Open Graph
- **Recommendation**: Create a dedicated Open Graph image (1200x630px) with your logo and branding

### 3. ✅ **Facebook App ID Support Added**
- Added support for `NEXT_PUBLIC_FACEBOOK_APP_ID` environment variable
- **To add**: Set `NEXT_PUBLIC_FACEBOOK_APP_ID` in your `.env.local` file
- **How to get**: Create a Facebook App at https://developers.facebook.com/apps/

### 4. ⚠️ **URL Consistency**
- **Issue**: `og:url` points to `https://respirelyf.com/` but redirects to `https://www.respirelyf.com/`
- **Solution**: Ensure `NEXT_PUBLIC_SITE_URL` matches your final canonical URL (with or without www)
- **Current**: Defaults to `https://respirelyf.com` (no www)

## Next Steps After Deployment

1. **Update Environment Variable** (if needed):
   ```env
   NEXT_PUBLIC_SITE_URL=https://respirelyf.com
   # Or if you use www:
   # NEXT_PUBLIC_SITE_URL=https://www.respirelyf.com
   ```

2. **Add Facebook App ID** (optional but recommended):
   ```env
   NEXT_PUBLIC_FACEBOOK_APP_ID=your_facebook_app_id
   ```

3. **Clear Facebook Cache**:
   - Go to: https://developers.facebook.com/tools/debug/
   - Enter your URL: `https://respirelyf.com`
   - Click "Scrape Again" to clear cache and fetch new metadata

4. **Verify Open Graph Tags**:
   - Check that title shows: "Respire LYF"
   - Check that description shows the new text
   - Verify image displays correctly

5. **Test Social Sharing**:
   - Test on Facebook
   - Test on Twitter/X
   - Test on LinkedIn

## Current Configuration

- **Title**: ✅ "Respire LYF"
- **Description**: ✅ "Transforming respiratory care through intelligent, all-in-one analysis..."
- **Image**: `/icons/respirelyf_logo.png` (may need optimization)
- **URL**: `https://respirelyf.com` (ensure this matches your canonical URL)
- **Facebook App ID**: Optional (add via environment variable)

## Notes

- Facebook caches Open Graph data aggressively. Always use "Scrape Again" after making changes.
- Open Graph images should be at least 1200x630px for best results.
- The logo image may need to be optimized or replaced with a dedicated OG image for better social sharing appearance.
