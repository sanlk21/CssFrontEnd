document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about');
    const processSection = document.querySelector('.process');
    const mixedMediaSection = document.querySelector('.mixed-media');
    const contactSection = document.querySelector('.contact');
    const footer = document.querySelector('footer');
    const backToTopBtn = document.querySelector('.back-to-top');
    const ledText = document.querySelector('.led-text');
    const speedUpBtn = document.querySelector('#speed-up');
    const slowDownBtn = document.querySelector('#slow-down');

    // Default speed (in seconds)
    let slideDuration = 20;

    // Update the CSS variable
    const updateSpeed = () => {
        ledText.style.setProperty('--slide-duration', `${slideDuration}s`);
    };

    // Speed up (decrease duration)
    speedUpBtn.addEventListener('click', () => {
        if (slideDuration > 5) {
            slideDuration -= 5;
            updateSpeed();
        }
    });

    // Slow down (increase duration)
    slowDownBtn.addEventListener('click', () => {
        if (slideDuration < 60) {
            slideDuration += 5;
            updateSpeed();
        }
    });

    // Scroll event to reveal sections
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;

        // Reveal about section
        const aboutTop = aboutSection.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > aboutTop + 100) {
            aboutSection.classList.add('visible');
        }

        // Reveal process section
        const processTop = processSection.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > processTop + 100) {
            processSection.classList.add('visible');
        }

        // Reveal mixed media section
        const mixedTop = mixedMediaSection.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > mixedTop + 100) {
            mixedMediaSection.classList.add('visible');
        }

        // Reveal contact section
        const contactTop = contactSection.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > contactTop + 100) {
            contactSection.classList.add('visible');
        }

        // Reveal footer
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > footerTop + 100) {
            footer.classList.add('visible');
        }

        // Show Back to Top button after scrolling down
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Back to Top button functionality
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});