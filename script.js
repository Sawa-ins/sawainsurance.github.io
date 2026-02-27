function openQuote(productName) {
    document.getElementById('subject').value = `Quote Request - ${productName}`;
    document.getElementById('subject').focus();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
}

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Compose email link
    const mailtoLink = `mailto:sawainsurance14@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    document.querySelector('.contact-form').reset();
}

// Scroll animations - trigger animations when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'slideInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards
document.querySelectorAll('.product-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.dataset.animation = `slideInUp 0.6s ease-out ${index * 0.1}s forwards`;
    observer.observe(card);
});

// Observe feature items
document.querySelectorAll('.feature-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.dataset.animation = `slideInUp 0.6s ease-out ${index * 0.1}s forwards`;
    observer.observe(item);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Particle system for background
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 100;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2
        };
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x > canvas.width) p.x = 0;
            if (p.x < 0) p.x = canvas.width;
            if (p.y > canvas.height) p.y = 0;
            if (p.y < 0) p.y = canvas.height;
            ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

document.addEventListener('DOMContentLoaded', () => {
    initParticles();

    // highlight active section link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    // premium calculator helper
    window.calculatePremium = function() {
        const sum = parseFloat(document.getElementById('calc-sum').value) || 0;
        const age = parseInt(document.getElementById('calc-age').value) || 0;
        const product = document.getElementById('calc-product').value;
        if (sum <= 0) {
            document.getElementById('calc-result').textContent = 'Please enter a valid sum insured.';
            return;
        }
        let rate = 0.02; // base rate 2%
        // adjust rate per product type
        if (product.toLowerCase().includes('health')) rate = 0.025;
        if (product.toLowerCase().includes('motor')) rate = 0.018;
        if (product.toLowerCase().includes('travel')) rate = 0.015;
        // age factor: nothing for most, but health/travel may depend
        let ageFactor = 1;
        if (age > 0) {
            ageFactor += (age - 30) * 0.002; // small increase per year over 30
            if (ageFactor < 0.8) ageFactor = 0.8;
        }
        const premium = sum * rate * ageFactor;
        document.getElementById('calc-result').textContent =
            `Estimated annual premium for ${product}: KES ${premium.toFixed(2)}`;
    };


    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector(`nav a[href="#${id}"]`);
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active'));
                if (link) link.classList.add('active');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(sec => sectionObserver.observe(sec));
});

