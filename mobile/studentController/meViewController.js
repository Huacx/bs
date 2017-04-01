app.controller('meViewController',['$scope',function($scope){
	$scope.me = '我的相关数据/页面';
	$scope.exit = function(){
		window.opener = null;
	 // 　window.open(' ', '_self', ' '); 
	 　window.close();
	}
}])


