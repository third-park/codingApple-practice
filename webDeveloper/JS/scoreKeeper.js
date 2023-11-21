import { addClass, getNode, getNodes, removeClass } from '../../lib/index.js'

const bgImg = getNode('.bgImg');
const scoreWrap = getNode('.score');
const scoreOne = getNode('.playerOne');
const scoreTwo = getNode('.playerTwo');
const btnWrap = getNode('.btn_wraper');
const addPloneBtn = getNode('.add_playerOne');
const addPltwoBtn = getNode('.add_playerTwo');
const resetBtn = getNode('.reset');
const winningScoreSelect = getNode('#playto');

const span = document.createElement('span');


let score = 0;
let twoScore = 0;
let winningScore = 3;
let isGameOver = false;

resetBtn.addEventListener('click', reset)

btnWrap.addEventListener('click',(e)=>{
  if(e.target.classList.contains('add_playerOne')){
    score += 1;
    scoreOne.textContent = score;
    if(score === winningScore){
      addClass(scoreOne, 'winner');
      addClass(scoreTwo, 'loser');
      winnerMsg('One');
    }
  }else if(e.target.classList.contains('add_playerTwo')){
    twoScore += 1;
    scoreTwo.textContent = twoScore;
    if(twoScore === winningScore){
      addClass(scoreTwo, 'winner');
      addClass(scoreOne, 'loser');
      winnerMsg('Two');
    }
  }

  if(score === winningScore || twoScore === winningScore){
    disabledBtn();
  }
})

winningScoreSelect.addEventListener('change', function(){
  winningScore = parseInt(this.value);
  reset();
})

function reset(){
  score = 0;
  scoreOne.textContent = score;
  twoScore = 0;
  scoreTwo.textContent = twoScore;

  addPloneBtn.removeAttribute('disabled');
  addPltwoBtn.removeAttribute('disabled');

  addPloneBtn.style.opacity = '';
  addPltwoBtn.style.opacity = '';

  removeClass(scoreOne);
  removeClass(scoreTwo);

  span.remove();
}

function disabledBtn(){
  addPloneBtn.setAttribute('disabled', true);
  addPltwoBtn.setAttribute('disabled', true);
  addPloneBtn.style.opacity = '0.7';
  addPltwoBtn.style.opacity = '0.7';
}

function winnerMsg(player){
  span.textContent = `winner is Player ${player}`;
  span.style.fontSize = '15px';
  scoreWrap.insertAdjacentElement('beforeend', span);
}