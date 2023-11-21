import { addClass, getNode, getNodes, removeClass } from '../../lib/index.js'

const bgImg = getNode('.bgImg');
const scoreWrap = getNode('.score');
const btnWrap = getNode('.btn_wraper');
const resetBtn = getNode('.reset');
const winningScoreSelect = getNode('#playto');

const span = document.createElement('span');

const p1 = {
  score: 0,
  button: getNode('.add_playerOne'),
  display: getNode('.playerOne'),
  name: 'Player One',
}
const p2 = {
  score: 0,
  button: getNode('.add_playerTwo'),
  display: getNode('.playerTwo'),
  name: 'Player Two',
}

let winningScore = 3;

resetBtn.addEventListener('click', reset)

btnWrap.addEventListener('click',(e)=>{
  if(e.target.classList.contains('add_playerOne')){
    updateScore(p1, p2);
  }else if(e.target.classList.contains('add_playerTwo')){
    updateScore(p2, p1);
  }
})

winningScoreSelect.addEventListener('change', function(){
  winningScore = parseInt(this.value);
  reset();
})

function updateScore(player, opponent){
  player.score += 1;
  player.display.textContent = player.score;
  if(player.score === winningScore){
    addClass(player.display, 'winner');
    addClass(opponent.display, 'loser');
    winnerMsg(player.name);
    disabledBtn();
  }
}

function reset(){
  for(let player of [p1, p2]){
    player.score = 0;
    player.display.textContent = player.score;
    player.button.removeAttribute('disabled');
    player.button.style.opacity = '';
    removeClass(player.display);
  }
  span.remove();
}

function disabledBtn(){
  for(let player of [p1, p2]){
    player.button.setAttribute('disabled', true);
    player.button.style.opacity = '0.7';
  }
}

function winnerMsg(player){
  span.textContent = `winner is ${player}`;
  span.style.fontSize = '15px';
  scoreWrap.insertAdjacentElement('beforeend', span);
}