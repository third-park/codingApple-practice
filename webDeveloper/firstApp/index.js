const express = require('express');
const app = express()

// app.use((req, res)=>{
//   console.log("받았다 요청");
//   res.send(`<h1>사이트 오픈</h1>`);
// })

app.get('/', (req, res)=>{
	res.send('my first page');
})
app.get('/u/:route/:id', (req, res)=>{
	const { route, id } =  req.params;
	res.send(`<h1>view Id=${id}, in ${route} page</h1>`);
})
app.post('/cats', (req, res)=>{
	res.send('post requerst');
})
app.get('/cats', (req, res)=>{
	res.send('cats meow');
})
app.get('/dogs', (req, res)=>{
	res.send('dogs barrrk!');
})

app.get('*', (req, res)=>{
  res.send(`<h1 style={color: red;}>sorry. This URL is not available</h1>`);
})

app.listen(3000, ()=>{
  console.log("port 3000");
})
