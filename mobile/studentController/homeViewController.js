app.controller('homeViewController',['$scope',function($scope){
	$scope.st=0;
	$scope.grayTip = '作业界面';
	$scope.os = false;
	$scope.js = false;
	$scope.tab =function(n){
		$scope.st = n;
	}
	
	$scope.par_btn = function(num){
		$scope.work_st = num;
	}
	$scope.show_work = function(){
		var url = '../code/homework.html?'+$scope.st;
		alert(url);
		location.href = url;
	}
	var home = {
		init:function(){
			this.getData();
		},
		getData:function(){
			var pro = [];
			var zhang = [];
			var jie = [];
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
					for(var i = 0; i<res.length; i++){
						if(res[i].section1 == '第一章'){

						}
					}
				}
			})
		},
		events:function(){}

	}
	home.init();
}])