app.controller('meViewController',['$scope',function($scope){
	$scope.me = '我的相关数据/页面';
	$scope.exit = function(){
		window.opener = null;
	 // 　window.open(' ', '_self', ' '); 
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


