// =========== destination slider ===========
var swiper = new Swiper(".destination", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:true,
    speed:2000,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        350: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
  });
// ========== top place ============
var swiper = new Swiper(".destination2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:true,
    speed:2000,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
      breakpoints: {
        350: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
  });
//   ============ testimonial Slider css ============
var swiper = new Swiper(".testimonialSlider", {
    slidesPerView: 3,
    spaceBetween: 5,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
    },
  });