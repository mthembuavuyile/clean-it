// Burger Menu Functionality
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const closeMenu = document.querySelector('.close-menu');

// Function to close the menu
function closeNav() {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
    navLinks.forEach(link => {
        link.style.animation = '';
    });
}

// Burger menu click handler
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close button click handler
closeMenu?.addEventListener('click', closeNav);

// Click outside to close menu
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('nav-active')) {
        closeNav();
    }
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
});

// Slideshow Functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Automatically change slides every 3 seconds
setInterval(nextSlide, 3000);

// Initialize the first slide
showSlide(0);
