// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const menuButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Toggle menu function
    function toggleMenu() {
        const isOpen = menuButton.classList.toggle('open');
        navMenu.classList.toggle('active');
        menuButton.setAttribute('aria-expanded', isOpen);
        
        // Toggle body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    
    // Close menu function
    function closeMenu() {
        menuButton.classList.remove('open');
        navMenu.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    
    // Menu button click event
    menuButton.addEventListener('click', toggleMenu);
    
    // Close menu when a nav link is clicked (mobile only)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 767) {
                closeMenu();
            }
        });
    });
    
    // Close menu when clicking outside (mobile only)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 767 && 
            !event.target.closest('.nav') && 
            navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Reset menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});

