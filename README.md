# Nanoprobo - AI Detection Platform

A modern, responsive website for Nanoprobo, an AI detection platform inspired by proboscis monkey technology. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Optimized for all devices
- **Modern UI** - Clean, professional interface with Tailwind CSS
- **Forms with Security** - Early Access and Newsletter signup with Cloudflare Turnstile
- **Email Integration** - Double opt-in verification via Resend.com
- **Cookie Consent** - GDPR compliant cookie management
- **SEO Optimized** - Meta tags, sitemap, and structured data
- **Static Export Ready** - Deployable to Cloudflare Pages, Vercel, or any static host

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Email**: Resend.com
- **Security**: Cloudflare Turnstile
- **Deployment**: Cloudflare Pages (static export)

## 📁 Project Structure

```
nanoprobo-website/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── pricing/           # Pricing page
│   └── ...                # Other pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── early-access-form.tsx
│   ├── newsletter-signup.tsx
│   └── ...               # Other components
├── lib/                  # Utility libraries
│   ├── email.tsx         # Email functionality
│   ├── turnstile.ts      # Turnstile integration
│   └── utils.ts          # General utilities
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ceanlio/nanoprobo.git
cd nanoprobo
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Add your environment variables to `.env.local`:
```env
RESEND_API_KEY=your_resend_api_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Development

Start the development server:
```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
pnpm build
# or
npm run build
```

This creates an `out/` directory with static files ready for deployment.

## 🌐 Deployment

### Cloudflare Pages (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
3. Create a new project and connect your repository
4. Configure build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
5. Add environment variables in Cloudflare Pages settings
6. Deploy!

### Other Platforms

This project can also be deployed to:
- **Vercel** - Zero-config deployment
- **Netlify** - Static site hosting
- **GitHub Pages** - Free hosting for public repos
- **Any static host** - Upload the `out/` directory

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend.com API key for email sending | Yes |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret key | Yes |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key | Yes |
| `NEXT_PUBLIC_APP_URL` | Your app's URL (for email links) | Yes |

## 📧 Email Setup

### Resend.com Setup
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your environment variables

### Cloudflare Turnstile Setup
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Turnstile
2. Create a new site
3. Get your site key and secret key
4. Add them to your environment variables

## 🎨 Customization

### Branding
- Update the logo in `components/proboscis-monkey-logo.tsx`
- Modify colors in `tailwind.config.js`
- Update meta tags in `app/layout.tsx`

### Content
- Edit page content in respective `app/*/page.tsx` files
- Update form fields in `components/early-access-form.tsx`
- Modify email templates in `lib/email.tsx`

### Styling
- Customize Tailwind classes throughout components
- Add new components in `components/` directory
- Update global styles in `app/globals.css`

## 📱 Pages

- **Home** (`/`) - Landing page with hero, features, about, and newsletter
- **About** (`/about`) - Company information and values
- **Pricing** (`/pricing`) - Pricing plans and features
- **Blog** (`/blog`) - Blog posts and resources
- **Contact** (`/contact`) - Contact information and form
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service
- **Status** (`/status`) - System status page
- **Use Cases** (`/use-cases`) - Use case examples

## 🔒 Security Features

- **Cloudflare Turnstile** - Bot protection on all forms
- **Email Verification** - Double opt-in for all subscriptions
- **Environment Variables** - Secure API key management
- **Input Validation** - Client and server-side validation

## 📊 Performance

- **Static Export** - Fast loading with pre-rendered pages
- **Image Optimization** - Optimized images and lazy loading
- **Code Splitting** - Automatic code splitting for better performance
- **CDN Ready** - Optimized for global content delivery

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 🆘 Support

For support, email support@nanoprobo.com or create an issue in this repository.

---

Built with ❤️ for the future of AI detection technology.
