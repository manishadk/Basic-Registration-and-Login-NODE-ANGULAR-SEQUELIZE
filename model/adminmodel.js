var Sequelize =require('sequelize');
var sequelize=require('../config');
module.exports=function(cb){

	var data = sequelize.define('admin',{

		id:{
			type:Sequelize.INTEGER(50),
			primaryKey:true,
			autoIncrement:true
			},
		username:Sequelize.STRING(50),
		password:Sequelize.STRING(50),
		status:Sequelize.INTEGER(1)	
	    
	    },

	   {
	   	freezeTableName:true
	   } 
	   );

		data.sync().then(function(error){
			if (cb) cb(error,data);
		});
}