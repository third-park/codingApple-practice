//! reduce()
const prices = [1.52, 5.88, 2.99, 16.99, 8.56];

let totalPrice = () => {
  let total = 0;
  for(let price of prices){
    total += price
  }
  return total
};
console.log(totalPrice)

const total = prices.reduce((total, prices)=> total + prices)
console.log(total)

const minPrice = prices.reduce((min, price)=>{
  if(price < min){
    return price;
  }
  return min;
})

//! Spread syntax
const nums = [11,57,86,94,7,51,4,55,46,6,82,9,47,45,3,12,5,49,8];

Math.max(nums) // NaN
Math.max(...nums) // 94


//! destructuring
const user = {
  email: 'qkrtpaud01@gamil.com',
  password: 'dkssudgktpdy',
  firstName: 'park',
  lastName: 'semyeong',
  born: 1994,
  died: null,
  city: 'cheonAn',
  nation: 'korea',
}

const {email, lastName, born, city} = user

const fullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;


//! rainbow
const colors = ['red','orange','yellow','green', 'blue', 'navy', 'purple'];
const words = document.querySelectorAll('h1>span')
const h1 = document.querySelector('h1');
const LowerBtn = document.createElement('button');
const UpperBtn = document.createElement('button');
const colorBtn = document.createElement('button');

let count = 0;
for(let text of words){
  text.style.color = `${colors[count]}`;
  count++;
};

const changeText = (callback) => {
  let timer = 0;
  for(let text of words){
    setTimeout(()=>{
      text.textContent = callback(text.textContent)
    }, timer * 100)
    timer++
  };  
};

const changeLowerCase = () => changeText(e => e.toLowerCase());
const changeUpperCase = () => changeText(e => e.toUpperCase());

LowerBtn.append('소문자');
UpperBtn.append('대문자');
colorBtn.append('색바꾸기');

h1.insertAdjacentElement('beforeend', LowerBtn);
h1.insertAdjacentElement('beforeend', UpperBtn);
h1.insertAdjacentElement('beforeend', colorBtn);

LowerBtn.addEventListener('click', changeLowerCase);
UpperBtn.addEventListener('click', changeUpperCase);

//! randomBackgroundColor
const body = document.body;
const div = document.createElement('div');

h1.insertAdjacentElement('beforeend', div)
// div.append('rgb:')

let r;
let g;
let b;
function randomColor(){
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`
}

function colorize(){this.style.backgroundColor = randomColor();}

colorBtn.addEventListener('click', ()=>{
  colorize.call(document.body);
  div.textContent = body.style.backgroundColor;
  r + g + b <= 164 ? div.style.color = '#FFF' : div.style.color = '';
});


//숫자만
function getNum(str){
  let re = /\s*(?:;|$)\s*/;
  let result = '';
  str.split(re)
  for(let e of str){
    if(!isNaN(e)) result += e
  }
  return result.trim()
}

//! button Click
const btnDiv = document.querySelector('.btns');
for(let i = 0; i <= 30; i++){
  const button = document.createElement('button');
  button.append('버튼버튼')
  button.style.border = 'none';
  btnDiv.insertAdjacentElement('beforeend', button);
}
const buttons = document.querySelectorAll('.btns>button');
btnDiv.addEventListener('click',(e)=>{
  e.target.nodeName === 'BUTTON' ? 
  colorize.call(e.target) : 
  null;
  r + g + b <= 200 ? e.target.style.color = '#FFF' : e.target.style.color = '';
})