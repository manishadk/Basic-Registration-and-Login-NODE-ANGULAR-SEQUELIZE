var app = angular.module('test',['ui.router'])
	.config(function($stateProvider, $urlRouterProvider, $httpProvider){
	   $urlRouterProvider.otherwise("/")
        $stateProvider
            .state('home',{
            	url : '/',
            	templateUrl : '/views/home'
            })
            .state('contact',{
            	url :'/contact',
            	templateUrl : '/views/contact',
            	controller : 'contactCtrl'
            })
            .state('faq',{
            	url :'/faq',
            	templateUrl : '/views/faq'
            })
})
.controller('contactCtrl',function($scope,$http){
	$scope.name = 'sam';
	$scope.list = [1,2,3,4];

	$scope.onformenter = function(){
		// console.log($scope.form)
		$http.post('/adminlogin',angular.extend($scope.form,{}))
		.then(function(report){
			var result =  report.data;
			if(!result.success) return alert(result.message);

			window.location.href= '/views/home/dash'
		})
		.catch(function(error){
			alert('error happen')
		})
	}
})	