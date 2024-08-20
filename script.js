document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a, .mobile-nav a');
    const changingText = document.getElementById('changing-text');
    const contactMeButton = document.getElementById('contact-me-button');
<<<<<<< HEAD
=======
    const viewResumeBtn = document.getElementById('view-resume-btn');
    const pdfModal = document.getElementById('pdf-modal');
    const pdfCloseBtn = document.querySelector('.pdf-close-btn');
    const body = document.body;
>>>>>>> 5733b86 (initial commit from surface)
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const alpacaOverlay = document.getElementById('alpaca-overlay');
    const closeBtn = document.querySelector('.close-btn');
    const alpacaLink = document.querySelector('a[href="#alpacas"]');
<<<<<<< HEAD
=======
    const logoLink = document.querySelector('.name a'); // "Becky Spittle" logo link
    const contactLink = document.querySelector('nav ul li a[href="#contact"]');
    const footer = document.querySelector('footer');
>>>>>>> 5733b86 (initial commit from surface)
    const textArray = [
        " experience", 
        " research", 
        " philosophy",  
        " interests"
    ];
    let textIndex = 0;

<<<<<<< HEAD
=======
    // Change text function for introduction
>>>>>>> 5733b86 (initial commit from surface)
    function changeText() {
        textIndex = (textIndex + 1) % textArray.length;
        changingText.textContent = textArray[textIndex];
    }

    setInterval(changeText, 2000);

    const offset = 70; // Adjust this value based on the height of your header
    
<<<<<<< HEAD
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if the link is a hash link for smooth scrolling
=======
    // Smooth scroll for navigation links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
>>>>>>> 5733b86 (initial commit from surface)
            if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
<<<<<<< HEAD
                // Close the mobile nav after clicking a link
=======
>>>>>>> 5733b86 (initial commit from surface)
                if (mobileNav.classList.contains('open')) {
                    mobileNav.classList.add('close');
                    setTimeout(() => {
                        mobileNav.classList.remove('open');
                        mobileNav.classList.remove('close');
<<<<<<< HEAD
                    }, 300); // Match this duration to your CSS transition duration
=======
                    }, 300);
>>>>>>> 5733b86 (initial commit from surface)
                    hamburgerMenu.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });

<<<<<<< HEAD
=======
    // Scroll to the top of the homepage when the logo is clicked
    logoLink.addEventListener('click', (e) => {
        // Check if the current page is the homepage
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Open Alpaca overlay
>>>>>>> 5733b86 (initial commit from surface)
    if (alpacaLink) {
        alpacaLink.addEventListener('click', function(event) {
            event.preventDefault();
            alpacaOverlay.style.display = 'flex';
<<<<<<< HEAD
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            alpacaOverlay.style.display = 'none';
=======
            body.classList.add('modal-open'); // Disable body scroll
        });
    }

    // Close Alpaca overlay
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            alpacaOverlay.style.display = 'none';
            body.classList.remove('modal-open'); // Enable body scroll
>>>>>>> 5733b86 (initial commit from surface)
        });
    }

    if (alpacaOverlay) {
        alpacaOverlay.addEventListener('click', function(event) {
            if (event.target === alpacaOverlay) {
                alpacaOverlay.style.display = 'none';
<<<<<<< HEAD
=======
                body.classList.remove('modal-open'); // Enable body scroll
>>>>>>> 5733b86 (initial commit from surface)
            }
        });
    }

    if (contactMeButton) {
        contactMeButton.addEventListener('click', () => {
            window.location.href = 'index.html#contact';
        });
    }

<<<<<<< HEAD
=======
    // Toggle mobile nav
>>>>>>> 5733b86 (initial commit from surface)
    hamburgerMenu.addEventListener('click', () => {
        if (mobileNav.classList.contains('open')) {
            mobileNav.classList.add('close');
            setTimeout(() => {
                mobileNav.classList.remove('open');
                mobileNav.classList.remove('close');
<<<<<<< HEAD
            }, 300); // Match this duration to your CSS transition duration
=======
            }, 300);
>>>>>>> 5733b86 (initial commit from surface)
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
    
<<<<<<< HEAD
    // Initial check
=======
    // Initial check for hamburger menu visibility
>>>>>>> 5733b86 (initial commit from surface)
    if (window.innerWidth > 768) {
        hamburgerMenu.style.display = 'none';
    } else {
        hamburgerMenu.style.display = 'flex';
    }

    window.onscroll = function() {
        const header = document.querySelector('header');
<<<<<<< HEAD
        const contactLink = document.querySelector('nav ul li a[href="#contact"]');
        const resumeLink = document.querySelector('nav ul li a[href="#resume"]');
=======
>>>>>>> 5733b86 (initial commit from surface)

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
<<<<<<< HEAD

        // Detect if the user is at the bottom of the page
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
            // Highlight the contact link and unhighlight the resume link
            contactLink.classList.add('active');
            resumeLink.classList.remove('active');
        } else {
            // Ensure the contact link is not highlighted when not at the bottom
            contactLink.classList.remove('active');
        }
    };

=======
    };

    // Intersection Observer to detect when the footer is in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactLink.classList.add('active');
            } else {
                contactLink.classList.remove('active');
            }
        });
    });

    // Start observing the footer element
    observer.observe(footer);

>>>>>>> 5733b86 (initial commit from surface)
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

<<<<<<< HEAD
    // Preload images when the DOM is ready
=======
    // Preload images
>>>>>>> 5733b86 (initial commit from surface)
    const images = document.querySelectorAll('.collage img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        const imgPreload = new Image();
        imgPreload.src = src;
    });

<<<<<<< HEAD
=======
    // Open PDF in full-screen modal
    viewResumeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        pdfModal.style.display = 'flex';
        body.classList.add('modal-open'); // Disable body scroll
    });

    // Close the PDF modal
    pdfCloseBtn.addEventListener('click', function() {
        pdfModal.style.display = 'none';
        body.classList.remove('modal-open'); // Enable body scroll
    });

    // Close the PDF modal when clicking outside the content
    pdfModal.addEventListener('click', function(event) {
        if (event.target === pdfModal) {
            pdfModal.style.display = 'none';
            body.classList.remove('modal-open'); // Enable body scroll
        }
    });

>>>>>>> 5733b86 (initial commit from surface)
    // Navbar link highlighting based on scroll position
    window.addEventListener('scroll', () => {
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('.nav-links a');
        
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');
            
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(id)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> 5733b86 (initial commit from surface)
