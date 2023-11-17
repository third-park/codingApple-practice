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

function randomColor(){
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`
}
colorBtn.addEventListener('click', ()=>{
  document.body.style.backgroundColor = randomColor();
  div.textContent = body.style.backgroundColor;

  //rgb 각 자리의 합이 100 이하면 흰색으로 바뀌게 해야한다 ㅡㅡ;
  let bgcArray = body.style.backgroundColor;
  getNum(bgcArray).length -2 < 6 ? div.style.color = `#FFF` : div.style.color = '';
  
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