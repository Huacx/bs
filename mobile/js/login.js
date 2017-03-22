$(function() {
    var login = {
        init: function() { this.events() },
        events: function() {
            $("button").click(function() {
                var val = $('input:radio[name="status"]:checked').val();
                if(val == 0){
	                location.href = "index.html";
                }else{
                	location.href = '../code/teacherIndex.html'
                }
            })
        }
    };
    login.init()
});
// var app = angular.module('myapp',[]);
// app.controller('loginController',['$scope','$http',function($scope,$http){
// 	var promise = $http({
// 		method:'type',
// 		url:'login.js',
// 		data:{

// 		}
// 	});
// 	promise.then(function(res){

// 	},function(){
// 		console.log('error');
// 	})
// }])
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
