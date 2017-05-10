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

            $scope.showArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
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
            $scope.tipContent = function(num) {
                    var content = '我是' + num + '年详情';
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
