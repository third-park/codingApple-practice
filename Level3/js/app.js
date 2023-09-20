const car = document.querySelector('.card>span:first-child');
const price = document.querySelector('.card>span:last-child');

let car2 = { name : '소나타', price : [50000, 3000, 4000] }

car.textContent = `${car2.name}`;
price.textContent = `${car2.price[1]}`;


const select1 = document.querySelector('.form-select');
const container = document.querySelector('.container');
const button = document.querySelector('button');

deleteElem = (e) => e.remove();
createSize = () => {
  let size = /*html*/`
  <select class="pants option">
    <option>28</option>
    <option>30</option>
  </select>`
  
  container.insertAdjacentHTML('beforeend', size);
}
createShirt = () => {
  let shirt = /*html*/`
  <select class="size option">
    <option>90</option>
    <option>100</option>
  </select>`

  container.insertAdjacentHTML('beforeend', shirt);
}

select1.addEventListener('input',function(){
  const pants = document.querySelector('.pants');
  const shirt = document.querySelector('.size');

  pants ? deleteElem(pants) : shirt ? deleteElem(shirt) : null;
  
  if(this.value === select1[1].value){
    createShirt();
  }else if(this.value === select1[2].value){
    createSize();
  }
})


button.addEventListener('click',()=>{
  let optionValue = document.querySelector('.option') ? document.querySelector('.option').value : '';
  alert(`선택하신 제품이 ${select1.value} ${optionValue} 맞습니까?`)
})