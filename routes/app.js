const express = require('express')
var path = require('path')
const ejs = require('ejs')
var user = require('./user');
var bodyParser = require('body-parser')
const app = express()
const port = 3000


//view 엔진을 ejs로 설정
app.set('view engine', 'ejs');

//ejs 기본 경로 설정
app.set('views', path.join(__dirname, "../view/ejs"));

//정적(static) 파일 경로 설정
app.use(express.static(path.join(__dirname, '../public')));


//라우터 등록
app.use('/user', user); //요청시 127.0.0.1:3000/user/path

//파싱
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


test='123';

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.render('index',{name:'코딩합시다!'});

})


app.get('/truck', (req, res) => {
  //res.send('Hello World!')
  res.render('truck',{name:'코딩합시다!'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})