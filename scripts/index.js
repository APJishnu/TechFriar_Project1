document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');

    if (carouselContainer) {
        const carouselSlide = carouselContainer.querySelector('.carousel-slide');
        const carouselItems = carouselSlide.querySelectorAll('.carousel-item');
        const prevButton = carouselContainer.querySelector('.prev');
        const nextButton = carouselContainer.querySelector('.next');

        let currentIndex = 0;

        function showSlide(index) {
        
            carouselSlide.style.transform = `translateX(-${index * 100}%)`;
            
        }

        function goToNextSlide() {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            showSlide(currentIndex);
        }

        function goToPrevSlide() {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            showSlide(currentIndex);
        }

        nextButton.addEventListener('click', goToNextSlide);
        prevButton.addEventListener('click', goToPrevSlide);

        // Initialize carousel
        showSlide(currentIndex);

        // Set interval for automatic sliding
        setInterval(goToNextSlide, 3000); // Change slide every 3 seconds
    }
});

