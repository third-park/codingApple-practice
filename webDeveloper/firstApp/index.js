const express = require('express');
const app = express()

app.use(()=>{
  console.log("받았다 요청");
})

app.listen(3000, ()=>{
  console.log("port 3000");
})