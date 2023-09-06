

//closure -> IIFE 패턴 사용해서 ()() 안 쓰기 (취향차이?) 
export const memo = (() => {
  
  const cache = {}

  return (key, callback) => {
    
    if (!callback) return cache[key];
    
    if (cache[key]) {
      console.warn(`${key} 값은 이미 캐시된 값이 존재합니다.`);
      return;
    }
    
    
    cache[key] = callback();
    
    // console.log(cache);
  }
})()


/* memo('cube', () => document.querySelector('#cube')); //set
memo('cube', () => document.querySelector('#cube')); //이미 캐시가 할당되어있기때문에 warning이 뜸

console.log(memo('cube')); //get */