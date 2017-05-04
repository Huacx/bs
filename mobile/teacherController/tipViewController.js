app.controller('tipViewController',['$scope','$http',function($scope,$http){
	// $scope.name = '作业相关数据/页面';
	
	$scope.addAnn = function(){
		location.href = '../code/add_ann.html';
	}
	
}])