// $(function() {
//     var flag;
//     var login = {
//         init: function() { 
//             this.events();
//             this.dealChecked(); 
//         },
//         events: function() {
//             var that = this;
//             $("#login").click(function() {
//                 var val = $('input:radio[name="status"]:checked').val();
//                 that.getInfo();
//                 if(val == 0){
// 	                location.href = "../code/studentIndex.html";
//                 }else{
//                 	location.href = '../code/teacherIndex.html'
//                 }
//             })
//         },
//         getInfo:function(){
//             var username = $('#username').val();
//             var pwd = $('#password').val();
//             if($('#rememberMe').is(':checked')){
//                 flag = true;
//                 localStorage.username = username;
//                 localStorage.password = pwd;
//                 console.log('true');
//             }
//             else{
//                 flag = false;
//                 console.log('false');
//             }
//         },
//         dealChecked:function(){
//             if($('#rememberMe').is(':checked')){
//                 $('#username').val(localStorage.username);
//                 $('#password').val(localStorage.password);
//             }
//         }
//     };
//     login.init()
// });
var app = angular.module('myapp',[]);
app.controller('loginController',['$scope','$http',function($scope,$http){
	// var promise = $http({
	// 	method:'type',
	// 	url:'login.js',
	// 	data:{

	// 	}
	// });
	// promise.then(function(res){

	// },function(){
	// 	console.log('error');
	// })
    $scope.state = 0;
    $scope.remVal = false;
    $scope.login = function(){
        if($scope.remVal){
            localStorage.username = $scope.username;
            localStorage.password = $scope.password;
        }
        if($scope.state == 0){//学生界面
            location.href = '../code/studentIndex.html'
        }else{//教师界面
            location.href = '../code/teacherIndex.html'
        }
    }
    // 记住我选项
    $scope.remember = function(){
        $scope.remVal = !$scope.remVal;
    }
    // 登录身份选项
    $scope.radio = function(num){
        $scope.state = num;
    }
    if($scope.remVal){
        $scope.username = localStorage.username;
        $scope.password = localStorage.password;
    }
    else{
        $scope.username = '';
        $scope.password = '';
    }
}])
// $(function() {
//     var login = {
//         init: function() {
//             this.events();
//         },
//         events: function() {
//             $('button').click(function() {
//             	$.ajax({
//             		// url:'http://192.168.1.136:8888/php_project/test.php',
//             		url:'http://192.168.191.1:8888/php_project/test.php',
//             		type:'post',
//             		data:{
//             			username:$('#username').val(),
//             			password:$('#password').val(),
//             			// status:$('.status>label>input:checked').val(),
//             		},
//             		success:function(res){
//                         console.log(typeof res);
//                         // locaton.href='index.html';
//                         var data = JSON.parse(res)
//             			console.log(data);
//                         if(data.username){
//                             alert('用户名:'+data.username+'\n'+'密码:'+data.password);
//                         }
//                         else{
//                             alert('用户不存在');
//                         }
//             		},
//             		error:function(){
//             			alert('登录失败');
//             		}

//             	})
//             })
//         }
//     }
//     login.init();
// })
