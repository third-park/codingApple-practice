import { typeError } from "../error/typeError.js"


export function getRandom(n) {
  if(!n) typeError('getRandom 함수는 한개이상의 매개변수를 받아야 합니다.')
  if(typeof n !== 'number') typeError('getRandom함수의 매개변수는 숫자 타입이어야 합니다.')

  return Math.round(Math.random() * n)
} 