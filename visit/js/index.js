
// slider script here
var swiper = new Swiper(".mySwiper", {
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay:3000,
      },
  });

//   reviews
const jsMedia = (mediasize)=>{

    if(mediasize.matches){
      new Swiper(".mySwiper-r", {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay:3000,
          },
      });

    }
    else{
     new Swiper(".mySwiper-r", {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay:3000,
          },
      });

    }
} ;

const mediasize = window.matchMedia("(max-width:500px)");

jsMedia(mediasize);
mediasize.addEventListener('change',jsMedia);




const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.c-btn');
const p_img = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click',(event)=>{
    const p_btn_clicked = event.target;
    const btn_num = p_btn_clicked.dataset.btnNum;
    // p-btn--1
    const img_active = document.querySelectorAll(`.btn--${btn_num}`);
    console.log("img_active");
    p_img.forEach((curElem)=>curElem.classList.add('p-image-not-active'));
    img_active.forEach((curElem)=>curElem.classList.remove('p-image-not-active'));
});
AOS.init({
    // offset:250,
  });
