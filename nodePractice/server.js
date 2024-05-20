const { MonfoClient, MongoClient } = require('mongodb');

const express = require('express');
const app = express();

app.set('view engine', 'ejs')

let db;
const url = 'mongodb+srv://qkrtpaud01:M8ITGsyISK5He5N0@project0.z59ctry.mongodb.net/?retryWrites=true&w=majority&appName=project0';
new MongoClient(url).connect().then(client => {
  console.log('DB연결성공');
  db = client.db('forum');
  
  app.use(express.static(__dirname + '/public'));
  
  app.listen(8080, () => {
    console.log("hi 8080");
  })
  
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  app.get('/list', async (req, res) => {
    let result = await db.collection('post').find().toArray();
    res.render('list.ejs', {글목록: result})
  })
  app.post('/list', (req, res) => {
    //작성한 글 서버로 보내기
    //글 들어왔는 지 확인
    //DB에 저장
  })


  app.get('/time', (req, res) => {
    res.render('time.ejs', {date: new Date()})
  })

}).catch(err => {
  console.log(err);
})

