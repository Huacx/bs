var app = angular.module('annApp', []);
app.controller('annController', ['$scope', '$http', function($scope, $http) {
    $scope.annTypeNum = 0;
    $scope.annType = function(num) {
        //0 作业选项
        // if (num == 0) {
        //     $scope.annTypeNum = num;
        // }
        // //1 考试选项
        // else if (num == 1) {
        //     $scope.annTypeNum = num;
        // }
        // //2 其他选项
        // else {
            $scope.annTypeNum = num;
        // }
    }
    $scope.annSubmit = function() {
        alert($scope.annTypeNum + $scope.annTitle + $scope.annContent);
        // location.href='../code/teacherIndex.html#!/homeWork';
        location.href = '../code/teacherIndex.html#!/homeWork';
        // window.close();
    }
    $scope.annCancel = function() {
        location.href = '../code/teacherIndex.html#!/homeWork';
        // window.close();
    }
    $scope.annSubmit = function() {
        $http({
            url: 'http://ourworkmanager.cn/myine/announce.php',
            method: 'get',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            data: {
                ann_type: $scope.annTypeNum,
                ann_title: $scope.annTitle,
                ann_content: $scope.annContent,
                tea_number:'147258'
            }
        }).then(function(res) {
            console.log('类型: ' + $scope.annTypeNum);
            console.log('标题: ' + $scope.annTitle);
            console.log('内容: ' + $scope.annContent);
            console.log('编号: ' + '147852');
            console.log(res);
        })
    }
    $scope.annCancel = function() {
        location.href = '../code/teacherIndex.html#!/homeWork'
    }

}])
