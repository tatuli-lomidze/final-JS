let slideshows = document.querySelectorAll(".journeys-slideshow");

slideshows.forEach((slideshow) => {
  let currentSlide = 1;
  let totalSlides = 3;
  let slideElements = slideshow.querySelectorAll(".slide");

  function changeSlide() {
    let nextSlide = (currentSlide % totalSlides) + 1;
    let currentSlideElement = slideshow.querySelector(".slide" + currentSlide);
    let nextSlideElement = slideshow.querySelector(".slide" + nextSlide);

    currentSlideElement.style.opacity = 0;
    nextSlideElement.style.opacity = 1;

    currentSlide = nextSlide;
  }

  slideElements.forEach((slide, index) => {
    if (index === 0) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });

  setInterval(changeSlide, 2000);
})





