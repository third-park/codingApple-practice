// @import { getNode, getNodes } from "../../lib/index.js";

const loginBtn = document.querySelector('.login-btn');
const modalwindow = document.querySelector('.white-bg');
const closeBtn = document.querySelector('#close');

loginBtn.addEventListener('click', ()=>{
  modalwindow.classList.add('active');
})

closeBtn.addEventListener('click',()=>{
  modalwindow.classList.remove('active');
})