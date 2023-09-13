import { getNode, getNodes } from "../../lib/index.js";

//task1
//버튼을 누르면 1부터 번호가 출력된다.
//3의 배수에서 '박수'로 텍스트가 대체된다. 9의 배수에선 '박수박수'
const runBtns = getNodes('.run');
const creationBox = getNodes('.creation-box');

const [task1Btn, task2Btn] = [...runBtns];
const [creationBox1, creationBox2] = [...creationBox];


function createElem(){
  let newSpan =  document.createElement('span');
  let newSpanText = document.createTextNode(num++ + 1);
  newSpan.appendChild(newSpanText);
  
  return newSpan;
}
let num = 0;
let num1 = 0;

function addNum(){
  // let newSpan = createElem();
  let newSpan =  document.createElement('span');
  let newSpanText = document.createTextNode(++num);
  newSpan.appendChild(newSpanText);

  
  if(num % 3 === 0){
    newSpan.textContent = '박수';
  } 
  if(num % 9 === 0){
    newSpan.textContent = '박수박수';
  }
  creationBox1.insertAdjacentElement('beforeend', newSpan);
};

function resetBtn(){
  const reset = document.querySelector("#reset");
  reset.addEventListener("click", ()=>{
    document.location.reload();
  });
}

task1Btn.addEventListener('click',()=>{
  addNum();
});

resetBtn();

//task2
//끝자리가 3,6,9 로 끝날 때 '박수'

function clapGame(){
  // let newSpan = createElem();
  let newSpan =  document.createElement('span');
  let newSpanText = document.createTextNode(++num1);
  newSpan.appendChild(newSpanText);

  let last_char = newSpan.textContent.charAt(newSpan.textContent.length-1);

  last_char == 3 || last_char == 6 || last_char == 9 ? newSpan.textContent = '박수' : null;
  creationBox2.insertAdjacentElement('beforeend', newSpan);
};

task2Btn.addEventListener('click',()=>{
  clapGame();
});


//task3
//input에 입력한 점수의 합을 total에 출력, total이 120점 이상이면 result에 '합격' 그렇지 않으면 '불합격'을 출력
//한 과목이 40점 미만일때는 총합에 관계없이 '과락'을 출력

const inputs = getNodes('input');
const firstScore = getNode('#one');
const secondScore = getNode('#two');
const totalScore = getNode('.total');
const passOrNot = getNode('.result');

let [a, b] = [...inputs];

const inputData = function(){
  let aValue = a.value;
  let bValue = b.value;
  total = +(aValue) + +(bValue);

  let result = passOrNot.textContent;

  totalScore.textContent = `'총합 = ${total}'`

  aValue < 40 || bValue < 40 ? passOrNot.textContent = '과락' :
   total > 120 ? passOrNot.textContent = '합격' :
    total <= 0 ? passOrNot.textContent = '결과값' : passOrNot.textContent = '불합격';
  
}

let total = 0;
firstScore.addEventListener('change', inputData);
secondScore.addEventListener('change', inputData);
