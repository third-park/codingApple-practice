const car = document.querySelector('.card>span:first-child');
const price = document.querySelector('.card>span:last-child');

let car2 = { name : '소나타', price : [50000, 3000, 4000] }

car.textContent = `${car2.name}`;
price.textContent = `${car2.price[1]}`;


const select1 = document.querySelector('.form-select');
const container = document.querySelector('.container');
const button = document.querySelector('button');
const optionSelect = document.querySelector('.option');

let shirt = [90, 95, 100, 105];
let pants = [26, 28, 30, 32, 34];

deleteElem = (e) => e.remove();

select1.addEventListener('input',function(){

  optionSelect.classList.add('hide');
  optionSelect.innerHTML = '';
  
  if(this.value === select1[1].value){
    optionSelect.classList.remove('hide');
    shirt.forEach(function(elem, index){
      let shirtSize = `<option>${elem}</option>`;
      optionSelect.insertAdjacentHTML('beforeend', shirtSize);
    })
  }else if(this.value === select1[2].value){
    optionSelect.classList.remove('hide');
    pants.forEach((elem)=>{
      let pantsSize = `<option>${elem}</option>`;
      optionSelect.insertAdjacentHTML('beforeend', pantsSize);
    })
  }
})


button.addEventListener('click',()=>{
  let optionValue = document.querySelector('.option') ? document.querySelector('.option').value : '';
  alert(`선택하신 제품이 ${select1.value} ${optionValue} 맞습니까?`)
})