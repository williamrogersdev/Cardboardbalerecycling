# Cardboard Bale Recycling Website

A comprehensive lead generation and SEO-focused website for cardboard bale recycling services.

## Features

- 🌱 **Lead Generation**: Multiple contact forms and quote requests
- 🔍 **SEO Optimized**: State and city-specific pages for local search
- 📱 **Responsive Design**: Mobile-first approach with modern UI
- ⚡ **Performance**: Optimized with Next.js static generation
- ♻️ **Eco-Friendly**: Focus on sustainability and environmental benefits

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form with Web3Forms integration
- **Deployment**: Vercel-ready

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── page.tsx                    # Homepage
├── services/
│   └── page.tsx               # Services Overview
├── pricing/
│   └── page.tsx               # Pricing & Market Data
├── how-it-works/
│   └── page.tsx               # Process Explanation
├── quote/
│   └── page.tsx               # Quote Request Form
├── service-areas/
│   └── page.tsx               # Coverage Areas
├── resources/
│   └── page.tsx               # Educational Content
├── [state]/
│   ├── page.tsx               # State overview page
│   └── [city]/
│       └── page.tsx           # City-specific pages
└── components/
    └── ...                    # Reusable components
```

## SEO Strategy

### Target Keywords

- Cardboard bale recycling
- Cardboard waste pickup
- Sell cardboard bales
- Regional cardboard recycling services

### Content Strategy

- Comprehensive FAQ sections
- Real-time pricing information
- Industry-specific guides
- Environmental compliance information

## Lead Generation

- **Web3Forms Integration**: Secure form handling
- **Multiple CTAs**: Quote requests and pickup scheduling
- **Value Propositions**: Cost savings and revenue generation
- **Trust Signals**: Certifications and testimonials

## Performance

- ⚡ Static Site Generation for fast loading
- 📱 Mobile-first responsive design
- 🎯 Core Web Vitals optimization
- 🔍 SEO-friendly meta tags and schema markup

## Environment Variables

The quote and contact forms post to this site's own `/api/leads` route, which
sends the lead to 1DB from the server. Set these in Vercel (Production and
Preview) or in `.env.local`. They are server-side only: never give the key a
`NEXT_PUBLIC_` name, which would put it in the browser bundle.

```
DB_API_ENDPOINT=https://<1db-host>   # the 1DB base URL, without /v1/leads
DB_API_KEY=<set in Vercel, server-side only>
```

## Deployment

This project is optimized for Vercel deployment:

```bash
npm run build
```

## Brand Guidelines

- **Colors**: Eco green (#16a34a), recycling blue (#0ea5e9), earth brown (#a3a3a3)
- **Style**: Professional, eco-friendly, trust-building
- **Tone**: Environmental, reliable, cost-saving focused

## License

Private - All rights reserved
