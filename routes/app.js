const express = require('express')
var path = require('path')
const ejs = require('ejs')
var user = require('./user');
var bodyParser = require('body-parser')
const app = express()
const port = 3000


app.set('view engine', 'ejs');
app.set('views', './view/ejs');
app.use('/user', user);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


test='123';

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.render('index',{name:'코딩합시다!'});

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})