// testimonial-carousel-Scripts

document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelector('.carousel-items');
    let index = 0;

    function showNextSlide() {
        index++;
        if (index >= carouselItems.children.length) {
            index = 0;
        }
        carouselItems.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});
