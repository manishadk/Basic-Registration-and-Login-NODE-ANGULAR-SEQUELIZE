var express = require('express');

var router = express.Router();
var login = require('../controller/login');

router.get('/',login.view);
router.post('/test',login.check,login.process,login.access);
// router.get('/login',(req,res,next) => {
//   res.render('index', { title: 'Express' });
// });

module.exports=router;

