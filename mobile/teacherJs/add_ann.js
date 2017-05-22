var app = angular.module('annApp', []);
app.controller('annController', ['$scope', '$http', function($scope, $http) {
    $scope.annTypeNum = 0;
    $scope.annType = function(num) {
        //0 作业选项
        // //1 考试选项
        // //2 其他选项
        $scope.annTypeNum = num;
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
        $.post('http://ourworkmanager.cn/myine/announce/announce.php', { ann_title: $scope.annTitle, ann_content: $scope.annContent, tea_number: 'val2', ann_type: $scope.annTypeNum }, function(data, status) {
            console.log(status);
            console.log(data);
            if(data.ann_status == 0){
                alert('提交成功');
                location.href = '../code/teacherIndex.html#!/homeWork';
            }
            else{
                alert('提交失败!!');
            }
        }, 'json');
    }
    $scope.annCancel = function() {
        location.href = '../code/teacherIndex.html#!/homeWork';
    }

}])
