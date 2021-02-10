const sliderContainer = document.querySelector('.slider__container');
const rightSlide = document.querySelector('.right-slide');
const leftSlide = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slideLength = rightSlide.querySelectorAll('div').length;
const textReveal = gsap.timeline();

let ActiveSlideIndex = 0;

leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === 'up') {
    ActiveSlideIndex++;

    if (ActiveSlideIndex > slideLength - 1) {
      ActiveSlideIndex = 0;
    }
  } else if (direction === 'down') {
    ActiveSlideIndex--;

    if (ActiveSlideIndex < 0) {
      ActiveSlideIndex = slideLength - 1;
    }
  }
  rightSlide.style.transform = `translateY(-${
    ActiveSlideIndex * sliderHeight
  }px)`;
  leftSlide.style.transform = `translateY(${
    ActiveSlideIndex * sliderHeight
  }px)`;
};
