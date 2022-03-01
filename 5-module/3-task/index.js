function initCarousel() {
    let leftArrow = document.querySelector(`.carousel__arrow_left`);
    let rightArrow = document.querySelector(`.carousel__arrow_right`);
    let carouselInner = document.querySelector(`.carousel__inner`);
    let slideSize = carouselInner.offsetWidth;
    let currentSlide = 0;
    let slidersLength = 4;
    if (currentSlide >= slidersLength - 1) {
        rightArrow.style.display = 'none';
    }
    if (currentSlide <= 0) {
        leftArrow.style.display = 'none';
    }
    rightArrow.addEventListener("click", function () {
        currentSlide += 1;
        let translateX = currentSlide * slideSize;
        carouselInner.style.transform = `translateX(-${translateX}px)`;
        if (currentSlide >= slidersLength - 1) {
            rightArrow.style.display = 'none';
        }
        leftArrow.style.display = '';
    });
    leftArrow.addEventListener("click", function () {
        currentSlide -= 1;
        let translateX = currentSlide * slideSize;
        carouselInner.style.transform = `translateX(-${translateX}px)`;
        if (currentSlide <= 0) {
            leftArrow.style.display = 'none';
        }
        rightArrow.style.display = '';
    });
}
