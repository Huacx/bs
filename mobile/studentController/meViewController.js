app.controller('meViewController',['$scope',function($scope){
	$scope.grayTip = '我的页面';
	$scope.exit = function(){
		window.opener = null;
	 // 　window.open(' ', '_self', ' '); 
	 　window.close();
	}
}])


