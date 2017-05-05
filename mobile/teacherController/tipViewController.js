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
            // this.getData();

            $scope.showArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
        	$scope.countAll = $scope.showArr.length;
        	$scope.ann_date = $scope.showArr.slice(($scope.page-1)*16,($scope.page-1)*16+16);
            this.events();
        },
        // 获取数据
        getData: function() {
            $http({
                method: 'post',
                url: 'http://ourworkmanager.cn/myine/annshow.php',
                data: {
                    ann_type: $scope.ann_st
                }
            }).then(function(res) {
                console.log(res);
                $scope.showData = res;
               
            })
        },
        // 事件
        events: function() {
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
            $scope.addAnn = function(){
            	location.href = '../code/add_ann.html';
            }
        }
    }
    ann.init();

}])
