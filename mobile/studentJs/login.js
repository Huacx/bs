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
//                  location.href = "../code/studentIndex.html";
//                 }else{
//                  location.href = '../code/teacherIndex.html'
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
var app = angular.module('myapp', []);
app.controller('loginController', ['$scope', '$http', function($scope, $http) {

    var login = {
        init: function() {
            $scope.remVal = false;
            localStorage.username
            localStorage.password
            $scope.username;
            $scope.password;
            this.events();
        },
        events: function() {
            $scope.login = function() {
                var promise = $http({
                    url: 'http://ourworkmanager.cn/myine/login.php',
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    params: {
                        username: $scope.username,
                        password: $scope.password
                    }
                });
                promise.then(function(res) {
                    var data = res.data;
                    console.log(res.data.status);
                    //*用户登录状态表示 0：表示登录成功，1：表示密码错误，
                    // 2： 用户名不存在， - 1： 用户名密码不为空
                    if (data.status == 0) {
                        localStorage.username = $scope.username;
                        if (data.usertype == 1) { //学生界面
                            location.href = '../code/studentIndex.html'
                        } else { //教师界面
                            location.href = '../code/teacherIndex.html'
                        }
                    } else if (data.status == 1) {
                        alert('用户名或密码错误');
                        return;
                    } else if (data.status == 2) {
                        alert('用户名不存在');
                        return;
                    } else {
                        alert('登陆失败');
                        return;
                    }
                });
            }
        }
    }
    login.init();

    // 记住我选项


    // if ($scope.remVal) {
    //     $scope.username = localStorage.username;
    //     $scope.password = localStorage.password;
    // } else {
    //     $scope.username = '';
    //     $scope.password = '';
    // }
}])
