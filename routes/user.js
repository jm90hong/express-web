var express = require('express');
var router = express.Router();




// define the home page route
router.get('/bird', function(req, res) {
  res.send(`Birds home page ${test}`);
});

// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});


//외부 파일에서 user를 사용할 수 있게 module export 
module.exports = router;