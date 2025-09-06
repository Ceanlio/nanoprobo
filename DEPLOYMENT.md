# Deployment Guide

## Environment Variables Required

Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration (Resend.com)
RESEND_API_KEY=your_resend_api_key_here

# Cloudflare Turnstile Configuration
TURNSTILE_SECRET_KEY=your_turnstile_secret_key_here
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

For production, update `NEXT_PUBLIC_APP_URL` to your domain:
```env
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Cloudflare Pages Deployment

### Step 1: Prepare Repository
1. Push your code to GitHub/GitLab
2. Ensure all files are committed

### Step 2: Connect to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **Create a project**
3. Connect your Git repository

### Step 3: Configure Build Settings
```
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: / (leave empty)
Node.js version: 18.x or 20.x
```

### Step 4: Add Environment Variables
In Cloudflare Pages settings, add all the environment variables from your `.env.local` file.

### Step 5: Deploy
Click **Save and Deploy** and wait for the build to complete.

## Alternative Deployment Options

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Next.js configuration
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Add environment variables
5. Deploy

### Manual Static Hosting
1. Run `npm run build`
2. Upload the contents of the `out/` directory to your web server
3. Configure your server to serve static files

## Post-Deployment Checklist

- [ ] Test all forms (Early Access and Newsletter)
- [ ] Verify email sending works
- [ ] Check Turnstile captcha functionality
- [ ] Test responsive design on mobile
- [ ] Verify all links work correctly
- [ ] Check SEO meta tags
- [ ] Test cookie consent banner
- [ ] Verify SSL certificate is working
