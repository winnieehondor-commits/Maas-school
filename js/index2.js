document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileLinks = document.querySelectorAll('.nav-link-mobile');
    
    // --- 1. Mobile Menu Toggle ---
    if (hamburgerBtn && mobileMenu && closeBtn) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('h-screen', 'fixed');
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('h-screen', 'fixed');
        });

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('h-screen', 'fixed');
            });
        });
    }

    // --- 2. Dynamic Footer Year (Placeholder) ---
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // --- 3. Educational Stages Accordion Logic ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const contentId = header.getAttribute('data-target');
            const content = document.getElementById(contentId);
            const chevron = header.querySelector('.fa-chevron-down');

            // Check if the clicked accordion is currently open
            const isOpen = !content.classList.contains('hidden');

            // 1. Close all open content and reset styles (rounded-xl)
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
            document.querySelectorAll('.accordion-header .fa-chevron-down').forEach(c => c.classList.remove('rotate-180'));
            
            // Restore full rounding on ALL headers
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('rounded-t-xl');
                h.classList.add('rounded-xl');
            });
            
            // 2. If it was already open, we're done (closing it was handled above).
            if (isOpen) {
                return;
            }

            // 3. If it was closed, open it and apply styles (rounded-t-xl)
            content.classList.remove('hidden');
            chevron.classList.add('rotate-180');
            
            // Adjust the rounding on the current header to blend with the open content below
            header.classList.remove('rounded-xl');
            header.classList.add('rounded-t-xl');

        });
    });
});