app.controller('tipViewController', ['$scope', '$http', function($scope, $http) {
    var ann = {
        // 初始化
        init: function() {
            //  分页
            $scope.page = 1; //当前页
            // $scope.countAll = 60; //数据总数
            $scope.count = 15; //一页个数
            $scope.maxSize = 3; //显示数字个数
            // 显示列表
            $scope.ann_st = 0;
            $scope.ann_content = '作业通知';
            // $scope.ann_date = '2017-05-03';
            this.getData();
        	// $scope.ann_date = $scope.showArr.slice(($scope.page-1)*16,($scope.page-1)*16+16);
            this.events();
        },
        // 获取数据
        getData: function() {
            // $http({
            //     method: 'get',
            //     // url: 'http://ourworkmanager.cn/myine/annshow.php',
            //     url:'../../json/ann.json',
            //     headers: {
            //         'Content-Type' : 'application/x-www-form-urlencoded'
            //     },
            //     data: {
            //         ann_type: $scope.ann_st
            //     }
            // }).then(function(res) {
            //     $scope.work_data = res.data.work_list;
            //     $scope.test_data = res.data.test_list;
            //     $scope.other_data = res.data.other_list;
            //     console.log($scope.ann_st)
            //     // console.log(res);
            //     $scope.showData = res;
            //     $scope.countAll = $scope.work_data.length;
            //     $scope.listData = $scope.work_data;
            // })
            $.ajax({
                url:'http://ourworkmanager.cn/myine/annshow.php',
                method:'post',
                data:{
                    ann_type: $scope.ann_st
                },
                dataType:'json',
                success:function(res){
                    console.log(res);
                    $scope.getData = res;
                },
                async:false
            })
        },
        // 事件
        events: function() {
            var that = this;
            // 点击显示详情
            $scope.tipContent = function(content) {
                alert(content);
            }
                // 类型切换
            $scope.ann_tab = function(st) {
                $scope.ann_st = st;
                that.getData();
            }
            // 分页
            $scope.pageChanged = function(res) {
            	console.log($scope.ann_date);
            	$scope.ann_date = $scope.showArr.slice(($scope.page-1)*15,($scope.page-1)*15+15);
            }
            $scope.addAnn = function(){
            	location.href = '../code/add_ann.html';
            }
            $scope.showAnn = function(res){
                alert(res);
            }
        }
    }
    ann.init();

}])
