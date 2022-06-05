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
  });

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
  });
//   ============ testimonial Slider css ============
var swiper = new Swiper(".testimonialSlider", {
    slidesPerView: 3,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });