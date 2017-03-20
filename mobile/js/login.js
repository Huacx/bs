$(function() {
    var login = {
        init: function() { this.events() },
        events: function() {
            $("button").click(function() {
                var val = $('input:radio[name="sex"]:checked').val();
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
