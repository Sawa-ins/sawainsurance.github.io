# Sawa Insurance Agency Website

A professional, responsive insurance agency website for Sawa Insurance Agency in Eldoret, Kenya.  

Files include: `index.html`, `style.css`, and `script.js`.

## Features

- **Modern Blue Theme**: Professional color scheme throughout the site
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Insurance Products**: Showcase of 6 main insurance coverage types:
  - Motor Vehicle Insurance
  - Health Insurance
  - Property Insurance
  - Business Insurance
  - Personal Accident Insurance
  - Travel Insurance

- **Complete Company Information**:
  - Director: Apollo Omido
  - Location: Upper Elgon View, Bishop Muge Road off Avenue 2, Eldoret
  - P.O. Box: 33190-30100
  - Phone: +254 (24) 684270
  - Email: sawainsurance14@gmail.com

- **Key Sections**:
  - Hero Section with Call-to-Action buttons
  - Products/Services showcase
  - Why Choose Us features
  - Company information and director profile
  - Contact form and information
  - Footer with complete company details

## File Structure

```
portofolio/
├── index.html          # Main website (HTML)
├── style.css           # All styling rules
├── script.js           # Interactive behaviors & form handling
├── README.md           # This file
└── server.py           # Optional local server for testing
```

## Quick Start

Ensure `style.css` and `script.js` reside alongside `index.html`.

### Option 1: Open Directly in Browser
1. Simply open `index.html` in any web browser
2. The site will load completely with all styling and functionality

### Option 2: Use a Local Server (Python)
```bash
# If you have Python 3 installed
python3 server.py

# Then visit: http://localhost:8000
```

### Option 3: Use Node.js Server
```bash
# Install http-server globally
npm install -g http-server

# Run server in project directory
http-server

# Visit: http://localhost:8080
```

## Deployment Options

### Option 1: Netlify (Recommended - Free)
1. Go to netlify.com and sign up
2. Drag and drop the project folder
3. Site will be live instantly with a free domain

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Push the project files
3. Enable GitHub Pages in repository settings
4. Visit: `https://yourusername.github.io/repository-name`

### Option 3: Web Hosting
- Upload `index.html` to any web host (Bluehost, Hostinger, etc.)
- Site will work on any server

### Option 4: Firebase Hosting
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

## Customization

### Changing Colors
The color scheme is defined at the top of the CSS in `index.html` or `style.css`. Look for:
```css
:root {
    --primary-blue: #003d82;
    --light-blue: #1e5ba8;
    --accent-blue: #2a7cc7;
    /* ... other colors ... */
}
```

### Adding More Products
Duplicate any product card in the Products section and modify:
- Icon (emoji)
- Title
- Description
- Product type for the quote button

### Contact Form
The contact form currently uses the `mailto:` protocol to open the user's email client. For production, implement a backend service like:
- Formspree: formspree.io
- EmailJS: emailjs.com
- Your own backend API

## Features Explained

### Sticky Navigation
The navigation bar stays at the top when scrolling for easy access

### Smooth Scrolling
All navigation links smoothly scroll to their sections

### Quote Requests
Click "Get Quote" on any product to auto-fill the contact form

### Responsive Grid
Products and features automatically adjust layout based on screen size

### Hover Effects
Cards and buttons have smooth hover animations

## Browser Compatibility

Works on all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Optimization

The site includes:
- Proper title and meta tags
- Semantic HTML structure
- Fast loading times
- Mobile responsive design
- Interactive premium calculator and comparison table

## Future Enhancements

Consider adding:
- Blog section for insurance tips
- Customer testimonials section
- Insurance claim process guide
- FAQ section
- Multi-language support (Swahili)
- Live chat support
- Social media integration
- Gallery of office/team

## Contact & Support

**Company Details:**
- **Name:** Sawa Insurance Agency
- **Director:** Apollo Omido
- **Phone:** +254 724 684270, +254 792 214450
- **Email:** sawainsurance14@gmail.com
- **Address:** Upper Elgon View, Bishop Muge Road off Avenue 2, Eldoret
- **P.O. Box:** 33190-30100

## License

Created for Sawa Insurance Agency © 2024

---

Built with HTML5, CSS3, and Vanilla JavaScript - No frameworks required!
