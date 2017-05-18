app.controller('informViewController', ['$scope', '$http', function($scope, $http) {
    var ann = {
        // 初始化
        init: function() {
            //  分页
            $scope.page = 1; //当前页
            // $scope.countAll = 60; //数据总数
            $scope.count = 16; //一页个数
            $scope.maxSize = 3; //显示数字个数
            // 显示列表
            $scope.ann_st = 0;
            $scope.ann_content = '作业通知';
            // $scope.ann_date = '2017-05-03';

            // $scope.showArr = [{
            //     title: '本地存储有什么作用？',
            //     content: '本地存储有什么作用？',
            //     data: '2017-05-03',
            //     answer: 'HTML5 storage提供了一种方式让网站能够把信息存储到你本地的计算机上，并再以后需要的时候进行获取。这个概念和cookie相似，区别是它是为了更大容量存储设计的。'
            // }, {
            //     title: '写出1000以内的水仙花数的程序',
            //     content: '写出1000以内的水仙花数的程序',
            //     data: '2017-05-02',
            //     answer: 'var i,a,b,c;\nfor(i=100;i<1000;i++){\na=parseInt(i/100);\nb=parseInt((i-a*100)/10);\nc=parseInt(i-a*100-b*10);\nif( a*a*a+b*b*b+c*c*c == i){\ndocument.write(i+"<br>");}}'
            // }, {
            //     title: '怎么判断闰年？',
            //     content: '怎么判断闰年？',
            //     data: '2017-05-01',
            //     answer: 'function isLeapYear (Year) {\nif (((Year % 4)==0) && ((Year % 100)!=0) || ((Year % 400)==0)) {\nreturn (true);} else {\n return (false); }}'
            // }, {
            //     title: '打印九九乘法表',
            //     content: '打印九九乘法表',
            //     data: '2017-04-03',
            //     answer: '<script type="text/javascript">\n    document.write("<table>");   \n var str = "js九九乘法表";    \n.write("<h1>" + str + "</h1>");    \nfor ( var x = 1; x <= 9; x++) { \n       document.write("<tr>");   \n     for ( var y = 1; y <= x; y++) {    \n        document.write("<th>" + x + "*" + y + "=" + (x * y) + "</th>");        }      \n  document.write("</tr>");    }  \n  document.write("</table>");\n</script>'
            // }];
            // $scope.countAll = $scope.showArr.length;
            // $scope.ann_date = $scope.showArr.slice(($scope.page - 1) * 16, ($scope.page - 1) * 16 + 16);
            this.getData(0);
            this.events();
        },
        // 获取数据
        getData: function(st) {
            $http({
                url: 'http://ourworkmanager.cn/myine/solve/showsolve.php',
                method: 'post',
                dataType:'json',
                async:false
            }).then(function(res) {
                console.log(res);
                // $scope.showData = res;
                var data = null;
                $scope.doArr = [];
                $scope.didArr = [];
                 
                 for(var i = 0; i<res.data.length; i++){
                    // 未答疑
                    if(res.data[i].solution == undefined){
                        $scope.doArr.push(res.data[i]);
                    }
                    // 已答疑
                    else{
                        $scope.didArr.push(res.data[i]);
                    }
                 }
                 // console.log(doArr);
                 // console.log(didArr);
                 if(st==0){
                     $scope.data = $scope.doArr;
                 }
                 else{
                     $scope.data = $scope.didArr;

                 }
                 $scope.countAll = $scope.data.length;
                 $scope.ann_date = $scope.data.slice(($scope.page-1)*15,($scope.page-1)*15+15);
            })
        },
        // 事件
        events: function() {
            var that = this;
            // 点击显示详情
            $scope.showQuestion = function(data1,data2) { 
                    // alert(content);
                    console.log(data1)
                    console.log(data2)
                    if(data2 == undefined){
                        // alert('此题未解答!!');
                    }else{
                        var al = '';
                        for(var i = 0; i<data2.length; i++){
                            al +='答案'+i+'、'+ data2[i].solution + '\n'
                        }
                        alert(al);
                    }
            }
                // 类型切换
            $scope.ann_tab = function(st) {
                $scope.ann_st = st;
                that.getData(st);
            }
                // 分页
                // 点击按钮操作
            $scope.pageChanged = function(res) {
                console.log($scope.ann_date);
                $scope.ann_date = $scope.data.slice(($scope.page - 1) * 16, ($scope.page - 1) * 15 + 15);
            }
            // 答疑
            $scope.dealQuestion = function(id) {
                var answer = prompt('请输入您的答案:');
                if (answer != null && answer != "") {
                    // alert('答疑成功，您的答案是:' + answer);
                     $.ajax({
                        url:'http://ourworkmanager.cn/myine/solve/solution.php',
                        method:'post',
                        data:{
                            solve_id:id,
                            solution:answer,
                            username:'201307104103'
                        },
                        dataType:'json',
                        success:function(res){
                            // console.log(res);
                            alert('答疑成功');
                            // location.reload();
                        }
                    })
                }
            }
        }
    // }
}
ann.init();

}])
