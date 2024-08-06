document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a, .mobile-nav a');
    const changingText = document.getElementById('changing-text');
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
            if (link.getAttribute('href').startsWith('#')) {
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
});
