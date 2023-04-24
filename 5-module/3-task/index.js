function initCarousel() {
  let carousel = document.querySelector('.carousel__inner');
  let slideWidth = document.querySelector('.carousel__slide').offsetWidth;
  let slides = 4;
  let activeSlide = 1;
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let transform = 0;

  if (activeSlide == 1) {
    arrowLeft.style.display = 'none';
  } else if (activeSlide == slides) {
    arrowRight.style.display = 'none';
  }

  arrowRight.addEventListener('click', (event) => {
    transform -= slideWidth;
    carousel.style.transform = `translateX(${transform}px)`;
    activeSlide++; 
    arrowLeft.style.display = 'flex';
    if (activeSlide == slides) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = 'flex';
    }
  });

  arrowLeft.addEventListener('click', (event) => {
    transform += slideWidth;
    carousel.style.transform = `translateX(${transform}px)`;
    activeSlide--; 
    arrowRight.style.display = 'flex';
    if (activeSlide == 1) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = 'flex';
    }
  });
}
