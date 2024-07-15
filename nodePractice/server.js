const { MonfoClient, MongoClient, ObjectId } = require('mongodb');

const express = require('express');
const app = express();

app.set('view engine', 'ejs')
//요청.body로 유저가 보낸 데이터 쉽게 꺼낼 수 있도록 하는 코드
app.use(express.json())
app.use(express.urlencoded({extended:true})) //post요청의 body에 인코딩된 데이터를 해석해 req.body 객체에 채워넣어줌

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

  app.get('/write', (req, res) => {
    res.render('write.ejs')
  })

  app.post('/add', async(req, res) => {
    //작성한 글 서버로 보내기
    
    //DB에 저장
    if(req.body.title === '' || req.body.content === ''){
      res.send('제목과 내용을 모두 적어주세요.');
    }else{
      try {
        if(req.body.title === '' || req.body.content === ''){
          res.send('내용을 모두 입력하세요.');
        }else{
          await db.collection('post').insertOne({ title: req.body.title, content: req.body.content}) //자료추가
          res.redirect('/list');
        }
      } catch (error) {
        res.send('error');
      }
    }
  })

  app.get('/detail/:id', async (req, res)=>{
    let result = await db.collection('post').findOne({ _id: new ObjectId(req.params.id) })
    res.render('detail.ejs', { data: result });
  })

  app.get('/edit/:id', async (req, res)=>{
    let result = await db.collection('post').findOne({ _id: new ObjectId(req.params.id) })
    res.render('edit.ejs', {data: result });
  })

  app.post('/edit', async (req, res)=>{
    try {
      await db.collection('post').updateOne( {_id: new ObjectId(req.body.id)}, {$set: { title: req.body.title, content: req.body.content }})
      res.redirect('/list');
    } catch (error) {
      res.send(error);
    }
  })

  app.get('/time', (req, res) => {
    res.render('time.ejs', {date: new Date()})
  })

}).catch(err => {
  console.log(err);
})

