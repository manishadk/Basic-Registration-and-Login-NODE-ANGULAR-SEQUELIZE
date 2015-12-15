module.exports = {

	view : (req,res,next) =>{
		res.render('login',{ title: 'LOGIN VIEW'});
	},

	check : (req,res,next) =>{
		 var user = 'sam';
		 var pass = 'sam';
		 req.skip= false;
		 if(req.body.username === user ){
		 	if(req.body.password  === pass){
		 		req.skip = true;
		 		return next();
		 	}else{
		 	return res.render('login',{message : 'password not matched'})
		 	}
		 }else{
		 return	res.render('login',{message : 'username not matched'})
		 }
		return next();
	},

	process : (req,res,next) =>{
		if(req.skip) return next();
		console.log('is in process');
		// res.send('is in process');
		return next();
	},

	access : (req,res,next) =>{
		console.log('is in access');
		return res.render('home',{user:req.body.username});
	}
}