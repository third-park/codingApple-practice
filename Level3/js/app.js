// const car = document.querySelector('.card>span:first-child');
// const price = document.querySelector('.card>span:last-child');

// let car2 = { name : '소나타', price : [50000, 3000, 4000] }

// car.textContent = `${car2.name}`;
// price.textContent = `${car2.price[1]}`;


const select1 = document.querySelector('.form-select');
const container = document.querySelector('.container');
const button = document.querySelector('button');
const optionSelect = document.querySelector('.option');


deleteElem = (e) => e.remove();

const productsSizeObject = {
  shirts: [90, 95, 100, 105],
  pants: [26, 28, 30, 32, 34]
}

const products = {
  셔츠: "shirts",
  바지: "pants",
  모자: "cap"
}

const productsFunction = (type) => {
  resetOption()
  removeClass("hide")
  createOption(type)
}

const capFunction = () => addClass("hide")

const productsMapping = {
  shirts: productsFunction,
  pants: productsFunction,
  cap: capFunction
}

const resetOption = () => optionSelect.innerHTML = ""
const removeClass = (className) => optionSelect.classList.remove(className)
const addClass = (className) => optionSelect.classList.add(className)

const createOption = (productsType) => {
  productsType.forEach(elem => {
    const productsSize = `<option>${elem}</option>`
    optionSelect.insertAdjacentHTML('beforeend', productsSize);
  })
}

const optionHandler = ({ currentTarget: { value }}) => productsMapping[products[value]](productsSizeObject[products[value]])
// function optionHandler () {
//   productsMapping[products[this.value]](productsSizeObject[products[this.value]])
// }

select1.addEventListener('input',optionHandler)

button.addEventListener('click',()=>{
  let optionValue = document.querySelector('.option') ? document.querySelector('.option').value : '';
  alert(`선택하신 제품이 ${select1.value} ${optionValue} 맞습니까?`)
})