

let name = "동현"



const sayFunction = (name) => console.log("Hello " + name)


const names = ["동현", "산철", "소원", "은한", "윤경", "세명"]
const nameMapping = {}

const setMapping = () => names.forEach(elem => nameMapping[elem] = sayFunction.bind())

setMapping()
// const nameMapping = {
//   동현: sayFunction.bind(),
//   산철: sayFunction.bind(),
//   소원: sayFunction.bind(),
//   은한: sayFunction.bind(),
//   윤경: sayFunction.bind(),
//   세명: sayFunction.bind(),
// }


// console.log(nameMapping)

function getName(name){
  return nameMapping[name](name)
}

getName("동현")



// if(name === "동현"){
//   sayFunction(name)
// } else if (name === "산철"){
//   sayFunction(name)
// } else if  (name === "소원"){
//   sayFunction(name)
// } else if (name === "은한"){
//   sayFunction(name)
// } else if (name === "윤경"){
//   sayFunction(name)
// } else if (name === "세명"){
//   sayFunction(name)
// }

// switch(){
//   case "동현":
//     break;
//   case "산철":
//     break;
//   case "소원":
//     break;
// }

// 함수형 프로그래밍

// 객체지향 프로그래밍