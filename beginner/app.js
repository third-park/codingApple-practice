
const ball = document.querySelector('.ball');

window.addEventListener('click', function(e) {
  ball.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
})

ball.addEventListener('transitionend', (e)=>{
  ball.classList.add('end');
  console.log(e.elapsedTime);
  console.log('e.propertyName',e.propertyName)
})