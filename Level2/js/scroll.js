const body = document.querySelector('body');
const brand = document.querySelector('.navbar-brand');
const lorem = document.querySelector('.lorem');

let lastScroll = window.scrollY;

window.addEventListener('scroll',()=>{
  // window.scrollY >= 100 ? brand.style.fontSize = `100px` : brand.style.fontSize = '';
  let scrollTop = window.scrollY;

  if(scrollTop > lastScroll){
    brand.style.fontSize = `200px`;
  }else {
    brand.style.fontSize = `50px`;
  }

  lastScroll = scrollTop;
});

lorem.addEventListener('scroll',()=>{
  lorem.scrollTop + lorem.clientHeight == lorem.scrollHeight ? alert('끝') : null;
  console.log(lorem.scrollTop, lorem.scrollHeight, lorem.clientHeight);
})