var express =require('express');
var router = express.Router();
var adminLoginCont = require('../controller/adminLogin');


router.post('/',adminLoginCont.auth,adminLoginCont.view);

module.exports=router;