# Deployment Guide - Attic Studio Website

## Coolify Deployment with Nixpacks

This project is configured for deployment on Coolify using nixpacks for automatic build and deployment.

### Prerequisites

- Coolify instance configured and running
- Domain name configured (e.g., atticstudio.games)
- SMTP credentials for contact form functionality

### Configuration Files

The project includes the following configuration files:

- `nixpacks.toml` - Nixpacks build configuration
- `.env.example` - Template for environment variables
- `next.config.js` - Next.js configuration with `output: 'standalone'`
- `.dockerignore` - Files to exclude from build

### Environment Variables

Configure these environment variables in Coolify:

#### Required Variables

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://atticstudio.games

# SMTP Configuration for Contact Form
SMTP_HOST=smtps.aruba.it
SMTP_PORT=465
SMTP_USER=dev@atticstudio.games
SMTP_PASS=your-smtp-password-here
SMTP_FROM=dev@atticstudio.games
CONTACT_EMAIL=hello@atticstudio.games

# Node Environment
NODE_ENV=production
```

#### Optional Variables (Not Currently Used)

```bash
# Strapi Backend (can be removed if not needed)
NEXT_PUBLIC_STRAPI_URL=http://backend:1337
STRAPI_API_TOKEN=
```

### Deployment Steps on Coolify

1. **Create New Resource**
   - Go to your Coolify dashboard
   - Click "New Resource" → "Git Repository"

2. **Connect Repository**
   - Enter repository URL: `https://github.com/your-org/attic-studio-frontend.git`
   - Select branch: `static-deployment` (or `main` after merge)
   - Set build pack to "nixpacks" (auto-detected)

3. **Configure Build Settings**
   - Build directory: `/attic-studio-frontend` (if in monorepo) or `/` (if standalone)
   - Port: 3000
   - Start command: `npm start` (defined in nixpacks.toml)

4. **Set Environment Variables**
   - Copy variables from `.env.example`
   - Replace placeholder values with actual credentials
   - Ensure all SMTP credentials are correct

5. **Configure Domain**
   - Add your custom domain
   - Enable SSL/TLS (Let's Encrypt automatic)

6. **Deploy**
   - Click "Deploy"
   - Monitor build logs for any errors
   - First build takes 2-5 minutes

### Build Process

Nixpacks automatically:
1. Detects Node.js 20 runtime
2. Installs dependencies with `npm ci`
3. Runs production build with `npm run build`
4. Creates standalone Next.js server
5. Starts server with `npm start` on port 3000

### Build Output

The standalone build includes:
- Optimized static pages (12 pages total)
- API route for contact form (`/api/contact`)
- All necessary dependencies (~102 KB shared JS)
- Public assets (images, videos)

**Bundle Sizes:**
- Homepage: 164 KB
- About: 160 KB
- Services: 164 KB
- Contact: 180 KB (includes form validation)
- Games: 157 KB

### Port Configuration

- **Internal Port**: 3000 (Next.js server)
- **External Port**: 80/443 (configured in Coolify)

### Health Check

After deployment, verify:
1. Homepage loads: `https://atticstudio.games/`
2. All pages accessible
3. Contact form sends emails correctly
4. Images and videos load properly

### Troubleshooting

#### Build Fails

- Check Node.js version (should be 20)
- Verify `package-lock.json` exists
- Check build logs for missing dependencies

#### Contact Form Not Working

- Verify SMTP credentials are correct
- Check SMTP_PORT is 465
- Ensure SMTP_HOST allows connections from server IP
- Check server logs for nodemailer errors

#### Images Not Loading

- Verify `public` folder is included in build
- Check image paths in code
- Ensure images are not in `.gitignore`

#### Page Not Found Errors

- Verify all pages are building correctly
- Check Next.js build output for errors
- Ensure routing is configured correctly

### Manual Build (Testing Locally)

To test the standalone build locally:

```bash
# Install dependencies
npm ci

# Build standalone
npm run build

# The standalone output is in .next/standalone/
# To run it manually:
cd .next/standalone
node server.js

# Server starts on http://localhost:3000
```

### Updating Deployment

After pushing changes to the repository:
1. Coolify auto-deploys if webhook is configured
2. Or manually trigger deployment from Coolify dashboard
3. Build takes 2-5 minutes
4. Zero-downtime deployment

### Rollback

To rollback to a previous version:
1. Go to Coolify dashboard
2. Select deployment history
3. Choose previous successful build
4. Click "Redeploy"

### Performance Optimization

The standalone build is optimized for:
- Small bundle size (~102 KB shared)
- Fast page loads
- Efficient server-side rendering
- Minimal memory footprint

### Security Considerations

- Environment variables are securely stored in Coolify
- SMTP credentials never committed to repository
- SSL/TLS encryption enabled
- Security headers configured in Next.js

### Cost Estimation

For a VPS running Coolify:
- RAM required: 512 MB minimum, 1 GB recommended
- Storage: ~500 MB for application
- CPU: 1 core sufficient for moderate traffic

### Support

For deployment issues:
- Check Coolify documentation: https://coolify.io/docs
- Review Next.js standalone docs: https://nextjs.org/docs/app/api-reference/config/next-config-js/output
- Contact support: roberta.migliori@atticstudio.games
