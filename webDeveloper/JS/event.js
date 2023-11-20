// ! event object
const eventInput = document.querySelector('#forEvent');

const keyList = {
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
}

const keyCheck = (key) => {
  return keyList[key] || 'IGNORED'
}

eventInput.addEventListener('keydown', (e)=>{
  console.log(keyCheck(e.code))
})

// window.addEventListener("keydown", (e) => {
//   switch (e.code) {
//     case "ArrowUp":
//       console.log("UP");
//       break;
//     case "ArrowDown":
//       console.log("Down");
//       break;
//     case "ArrowLeft":
//       console.log("Left");
//       break;
//     case "ArrowRight":
//       console.log("Right");
//       break;
//     default:
//       console.log("IGNORED");
//   }
// });

//! form control
const inputBtn = document.querySelector('.addBtn');
const addList = document.querySelector('.addList');
const form = document.querySelector('form');
// inputBtn.addEventListener('click', (e)=>{
//   e.preventDefault();
//   let newList = document.createElement('li');
//   addList.append(newList);
//   newList.textContent = eventInput.value;
//   eventInput.value = "";
// })


form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const newList = `<li>${eventInput.value}</li>`;
  if(eventInput.value.trim()){
    addList.insertAdjacentHTML('beforeend', newList);
  }
  eventInput.value = "";

})

addList.addEventListener('click',(e)=>{
  e.target.nodeName === 'LI' ? e.target.remove() : null;
})