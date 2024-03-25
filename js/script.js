function changeWidth() {
  var width = window.innerWidth;
  var footerWidth = document.getElementById('beforeFooter');

  if (width <= 768) {
    footerWidth.classList.remove('container');
  } else {
    if (!footerWidth.classList.contains('container')) {
      footerWidth.classList.add('container');
    }
  }
}
window.addEventListener('resize', changeWidth);
changeWidth();


const swiper = new Swiper('.js-testimonials-slider', {
  grabCursor: true,
  spaceBetween: 20,
  pagination: {
    el: '.js-testimonials-pagination',
    clickable: true
  },
  breakpoints: {
    770: {
      slidesPerView: 2
    }
  },

  loop: true,
  loopedSlides: 4,
  initialSlide: 2
});

function restartSlider() {
  swiper.slideTo(0);
}

const interval = setInterval(() => {
  swiper.slideNext();
}, 3000);

swiper.on('transitionEnd', function () {
  if (swiper.realIndex === swiper.loopedSlides - 4) {
    restartSlider();
  }
});

let counterNumbers = document.querySelectorAll(".counterNumber");

counterNumbers.forEach(function (counterElement) {
  let startFrom = parseInt(counterElement.getAttribute("data-from"));
  let endsAt = parseInt(counterElement.getAttribute("data-to"));
  let speed = parseInt(counterElement.getAttribute("data-speed")) || 1000;

  let increment = (endsAt - startFrom) / speed;

  let current = startFrom;
  let interval = setInterval(function () {
    current += increment;


    if (current >= endsAt) {
      current = endsAt;
      clearInterval(interval);
    }
    counterElement.textContent = Math.round(current);
  }, 1);
});

















