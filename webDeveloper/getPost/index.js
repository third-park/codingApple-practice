const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views')) //절대경로
app.set('view engine', 'ejs');

const comments = [ //comments 를 기본경로로 해서 쌓아가믄 된다
  {
    id:uuid(),
    username:'Abc',
    comment:'im Engligh',
  },
  {
    id:uuid(),
    username:'Def',
    comment:'scareeee',
  },
  {
    id:uuid(),
    username:'Ghiz',
    comment:'glezz to beo odkals',
  },
  {
    id:uuid(),
    username:'Klmn',
    comment:'gotnen takks outbetuzen',
  },
]

app.get('/comments', (req, res)=>{
  res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res)=>{
  res.render('comments/new');
})

app.post('/comments', (req, res)=>{
  const { username, comment } = req.body;
  comments.push({ id: uuid(), username, comment });
  res.redirect('/comments');
})

app.get('/comments/:id', (req, res)=>{
  const { id } = req.params;
  const comment = comments.find(e => e.id === id);
  res.render('comments/show', { comment });
}) 

app.get('/tacos', (req, res)=>{ 
  res.send('GET /tacos response')
})

app.post('/tacos', (req, res)=>{
  const { meat, qty } = req.body;
  res.send(`your ${qty} ${meat} tacos here!`);
})

app.listen('3000', ()=>{
  console.log('3000포트에서 실행');
})

