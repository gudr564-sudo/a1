document.documentElement.classList.add('js');

// Mobile Menu Toggle
const header = document.querySelector('.topbar');
const menuBtn = document.querySelector('.menu');

if (menuBtn && header) {
    menuBtn.addEventListener('click', () => {
        header.classList.toggle('nav-open');
        const isOpen = header.classList.contains('nav-open');
        menuBtn.setAttribute('aria-expanded', isOpen);
        menuBtn.innerHTML = isOpen ? '✕' : '☰';
    });
}

// Scroll Reveal with Intersection Observer
document.querySelectorAll('main > section, .card, .split-col, .article-content section, .contact-form, .contact-info, .hero, .manifesto-section, .pagehero').forEach(el => {
    el.setAttribute('data-reveal', '');
});

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-seen');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -8% 0px'
    });
    
    document.querySelectorAll('[data-reveal]').forEach(el => {
        observer.observe(el);
    });
    
    // Safety fallback
    setTimeout(() => {
        document.querySelectorAll('[data-reveal]').forEach(el => {
            el.classList.add('reveal-seen');
        });
    }, 2000);
} else {
    document.querySelectorAll('[data-reveal]').forEach(el => {
        el.classList.add('reveal-seen');
    });
}

// Form Redirect Handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(contactForm);
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');
        
        const subject = encodeURIComponent(`Savory Dinner Journal Inquiry from ${name}`);
        const body = encodeURIComponent(`${message}\n\n---\nReply to: ${email}`);
        
        window.location.href = `mailto:desk@savorydinnerjournal.com?subject=${subject}&body=${body}`;
    });
}
