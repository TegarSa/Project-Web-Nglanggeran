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
