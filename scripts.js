
const sliders = document.querySelectorAll('.slider');
const currentSlides = Array.from(sliders).map(() => 1);

function plusSlide(n, sliderIndex) {
  showSlides(currentSlides[sliderIndex - 1] += n, sliderIndex);
}

function showSlides(n, sliderIndex) {
  const slides = sliders[sliderIndex - 1].querySelector('.slides');

  if (n > slides.children.length) {
    currentSlides[sliderIndex - 1] = 1;
  }

  if (n < 1) {
    currentSlides[sliderIndex - 1] = slides.children.length;
  }

  slides.style.transform = `translateX(${-100 * (currentSlides[sliderIndex - 1] - 1)}%)`;
} 





function showEnlarged(src) {

  const modal = document.createElement('div');
  modal.classList.add('modal');


  const enlargedImage = document.createElement('img');
  enlargedImage.src = src;
  enlargedImage.alt = 'Image agrandie';


  modal.appendChild(enlargedImage);


  document.body.appendChild(modal);


  modal.addEventListener('click', () => {
      document.body.removeChild(modal);
  });
}


const clickableImages = document.querySelectorAll('.clickable');
clickableImages.forEach(image => {
  image.addEventListener('click', () => {
      showEnlarged(image.src);
  });
});