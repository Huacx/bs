var app = angular.module('homeApp', []);
app.controller('homeController', ['$scope', '$http', function($scope, $http) {
    var submit = {
        init: function() {
        	$scope.show = location.search;
            this.getAnswer();
            this.events();
        },
        getAnswer: function() {
            $scope.submit = function() {
                var radioList = $('.radioList>ul>li');
                var voidList = $('.voidList>ul>li input');
                var answerList = $('.answerList>ul>li textarea');
                var file = $('.proList input').val();
                var answer = [];
                var radioAnswerList = [];
                var voidAnswerList = [];
                var answerAnswerList = [];
                for (var i = 0; i < radioList.length; i++) {
                    $('input:checked', $(radioList[i])).each(function(ind, ite) {
                    	radioAnswerList.push($(ite).val());
                    });
                }
                for (var j = 0; j < voidList.length; j++){
                	voidAnswerList.push($(voidList[j]).val());
                }
                for (var j = 0; j < answerList.length; j++){
                	answerAnswerList.push($(answerList[j]).val());
                }
                answer.push(radioAnswerList);
                answer.push(voidAnswerList);
                answer.push(answerAnswerList);
                answer.push(file);
                //console.log(radioAnswerList);
                //console.log(voidAnswerList);
                //console.log(answerAnswerList);
                //console.log(file);
                console.log(answer);
                
            }

        },
        events: function() {
            // $scope.submit = function(){
            // 	$http({
            // 		url:'',
            // 		method:'post',
            // 		headers: {
            //                      'Content-Type': 'application/x-www-form-urlencoded'
            //                  },
            //                  params: {
            //                      radioAnswer: ,
            //                      voidAnswer: ,
            //                      simpleAnswer:
            //                      program:
            //                  }
            // 	}).then(function(res){

            // 	})
            // }
            $scope.cancel = function() {
                location.href = '../code/studentIndex.html#!/home'
            }
        }
    }
    submit.init();
}])
