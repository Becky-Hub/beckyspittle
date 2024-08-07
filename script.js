document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a, .mobile-nav a');
    const changingText = document.getElementById('changing-text');
    const contactMeButton = document.getElementById('contact-me-button');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
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

    const offset = 70; // Adjust this value based on the height of your header
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if the link is a hash link for smooth scrolling
            if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            }
        });
    });

    if (contactMeButton) {
        contactMeButton.addEventListener('click', () => {
            window.location.href = 'index.html#contact';
        });
    }

    hamburgerMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
        if (mobileNav.classList.contains('open')) {
            hamburgerMenu.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            hamburgerMenu.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Hide hamburger menu on larger screens
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburgerMenu.style.display = 'none';
            mobileNav.classList.remove('open');
            hamburgerMenu.innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            hamburgerMenu.style.display = 'flex';
        }
    });
    
    // Initial check
    if (window.innerWidth > 768) {
        hamburgerMenu.style.display = 'none';
    } else {
        hamburgerMenu.style.display = 'flex';
    }
});
