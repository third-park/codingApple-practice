

const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body: null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-referrer',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}



//fetch !!
export const threePeople = async (options = {}) => {
  
  //restparameter 이용 url만 빼고 
  const { url, ...restOptions} = {
    //객체 덮어씌우기(얕복)
    ...defaultOptions, 
    ...options,
      //headers는 객체 안 객체니 얕복이 안되서 직접 지정해서 합치기
    headers: {...defaultOptions.headers, ...options.headers}
    // headers: { ...(defaultOptions.headers ?? {}), ...(options.headers ?? {})} -> nullish 연산자 사용해서 없을 때 객체를 줘라고 할 수도 있다.
  }

  // console.log(restOptions);


  let response = await fetch(url,restOptions)

  if (response.ok) {
    response.data = await response.json()
  }
  // console.log(response);

  return response;
}

// response.data 가 아니라 response를 내보낸 거기 때문에 promise값이 나온다 그러므로 밖에서 await 으로 프로미스값을 받아야 한다.
// console.log(await threePeople());

threePeople.get = (url,options) => {
  return threePeople({
    url,
    ...options
  })
};

threePeople.post = (url, body, options) => {
  return threePeople({
    method:'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

threePeople.put = (url, body, options) => {
  return threePeople({
    method:'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

threePeople.delete = (url, options) => {
  return threePeople({
    method:'DELETE',
    url,
    ...options
  })
}





















