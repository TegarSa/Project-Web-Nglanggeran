document.addEventListener("DOMContentLoaded", function() {
    const navbarItems = document.querySelectorAll('.navbar .nav-item');

    navbarItems.forEach(item => {
        item.addEventListener('click', function() {
            navbarItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 10) { 
        navbar.classList.add("sticky");
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("scrolled");
    }
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const slides = document.querySelectorAll('.slide');
const contentText = document.getElementById('content-text');
let currentSlide = 0;

    function updateSlide() {
        const currentText = slides[currentSlide].dataset.text;

        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        contentText.style.opacity = 0;
        contentText.style.transform = 'translateY(50px)';
        setTimeout(() => {
            contentText.innerHTML = `<h1>${currentText}</h1>`;
            contentText.style.opacity = 1;
            contentText.style.transform = 'translateY(0)';
        }, 500);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    }

    updateSlide();
    setInterval(nextSlide, 5000);

    const sliderNd = document.querySelector('.slider-nd');
    const prevButtonNd = document.querySelector('.prev-nd');
    const nextButtonNd = document.querySelector('.next-nd');

    prevButtonNd.addEventListener('click', () => {
        sliderNd.scrollBy({
            left: -300, 
            behavior: 'smooth',
        });
    });

    nextButtonNd.addEventListener('click', () => {
        sliderNd.scrollBy({
            left: 300, 
            behavior: 'smooth',
        });
    });