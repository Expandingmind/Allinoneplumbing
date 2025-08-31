# All In One Plumbing Website

A modern, conversion-focused plumbing company website built with Next.js 14, TypeScript, and Tailwind CSS. Features responsive design, dark/light theming, SEO optimization, and integrated quote forms.

## 🚀 Quick Start

```bash
# Install dependencies
npm install
# or
pnpm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📋 Features

- **🎨 Modern Design**: Clean, professional design following conversion best practices
- **📱 Responsive**: Mobile-first design with excellent mobile experience
- **🌙 Theme System**: Gold & Navy theme with optional dark luxury theme
- **⚡ Performance**: Optimized for Core Web Vitals and Lighthouse scores 90+
- **🔍 SEO Optimized**: Meta tags, structured data, and semantic HTML
- **📧 Contact Forms**: Integrated quote forms with email notifications
- **🏪 Local SEO**: Service area pages optimized for local search
- **♿ Accessible**: WCAG compliant with keyboard navigation and screen reader support

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Lucide React icons
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API for form submissions
- **Testing**: Playwright for E2E tests
- **Deployment**: Optimized for Vercel/Netlify

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (site)/            # Main website routes
│   │   ├── page.tsx       # Homepage
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── rates/         # Pricing page
│   │   ├── portfolio/     # Portfolio/gallery
│   │   ├── services/      # Services pages
│   │   └── service-areas/ # Location-based pages
│   ├── api/               # API routes
│   │   └── quote/         # Quote form handler
│   └── providers.tsx      # Theme and context providers
├── components/            # Reusable UI components
│   ├── TopBar.tsx         # Top notification bar
│   ├── Nav.tsx           # Main navigation
│   ├── Hero.tsx          # Hero sections
│   ├── ServiceCard.tsx   # Service display cards
│   ├── FAQ.tsx           # FAQ accordion
│   ├── QuoteForm.tsx     # Lead capture form
│   └── ui/               # Base UI components
├── lib/                  # Utilities and data
│   ├── services.ts       # Service definitions
│   ├── cities.ts         # Service area data
│   ├── schema.ts         # SEO schema helpers
│   └── utils.ts          # Common utilities
├── theme/               # Theme system
│   ├── tokens.ts        # Theme type definitions
│   ├── gold-navy.ts     # Default theme
│   ├── dark-luxury.ts   # Alternative theme
│   └── index.ts         # Theme utilities
├── styles/              # Global styles
├── tests/               # E2E tests
└── public/              # Static assets
```

## 🎨 Theming System

The website uses a CSS-variable-based theming system that can be changed via environment variables or runtime controls.

### Available Themes

1. **Gold & Navy** (default): Professional gold accents with navy secondary
2. **Dark Luxury**: Dark mode with gold accents

### Changing Themes

**Environment Variable:**
```bash
NEXT_PUBLIC_THEME=gold-navy  # or dark-luxury
```

**Runtime Toggle:**
The `ThemeToggle` component allows users to switch themes dynamically.

### Custom Themes

To add a new theme:

1. Create a new theme file in `/theme/` (e.g., `green-theme.ts`)
2. Define the theme using the `ThemeTokens` type
3. Add it to the themes object in `/theme/index.ts`
4. Update the theme toggle component if needed

## 📝 Content Management

### Adding Services

Edit `/lib/services.ts`:

```typescript
{
  slug: "new-service",
  name: "New Service",
  blurb: "Service description",
  priceFrom: 199
}
```

Then create content in `/app/(site)/services/[slug]/page.tsx` serviceContent object.

### Adding Service Areas

Edit `/lib/cities.ts`:

```typescript
{
  slug: "new-city-state",
  name: "New City, STATE",
  zipPrefix: "123",
  phone: "(123) 456-7890"
}
```

Add city-specific content in `/app/(site)/service-areas/[city]/page.tsx`.

### Updating Company Information

Key places to update:

- Environment variables (phone, email, company name)
- Footer content in homepage
- About page team and company details
- Contact page business hours and info

## 📧 Email Configuration

The website uses Resend for email delivery. Configure in your environment:

```bash
RESEND_API_KEY=your_resend_api_key
ORG_EMAIL=allinplumbingsolutions@gmail.com
```

Quote form submissions are sent to `ORG_EMAIL` with tracking data.

## 📊 Analytics & Tracking

Configure analytics in your environment:

```bash
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
```

The quote form includes conversion tracking for Google Ads.

## 🔍 SEO Configuration

### Meta Tags
Each page includes optimized title and description tags.

### Structured Data
JSON-LD schema is implemented for:
- Local Business
- Services
- FAQ pages

### Sitemap
Generate a sitemap by creating `/app/sitemap.ts` (Next.js 14 feature).

## 🧪 Testing

Run E2E tests with Playwright:

```bash
# Install Playwright
npx playwright install

# Run tests
npm run test
# or
pnpm test
```

Tests cover:
- Page navigation
- Form submissions
- Theme switching
- Mobile responsiveness
- Basic accessibility

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Netlify

1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set environment variables in Netlify settings

### Environment Variables for Production

Required:
```bash
RESEND_API_KEY=your_production_key
ORG_EMAIL=allinplumbingsolutions@gmail.com
NEXT_PUBLIC_COMPANY_NAME=Your Company Name
NEXT_PUBLIC_PHONE=(954) 657-3429
NEXT_PUBLIC_EMAIL=allinplumbingsolutions@gmail.com
```

Optional:
```bash
NEXT_PUBLIC_THEME=gold-navy
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
```

## 📈 Performance Optimization

The website is optimized for Core Web Vitals:

- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Optimization**: Tailwind CSS with JIT compilation
- **Font Optimization**: System fonts for fast loading
- **Bundle Analysis**: Use `npm run build` to check bundle sizes

### Lighthouse Goals

Target scores (achieved):
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
npm run test         # Run Playwright tests
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Run tests: `npm run test`
5. Commit changes: `git commit -am 'Add new feature'`
6. Push to branch: `git push origin feature/new-feature`
7. Submit a pull request

## 📄 License

This project is private and proprietary to All In One Plumbing.

## 🆘 Support

For technical support or questions about this website:

- Review this README for common issues
- Check the `/tests/` directory for usage examples
- Contact the development team for additional support

## 🔄 Maintenance

### Regular Updates
- Dependencies: Review and update monthly
- Content: Update service pricing and areas as needed
- SEO: Monitor and update meta descriptions quarterly

### Monitoring
- Set up uptime monitoring for the contact form
- Monitor Core Web Vitals with Google PageSpeed Insights
- Review analytics data monthly for optimization opportunities

### Backup
- Repository is backed up via Git
- Environment variables should be documented and backed up securely
- Database not required (static site with API integrations)
# Environment variables configured for quote forms

