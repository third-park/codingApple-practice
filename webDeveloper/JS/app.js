//reduce()
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

//Spread syntax
const nums = [11,57,86,94,7,51,4,55,46,6,82,9,47,45,3,12,5,49,8];

Math.max(nums) // NaN
Math.max(...nums) // 94


//destructuring
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