app.controller('tipViewController',['$scope','$http',function($scope,$http){
	// $scope.name = '作业相关数据/页面';
	$scope.tipContent = function(num){
		var content ='我是'+ num + '年详情';
		alert(content);
	}
	
}])