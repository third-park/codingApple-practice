
import { getNode } from "../dom/getNode.js"
import { isNumber, isObject } from "./typeOf.js";


const first = getNode('.first');
const second = getNode('.second');


function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

//콜백함수를 이용해 애니메이션 만듦
/* delay(() => {
  first.style.top = '-100px';
  delay(() => {
    first.style.transform = 'rotate(360deg)';
    delay(() => {
      first.style.top = '0px';
    })
  })
})
 */

//promise를 이용해 가독성 높인 코드으
/* delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  second.style.left = '100px';
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
  second.style.left = '0px';
})
 */



const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}


export function delayP(option = {}) {

  let config = { ...defaultOptions }; //스프레드오퍼 -> 복사

  //숫자인 timeout을 밑에 구조분해할당에 포함하기 위해 여기서 미리 걸러줌
  if (isNumber(option)) {
    config.timeout = option;
  }

  if (isObject(option)) {
    config = { ...config, ...option };
  }



  //{...}으로 불러온 값이 아니라 따로 전달한 값을 쓰려면 객체합성 mixin 이 필요
  config = { ...config, ...option };


  const {shouldReject,data,errorMessage,timeout} = config;

  
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  })
}

//promise 의 딜레이..
/* delayP(3000).then((res)=> {
  console.log(res);
})
 */

/* delayP()
  .then(res => console.log(res))
  .catch(err => console.log(err)) */




// async : 일반 함수를 promise를 반환하는 함수로 만든다. 
// await : 1. promise가 반환하는 result를 가져오기, 2.코드 실행 흐름 제어

async function delayA() {
  return '완료'
}

let result = delayA();

// console.log(result);

//위와 같은 결과를 내려면 이렇게 쓴거랑 같다.
/* function delayA() {
  return new Promise((resolve, reject) => {
    resolve('완료')
  })
}
 */





















