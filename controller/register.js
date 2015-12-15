var registerModel = require('../model/registermodel');
module.exports = {

    check: (req, res, next) =>{
        registerModel(function(error,data) {
            var student = data.findOne({
                where :{
                    email : req.body.email
                }
               }).then(function(user){

                    if(user==null)
                    {

                        data.create({

                                id:'',
                                firstName:req.body.firstName,
                                lastName:req.body.lastName,
                                email:req.body.email,
                                status:1
                            });
                            req.student_exists=false;
                            return next();
                    }

                     req.student_exists=true;
                     return next();
                 });
           });
},
         
            
            /////////////error code/////////////

        	// if(error){
        	// 	// console.log(error);
         //        console.log('in error big errror....');
        	// 	 return res.send('Error ');
        	// }
           ////////////////error code end//////////
           // return next();

        // });



    success: (req, res, next) =>{

        if(req.student_exists==true){
           msg=req.body.email+' Email Already Exists';
        }
        else{
            msg=req.body.firstName+' You have been successfully registered';
        }
        res.render('index', {message: msg});
    }

}
 