const express = require('express');
const path = require('path');
const app = express();
const postData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('home');
})

app.get('/r/:post', (req, res)=>{
  const { post } = req.params;
  const data = postData[post];
  if(data){
    res.render('post', { ...data });
  }else{
    res.render('notFound', { post });
  }
})

app.get('/rand', (req, res)=>{
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('random', { num });
})

app.listen(3000, ()=>{
  console.log(`3000번 포트 서버를 읽습니다.`);
})
