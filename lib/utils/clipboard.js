import { getNode } from "../dom/getNode.js";


export function copyClipboard(node) {
  
  if (typeof node === 'string') {
    node = getNode(node);
  }

  return navigator.clipboard.writeText(node.textContent); //약속구문을 위해 값을 반환해줘야 한다.(리턴을 안하면 값을 가지고만 있는거기 때문에 .then을 사용할 수 없다.)

}