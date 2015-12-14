var registerModal = require('../model/registermodel');
module.exports = {

    check: (req, res, next) => {
        req.exists=true;
        registerModal(function(error,data) {
            
            var user=data.findOne({
                where :{
                    email : req.body.email
                }
            });
            var user2=data.findById(1).then(function(datau){
                console.log(datau.email);
            });
            console.log('user2 output');
            console.log(user2);
            console.log('the find one output');
            console.log(user);
            console.log('find one output stop');
            // if (user==null)
            // {
            data.create({
                id:'',
                email:'manish@manish.com',
                password:'test',
                status:1
                 });
            // req.exists=false;
            // return next();
            // }
           
            
            /////////////error code/////////////

        	// if(error){
        	// 	// console.log(error);
         //        console.log('in error big errror....');
        	// 	 return res.send('Error ');
        	// }
           ////////////////error code end//////////
           return next();

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
 