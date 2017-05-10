app.controller('homeViewController',['$scope',function($scope){
	$scope.home = '首页相关数据/页面';
	$scope.st=0;
	$scope.tab =function(n){
		$scope.st = n;
	}
	$scope.par_btn = function(num){
		$scope.work_st = num;
	}
}])