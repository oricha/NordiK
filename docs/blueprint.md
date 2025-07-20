# Vercel Deployment Guide for NordiK

This guide provides step-by-step instructions for deploying the NordiK Next.js application to Vercel.

## Prerequisites

Before starting the deployment process, ensure you have:

- A GitHub, GitLab, or Bitbucket account with your project repository
- A Vercel account (free tier available)
- Node.js 18+ installed locally (for testing builds)
- All environment variables properly configured

## Step 1: Prepare Your Repository

1. **Ensure your repository is up to date**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Verify your project structure**
   - Ensure `package.json` has the correct build scripts
   - Verify `next.config.ts` is properly configured
   - Check that all dependencies are listed in `package.json`

## Step 2: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose your preferred method:
   - GitHub (recommended)
   - GitLab
   - Bitbucket
   - Email

## Step 3: Connect Your Repository

1. **Log in to Vercel Dashboard**
   - Navigate to [vercel.com/dashboard](https://vercel.com/dashboard)

2. **Import your project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your NordiK repository from the list
   - If not listed, click "Import Third-Party Git Repository" and add your repository URL

## Step 4: Configure Project Settings

1. **Project Configuration**
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: Leave as default (if your project is in the root)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

2. **Environment Variables**
   - Click on "Environment Variables" section
   - Add the following variables (if your app uses them):
     ```
     NODE_ENV=production
     ```
   - Add any other environment variables your application requires
   - Make sure to add them to all environments (Production, Preview, Development)

## Step 5: Configure Build Settings

1. **Build Configuration**
   - **Node.js Version**: 18.x (recommended)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

2. **Advanced Settings** (if needed)
   - **Install Command**: `npm install`
   - **Root Directory**: Leave empty (if project is in root)

## Step 6: Deploy

1. **Click "Deploy"**
   - Vercel will automatically:
     - Install dependencies
     - Build your Next.js application
     - Deploy to a preview URL

2. **Monitor the deployment**
   - Watch the build logs for any errors
   - The deployment typically takes 2-5 minutes

## Step 7: Verify Deployment

1. **Check the preview URL**
   - Vercel provides a preview URL (e.g., `https://your-project.vercel.app`)
   - Test all major functionality
   - Verify that all pages load correctly

2. **Test functionality**
   - Navigate through all pages
   - Test forms and interactive elements
   - Check responsive design on different screen sizes

## Step 8: Configure Custom Domain (Optional)

1. **Add custom domain**
   - Go to your project settings in Vercel
   - Navigate to "Domains" section
   - Add your custom domain
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - No additional configuration needed

## Step 9: Set Up Automatic Deployments

1. **Production deployments**
   - Every push to `main` branch triggers automatic deployment
   - Preview deployments are created for pull requests

2. **Branch protection** (recommended)
   - Set up branch protection rules in your Git provider
   - Require pull request reviews before merging

## Step 10: Monitor and Maintain

1. **Vercel Analytics** (optional)
   - Enable Vercel Analytics in project settings
   - Monitor performance and user behavior

2. **Performance monitoring**
   - Use Vercel's built-in performance monitoring
   - Set up alerts for performance issues

## Troubleshooting Common Issues

### Build Failures

1. **Check build logs**
   - Review the detailed build output in Vercel dashboard
   - Common issues:
     - Missing environment variables
     - TypeScript errors (check `next.config.ts` settings)
     - Missing dependencies

2. **Local testing**
   ```bash
   npm run build
   npm run start
   ```

### Environment Variables

1. **Missing variables**
   - Ensure all required environment variables are set in Vercel
   - Check that variables are added to all environments

2. **Sensitive data**
   - Never commit sensitive data to your repository
   - Use Vercel's environment variable system

### Performance Issues

1. **Image optimization**
   - Ensure images are properly optimized
   - Use Next.js Image component for better performance

2. **Bundle size**
   - Monitor bundle size in build logs
   - Consider code splitting for large components

## Best Practices

1. **Development workflow**
   - Use feature branches for new development
   - Test locally before pushing
   - Use preview deployments for testing

2. **Performance**
   - Optimize images and assets
   - Use Next.js built-in optimizations
   - Monitor Core Web Vitals

3. **Security**
   - Keep dependencies updated
   - Use environment variables for sensitive data
   - Regularly review security settings

## Useful Vercel CLI Commands

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from local machine
vercel

# Deploy to production
vercel --prod

# Pull environment variables
vercel env pull .env.local
```

## Support and Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)

---

**Note**: This guide assumes a standard Next.js setup. If your application has specific requirements (Firebase, AI features, etc.), additional configuration may be needed.
