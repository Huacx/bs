app.controller('tipViewController', ['$scope', '$http', function($scope, $http) {
    // $scope.name = '作业相关数据/页面';
    // $http({
    //     method: 'post',
    //     url: 'http://ourworkmanager.cn/myine/annshow.php',
    //     data: {
    //         ann_type: 0
    //     }
    // }).then(function(res) {
    //     console.log(res);
    // })
    // $scope.ann_st = 0;
    // $scope.ann_content = '作业通知';
    // $scope.ann_date = '2017-05-03'
    // // 类型切换
    // $scope.ann_tab = function(st) {
    //         $scope.ann_st = st;
    //         if (st == 0) {
    //             $scope.ann_content = '作业通知';
    //             $scope.ann_date = '2017-05-03';
    //         } else if (st == 1) {
    //             $scope.ann_content = '考试公告';
    //             $scope.ann_date = '2017-05-04';
    //         } else {
    //             $scope.ann_content = '其他公告';
    //             $scope.ann_date = '2017-05-05';
    //         }
    //     }
    //     // 点击显示详情
    // $scope.tipContent = function(num) {
    //         var content = '我是' + num + '年详情';
    //         alert(content);
    //     }
    //  分页
    // $scope.page = 3; //当前页
    // $scope.countAll = 100; //数据总数
    // $scope.count = 19; //一页个数
    // $scope.maxSize = 3; //显示数字个数
    // // 点击按钮操作
    // $scope.pageChanged = function() {
    //     alert('00')
    // }

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

            this.getData();
            this.events();
        },
        // 获取数据
        getData: function() {
            $http({
                method: 'post',
                url: 'http://ourworkmanager.cn/myine/annshow.php',
                data: {
                    ann_type: $scope.ann_st
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }).then(function(res) {
                $scope.getData = res.data;
                console.log($scope.getData);
                // $scope.showData = res;
               
            })
        },
        // 事件
        events: function() {
            var that = this;
            // 类型切换
            $scope.ann_tab = function(st) {
            	that.getData();
                $scope.ann_st = st;
                // if (st == 0) {
                //     $scope.ann_content = '作业通知';
                //     $scope.ann_date = '2017-05-03';
                // } else if (st == 1) {
                //     $scope.ann_content = '考试公告';
                //     $scope.ann_date = '2017-05-04';
                // } else {
                //     $scope.ann_content = '其他公告';
                //     $scope.ann_date = '2017-05-05';
                // }
            }
            // 分页
            // 点击按钮操作
            $scope.pageChanged = function(res) {
            	// arr.slice() //16条
            	// $scope.showArr = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,01,2,3,4,5,6,7,8,9,01,2,3,4,5,6,7,8,9,01,2,3,4,5,6,7,8,9,0];
            	// $scope.countAll = $scope.showArr.length;
            	// $scope.ann_date = $scope.showArr.slice($scope.page*16,$scope.page*16+16);
            	console.log($scope.ann_date);
            	// this.getData();
            	$scope.ann_date = $scope.showArr.slice(($scope.page-1)*16,($scope.page-1)*16+16);
                // alert($scope.page)
            }
            // 显示公告信息
            $scope.showAnn = function(content){
                alert(content);
            }
        }
    }
    ann.init();

}])
