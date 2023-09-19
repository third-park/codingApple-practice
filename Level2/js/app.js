let 예금 = 60000;
let 예금2 = 50000;
const 이율 = 20;

function calcMoney(예금, 예치기간) {
  if (예금 >= 50000) {
    let 총액 = 예금 * 예치기간 * 12 * 1.2;
    console.log("이율", (예금 * 12 * 예치기간) / 5);
    console.log("총액", 총액);
  } else if (예금 < 50000) {
    let 총액 = 예금 * 예치기간 * 12 * 1.15;
    console.log("이율", 예금 * 12 * 예치기간 * 0.15);
    console.log("총액", 총액);
  }
}

const 계산 = document.querySelector(".calc");
const 입력 = document.querySelector(".calc>input");
const [풋, 금, 치, 총액] = [...계산.children];

입력.addEventListener("change", function () {
  calcMoney(this.value, 2);
});

const coffeeVolume = document.querySelector(".coffee-volume");
const text = document.querySelector(".coffee");
const totalCoffee = document.querySelector(".total");

function coffeeShare(volume) {
  let second = (volume / 3) * 2;
  let third = (second / 3) * 2;

  let total = volume + second + third;

  if (typeof volume !== "number" || typeof total !== "number") {
    console.error("숫자형이 아닙니다.");
  } else {
    text.textContent = `${volume}`;
    totalCoffee.textContent = `${parseInt(total)}`;
  }
}

coffeeVolume.addEventListener("change", function () {
  coffeeShare(+coffeeVolume.value);
});

const modal = document.querySelector(".modal");
const [button, modalBox] = [...modal.children];

let count = 5;
let second;

button.addEventListener("click", () => {
  modalBox.style.display = "block";

  clearInterval(second);
  count = 5;

  second = setInterval(interval, 1000);
  setTimeout(timeout, 5000);
});

function interval(){
  count -= 1;
  count >= 0 ?  modalBox.children[0].textContent = count : modalBox.children[0].textContent = 5;
}

function timeout(){
  modalBox.style.display = "none";
}


const returnSection = document.querySelector('.return');
const returnInput = document.querySelectorAll('.return>input');

const [minute, seconds] = [...returnInput];

 
function conversionToMs(min, sec){
  let minToMs = min * 60 * 1000;
  let secToMs = sec * 1000;

  return minToMs + secToMs;
}

returnSection.addEventListener('change',()=>{
  const span = document.querySelector('.return>span');
  span.textContent = conversionToMs(minute.value, seconds.value);
})

//할인적용금액 계산기
//할인율 10% , 첫 구매시 5% 추가 할인
//구매금액 입력하면 
//금액 * 0.1 => 10% 가격 and 첫구매면 금액 * 0.15
//구매금액 - 할인금액 => 최종 금액을 표시
//소수점 없도록!! 반올림ㄱㄱ
