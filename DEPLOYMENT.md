# 🚀 Portfolio Deployment Guide

This guide will help you deploy your personal portfolio to various platforms.

## 📋 Prerequisites

1. **EmailJS Setup** (for Contact Form)
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create a free account
   - Create a new service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Public Key, Service ID, and Template ID

2. **Environment Variables**
   - Copy `env.example` to `.env`
   - Fill in your EmailJS credentials:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   ```

## 🛠️ Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment Options

### 1. Netlify (Recommended - Free & Easy)

**Option A: Drag & Drop**
1. Run `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag the `dist` folder to the deploy area
4. Add environment variables in Site Settings > Environment Variables

**Option B: Git Integration**
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables in Site Settings

**Option C: Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
npm run deploy:netlify
```

### 2. Vercel (Great for React Apps)

**Option A: Vercel CLI**
```bash
npm install -g vercel
vercel login
npm run deploy:vercel
```

**Option B: Git Integration**
1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Vercel auto-detects Vite configuration
4. Add environment variables in Project Settings

### 3. GitHub Pages

```bash
npm install --save-dev gh-pages
npm run deploy:github
```

### 4. Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## 🔧 Environment Variables Setup

### Netlify
1. Go to Site Settings > Environment Variables
2. Add:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`

### Vercel
1. Go to Project Settings > Environment Variables
2. Add the same variables as above

### GitHub Pages
- Use GitHub Secrets in Actions (if using GitHub Actions)
- Or hardcode for public repos (not recommended for sensitive data)

## 📱 Custom Domain Setup

### Netlify
1. Go to Site Settings > Domain Management
2. Add your custom domain
3. Update DNS records as instructed

### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records

## 🚨 Important Notes

1. **EmailJS Setup**: Make sure to configure your EmailJS template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_name}}`

2. **Build Optimization**: The build is already optimized with:
   - Code splitting
   - Asset optimization
   - Minification
   - Tree shaking

3. **SEO**: Add meta tags in `index.html` for better SEO

4. **Analytics**: You can add Google Analytics by:
   - Adding `VITE_GA_TRACKING_ID` to environment variables
   - Including GA script in `index.html`

## 🔍 Testing Before Deployment

1. **Local Testing**:
   ```bash
   npm run build
   npm run preview
   ```

2. **Check**:
   - All sections load properly
   - Contact form works (with EmailJS)
   - Responsive design on mobile
   - All links work
   - Resume download works

## 🆘 Troubleshooting

### Build Errors
- Check for TypeScript errors: `npm run lint`
- Ensure all imports are correct
- Check for missing dependencies

### Contact Form Not Working
- Verify EmailJS credentials
- Check browser console for errors
- Ensure EmailJS service is active

### 404 Errors on Refresh
- Ensure `_redirects` file is in `public` folder
- Check SPA routing configuration

## 📊 Performance Tips

1. **Image Optimization**: Use WebP format for images
2. **Lazy Loading**: Images are already optimized
3. **Code Splitting**: Already configured in `vite.config.js`
4. **CDN**: Use a CDN for faster global delivery

## 🎯 Quick Deploy Checklist

- [ ] EmailJS account created and configured
- [ ] Environment variables set up
- [ ] `npm run build` runs without errors
- [ ] `npm run preview` works locally
- [ ] Contact form tested
- [ ] All sections responsive
- [ ] Custom domain configured (if applicable)
- [ ] Analytics added (optional)

---

**Need Help?** Check the platform-specific documentation or create an issue in your repository.
