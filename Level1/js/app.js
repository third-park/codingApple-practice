import { addClass, disableElement, getNode, getNodes, removeClass, showAlert} from "../../lib/index.js";


const loginBtn = getNode('.login-btn');
const modalwindow = getNode('.white-bg');
const closeBtn = getNode('#close');
const submitBtn = getNode('.submit-btn');

loginBtn.addEventListener('click', ()=>{
  addClass(modalwindow, 'active');
})
closeBtn.addEventListener('click',()=>{
  removeClass(modalwindow, 'active');
})

//데이터 전송시 공백 검사
function checkForm(){
  const inputs = getNodes('input');
  const [id, pw] = [...inputs];
  let idText = id.value;
  let pwText = pw.value;
  if(idText === '' || pwText === ''){
    event.preventDefault();
    showAlert('.alert', '빈칸이다')
  }else if(pwText.length < 6){
    event.preventDefault();
    showAlert('.alert', '비밀번호는 6자리 이상으로 작성', 1500)
  }
}

submitBtn.addEventListener('click',()=>{
  checkForm();
})