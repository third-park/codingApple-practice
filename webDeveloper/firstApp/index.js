const express = require('express');
// const path = require('path');
const app = express();

// app.set('views', path.join(__dirname, '../firstApp/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('home');
})

app.get('/r/:post', (req, res)=>{
  const { post } = req.params;
  res.render('post', { post: post })
})

app.get('/rand', (req, res)=>{
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('random', {num: num});
})

app.listen(3000, ()=>{
  console.log(`3000번 포트 서버를 읽습니다.`);
})
