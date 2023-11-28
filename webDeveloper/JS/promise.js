//! callback request
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
   if(delay > 4000){
    failure('Connection timeout..');
   }else{
    success(`Here is your fake data from ${url}`);
   }
  }, delay);
}

fakeRequestCallback("books.com",
  function (response) {
    console.log("It worked!");
    console.log(response);
    fakeRequestCallback("books2.com",
      function (response) {
        console.log("second try is worked!!");
        console.log(response);
        fakeRequestCallback("books3.com",
          function (reponse) {
            console.log("3rd try is worked!!!");
            console.log(reponse);
          },
          function (err) {
            console.error("errrrror!!!");
            console.log(err);
          }
        );
      },
      function (err) {
        console.error("error!!");
        console.log(err);
      }
    );
  },
  function (err) {
    console.error("Error!");
    console.log(err);
  }
);


//! use promise
const fakeRequestPromise = () => {
  return new Promise((resolve, reject)=>{
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      delay > 4000 ? reject() : resolve();
    }, delay);
  })
}

fakeRequestPromise('yelp.com/api/coffee/page1')
  .then(() => {
    console.log("it worked!");
    return fakeRequestPromise('yelp.com/api/coffee/page2')
  })
  .then(()=>{
    console.log('worked!!!');
    return fakeRequestPromise('yelp.com/api/coffee/page3')
  })
  .then(()=>{
    console.log('3rd worked');
  })
  .catch(() => { 
    console.log('error');
  })

  const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
      const rand = Math.floor(Math.random() * (4500)) + 500;
      setTimeout(()=>{
        if(rand > 4000) {
          reject('Connection Timeout !')
        }else{
          resolve(`your fake data from ${url}`)
        }
      }, rand )
    })
  }

  // fakeRequest('dogs/1')
  //   .then(()=>{
  //     console.log("good");
  //   })
  //   .catch((err)=>{
  //     console.log('shit', err);
  //   })


//! change color
// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(()=>{
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay)
// }

// delayedColorChange('red', 1000, ()=>{
//   delayedColorChange('orange', 1000, ()=>{
//     delayedColorChange('yellow', 1000, ()=>{
//       delayedColorChange('green', 1000, ()=>{
//         delayedColorChange('blue', 1000, ()=>{
//           delayedColorChange('indigo', 1000, ()=>{
//             delayedColorChange('violet', 1000 => {

//             })
//           })
//         })
//       })
//     })
//   })
// })

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay)
  })
}

// delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('yellow', 1000))
//   .then(() => delayedColorChange('green', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('indigo', 1000))
//   .then(() => delayedColorChange('violet', 1000))
  
const rainbow = async () => {
  await delayedColorChange('orange', 1000);
  await delayedColorChange('yellow', 1000);
  await delayedColorChange('green', 1000);
  await delayedColorChange('blue', 1000);
  await delayedColorChange('indigo', 1000);
  await delayedColorChange('violet', 1000);
}


  async function tryCatch(){
    try {
      let data1 = await fakeRequest('/page1');
      console.log(data1);
      let data2 = await fakeRequest('/page2');
      console.log(data2);
    } catch (error) {
      console.log(`caugh an error ${error}`);
    }
  }