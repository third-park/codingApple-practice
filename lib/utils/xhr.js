
/* readyState
0: uninitalized // 초기화
1: loading // 로딩
2: loaded  // 로딩이 완료된
3:interative // 인터렉티브
4:complete // 완료
 */

import { typeError } from "../error/typeError.js";




//4. xhrData 함수 만들기 method, url <-변수
//6. 받자마자 구조분해할당하기 => 초기값 설정도 가능
//콜백형식으로 작성된 애를 promise로 ->
export function xhrData({
  url = '',
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-control-Allow-Origin' : '*',
},
} = {}) { //기본값을 객체로 하기.

  // const {method, url, body} = options

  const xhr = new XMLHttpRequest();
  
  // 1. 비동기 통신 오픈
  xhr.open(method, url);

  //7. setRequestHeader 로 키와 값 던지기 -> entries와 forEach로 배열구조분해할당
/*   Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });
 */  
  

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr; //5. 객체 구조 분해 할당
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log('통신 성공');

        onSuccess(JSON.parse(response));
        console.log();
      }
    } else {
        onFail('통신 실패');
      }
  })
  
  // 2. 서버에 요청 (open과 세트다.)
  xhr.send(JSON.stringify(body));
}

//기본실행
/* xhrData({
  url: 'https://jsonplaceholder.typicode.com/users/1',
  onSuccess: (result)=>{
    console.log(result);
  },
  onFail: (err) => {
    console.log(err);
  }
})
 */



/* xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz'
});
 */


/* const xhr = new XMLHttpRequest();

// console.log(xhr.readyState);

// 1. 비동기 통신 오픈
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// console.log(xhr.readyState);

// 3. 'readystatechange가 적용될때마다 발생하는 addEventLetener 이다. 
xhr.addEventListener('readystatechange', () => {
  if (xhr.status >= 200 && xhr.status < 400) {
    if (xhr.readyState === 4) {
      console.log('통신 성공');
    }
  } else {
      console.log('통신 실패');
    }
})

// 2. 서버에 요청 open과 세트다.
xhr.send();
 */


//8. 함수 안의 함수로 실행
//get은 위에 기본값으로 'GET'이 지정되어있기 때문에 굳이 method를 안 넣어도 된다.
xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail
  })
}

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: 'DELETE',
    url,
    onSuccess,
    onFail
  })
}


/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
)
 */



//Promise API

const defaultOptions = {
  url: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body: null
}


export function xhrPromise(options = {}) {
  

  const xhr = new XMLHttpRequest();




  const { method, url, body, headers } = Object.assign({}, defaultOptions, options); //앞에 빈객체{}를 줘야 여기에 때려넣는다. 없으면 디폴트에 덮어씌움
  // const {method, url, body, headers } = {...defaultOptions, ...options}; ?? 같다? 

  if (!url) typeError('서버와 통신할 url 인자는 반드시 필요합니다.')

  xhr.open(method, url);

  xhr.send(body)

  return new Promise((resolve, reject) => {

    xhr.addEventListener('readystatechange', () => {
      const { status, readyState, response } = xhr;
      
      if (status >= 200 && status < 400) {
        if (readyState === 4) {
          console.log('통신성공')
          resolve(JSON.parse(response));
        }
      } else {
        reject('에러입니다.');
      }
    })
  })
}
  

// xhrPromise({
//   url:'http://jsonplaceholder.typicode.com/users/1'
// })
//   .then((res) => {
//     console.log(res);
// })
//   .catch((err) => {
//   console.log(err);
// })
  
  
  xhrPromise.get = (url) => {
    return xhrPromise({
    url
    })
  }

  xhrPromise.post = (url, body) => {
    return xhrPromise({
      url,
      body,
      method:'POST'
    })
  }

  xhrPromise.put = (url, body) => {
    return xhrPromise({
      url,
      body,
      method:'PUT'
    })
  }

  xhrPromise.delete = (url) => {
    return xhrPromise({
      url,
      method:'DELETE'
    })
  }


/*   xhrPromise
.get('http://jsonplaceholder.typicode.com/users/1') //promise
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  err
}) */