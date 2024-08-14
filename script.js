document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a, .mobile-nav a');
    const changingText = document.getElementById('changing-text');
    const contactMeButton = document.getElementById('contact-me-button');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const alpacaOverlay = document.getElementById('alpaca-overlay');
    const closeBtn = document.querySelector('.close-btn');
    const alpacaLink = document.querySelector('a[href="#alpacas"]');
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
                // Close the mobile nav after clicking a link
                if (mobileNav.classList.contains('open')) {
                    mobileNav.classList.add('close');
                    setTimeout(() => {
                        mobileNav.classList.remove('open');
                        mobileNav.classList.remove('close');
                    }, 300); // Match this duration to your CSS transition duration
                    hamburgerMenu.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });

    if (alpacaLink) {
        alpacaLink.addEventListener('click', function(event) {
            event.preventDefault();
            alpacaOverlay.style.display = 'flex';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            alpacaOverlay.style.display = 'none';
        });
    }

    if (alpacaOverlay) {
        alpacaOverlay.addEventListener('click', function(event) {
            if (event.target === alpacaOverlay) {
                alpacaOverlay.style.display = 'none';
            }
        });
    }

    if (contactMeButton) {
        contactMeButton.addEventListener('click', () => {
            window.location.href = 'index.html#contact';
        });
    }

    hamburgerMenu.addEventListener('click', () => {
        if (mobileNav.classList.contains('open')) {
            mobileNav.classList.add('close');
            setTimeout(() => {
                mobileNav.classList.remove('open');
                mobileNav.classList.remove('close');
            }, 300); // Match this duration to your CSS transition duration
        } else {
            mobileNav.classList.add('open');
        }
        hamburgerMenu.innerHTML = mobileNav.classList.contains('open') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        hamburgerMenu.innerHTML = mobileNav.classList.contains('close') ? '<i class="fas fa-bars"></i>': '<i class="fas fa-times"></i>';
    });

    // Hide hamburger menu on larger screens
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburgerMenu.style.display = 'none';
            mobileNav.classList.remove('open');
            mobileNav.classList.remove('close');
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

    window.onscroll = function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    document.querySelectorAll('.accordion-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});
