# RespireLYF Website - Setup Instructions

## ✅ Website Created Successfully!

All files have been created. Follow these steps to view your website:

## Step 1: Open Terminal/PowerShell

Navigate to the website folder:
```powershell
cd "E:\RespireLYF---User-Experience-dev-aftab-design\Respire LYF Website"
```

## Step 2: Install Dependencies

If you get a PowerShell execution policy error, run this first:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then install dependencies:
```powershell
npm install
```

**Alternative if npm doesn't work:**
- Open Command Prompt (cmd) instead of PowerShell
- Navigate to the folder
- Run: `npm install`

## Step 3: Start Development Server

```powershell
npm run dev
```

## Step 4: View Website

Open your browser and go to:
```
http://localhost:3000
```

## 🎉 You're Done!

The website will automatically reload when you make changes to files.

---

## Project Structure

```
Respire LYF Website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/            # Header, Footer
│   ├── sections/         # Page sections (Hero, Challenge, etc.)
│   └── compliance/       # FDA disclaimer
├── lib/                   # Utilities
│   ├── constants.ts      # Health determinants & indicators
│   └── seo.ts            # SEO metadata
└── public/               # Static assets
    └── images/           # Icons (10 determinants + 5 indicators)
```

## Features Included

✅ Modern Next.js 14 with App Router
✅ TypeScript for type safety
✅ Tailwind CSS for styling
✅ Framer Motion animations
✅ SEO optimized
✅ Mobile responsive
✅ WCAG 2.1 AA accessible
✅ Performance optimized
✅ All 10 Health Determinants
✅ All 5 Health Indicators
✅ FDA compliance disclaimer
✅ Professional design matching your requirements

## Next Steps (Optional)

1. **Replace Placeholder Icons**: Add your actual app icons to:
   - `public/images/determinants/` (10 SVG files)
   - `public/images/indicators/` (5 SVG files)

2. **Update Links**: 
   - App Store link in `components/layout/Header.tsx`
   - Google Play link in `components/sections/CTA.tsx`
   - Reference Hub link in `components/sections/ScientificEvidence.tsx`

3. **Customize Colors**: Edit `tailwind.config.js` to match your brand colors

4. **Add Analytics**: Add Google Analytics in `app/layout.tsx`

## Troubleshooting

**Issue: npm command not found**
- Make sure Node.js is installed: https://nodejs.org/
- Restart terminal after installing Node.js

**Issue: Port 3000 already in use**
- The dev server will automatically use port 3001, 3002, etc.
- Or stop the process using port 3000

**Issue: Module not found errors**
- Run `npm install` again
- Delete `node_modules` folder and `.next` folder, then run `npm install` again

## Build for Production

```powershell
npm run build
npm start
```

This creates an optimized production build.

