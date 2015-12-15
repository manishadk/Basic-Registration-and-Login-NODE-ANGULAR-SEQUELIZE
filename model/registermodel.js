var Sequelize = require('sequelize');
var sequelize = require('../config');
module.exports = function(cb){

var data = sequelize.define('student',{

	id : {

					type : Sequelize.INTEGER,
					primaryKey:true,
					autoIncrement:true

				},
	firstName : Sequelize.STRING(128),
	lastName : Sequelize.STRING(128),
	email : Sequelize.STRING(128),
	status : Sequelize.INTEGER(1)


},

{
	freezeTableName:true
});

data.sync().then(function(error){
  if(cb) cb(error,data);  
});
}
// console.log(data);
// console.log('first');
 
// return {
//   sync : sequelize.sync(),
//   data : data
// }
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


