// ITEM CONTAINER
const item_container = document.querySelector(".item-container");
const btn = document.querySelectorAll(".btn");
const img_element = document.querySelectorAll(".img-overlay");
item_container.addEventListener("click",(e)=>{
  const btn_clicked=e.target;
  console.log(btn_clicked);

  btn.forEach((curElement) => curElement.classList.remove("btn3-active"));

  btn_clicked.classList.add("btn3-active");

  const btn_num = btn_clicked.dataset.btnNum;
  console.log(btn_num);

  const img_active = document.querySelectorAll(`.btn--${btn_num}`);
  img_element.forEach((curElement)=> curElement.classList.add("img-not-active"));
  img_active.forEach((curElement)=> curElement.classList.remove("img-not-active"));
});
// initializing swiper
var swiper = new Swiper(".mySwiper",{
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay:{
      delay:3500,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
// scroll
const heroSection=document.querySelector(".hero");
const scrollElement=document.querySelector(".scrolltop")
const scrollTop=() =>{
  heroSection.scrollIntoView({ behavior:"smooth"});
};
scrollElement.addEventListener("click",scrollTop);
// data increamented
const counterNum = document.querySelectorAll(".counter-num");
const speed =50; 
counterNum.forEach((curElem)=>{
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);
    const increamentNumber =  Math.trunc(targetNumber/speed);
    // console.log(increamentNumber);
    if(initialNum < targetNumber){
      curElem.innerText = `${initialNum + increamentNumber}+`;
      setTimeout(updateNumber,50);
    }
  };
  updateNumber();
});
//  nav responsive
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const header= document.querySelector(".header");
mobile_nav.addEventListener("click", () => {
  header.classList.toggle("active");
});