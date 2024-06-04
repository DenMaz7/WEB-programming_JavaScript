document.addEventListener("DOMContentLoaded",
    function(event) {
        var currentSlide = 0;
        var slides = document.querySelectorAll('.slide');
        var indicators = document.querySelectorAll('.indicator');
        
        function showSlide(n) {
            slides.forEach(function(slide) {
                slide.classList.remove('active');
            });
            indicators.forEach(function(indicator) {
                indicator.classList.remove('active');
            });
            slides[n].classList.add('active');
            indicators[n].classList.add('active');
        }
        
        function prevSlide() {
            currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
            showSlide(currentSlide);
        }
        
        function nextSlide() {
            currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
            showSlide(currentSlide);
        }
        
        function changeSlide(n) {
            currentSlide = n;
            showSlide(currentSlide);
        }
        
        function toggleMenu() {
            var menu = document.querySelector('ul.menu.large');
            menu.classList.toggle('show');
        }
    }
);

