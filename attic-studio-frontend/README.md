# Attic Studio Website

Official website for Attic Studio - Building accessible system-driven RPGs for a wider audience.

## Tech Stack

- **Framework**: Next.js 15.5.6
- **React**: 19.2.0
- **TypeScript**: 5.9.3
- **Styling**: Tailwind CSS 3.4.18
- **Animations**: Framer Motion 12.23.24
- **Forms**: React Hook Form + Zod validation
- **Email**: Nodemailer 7.0.10

## Features

- Fully responsive design with mobile-first approach
- Animated background effects and smooth page transitions
- Contact form with SMTP integration
- Optimized bundle sizes (~160 KB per page)
- Static generation for optimal performance
- SEO-friendly with metadata configuration

## Pages

- **Homepage** - Company overview and Fatewalkers showcase
- **About** - Team and company history
- **Services** - Original IPs, Work-for-Hire, Attic Hatchling
- **Games** - Fatewalkers game details
- **Contact** - Contact form with email integration
- **Courses** - Mentorship program information
- **Team** - Team member profiles

## Development

### Prerequisites

- Node.js 20.x
- npm

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Update .env.local with your credentials
```

### Environment Variables

Create `.env.local` file with:

```bash
# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# SMTP Configuration (for contact form)
SMTP_HOST=your-smtp-host.com
SMTP_PORT=465
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password
SMTP_FROM=your-email@domain.com
CONTACT_EMAIL=hello@atticstudio.games
```

### Running Locally

```bash
# Development mode (with hot reload)
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Lint code
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for Coolify with nixpacks.

### Quick Deploy on Coolify

1. Connect your Git repository
2. Set environment variables
3. Deploy - nixpacks auto-configures everything
4. Add custom domain and enable SSL

## Project Structure

```
attic-studio-frontend/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── api/               # API routes (contact form)
│   ├── contact/           # Contact page
│   ├── games/             # Games page
│   ├── services/          # Services page
│   └── ...
├── components/            # React components
│   ├── layout/           # Header, Footer
│   └── ui/               # Reusable UI components
├── public/               # Static assets
│   ├── images/          # Images
│   └── videos/          # Videos
├── .env.example         # Environment variables template
├── nixpacks.toml        # Nixpacks configuration
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Bundle Size Optimization

The application is highly optimized:
- Shared JS: 102 KB (gzipped)
- Homepage: 164 KB total
- Contact page: 180 KB (includes form validation)
- Images: Optimized and lazy-loaded
- Videos: Compressed for web

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact Form

The contact form uses:
- Client-side validation with React Hook Form + Zod
- Server-side email sending with Nodemailer
- SMTP configuration via environment variables
- Error handling and user feedback

## License

Copyright 2025 Attic Studio. All rights reserved.

## Contact

- Email: roberta.migliori@atticstudio.games
- Website: https://atticstudio.games
- LinkedIn: [Attic Studio](https://linkedin.com/company/attic-studio)

---

Built with [Next.js](https://nextjs.org/) and deployed on [Coolify](https://coolify.io/)
