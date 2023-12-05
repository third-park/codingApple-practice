//! 옛 팩토리 함수
function person(name, age, country){
  return {
    name,
    age,
    country,
    hi: function(){
      return `hi Im ${name} ${age}, i from ${country}`
    }
  }
}
const person1 = person('park', 15, 'korea');
const person2 = person('kong', 202, 'mistic');
console.log(person1.hi());
console.log(person1.hi === person2.hi);

//! new constructor function 생성자 함수
function Person(name, age, country){
  this.name = name;
  this.age = age;
  this.country = country;
}
Person.prototype.hello = function(){
  const {name, age, country} = this;
  return `hi Im ${name} ${age}, i from ${country}`
}

const person3 = new Person('jin', 19, 'germany');
const person4 = new Person('young', 2, 'samyang');
console.log(person3.hello())
console.log(person3.hello === person4.hello);


//! class 생성자 객체
class Color {
	constructor(r, g, b, name){
		this.r = r;
		this.g = g;
		this.b = b;
		this.colorName = name
	}
	info(){
		const {r,g,b} = this;
		return `this color is ${this.colorName}, rgb(${r},${g},${b}) & hex = ${this.hex()}`
	}
	hex(){
		const {r,g,b} = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
}

const white = new Color(255,255,255, 'white');
console.log(white.info())

//! use super&extend keyword
class Pet {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating`
  }
}

class Cat extends Pet {
  constructor(name, age, master){
    super(name, age)
    this.master = master;
  }
  meow(){
    return `meoww!`
  }
}
class Dog extends Pet {
  bark(){
    return `Wooff!`
  }
}