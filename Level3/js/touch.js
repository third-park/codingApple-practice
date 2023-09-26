let box = document.querySelectorAll(".slide-box");
let container = document.querySelector(".slide-container");
let isPress = false;
let mousePress = 0;
let 거리 = 0;

box.forEach((item, idx) => {
  item.addEventListener("mousedown", (e) => {
    isPress = true;
    mousePress = e.clientX;
  });
  item.addEventListener("mousemove", (e) => {
    if (isPress == true) {
      거리 = e.clientX - mousePress;
      container.style.transform = `translateX(${거리 - innerWidth * idx}px)`;
    }
  });
  item.addEventListener("mouseup", (e) => {
    isPress = false;
    container.style.cssText = "transition:all .5s";
    moveSlide(거리, idx, box, container);
    setTimeout(() => {
      container.style.cssText += "transition : none;";
    }, 500);
  });
});
function moveSlide(거리, 인덱스, 길이, movingContainer) {
  let width = 거리;
  let index = 인덱스;
  let length = 길이.length;
  let moved = 100;
  if (width < -moved) {
    // 오른쪽 넘길 때
    if (length - 1 == index) {
      // 마지막 슬라이드에서
      movingContainer.style.transform = `translateX(${-index * moved}vw)`;
    } else {
      // 마지막이 아닌 오른쪽으로 넘길 때
      movingContainer.style.transform = `translateX(${-(index + 1) * moved}vw)`;
    }
  } else if (width > moved) {
    // 왼쪽으로 넘길 때
    if (index == 0) {
      // 처음 슬라이드에서
      movingContainer.style.transform = `translateX(${index * moved}vw)`;
    } else {
      // 처음 슬라이드가 아닌 경우

      if (length - 1 == index) {
        // 마지막 슬라이드에서
        console.log("check");
        movingContainer.style.transform = `translateX(${-(index - 1) * moved}vw)`;
      } else {
        // 처음과 마지막이 아닌 슬라이드에서 왼쪽으로 넘길 때
        movingContainer.style.transform = `translateX(${(index - 1) * moved}vw)`;
      }
    }
  } else {
    // moved(100)초과 또는 미만이면 그대로 있게 하기
    movingContainer.style.transform = `translateX(${-index * moved}vw)`;
  }
}
