// Typing animation for the hero section
const typedTextElement = document.querySelector('.typed-text');
const textToType = ['Web Developer', 'Designer', 'Problem Solver'];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textToType[textIndex].length) {
        typedTextElement.textContent += textToType[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextElement.textContent = textToType[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % textToType.length;
        setTimeout(type, 500);
    }
}

// Start the typing animation
setTimeout(type, 1000);

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the form data to a server
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Clear form
    contactForm.reset();
});

// Add scroll reveal animations
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.skill-card, .project-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Initialize scroll reveal
reveal();

// Add additional styles for mobile menu
const style = document.createElement('style');
style.textContent = `
    @media screen and (max-width: 768px) {
        .nav-active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            right: 0;
            top: 70px;
            background-color: white;
            width: 100%;
            align-items: center;
            padding: 2rem 0;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .toggle span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .toggle span:nth-child(2) {
            opacity: 0;
        }
        
        .toggle span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
`;

document.head.appendChild(style); 