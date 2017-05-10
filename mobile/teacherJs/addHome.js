var app = angular.module('addHomeApp',[]);
app.controller('addHomeController',['$scope','$http',function($scope,$http){
	var addHomeWork = {
		init:function(){
			$scope.addState = -1;
			$scope.type = null;
			$scope.radioData = [];
			$scope.voidData = [];
			$scope.simpleData = [];
			$scope.programData = [];
			this.events();
		},
		events:function(){
			$scope.addOp = function(op){
				if(op == 0){
					$scope.addState = 0;
				}
				if(op == 1 || op == 2 || op == 3){
					$scope.addState = 1;
				}
				$scope.type = op;
			}
			$scope.submit = function(num){
				if($scope.type == 0){
					var obj = {
						title:$scope.title,
						option:[
							$scope.option1,
							$scope.option2,
							$scope.option3,
							$scope.option4
						]
					}
					$scope.radioData.push(obj);
					$scope.title = '';
					$scope.option1 = '';
					$scope.option2 = '';
					$scope.option3 = '';
					$scope.option4 = '';
				}
				else if($scope.type == 1){
					$scope.voidData.push($scope.valData);
					console.log($scope.valData);
					console.log($scope.voidData);
					$scope.valData = '';
				}
				else if($scope.type == 2){
					$scope.simpleData.push($scope.valData);
					console.log($scope.voidData);
					$scope.valData = '';
				}
				else if($scope.type == 3){
					$scope.programData.push($scope.valData);
					console.log($scope.voidData);
					$scope.valData = '';
				}
				$scope.addState = -1;
			}
			$scope.cancel = function(){
				$scope.addState = -1;
			}
			$scope.release = function(){
				alert('发布成功!!');
				location.href = '../code/teacherIndex.html#!/home';
			}
			$scope.exit = function(){
				location.href = '../code/teacherIndex.html#!/home';
			}

		}
	}
	addHomeWork.init()
}])