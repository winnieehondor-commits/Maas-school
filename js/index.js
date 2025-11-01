// --- Mobile Menu Toggle Logic ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.nav-link-mobile');

const toggleMenu = () => {
    // Toggle the 'hidden' class to show/hide the menu
    mobileMenu.classList.toggle('hidden');
    // Optional: Add/remove overflow-hidden to body to prevent scrolling
    document.body.classList.toggle('overflow-hidden'); 
};

// Event listeners for opening and closing the menu
if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMenu);
}
if (closeBtn) {
    closeBtn.addEventListener('click', toggleMenu);
}

// Close menu when a link is clicked (for smoother navigation)
mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});


// --- Header Image Slideshow Logic ---
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    // Stop if no slides are found
    if (slides.length === 0) return;

    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Increment index and loop back to 1 (array index 0)
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Show the current slide (index is slideIndex - 1)
    slides[slideIndex - 1].classList.add('active');
    
    // Change image every 5 seconds
    setTimeout(showSlides, 5000); 
}

// Start the slideshow after the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Check if the slideshow element exists before starting
    if (document.getElementById('slideshow')) {
        showSlides();
    }
});




// --- FAQ Section Toggle Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling; // Get the .faq-content div
            const icon = toggle.querySelector('.faq-icon'); // Get the chevron icon

            // Toggle visibility of the content
            if (content.style.maxHeight) {
                // If content is currently open, close it
                content.style.maxHeight = null;
                icon.classList.remove('rotate-180');
            } else {
                // If content is closed, open it
                // Set max-height to the actual scroll height for the smooth transition
                content.style.maxHeight = content.scrollHeight + "px";
                icon.classList.add('rotate-180');
            }
        });
    });
});




// --- Contact Form Submission Placeholder Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // Get the form element by its ID
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // <-- IMPORTANT: Stops the page from reloading or navigating away

            // In a real application, you would use fetch() or XMLHttpRequest to send this data to a server.
            
            // Placeholder feedback for the user
            alert('Thank you for your inquiry! We have received your message and will respond shortly.');
            
            // Clear the form fields after the submission alert
            contactForm.reset();
        });
    }
});


// --- Set Current Year in Footer ---
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});