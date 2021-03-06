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
            $scope.grayTip = '公告界面';

            this.getData();
            this.events();
        },
        // 获取数据
        getData: function() {
            $.ajax({
                url:'http://ourworkmanager.cn/myine/announce/annshow.php',
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
            // 类型切换
            $scope.ann_tab = function(st) {
                    $scope.ann_st = st;
                    //console.log(st);
                    that.getData();
                }
                // 分页
                // 点击按钮操作
            $scope.pageChanged = function(res) {
                    console.log($scope.ann_date);
                    $scope.ann_date = $scope.showArr.slice(($scope.page - 1) * 15, ($scope.page - 1) * 15 + 15);
                }
                // 显示公告信息
            $scope.showAnn = function(content) {
                alert(content);
            }
            $scope.searchAnn = function(){
                that.getData();
                var newArr = [];
                for(var i = 0; i<$scope.getData.length; i++){
                    if($scope.getData[i].ann_content.indexOf($scope.searchVal) >= 0){
                        newArr.push($scope.getData[i]);
                    }
                }
                console.log( newArr );
                $scope.getData = newArr;
            }
        }
    }
    ann.init();

}])
