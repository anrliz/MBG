// 1. Intro Animation
window.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro-overlay');
    
    setTimeout(() => {
        intro.style.transform = 'translateY(-100%)';
    }, 2500); // Intro muncul selama 2.5 detik
});

// 2. Scroll Reveal Animation (Fade In saat di scroll)
const revealElements = document.querySelectorAll('.scroll-reveal');

const scrollReveal = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);

// 3. Auto Active Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});