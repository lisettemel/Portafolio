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
        const scrollPos = window.scrollY;
        const header = document.querySelector('header');
        const videoSection = document.querySelector('.video-gallery-section');

        // 1. Paralaje del video
        if (aboutSection && largeImgElement) {
            const sectionTop = aboutSection.offsetTop;
            const sectionHeight = aboutSection.offsetHeight;
            if (scrollPos >= sectionTop - window.innerHeight && scrollPos <= sectionTop + sectionHeight) {
                const relativeScroll = scrollPos - sectionTop;
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
        const scrollPos = window.scrollY;
        const header = document.querySelector('header');
        const videoSection = document.querySelector('.video-gallery-section');
        const finalSection = document.querySelector('.final-cta-section');

        // 1. Paralaje del video
        if (aboutSection && largeImgElement) {
            const sectionTop = aboutSection.offsetTop;
            const sectionHeight = aboutSection.offsetHeight;
            if (scrollPos >= sectionTop - window.innerHeight && scrollPos <= sectionTop + sectionHeight) {
                const relativeScroll = scrollPos - sectionTop;
                largeImgElement.style.transform = `translateY(${relativeScroll * -0.05}px)`;
            }
        }

        // 2. Cambio de color del Header inteligente (Sin duplicados)
        if (videoSection && finalSection) {
            // Detectamos si estamos en la zona blanca (desde galería hasta antes del final rojo)
            const isLightSection = scrollPos >= videoSection.offsetTop - 50 && scrollPos < finalSection.offsetTop - 50;
            
            if (isLightSection) {
                header.querySelectorAll('a, span').forEach(el => el.style.color = "#0318F8");
            } else {
                header.querySelectorAll('a, span').forEach(el => el.style.color = "#ffffff");
            }
        }
    });
});