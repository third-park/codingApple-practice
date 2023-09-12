import { getNode, getNodes } from "../../lib/index.js";

//task1
//버튼을 누르면 1부터 번호가 출력된다.
//3의 배수에서 '박수'로 텍스트가 대체된다.
//번외*끝자리가 3,6,9일때 '박수'
const runBtns = getNodes('.run');
const creationBox = getNode('.creation-box');
let num = '';

function addNum(){
  let newSpan =  document.createElement('span');
  let newSpanText = document.createTextNode(num++ + 1);
  newSpan.appendChild(newSpanText);

  creationBox.insertAdjacentElement('beforeend', newSpan);
  
  if(num % 3 === 0){
    newSpan.textContent = '박수';
  };
};

function resetBtn(){
  const reset = document.querySelector("#reset");
  reset.addEventListener("click", () => {
    document.location.reload();
  });
}
  
const [task1Btn, task2Btn] = [...runBtns];
task1Btn.addEventListener('click',()=>{
  addNum();
  resetBtn();
});

//task2
//task1과 동일하지만 9의 배수에선 '박수박수'가 출력되어야 한다.





//task3
//input에 입력한 점수의 합을 total에 출력, total이 120점 이상이면 result에 '합격' 그렇지 않으면 '불합격'을 출력
//한 과목이 40점 미만일때는 총합에 관계없이 '과락'을 출력