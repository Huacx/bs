app.controller('meViewController',['$scope',function($scope){
	$scope.grayTip = '我的页面';
	$scope.exit = function(){
		window.opener = null;
	 　window.close();
	}
	$scope.logout = function(){
		if(confirm('您确定要注销用户吗？')){
			localStrolage.username = null;
			location.href = '../code/login.html';
		}else{
			return;
		}
	}
}])


