// $(function(){
// 	var info = {
// 		init:function(){
// 			this.event();
// 		},
// 		event:function(){
// 			$('.pre').on('click',function(){
// 				// location.href = '../code/#!/me';
// 				window.history.back();
// 			});
// 			$('.save').on('click',function(){
// 				alert('修改成功');
// 			});
// 			$('.cancel').on('click',function(){
// 				location.reload();
// 			})
// 		}
// 	};
// 	info.init();
// })
var app = angular.module('infoApp',[]);
app.controller('infoController',['$scope','$http',function($scope,$http){
	var info = {
		init:function(){
			this.events();
		},
		events:function(){
			$scope.save = function(){
				alert('修改成功');
				return;
			}
			$scope.cancel = function(){
				location.href = '../code/teacherIndex.html#!/me'
			}
		}
	}
	info.init();
}])