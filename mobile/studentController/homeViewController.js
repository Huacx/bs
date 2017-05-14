app.controller('homeViewController',['$scope',function($scope){
	$scope.st=0;
	$scope.grayTip = '作业界面';
	$scope.tab =function(n){
		$scope.st = n;
	}
	$scope.par_btn = function(num){
		$scope.work_st = num;
	}
	$scope.show_work = function(){
		location.href = '../code/homework.html';
	}
}])