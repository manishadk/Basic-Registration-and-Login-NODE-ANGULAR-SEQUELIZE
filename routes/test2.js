var express =require ('express');
var router= express.Router();

router.get('/',function(req,res,next){

res.render('test2',{title:"TEST2"});

});

module.exports=router;
