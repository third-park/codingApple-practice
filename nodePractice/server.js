const { MonfoClient, MongoClient, ObjectId } = require('mongodb');

const express = require('express');
const app = express();

const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

const MongoStore = require('connect-mongo')

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

  const loggedin = (req, res, next) => {
    // 로그인 후 세션이 있으면 req.user가 항상 있다.
    req.user ? next() : res.send('먼저 로그인 해주세요.');
  }

  app.use(passport.initialize())
  app.use(session({
    secret: '1234qwer', //세션 암호
    resave : false,
    saveUninitialized : false,
    cookie : { maxAge : 60 * 60 * 1000 }, //세션 document 지속시간
    store: MongoStore.create({
      mongoUrl : url,
      dbName: 'forum',
    })
  }))
  
  app.use(passport.session())

  passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
    let result = await db.collection('user').findOne({ username : 입력한아이디})
    if (!result) {
      return cb(null, false, { message: '아이디 DB에 없음' })
    }
    if (result.password == 입력한비번) {
      return cb(null, result) //result 값이 serializeUser에 인수로 들어감
    } else {
      return cb(null, false, { message: '비번불일치' });
    }
  }))
  
  // 세션 자동생성
  passport.serializeUser((user, done) => {
    process.nextTick(() => { //비동기처리
      done(null, { id: user._id, username: user.username, name: user.name, age: user.age})
    })
  })
  
  //유저 요청시 쿠키 자동 비교
  //세션에 적힌 유저정보 불러오기 + 최신정보 DB에서 가져오기 + req.user에 집어넣기 이런 과정으로 코드짜는 게 정보 최신화?에 좋다.
  passport.deserializeUser( async (user, done) => {
    let result = await db.collection('user').findOne({_id : new ObjectId(user.id) })
    delete result.password
    process.nextTick(() => {
      return done(null, result)
    })
  })
  
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  app.use('/list', (req, res, next)=>{
    console.log(new Date());
    next();
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

  app.delete('/delete', async (req, res)=>{
    let result = await db.collection('post').deleteOne({ _id: new ObjectId(req.query.docid) })
    res.send('삭제완료')
  })

  app.get('/list/:id', async (req, res)=>{
    let result = await db.collection('post').find().skip((req.params.id - 1) * 5).limit(5).toArray()
    res.render('list.ejs', { 글목록: result })
  })

  // 로그인
  app.get('/login', (req, res)=>{
    res.render('login.ejs');
  })
  app.post('/login', async (req, res, next)=>{

    passport.authenticate('local', (error, user, info) => {
      if(error) return res.status(500).json(error)
      if(!user) return res.status(401).json(info.message)
      req.login(user, (err)=>{
        if(err) return next(err)
        res.redirect('/mypage')
      })
    })(req, res, next)
  })

  // 회원가입
  app.get('/signup', (req, res)=>{
    res.render('signup.ejs');
  })
  app.post('/signup', async (req, res)=>{
    const {username, name, password, age} = req.body;
    const exists = await db.collection('user').findOne({username});

    if(exists) {
      console.log(`${username}은 이미 있는 아이디입니다.`)
      setTimeout(() => {
        res.redirect('/')
      }, 1000);
      return;
    }
    if(password.trim() === '' || password.trim().length < 4) {
      console.log('비밀번호는 네자리 이상이어야 합니다.')
      setTimeout(() => {
        res.redirect('/')
      }, 1000);
      return;
    }

    //보낸 정보를 collection user에 저장
    await db.collection('user').insertOne({
      username,
      password,
      name,
      age
    })

    res.redirect('/list/1');
  })

  //마이페이지
  app.get('/mypage', loggedin ,(req, res)=>{
    res.render('mypage.ejs', {user: req.user});
  })


  app.get('/time', (req, res) => {
    res.render('time.ejs', {date: new Date()})
  })

}).catch(err => {
  console.log(err);
})

