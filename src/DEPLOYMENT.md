# Sanctuary Systems - Deployment Guide

## 🚀 How to Turn This Into a Website

### Prerequisites
- Node.js 18+ installed
- Git installed
- A GitHub account (for easy deployment)

---

## Method 1: Deploy with Vercel (Recommended - 5 minutes)

### Step 1: Prepare Your Project
```bash
# Make sure you have a package.json
# If not, create one with these dependencies
```

### Step 2: Create vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Step 3: Deploy
1. Visit https://vercel.com
2. Click "Import Project"
3. Import from Git or upload your folder
4. Vercel will auto-detect settings
5. Click "Deploy"
6. Your site will be live at: `https://your-app.vercel.app`

**Custom Domain:**
- In Vercel dashboard → Settings → Domains
- Add your custom domain (e.g., sanctuary.com)

---

## Method 2: Deploy with Netlify

### Step 1: Build Your Project
```bash
npm run build
```

### Step 2: Deploy
**Option A - Drag & Drop:**
1. Visit https://netlify.com
2. Drag your `dist` folder to the deploy zone
3. Done!

**Option B - Git:**
1. Push code to GitHub
2. Connect repository in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

**Custom Domain:**
- In Netlify dashboard → Domain settings
- Add custom domain

---

## Method 3: Deploy with GitHub Pages

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
```json
{
  "homepage": "https://yourusername.github.io/sanctuary-app",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Deploy
```bash
npm run deploy
```

Your site will be live at: `https://yourusername.github.io/sanctuary-app`

---

## Environment Setup

### Required Files

**package.json** (if not exists):
```json
{
  "name": "sanctuary-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "latest",
    "class-variance-authority": "^0.7.1",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-slider": "^1.2.2",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-slot": "^1.1.2",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "react-day-picker": "^9.4.3",
    "motion": "latest"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.11",
    "typescript": "^5.8.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "tailwindcss": "^4.0.0"
  }
}
```

**vite.config.ts**:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // For relative paths
});
```

---

## Domain & Hosting Costs

### Free Options:
- **Vercel**: Free for personal projects
- **Netlify**: Free tier (100GB bandwidth)
- **GitHub Pages**: Completely free
- **Cloudflare Pages**: Free unlimited requests

### Paid Options (if you need more):
- **Vercel Pro**: $20/month (custom domains, more bandwidth)
- **Netlify Pro**: $19/month
- **Custom Domain**: $10-15/year (from Namecheap, Google Domains)

---

## Custom Domain Setup

### Purchase Domain:
1. Go to Namecheap, Google Domains, or Cloudflare
2. Search for available domain (e.g., sanctuary-wellness.com)
3. Purchase (~$12/year)

### Connect to Vercel/Netlify:
1. In your hosting dashboard, go to Domain Settings
2. Add your custom domain
3. Update DNS records at your domain registrar:
   - Add CNAME record pointing to your host
   - Wait 24-48 hours for DNS propagation

---

## Security & Privacy Notes

### Important for Trauma-Informed App:
1. **SSL Certificate**: Automatically provided by Vercel/Netlify
2. **Local Storage**: Data stays on user's device
3. **No Analytics by Default**: Add privacy-focused analytics only if needed
4. **HIPAA Compliance**: If handling health data, consult legal counsel

### Recommended Privacy Additions:
```typescript
// Add to your app
// Privacy-focused analytics (optional)
// Use Plausible or Fathom (privacy-first analytics)
```

---

## Testing Before Deploy

```bash
# Build locally
npm run build

# Preview production build
npm run preview

# Test on mobile devices on same network
# Your app will be available at http://192.168.x.x:4173
```

---

## Troubleshooting

### Build Errors:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues:
- For Vercel: Add `vercel.json` with rewrites
- For Netlify: Add `_redirects` file

### Asset Loading Issues:
- Check `base` path in vite.config.ts
- Use relative paths for assets

---

## Continuous Deployment

Once connected to Git:
1. Push changes to main branch
2. Vercel/Netlify auto-deploys
3. Live in 1-2 minutes
4. Automatic SSL renewal

---

## Support

Need help? Common resources:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vite.dev

---

## Next Steps After Deployment

1. ✅ Test all features on mobile and desktop
2. ✅ Add privacy policy page
3. ✅ Set up custom domain
4. ✅ Share with your research participants
5. ✅ Monitor performance
6. ✅ Collect feedback

**Your trauma-informed wellness app will be live and helping people! 💜✨**
