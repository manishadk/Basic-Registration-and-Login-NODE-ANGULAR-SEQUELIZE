var Sequelize = require('sequelize');
var sequelize = require('../config');
// var info='fdgdffgdf';

module.exports = function(cb){
var data = sequelize.define('users',
{

	id: {
		type:Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement:true
	    },

	email:Sequelize.STRING(50),
	password:Sequelize.STRING(50),
	status:Sequelize.STRING(50),
	createdAt:Sequelize.DATE,
	updatedAt:Sequelize.DATE

},

{
	freezeTableName:true
}
);
console.log(data);
console.log('first');
 
// return {
//   sync : sequelize.sync(),
//   data : data
// }

sequelize.sync().then(function(error){
  // console.log(data);
  if(cb) cb(error,data);  
});
}
// .then(function(err){

//   if(err){
//     console.log('error has generated'+err);
//   }

//   // data.create({
//   // 	id:'',
//   // 	Name:'booker t'
//   // }).then(function(dataa){
//   // 	console.log(dataa);
//   // });

// // sequelize.query("SELECT * FROM `express`", { model:data})
// //   .then(function(users) {
// // console.log(users) ;
// //  });

//   var da = data.findById(1).then(function(datau){
//  info = datau.Name; 
//     console.log(datau.Name);
//   });

// // var que=data.findAll({
// //   where: {
// //     id : 1
// //   }
// // });
//  // var que = data.findAll();
//  // console.log(que);
//   });
// module.exports= sequelize.sync();


