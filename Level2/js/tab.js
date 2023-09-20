// tab기능 + 활성화선 이어지게 이동하도록 해보자
import { getNode, getNodes } from "../../lib/index.js";

const list = getNode('.list');
const buttons = getNodes('.tab-button');
const texts = getNodes('.tab-content');

// for(let i = 0; i < buttons.length; i++){
//   buttons[i].addEventListener('click',()=>{
//     buttons.forEach(e=>e.classList.remove('orange'))
//     buttons[i].classList.add('orange');
//     texts.forEach(e=>e.classList.remove('show'))
//     texts[i].classList.add('show');
//   })
// }

//이벤트 버블링 이용하려면 어떻게?
//일단 먼저 함수로 제작
function openTab(index){
  buttons.forEach(e=>e.classList.remove('orange'))
  buttons[index].classList.add('orange');
  texts.forEach(e=>e.classList.remove('show'))
  texts[index].classList.add('show');
}

list.addEventListener('click',e=>{
  openTab(e.target.dataset.id);
})

