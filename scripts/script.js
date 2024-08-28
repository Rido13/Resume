document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function animateSections() {
        const scrollPosition = window.scrollY + window.innerHeight;

        sections.forEach(section => {
            if (scrollPosition > section.offsetTop + 100 || !isScrollable()) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            }
        });
    }

    function isScrollable() {
        return document.body.scrollHeight > window.innerHeight;
    }

    // Начальное состояние — элементы скрыты, если страница прокручивается
    if (isScrollable()) {
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
        });
    } else {
        // Если страница не прокручивается, элементы сразу видны
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
    }

    window.addEventListener('scroll', animateSections);
    animateSections(); // Проверяем анимацию при загрузке страницы
});
