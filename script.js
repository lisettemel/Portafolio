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
        if (nameContainer) {
            nameContainer.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.4}px))`;
            nameContainer.style.opacity = 1 - (scrolled / 600);
        }

        // Paralaje del Video en la segunda sección
        if (aboutSection && largeImgElement) {
            const sectionTop = aboutSection.offsetTop;
            const relativeScroll = scrolled - sectionTop;
            if (scrolled > sectionTop - window.innerHeight) {
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
});