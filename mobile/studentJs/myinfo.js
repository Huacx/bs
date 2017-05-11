var app = angular.module('infoApp',[]);
app.controller('infoController',['$scope','$http',function($scope,$http){
	var info = {
		init:function(){}
		events:function(){
			$scope.save = function(){
				alert('修改成功');
				return;
			}
			$scope.cancel = function(){
				location.href = '../code/studentIndex.html#!/me'
			}
		}
	}
	info.init();
}])