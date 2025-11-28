// TEAM SLIDER
const track = document.querySelector('.team-slider__track');
const slides = document.querySelectorAll('.team-slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');
}

document.querySelector('.team-slider__arrow--next').onclick = () => {
  index = (index + 1) % slides.length;
  updateSlider();
};

document.querySelector('.team-slider__arrow--prev').onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
};

dots.forEach((dot, i) => {
  dot.onclick = () => {
    index = i;
    updateSlider();
  };
});

// Автопереключение
setInterval(() => {
  index = (index + 1) % slides.length;
  updateSlider();
}, 6000);
