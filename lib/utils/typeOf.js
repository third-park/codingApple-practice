



export function isNumbericString(data) {
  
  data = Number(data);
  return !isNaN(data);
}



//typeof 보다 정교하게 파악할 수 있도록 만든 유틸함수!!
function typeOf(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

export const isObject = data => typeOf(data) === 'object';
export const isString = data => typeOf(data) === 'string';
export const isArray = data => typeOf(data) === 'array';
export const isNumber = data => typeOf(data) === 'number';
export const isBigInt = data => typeOf(data) === 'bigint';
export const isBoolean = data => typeOf(data) === 'boolean';
export const isFunction = data => typeOf(data) === 'function';
export const isUndifined = data => typeOf(data) === 'undifined';
export const isNull = data => typeOf(data) === 'null';
export const isSymbol = data => typeOf(data) === 'symbol';
export const isElement = node => node.nodeType === document.ELEMENT_NODE;