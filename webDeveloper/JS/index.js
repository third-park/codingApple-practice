const { PI, square} = require('./math');


//! detectlanguage in node.js
const franc = require("franc");
const langs = require("langs");
input = process.argv[2];
const langsCode = franc(input);

if(langsCode === 'und'){
  console.log('인식하지 못했습니다. 좀 더 길게 작성하거나 샘플코드를 입력해주세요')
}else{
  const language = langs.where("3", langsCode);
  console.log(language.name);
}

