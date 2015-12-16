var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:tab', function(req, res, next) {
  res.render('partials/'+req.params.tab);
});

router.get('/test/home',function(req,res){
	res.render('dashboard');
})
router.get('/home/dash',function(req,res){
	res.send('Welcome');
})
module.exports = router;
