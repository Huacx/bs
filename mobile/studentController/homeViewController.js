app.controller('homeViewController',['$scope',function($scope){
	$scope.st=0;
	$scope.grayTip = '作业界面';
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
	$scope.par_btn = function(num){
		$scope.work_st = num;
	}
	$scope.show_work = function(){
		location.href = '../code/homework.html';
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
					usertype:'0'
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