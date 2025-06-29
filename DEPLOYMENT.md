# 🚀 Portfolio Deployment Guide

## GitHub Pages (Recommended - Permanent & Free)

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio` (or whatever you prefer)
3. Make it public

### Step 2: Push Your Code
```bash
# Initialize git (if not already done)
git init

# Add your GitHub repository as remote
git remote add origin https://github.com/abhinandansharma/portfolio.git

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy to GitHub Pages
```bash
# Deploy your portfolio
npm run deploy
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch and **/(root)** folder
6. Click **Save**

Your portfolio will be live at: `https://abhinandansharma.github.io/portfolio`

## Alternative Hosting Options

### 1. Netlify (Also Permanent & Free)
- **Pros**: Great performance, custom domains, automatic deployments
- **Cons**: Free tier has some limitations
- **Setup**: Drag and drop your `build` folder to Netlify

### 2. Firebase Hosting (Google - Permanent)
- **Pros**: Google's infrastructure, very reliable, custom domains
- **Cons**: Slightly more complex setup
- **Setup**: Use Firebase CLI to deploy

### 3. Vercel (Good but can expire)
- **Pros**: Excellent performance, easy setup
- **Cons**: Can remove inactive projects
- **Setup**: Connect GitHub repo to Vercel

## Custom Domain Setup

### GitHub Pages Custom Domain
1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In GitHub repository settings → Pages
3. Add your custom domain
4. Update DNS records as instructed

### Netlify Custom Domain
1. In Netlify dashboard → Site settings → Domain management
2. Add custom domain
3. Update DNS records

## Maintenance

### GitHub Pages
- **Automatic**: Every time you push to main branch and run `npm run deploy`
- **Manual**: Run `npm run deploy` when you make changes

### Keep It Alive
- GitHub Pages: **Never expires** - completely permanent
- Netlify: **6+ months of inactivity** before removal
- Firebase: **Never expires**
- Vercel: **Can expire** after inactivity

## Recommended Workflow

1. **Use GitHub Pages** for permanent hosting
2. **Set up automatic deployment**:
   ```bash
   # After making changes
   git add .
   git commit -m "Update portfolio"
   git push
   npm run deploy
   ```
3. **Add custom domain** later if desired

## Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
npm run deploy
```

### GitHub Pages Not Updating
- Check if gh-pages branch was created
- Verify GitHub Pages is enabled in repository settings
- Wait 5-10 minutes for changes to propagate

---

**Your portfolio will be live forever on GitHub Pages!** 🎉 