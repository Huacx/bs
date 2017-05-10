var app = angular.module('homeApp',[]);
app.controller('homeController',['$scope','$http',function($scope,$http){
	var submit = {
		init:function(){
			this.getAnswer();
			this.events();
		},
		getAnswer:function(){

		},
		events:function(){
			// $scope.submit = function(){
			// 	$http({
			// 		url:'',
			// 		method:'post',
			// 		headers: {
   //                      'Content-Type': 'application/x-www-form-urlencoded'
   //                  },
   //                  params: {
   //                      radioAnswer: ,
   //                      voidAnswer: ,
   //                      simpleAnswer:
   //                      program:
   //                  }
			// 	}).then(function(res){

			// 	})
			// }
			$scope.cancel = function(){
				location.href = '../code/studentIndex.html#!/home'
			}
		}
	}
	submit.init();
}])