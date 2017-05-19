app.controller('homeViewController',['$scope',function($scope){
	$scope.home = '首页相关数据/页面';
	$scope.st=0;
	$scope.os = false;
	$scope.js = false;
	$scope.tab =function(n){
		$scope.st = n;
	}
	$scope.sub1 = function(){
		$scope.os = !$scope.os;
	}
	$scope.sub2 = function(){
		$scope.js = !$scope.js;
	}
	$scope.tab =function(n){
		$scope.st = n;
	}
	$scope.par_btn = function(num){
		$scope.work_st = num;
	}
	$scope.show_work = function(){
		location.href = '../code/homework.html';
	}
	$scope.newHomework = function(){
		location.href = '../code/addHome.html';
	}
	var home = {
		init:function(){
			this.getData();
		},
		getData:function(){
			$.ajax({
				url:'http://ourworkmanager.cn/myine/homework/getworklist.php',
				method:'post',
				data:{
					username:"201307104103",
					usertype:1
				},
				dataType:'json',
				async:false,
				success:function(res){
					console.log(res);
				}
			})
		},
		events:function(){}

	}
	home.init();
}])