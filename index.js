const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const config = require('./config/key');
const {User} = require("./models/User");


//application/x-www-form-urlencoded //데이터를 분석해서 가져옴
app.use(bodyParser.urlencoded({extended:true}));

//application/json json타입으로 된것을 분석해서 가져옴
app.use(bodyParser.json());
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true, useFindAndModify:false //에러 안뜨게 하려고 
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err));



app.get('/', (req, res) => {
  res.send('Hello World!~하이')
})


//회원가입을 위한 라우트
app.post('/register',(req,res) => {

  //회원가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body)
  user.save((err,userInfo)=>{
    if(err)return res.json({success:false,err})//성공 실패시
    return res.status(200).json({success:true}) //json 형식으로 클라이언트에 정보 전달

  })//몽고db 메소드



})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})