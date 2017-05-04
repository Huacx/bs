app.controller('informViewController',["$scope","$http",function($scope,$http){
	$scope.content = '我是答疑内容';
	$scope.button = function(num){
		if(num==0){
			$scope.content = '我是答疑内容';
		}
		if(num==1){
			$scope.content = '我是统计内容';
		}
	}
}])