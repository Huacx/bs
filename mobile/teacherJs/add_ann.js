var app = angular.module('annApp',[]);
app.controller('annController',['$scope','$http',function($scope,$http){
	$scope.annTypeNum = 0;
	$scope.annType = function(num){
		//作业选项
		if(num == 0){
			$scope.annTypeNum = num;
		}
		//考试选项
		else if(num == 1){
			$scope.annTypeNum = num;
		}
		//其他选项
		else 
		{
			$scope.annTypeNum = num;
		}
	}
	$scope.annSubmit = function(){
		alert($scope.annTypeNum + $scope.annTitle + $scope.annContent);
		// location.href='../code/teacherIndex.html#!/homeWork';
		location.href='../code/teacherIndex.html#!/homeWork';
		// window.close();
	}
	$scope.annCancel = function(){
		location.href='../code/teacherIndex.html#!/homeWork';
		// window.close();
	}
}])