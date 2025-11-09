// Mobile Menu Toggle
const header = document.getElementById('header');
let isMenuOpen = false;

function toggleMenu() {
    if (!isMenuOpen) {
        header.classList.add('menu-open');
        menuBtn.classList.add('open');
    } else {
        header.classList.remove('menu-open');
        menuBtn.classList.remove('open');
    }
    isMenuOpen = !isMenuOpen;
}

// Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// Form Validation
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    let isValid = true;
    let errorMessage = '';

    if (!name) {
        errorMessage += 'Name is required\n';
        isValid = false;
    }

    if (!email || !email.includes('@')) {
        errorMessage += 'Valid email is required\n';
        isValid = false;
    }

    if (!phone || phone.length < 10) {
        errorMessage += 'Valid phone number is required\n';
        isValid = false;
    }

    if (!date) {
        errorMessage += 'Date is required\n';
        isValid = false;
    }

    if (!isValid) {
        alert(errorMessage);
        return false;
    }

    // If validation passes, show success message
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('bookingForm').reset();
    return true;
}

// Price Animation
const prices = document.querySelectorAll('.price');
prices.forEach(price => {
    price.addEventListener('mouseenter', () => {
        price.style.transform = 'scale(1.05)';
    });
    
    price.addEventListener('mouseleave', () => {
        price.style.transform = 'scale(1)';
    });
});

// Scroll Progress Indicator
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
};

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});