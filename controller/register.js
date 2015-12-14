var registerModal = require('../model/registermodel');
module.exports = {

    check: (req, res, next) => {
        req.exists=true;
        registerModal(function(error,data) {
                            var user=data.findOne({
                                where :{
                                    email : req.body.email
                                }
                            }).then(function(user){

                                  req.exists=false;
                            // return next();
                               console.log('inner user' + user +'end');
                            });
            // .catch(function(error){
            //     console.log(error);
            //     return next();
            // });
            console.log('outside ');
            // if (user==null)
            // {
            data.create({
                id:'',
                email:req.body.email,
                password:req.body.password,
                status:1
                 });
            req.exists=false;
            return next();
            // }
           
            
            /////////////error code/////////////

        	// if(error){
        	// 	// console.log(error);
         //        console.log('in error big errror....');
        	// 	 return res.send('Error ');
        	// }
           ////////////////error code end//////////
           // return next();

        });


    },

    success: (req, res, next) => {

        if(req.exists==true){
            msg=req.body.email+' Email Exists';
        }
        else{
            msg=req.body.email+' Registration Successfull'
        }

        res.render('index', {
    
         message: msg
        });
        console.log('in register');
    }

}
 