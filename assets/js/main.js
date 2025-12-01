document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-overlay');
  const closeBtn = document.querySelector('.mobile-menu__close');

  const openMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.add('is-open');
    if (overlay) overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  burger && burger.addEventListener('click', openMenu);
  closeBtn && closeBtn.addEventListener('click', closeMenu);
  overlay && overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  const scrollBtn = document.querySelector('.hero__scroll');
  const services = document.querySelector('.services');

  if (scrollBtn && services) {
    scrollBtn.addEventListener('click', () => {
      services.scrollIntoView({ behavior: 'smooth' });
    });
  }
});



// TEAM QUOTE SLIDER
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".team-quote__track");
  const dots = document.querySelectorAll(".dot");

  let index = 0;
  const slideCount = dots.length;

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      updateSlider();
    });
  });

  setInterval(() => {
    index = (index + 1) % slideCount;
    updateSlider();
  }, 4000);
});

