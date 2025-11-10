# 🚀 Deployment Guide - devtrivedi.com

This guide will walk you through deploying your portfolio to **devtrivedi.com** using Vercel.

## Prerequisites

- ✅ GitHub account
- ✅ Vercel account (free tier is perfect)
- ✅ Domain ownership of devtrivedi.com
- ✅ Your code ready in a Git repository

---

## Part 1: Push Your Code to GitHub

### Step 1: Initialize Git Repository (if not already done)

```bash
# Navigate to your project directory
cd C:\Users\dev\desktop\devtrivedi

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio-website` (or any name you prefer)
3. Make it **Public** or **Private** (your choice)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 3: Push to GitHub

```bash
# Add GitHub remote (replace 'd3v07' with your username if different)
git remote add origin https://github.com/d3v07/portfolio-website.git

# Push your code
git branch -M main
git push -u origin main
```

---

## Part 2: Deploy to Vercel

### Step 1: Sign Up / Log In to Vercel

1. Go to https://vercel.com/
2. Click "Sign Up" (or "Log In")
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project

1. Click "Add New..." → "Project"
2. Find your `portfolio-website` repository
3. Click "Import"

### Step 3: Configure Project Settings

Vercel will auto-detect Next.js. Verify these settings:

- **Framework Preset:** Next.js
- **Root Directory:** `./` (leave as is)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

**Environment Variables:** None needed for now

Click **"Deploy"**

### Step 4: Wait for Deployment

- Vercel will build and deploy your site (takes 2-3 minutes)
- You'll get a temporary URL like: `portfolio-website-xyz.vercel.app`
- Click the URL to verify your site is live! 🎉

---

## Part 3: Connect Your Custom Domain (devtrivedi.com)

### Step 1: Add Domain in Vercel

1. In your Vercel project dashboard, click **"Settings"**
2. Click **"Domains"** in the left sidebar
3. In the "Domain" field, type: `devtrivedi.com`
4. Click **"Add"**

### Step 2: Add www Subdomain (Optional but Recommended)

1. Also add: `www.devtrivedi.com`
2. Click **"Add"**

### Step 3: Configure DNS Records

Vercel will show you DNS records to add. You have two options:

#### Option A: Using Vercel Nameservers (Easiest)

1. Vercel will provide you with nameservers like:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

2. Go to your domain registrar (where you bought devtrivedi.com)
   - GoDaddy: Domain Settings → Nameservers
   - Namecheap: Domain List → Manage → Nameservers
   - Google Domains: DNS → Name servers

3. Change nameservers to Vercel's nameservers

4. Click "Save" and wait (can take up to 48 hours, usually 10-30 minutes)

#### Option B: Using A Records (Alternative)

If you prefer to keep your current nameservers:

1. Go to your domain registrar's DNS settings
2. Add these DNS records:

   **For devtrivedi.com:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: Automatic (or 3600)
   ```

   **For www.devtrivedi.com:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: Automatic (or 3600)
   ```

3. Save changes and wait (10-30 minutes for propagation)

### Step 4: Verify Domain

1. Back in Vercel, it will automatically verify your domain
2. Once verified, you'll see a ✅ next to your domain
3. Visit https://devtrivedi.com to see your live site! 🚀

---

## Part 4: Set Up Automatic Deployments

Good news! This is already done! ✨

Every time you push code to GitHub, Vercel will automatically:
- Build your project
- Run tests (if any)
- Deploy to devtrivedi.com
- Show you a preview URL for each branch

### To Update Your Site:

```bash
# Make your changes
# Stage changes
git add .

# Commit changes
git commit -m "Update: description of changes"

# Push to GitHub
git push

# Vercel will auto-deploy! ⚡
```

---

## Part 5: SSL Certificate (HTTPS)

Vercel automatically provides free SSL certificates! 🔒

- Your site will be available at: `https://devtrivedi.com`
- Certificate auto-renews
- No configuration needed!

---

## Additional Configuration

### 1. Update Next.js Config for Production

The site is already configured, but if you want to add analytics or other features:

**Add Google Analytics (Optional):**

1. Get your Google Analytics ID
2. Create `src/app/layout.tsx` (already exists)
3. Add Google Analytics script in the `<head>` section

### 2. Add a Favicon

1. Create or download a favicon
2. Place it in the `public` folder as `favicon.ico`
3. Next.js will automatically use it

### 3. Configure Redirects (Optional)

Add to `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/Dev Trivedi.pdf',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
```

---

## Troubleshooting

### Issue: Domain not connecting

- **Solution:** Wait 10-30 minutes for DNS propagation
- Check DNS with: https://dnschecker.org
- Clear your browser cache

### Issue: Build failing on Vercel

- **Solution:** Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Try building locally: `npm run build`

### Issue: Images not loading

- **Solution:** Make sure images are in the `public` folder
- Use correct paths: `/images/photo.jpg` not `./images/photo.jpg`

### Issue: 404 errors on pages

- **Solution:** Make sure all page files are in `src/app/[page-name]/page.tsx`
- Restart dev server: `npm run dev`

---

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Build & Test
npm run build            # Build for production
npm run start            # Start production server locally

# Git Commands
git status               # Check changes
git add .                # Stage all changes
git commit -m "message"  # Commit changes
git push                 # Push to GitHub (auto-deploys!)

# Vercel CLI (Optional)
npm i -g vercel          # Install Vercel CLI
vercel                   # Deploy from terminal
vercel --prod            # Deploy to production
```

---

## What's Next?

✅ Your portfolio is live at **devtrivedi.com**!

Consider adding:
- [ ] Google Analytics for visitor tracking
- [ ] Blog section using MDX
- [ ] Project case studies with more details
- [ ] Contact form backend (using FormSpree or similar)
- [ ] SEO optimization with meta tags
- [ ] Open Graph images for social sharing

---

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **DNS Help:** https://vercel.com/docs/concepts/projects/domains

---

**🎉 Congratulations! Your portfolio is now live!**

Share your portfolio:
- Portfolio: https://devtrivedi.com
- LinkedIn: https://linkedin.com/in/trivedi-dev
- GitHub: https://github.com/d3v07
