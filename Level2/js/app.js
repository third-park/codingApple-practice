let 예금 = 60000;
let 예금2 = 50000;
const 이율 = 20;

function calcMoney(예금, 예치기간){
  if(예금 >= 50000){
    let 총액 = 예금 * 예치기간 * 12 * 1.20;
    console.log('이율',예금 * 12 * 예치기간 / 5)
    console.log('총액', 총액);
  }else if(예금 < 50000){
    let 총액 = 예금 * 예치기간 * 12 * 1.15;
    console.log('이율', 예금 * 12 * 예치기간 * 0.15)
    console.log('총액', 총액);
  }
}

const 계산 = document.querySelector('.calc');
const 입력 = document.querySelector('.calc>input');
const [풋, 금, 치, 총액] = [...계산.children];

입력.addEventListener('change',function(){

  calcMoney(this.value, 2);
})


const coffeeVolume = document.querySelector('.coffee-volume');
const text = document.querySelector('.coffee');
const totalCoffee = document.querySelector('.total');

function coffeeShare(volume){
  // 첫커피 -> 첫커피 / 3 * 2  -> 의 / 3 * 2
  volume / 3 * 2 


  
}


coffeeVolume.addEventListener('change', function(){

  coffeeShare();
})

