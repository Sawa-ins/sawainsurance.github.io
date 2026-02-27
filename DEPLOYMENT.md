# Deployment Guide for Sawa Insurance Website

## Quick Deployment Options

### 🚀 Option 1: Netlify (Recommended - 5 minutes)

**Free hosting with custom domain support**

1. **Sign up at netlify.com**
   - Go to https://netlify.com
   - Click "Sign up"
   - Sign up with GitHub or email

2. **Deploy your site**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your entire `portofolio` folder
   - Done! Your site is live with a `.netlify.app` domain

3. **Connect custom domain (sawainsurance.co.ke)**
   - Go to Site settings → Domain management
   - Add custom domain
   - Follow DNS configuration steps

---

### 🌐 Option 2: GitHub Pages (Free)

**Perfect if you want version control**

1. **Create GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/sawa-insurance.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Set source to "main" branch
   - Your site will be live at `https://yourusername.github.io/sawa-insurance`

3. **Use custom domain**
   - Buy domain (Safaricom, Jina, or other registrars)
   - In repo settings, add domain to "Custom domain" field
   - Update DNS records to point to GitHub Pages

---

### 💾 Option 3: Traditional Web Hosting

**For self-hosted solution**

1. **Choose a host**
   - Bluehost: https://bluehost.com
   - Hostinger: https://hostinger.com
   - Sunza: https://sunza.co.ke (Kenya-based)
   - Jamia: https://jamia.co.ke (Kenya-based)

2. **Upload files**
   - Connect via FTP or File Manager
   - Upload all files to `public_html` directory
   - Site will be accessible at your domain

3. **Setup custom domain**
   - Point domain DNS to hosting provider
   - Usually takes 24-48 hours to propagate

---

### ☁️ Option 4: AWS S3 + CloudFront

**For scalable, reliable hosting**

```bash
# Install AWS CLI
npm install -g aws-cli

# Configure AWS
aws configure

# Create S3 bucket
aws s3 mb s3://sawainsurance-website

# Upload files
aws s3 sync . s3://sawainsurance-website/

# Enable static website hosting
aws s3 website s3://sawainsurance-website/ \
  --index-document index.html

# Your site is live at: https://sawainsurance-website.s3.amazonaws.com
```

---

### 🐳 Option 5: Docker Deployment

**For containerized deployment**

Create `Dockerfile`:
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t sawa-insurance .
docker run -d -p 80:80 sawa-insurance
```

---

## Domain Registration

### Recommended Domain Registrars (Kenya-friendly)

1. **Jina.cloud** - https://jina.cloud
   - Local Kenyan domain registrar
   - Good rates
   - Easy management

2. **Safaricom** - https://domains.safaricom.co.ke
   - Local Kenyan provider
   - Integrated with Safaricom services

3. **GoDaddy** - https://godaddy.com
   - International, affordable
   - Easy domain transfer

4. **Namecheap** - https://namecheap.com
   - Competitive prices
   - Excellent customer support

### Suggested Domain Names

- sawainsurance.co.ke
- sawainsurance.com
- sawains.co.ke

---

## Email Setup

### Option 1: Gmail for Business
- Create Gmail account: business@sawainsurance.co.ke
- Use for all inquiries
- Current email: sawainsurance14@gmail.com

### Option 2: Professional Email with Hosting
- Most hosts provide free email accounts
- Example: director@sawainsurance.co.ke
- Accessed via webmail interface

---

## Performance Optimization

After deployment, optimize with:

1. **CDN (Content Delivery Network)**
   - Cloudflare: https://cloudflare.com (Free tier available)
   - Much faster global delivery

2. **SSL Certificate**
   - Enable HTTPS for security
   - Netlify: Automatic
   - GitHub Pages: Automatic
   - Traditional hosting: Usually free with control panel

3. **SEO Setup**
   - Google Search Console: https://search.google.com/search-console
   - Add sitemap.xml
   - Submit domain
   - Monitor search rankings

---

## Testing Locally

Before deploying:

```bash
# Python 3
python3 server.py
# Visit: http://localhost:8000

# Or with Node.js
npx http-server
# Visit: http://localhost:8080
```

---

## Maintenance

### Regular Updates
1. Update content (prices, phone numbers, etc.)
2. Add testimonials section
3. Update blog/news
4. Monitor contact form submissions

### Analytics
Add Google Analytics:
1. Go to analytics.google.com
2. Create property
3. Get tracking ID
4. Add to index.html before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Contact form not working | Implement backend (Formspree, EmailJS) or use contact service |
| Site loads slowly | Enable CDN (Cloudflare), optimize images |
| Domain not working | Wait 24-48 hours for DNS propagation |
| Email not recognized | Update MX records with hosting provider |
| Mobile site looks odd | Clear browser cache (Ctrl+Shift+Delete) |

---

## Quick Deployment Checklist

- [ ] Test site locally
- [ ] Check all links work
- [ ] Test contact form
- [ ] Verify mobile responsiveness
- [ ] Register domain
- [ ] Choose hosting provider
- [ ] Upload files
- [ ] Update DNS records
- [ ] Set up email
- [ ] Test on live domain
- [ ] Add Google Analytics
- [ ] Submit to Google Search Console
- [ ] Monitor performance

---

## Support & Help

**Technical Issues:**
- Email: sawainsurance14@gmail.com
- Phone: +254 724 684270, +254 792 214450

**Hosting Support:**
- Netlify Support: https://support.netlify.com
- GitHub Support: https://support.github.com
- Web Host Support: Check your host's documentation

---

## Cost Summary

| Service | Cost | Notes |
|---------|------|-------|
| Domain (.co.ke) | ~2,000-3,000 KES/year | Annual renewal |
| Netlify | FREE | Includes SSL, CDN |
| GitHub Pages | FREE | With GitHub account |
| Traditional Hosting | ~500-2,000 KES/year | Varies by provider |
| AWS S3 | ~$0.50/month | Pay-as-you-go |
| Cloudflare CDN | FREE (with paid tier) | Great for performance |

**Recommended Setup (Lowest Cost):**
- Netlify: FREE
- Jina.cloud domain: ~2,500 KES/year
- **Total: ~2,500 KES/year**

---

Last updated: February 27, 2024
