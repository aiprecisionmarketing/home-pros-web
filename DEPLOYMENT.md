# 🚀 Deployment Guide: Home Pros Website

## ✅ What's Been Done

1. ✨ **Phone Number Updated**: All instances changed to **+1 (825) 435-9977**
2. 🤖 **Retell AI Integrated**: Voice agent widget added (Agent ID: `agent_4396fcbf2a8b61ef6d2317619f`)
3. 📱 **Magazine-Style Blog**: Beautiful, readable layout with generous spacing
4. 📝 **3 SEO-Optimized Articles**: Hyper-localized for Stony Plain & Spruce Grove
5. 💾 **Git Repository**: All files committed and ready to push

---

## 📤 Step 1: Push to GitHub

### Option A: Create New Repository on GitHub

1. Go to https://github.com/new
2. Create a new repository (e.g., `home-pros-website`)
3. **Don't** initialize with README (we already have code)
4. Copy the repository URL

### Then run these commands:

```bash
cd "d:\home pros marketing\New Website\home-pros-web"

# Add GitHub as remote origin (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/home-pros-website.git

# Push to GitHub
git push -u origin main
```

---

## 🌐 Step 2: Deploy to Vercel

### Method 1: Vercel Dashboard (Easiest)

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Connect your GitHub account if needed
4. Select your repository: `home-pros-website`
5. Vercel will auto-detect Next.js
6. Click "Deploy"
7. Done! Your site will be live at: `your-project.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to your project
cd "d:\home pros marketing\New Website\home-pros-web"

# Deploy (follow prompts)
vercel

# Or deploy to production directly
vercel --prod
```

---

## 🎯 Post-Deployment Checklist

### 1. Test the Retell AI Widget
- Visit your deployed site
- Click the floating "Talk to Our AI Agent" button
- Test the voice agent connection
- Fallback: If widget doesn't work, it will redirect to `tel:+18254359977`

### 2. Test Blog Posts
- Visit `/blog` on your live site
- Open each of the 3 articles:
  - Furnace Cleaning Guide
  - Dryer Vent Fire Prevention
  - Indoor Air Quality Guide
- Verify all phone numbers are correct
- Check that images load properly

### 3. Set Up Custom Domain (Optional)

In Vercel dashboard:
1. Go to your project → Settings → Domains
2. Add your custom domain (e.g., `homeprosgroup.com`)
3. Update DNS records as instructed by Vercel
4. SSL certificate will be auto-provisioned

---

## 🔧 Environment Variables (If Needed)

If you need to add any API keys or secrets:

1. In Vercel dashboard → Settings → Environment Variables
2. Add variables (they'll be encrypted)
3. Redeploy for changes to take effect

Example variables you might need:
- `NEXT_PUBLIC_RETELL_AGENT_ID` = `agent_4396fcbf2a8b61ef6d2317619f`
- `NEXT_PUBLIC_PHONE_NUMBER` = `+18254359977`

---

## 📞 Retell AI Widget Features

Your website now has a floating AI voice agent button that:

- ✅ Appears on every page (bottom right)
- ✅ Pulsing animation to attract attention
- ✅ Connects to Retell AI agent on click
- ✅ Fallback to phone call if SDK fails
- ✅ Beautiful modal interface during call
- ✅ Mobile responsive

### Testing the Widget:

1. Click "Talk to Our AI Agent" button
2. Grant microphone permissions
3. Start speaking naturally
4. The AI will respond about your services

---

## 🎨 Blog Features

Your blog posts now have:

- ✨ **Magazine-style typography** - Large, readable text
- 📱 **Responsive 2-column layout** - Sidebar with CTAs
- 🎯 **Drop cap** on first paragraph
- 📞 **Sticky contact card** - Always visible phone number
- 🗺️ **Service areas listed**
- 🔍 **SEO optimized** - Schema markup, local keywords
- 🤖 **LLM optimized** - Structured for ChatGPT/Gemini search

---

## 🚨 Troubleshooting

### Issue: Retell Widget Not Working

**Solution:**
1. Check browser console for errors
2. Verify Retell SDK loaded: Check Network tab for `retell-sdk.min.js`
3. Ensure microphone permissions granted
4. Test on different browsers

**Fallback:** Widget automatically redirects to phone call if SDK fails

### Issue: Build Fails on Vercel

**Solution:**
1. Check build logs in Vercel dashboard
2. Common fix: Clear cache and redeploy
3. Ensure all dependencies in `package.json`

### Issue: Images Not Loading

**Solution:**
- Images use external URLs (homeprosgroup.com)
- Verify those URLs are accessible
- Update `next.config.ts` if needed

---

## 📊 Performance Optimization (Optional)

After deployment, you can optimize:

1. **Enable Image Optimization** (Vercel does this automatically)
2. **Set up Analytics** (Vercel Analytics or Google Analytics)
3. **Configure CDN** (Vercel handles this)
4. **Add Sitemap** for SEO

---

## 💡 Next Steps

1. ✅ Push to GitHub
2. ✅ Deploy to Vercel
3. ✅ Test live site
4. ✅ Set up custom domain
5. ✅ Test Retell AI widget
6. ✅ Share site with client

---

## 📝 Quick Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start

# Deploy to Vercel
vercel --prod

# Check git status
git status

# Pull latest changes
git pull origin main

# Push changes
git add -A
git commit -m "Your message"
git push origin main
```

---

## 🎉 You're All Set!

Your website is ready to go live with:
- ✅ Updated phone number
- ✅ AI voice agent
- ✅ Beautiful blog
- ✅ SEO optimization
- ✅ Mobile responsive
- ✅ Fast performance

**Support:**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Retell AI Docs: https://retellai.com/docs
