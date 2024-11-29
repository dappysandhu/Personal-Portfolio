let slideIndex = 0;
let slideInterval;

function showSlides() {
  const slides = document.querySelectorAll(".slide-item");
  const dots = document.querySelectorAll(".progress-dot");

  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  // Remove active class from all slides and dots
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Add active class to current slide and dot
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

function changeSlide(n) {
  // Clear the existing interval
  clearInterval(slideInterval);

  slideIndex += n;
  showSlides();

  // Restart the interval
  startSlideShow();
}

function currentSlide(n) {
  // Clear the existing interval
  clearInterval(slideInterval);

  slideIndex = n;
  showSlides();

  // Restart the interval
  startSlideShow();
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    slideIndex++;
    showSlides();
  }, 3000);
}

// Initialize the slideshow
showSlides();
startSlideShow();
