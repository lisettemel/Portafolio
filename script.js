document.addEventListener('DOMContentLoaded', () => {
    // Referencias básicas
    const nameContainer = document.querySelector('.name-container');
    const largeImgElement = document.querySelector('.large-img video');
    const aboutSection = document.querySelector('.about-section');
    const scrollIndicator = document.querySelector('.scroll-indicator-container');

    // Intersection Observer para el efecto Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('active');
            else entry.target.classList.remove('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Lógica de Scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        // Paralaje del título principal si existe
       if (aboutSection && largeImgElement) {
            const sectionTop = aboutSection.offsetTop;
            const sectionHeight = aboutSection.offsetHeight;
            const scrolled = window.scrollY;

            // Solo aplicar si estamos dentro de la sección
            if (scrolled >= sectionTop - window.innerHeight && scrolled <= sectionTop + sectionHeight) {
                const relativeScroll = scrolled - sectionTop;
                largeImgElement.style.transform = `translateY(${relativeScroll * -0.05}px)`;
            }
        }
    });

    // Scroll suave al hacer click en el indicador
    if (scrollIndicator && aboutSection) {
        scrollIndicator.addEventListener('click', () => {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const videoSection = document.querySelector('.video-gallery-section');
    const scrollPos = window.scrollY;

    if (videoSection && scrollPos >= videoSection.offsetTop - 50) {
        header.style.mixDifference = "difference"; // Esto hace que el color se invierta automáticamente
        // O más simple:
        header.querySelectorAll('a, span').forEach(el => el.style.color = "#0318F8");
    } else {
        header.querySelectorAll('a, span').forEach(el => el.style.color = "#ffffff");
    }
});
});