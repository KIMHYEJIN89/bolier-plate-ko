const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hyejin:abcd1234@bolierplate.mgfsn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{

    useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true, useFindAndModify:false //에러 안뜨게 하려고 
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})