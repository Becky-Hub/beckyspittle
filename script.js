document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const changingText = document.getElementById('changing-text');
    const contactMeButton = document.getElementById('contact-me-button');
    const textArray = [
        " experience", 
        " research", 
        " philosophy",  
        " interests"
    ];
    let textIndex = 0;

    function changeText() {
        textIndex = (textIndex + 1) % textArray.length;
        changingText.textContent = textArray[textIndex];
    }

    setInterval(changeText, 2000);

    const navLinks = document.getElementById('nav-links');
    const offset = 70; // Adjust this value based on the height of your header
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if the link is a hash link for smooth scrolling
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            }
            // Close the overlay panel
            navLinks.classList.remove('active');
        });
    });

    const hamburgerMenu = document.getElementById('hamburger-menu');
    const closeMenu = document.getElementById('close-menu');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });

    if (contactMeButton) {
        contactMeButton.addEventListener('click', () => {
            window.location.href = 'index.html#contact';
        });
    }
});
