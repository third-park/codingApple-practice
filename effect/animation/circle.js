import { getNode, getNodes } from "../../lib/index.js";

const subBtn = getNode(".submenu_btn");
const subMenu = getNode(".submenu");

let isclicked = false;
subBtn.addEventListener("click", () => {
  if (!isclicked) {
    subMenu.classList.remove("hide");
    subMenu.style.animation = `spread 1s ease forwards`;
    subBtn.style.backgroundColor = "#FFF";
    isclicked = true;
  } else {
    subMenu.style.animation = `spread-back 1s ease forwards`;
    subBtn.style.backgroundColor = "";
    isclicked = false;
    subMenu.classList.add("hide");
  }
});

//스크롤을 내리면 스크롤 / n 해서 clip-path %값 넣어주기
const circle = getNodes(".bg_circle");

let prevScroll = document.documentElement.scrollTop;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > prevScroll) {
    circle[0].style.clipPath = `ellipse(${scrollY / 25 + 2}% ${scrollY / 24.5 + 2}% at 25% 30%)`;
    circle[1].style.clipPath = `ellipse(${scrollY / 10 + 2}% ${scrollY / 9.5 + 2}% at 70% 70%)`;
  } else {
    circle[0].style.clipPath = `ellipse(${scrollY / 25 + 2}% ${scrollY / 24.5 + 2}% at 25% 30%)`;
    circle[1].style.clipPath = `ellipse(${scrollY / 10 + 2}% ${scrollY / 9.5 + 2}% at 70% 70%)`;
  }

  prevScroll = scrollTop;
});
