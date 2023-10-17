function setPromise() {
  return new Promise((resolve, reject) => {
    const calculate = (a, b, c) => a + b * a - c;
    resolve(calculate(5, 10, 20));
  });
}
setPromise
  .then((result) => {
    setTimeout(() => {
      console.log(`성공입니다. ${result}`);
    }, 1000);
  })
  .catch(() => {
    console.log("실패쓰");
  });


document.addEventListener("DOMContentLoaded", () => {
  let imgLoading = new Promise((resolve, reject) => {
    const testImg = document.querySelector("#test");
    if (testImg.complete) {
      resolve();
    } else {
      testImg.addEventListener("load", () => {
        resolve();
      });
      testImg.addEventListener("error", () => {
        reject("로드실패");
      });
    }
  });
  imgLoading
    .then(() => {
      console.log("성공이다.");
    })
    .catch(() => {
      console.log("실패다.");
    });
});



fetch("https://codingapple1.github.io/hello.txt")
  .then(res => res.text())
  .then(data => {
    console.log(data)
    return fetch('https://codingapple1.github.io/hello2.txt') //두번째 fetch를 반환해야 여기서 생기는 오류도 첫번째 프로미스 체인의 일부가 된다.
  })
  .then(res=>res.text())
  .then(data=>console.log(data))
  .catch(()=> console.log("실패"));