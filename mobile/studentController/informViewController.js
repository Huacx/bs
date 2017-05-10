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

            $scope.showArr = [
                {
                    title:'本地存储有什么作用？',
                    content:'HTML5 storage提供了一种方式让网站能够把信息存储到你本地的计算机上，并再以后需要的时候进行获取。这个概念和cookie相似，区别是它是为了更大容量存储设计的。',
                    data:'2017-05-03'
                },
                {
                    title:'写出1000以内的水仙花数的程序',
                    content:'var i,a,b,c;\nfor(i=100;i<1000;i++){\na=parseInt(i/100);\nb=parseInt((i-a*100)/10);\nc=parseInt(i-a*100-b*10);\nif( a*a*a+b*b*b+c*c*c == i){\ndocument.write(i+"<br>");}}',
                    data:'2017-05-02'
                },
                {
                    title:'怎么判断闰年？',
                    content:'function isLeapYear (Year) {\nif (((Year % 4)==0) && ((Year % 100)!=0) || ((Year % 400)==0)) {\nreturn (true);} else {\n return (false); }}',
                    data:'2017-05-01'},
                {
                    title:'打印九九乘法表',
                    content:'<script type="text/javascript">\n    document.write("<table>");   \n var str = "js九九乘法表";    \n.write("<h1>" + str + "</h1>");    \nfor ( var x = 1; x <= 9; x++) { \n       document.write("<tr>");   \n     for ( var y = 1; y <= x; y++) {    \n        document.write("<th>" + x + "*" + y + "=" + (x * y) + "</th>");        }      \n  document.write("</tr>");    }  \n  document.write("</table>");\n</script>',
                    data:'2017-04-03'
                }
            ];
            $scope.countAll = $scope.showArr.length;
            $scope.ann_date = $scope.showArr.slice(($scope.page-1)*16,($scope.page-1)*16+16);
            // this.getData();
            this.events();
        },
        // 获取数据
        // getData: function() {
        //     $http({
        //         method: 'post',
        //         url: 'http://ourworkmanager.cn/myine/annshow.php',
        //         data: {
        //             ann_type: $scope.ann_st
        //         }
        //     }).then(function(res) {
        //         console.log(res);
        //         // $scope.showData = res;
               
        //     })
        // },
        // 事件
        events: function() {
            // 添加疑问
            $scope.addInform = function(){
                var question = prompt('请输入您的疑问：');
                if(question == '' || question == null){
                    alert('您没有输入问题，提问失败！！！');
                }else{
                    alert('提问成功');
                    // $http({
                    //     url:'',
                    //     method:'post',
                    //     data:{
                    //         question:question
                    //     }
                    // }).then{function(res){
                    //     console.log(res);
                    // }}
                }
            }
            // 点击显示详情
            $scope.showQuestion = function(content) { 
                    alert(content);
                }
                // 类型切换
            $scope.ann_tab = function(st) {
            	// this.getData();
                $scope.ann_st = st;
                if (st == 0) {
                    $scope.ann_content = '作业通知';
                    $scope.ann_date = '2017-05-03';
                } else if (st == 1) {
                    $scope.ann_content = '考试公告';
                    $scope.ann_date = '2017-05-04';
                } else {
                    $scope.ann_content = '其他公告';
                    $scope.ann_date = '2017-05-05';
                }
            }
            // 分页
            $scope.pageChanged = function(res) {
            	console.log($scope.ann_date);
            	$scope.ann_date = $scope.showArr.slice(($scope.page-1)*16,($scope.page-1)*16+16);
            }
        }
    }
    ann.init();

}])
