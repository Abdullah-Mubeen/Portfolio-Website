 

document.addEventListener("DOMContentLoaded", function () {
     
    var portfolioSwiper = new Swiper('.portfolio .portfolio-swiper', {
         // Optional parameters
        loop: true,

        // Custom Navigation
        navigation: {
            nextEl: '.Cust-swiper-button-next',
            prevEl: '.Cust-swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission alert (for demo purposes)
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent!');
    });
});

// JavaScript to toggle navbar class on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) { // Adjust the scroll threshold as needed
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
