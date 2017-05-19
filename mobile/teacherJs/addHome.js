var app = angular.module('addHomeApp', []);
app.controller('addHomeController', ['$scope', '$http', function($scope, $http) {
	$scope.i=0;
	$scope.question = {};
    var addHomeWork = {
        init: function() {
            $scope.addState = -1;
            $scope.type = null;
            $scope.radioData = [];
            $scope.voidData = [];
            $scope.simpleData = [];
            $scope.programData = [];
            this.events();
        },
        events: function() {
            $scope.addOp = function(op) {
                    if (op == 0) {
                        $scope.addState = 0;
                    }
                    if (op == 1 || op == 2 || op == 3) {
                        $scope.addState = 1;
                    }
                    $scope.type = op;
                }
                // 新作业类型选项
            $scope.submit = function(num) {
                    // 选择
                     
                    if ($scope.type == 0) {
                        var obj = {
                            title: $scope.title,
                            option: [
                                $scope.option1,
                                $scope.option2,
                                $scope.option3,
                                $scope.option4
                            ]
                        }
                        $scope.radioData.push(obj);
                        $scope.question[$scope.i] = {
                        	question:$scope.title, //题目
                        	type: 1,  //题型
                            selction1: $scope.zhang, //章
                            selction2: $scope.jie,  //节
                            answer: "201307104103",  //作者
                            option: { //选项
                             1: $scope.option1,
                             2: $scope.option2,
                             3: $scope.option3, 
                             4: $scope.option4 
                            }
                        }
                        console.log($scope.question);
                        $scope.i ++;
                    }
                    // 填空
                    else if ($scope.type == 1) {
                        $scope.voidData.push($scope.valData);
                        console.log($scope.valData);
                        console.log($scope.voidData);
                        // $scope.valData = '';
                        $scope.question[$scope.i] = {
                        	question:$scope.title, //题目
                        	type: 2,  //题型
                            selction1: $scope.zhang, //章
                            selction2: $scope.jie,  //节
                            answer: "201307104103" //作者
                        }
                        console.log($scope.question);
                        $scope.i ++;
                    }
                    // 简答
                    else if ($scope.type == 2) {
                        $scope.simpleData.push($scope.valData);
                        console.log($scope.voidData);
                        // $scope.valData = '';
                        console.log($scope.i);
                        $scope.question[$scope.i] = {
                        	question:$scope.title, //题目
                        	type: 3,  //题型
                            selction1: $scope.zhang, //章
                            selction2: $scope.jie,  //节
                            answer: "201307104103"
                        }
                        console.log($scope.question);
                        $scope.i ++;
                    }
                    // 程序
                    else if ($scope.type == 3) {
                        $scope.programData.push($scope.valData);
                        console.log($scope.voidData);
                        // $scope.valData = '';
                        $scope.question[$scope.i] = {
                        	question:$scope.title, //题目
                        	type: 4,  //题型
                            selction1: $scope.zhang, //章
                            selction2: $scope.jie,  //节
                            answer: "201307104103"
                        }
                        console.log($scope.question);
                        $scope.i ++;
                    }
                    $scope.addState = -1;
                }
                // 退出
            $scope.cancel = function() {
                $scope.addState = -1;
            }
            // 发布新作业
            $scope.release = function() {
                // $scope.question = {};
                var sendData = [];
                sendData.push($scope.radioData);
                sendData.push($scope.voidData);
                sendData.push($scope.simpleData);
                sendData.push($scope.programData);
                console.log(sendData);
                // alert('发布成功!!');
                $.ajax({
                        url: 'http://ourworkmanager.cn/myine/homework/addhomework.php',
                        method: 'post',
                        data: {
                            subject: $scope.pro,
                            writer: '147258',
                            ques:$scope.question
                        },
                        success: function(res) {
                            console.log(res);
                        }
                    })
                //     location.href = '../code/teacherIndex.html#!/home';
                console.log($scope.question);
            }
            $scope.exit = function() {
                location.href = '../code/teacherIndex.html#!/home';
            }

        }
    }
    addHomeWork.init()
}])
