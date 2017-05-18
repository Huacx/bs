var app = angular.module('infoApp',[]);
app.controller('infoController',['$scope','$http',function($scope,$http){
	var info = {
		init:function(){
			this.getData();
			this.events();
		},
		getData:function(){
			$.ajax({
				url:'http://ourworkmanager.cn/myine/userinfo/userinfoshow.php',
				method:'post',
				data:{
					username:'201307104103'
				},
				dataType:'json',
				success:function(res){

					var res = res[0]
					console.log(res);
					$scope.sex = res.stu_sex;
					$scope.name = res.stu_name;
					$scope.class = res.class_name;
					$scope.sno = res.stu_number;
					$scope.department = res.department;
					$scope.tel = res.stu_phone;
				},
				async:false
			})
		},
		events:function(){
			$scope.save = function(){
				$.ajax({
					url:'http://ourworkmanager.cn/myine/userinfo/userinfoupdate.php',
					method:'post',
					data:{
						username:$scope.sno,
						phone:$scope.tel
					},
					success:function(res){
						console.log(res);
						alert(res.update);
					},
					dataType:'json',
					async:false
				})
				return;
			}
			$scope.cancel = function(){
				location.href = '../code/studentIndex.html#!/me'
			}
		}
	}
	info.init();
}])