//데이터 수에 따라 ul에 li자동 생성!
//input에 입력한 이름이 명단에 있으면 span에 있습니다. 없으면 없습니다. 
const list = ['흥민', '영희','철수','흥민','재석', '세명', '희영', '영민', '소민', '아영', '유미', '지연','지우','서준','민서','도윤','시우','예준','주원','윤서'];

const userName = document.querySelector('.name');
const searchName = document.querySelector('.findName>input');
const searchResult = document.querySelector('.findName>span');

list.forEach((elem)=>{
  let listItem = `<li>${elem}</li>`;
  userName.insertAdjacentHTML('beforeend', listItem);
})

let found = false;

searchName.addEventListener('change',()=>{
  searchResult.textContent = '';
  found = false;
  search(searchName.value)
})

function search(inputValue){
  list.forEach(elem=>{
    if(inputValue === elem && !found) {
      searchResult.textContent = '있어욜';
      console.log("얍");
      found = true;
    }
  })
}

function 구구(){
  for(let i = 2; i < 10; i++){
    for(let j = 1; j < 10; j++){
      console.log(i * j);
    }
  }
}

function 비교하자(prev, score){
  let total = 0;
  prev.forEach((elem)=>{
    total = total + elem;
  })
  total /= prev.length
  score > total ? console.log(`평균보다 ${score - total}점 높네요`) : console.log(`평균보다 ${total - score}점 적네요`);
}