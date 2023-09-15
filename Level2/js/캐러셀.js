import { getNode, getNodes } from "../../lib/index.js";

let slideBox = getNodes('.slide-box');
const container = getNode('.slide-container')

//받아온 배열을 풀어서 id를 순서대로 지정해주자?
// let slide = [...slideBox];
// let id = 0;
// slideBox.forEach((e)=>{
//   id += 1;
//   e.id = id;
// });


const prevBtn = getNode('.prev-btn');
const nextBtn = getNode('.next-btn');
const buttons = getNodes('button');

let note = 1;
buttons.forEach((e)=>{
  e.addEventListener('click',()=>{
    // console.log('e.target.className',e.className)
    if(e.className === 'prev-btn'){
      container.style.transform = `translateX(${note}00vw)` ;
      note += 1;
    }else{
      container.style.transform = `translateX(-${note}00vw)`;
      note -= 1;
    }

  })
})
