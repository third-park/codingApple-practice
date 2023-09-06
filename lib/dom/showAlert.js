import { addClass, removeClass } from "./css.js";
import { getNode } from "./getNode.js"




export function showAlert(node,text = '입력 잘해주세요.',timeout = 1500) {
  
  if (typeof node === 'string') node = getNode(node);
  node.textContent = text;

  addClass(node, 'is-active');
  setTimeout(() => {
    //시간이 지나면 remove가 실행
    removeClass(node, 'is-active');
  }, timeout);

}


// showAlert('.alert','올바른 정보를 입력해주세요.',3000)

























