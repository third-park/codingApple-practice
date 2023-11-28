//! use fetch()
// url => https://swapi.dev/api/

fetch("https://swapi.dev/api/people/1") // return promise, so i can use '.then' keyword
  .then((res) => {  // relay callback function
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    return fetch("https://swapi.dev/api/people/2");
  })
  .then((res) => res.json())
  // .then((data)=> console.log(data))
  .catch((err) => {
    console.log("error", err);
  });

//! use Async/await
const starwars = async (id) => {
  try {
    const res = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await res.json();
    return console.log(data);
  } catch (error) {
    console.log("ERROR!", error);
  }
};

// starwars(3)
// starwars(4)


//! use Axios
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch (err) {
    console.log("ERROR", err);
  }
};

// getStarWarsPerson(5);

//! 아재개그 생성기
// 1. 문제생성 버튼을 클릭하면 임의의 개그가 나옴(랜덤숫자를 통해 인덱스에 적용)
// 2. 퀴즈와 정답 버튼이 있고 정답 버튼을 클릭하면 해당 질문의 정답이 출력
// 3. 문제생성 버튼을 누르면 정답확인 텍스트 초기화
const createBtn = document.querySelector('.create-gag');
const gagBox = document.querySelector('.gag-wrap');
const h2 = document.querySelector('h2');
const answerBtn = document.querySelector('.openAnswer');

let dataLoaded = false;
const getAjComedy = async (id) => {
  try {
    const res = await axios.get('/webDeveloper/db/ajgag.json/?problems');
    const data = res.data.problems[id];
    dataLoaded = true;
    return {quiz, answer} = data;
    
  } catch (err) {
    dataLoaded = false;
    console.log("아직 문제를 받아오지 못했습니다.", err);
  }
};

const createAj = async () => {
  const answerLog = document.querySelector('span');
  let randomIndex = Math.floor(Math.random() * 413) + 1;
  await getAjComedy(randomIndex);
  
  h2.textContent = quiz;
  !isCreated ? null : answerLog.remove();
  isCreated = false;
};

createBtn.addEventListener('click', createAj);
answerBtn.addEventListener('click', ()=>{
  !dataLoaded ? alert("문제를 먼저 생성해주세요 :)") : createSpan();
});

let isCreated = false;
const createSpan = () => {
  const span = `<span>= ${answer}</span>`;
  isCreated ? null : gagBox.insertAdjacentHTML('beforeend', span);
  isCreated = true;
};