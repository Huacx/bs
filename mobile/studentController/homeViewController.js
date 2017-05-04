app.controller('homeViewController',['$scope','$http',function($scope,$http){
	$scope.home = '首页相关数据/页面';
	$scope.st=0;
	// $http({
	// 	method: 'get',
	// 	url: '../../json/work.json'
	// }).then(function(res) {
	// 	// 请求成功执行代码
	// 	$scope.chapterData = res.data.chapterList;
	// 	//$scope.nameData = $scope.titleData.nameList;
	// 	console.log($scope.chapterData);
	// }, function(res) {
	// 	// 请求失败执行代码
	// 	console.log("error");
	// });
	$scope.tab =function(n){
		$scope.st = n;
		$scope.work_st = '';
	}
	$scope.par_btn = function(st){
		$scope.work_st = st;
	}
	
}])