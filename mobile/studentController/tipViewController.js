app.controller('tipViewController',['$scope','$http',function($scope,$http){
	// $scope.name = '作业相关数据/页面';
	
	$scope.ann_st = 0;
	$scope.ann_content = '作业通知';
	$scope.ann_date = '2017-05-03'
	$scope.ann_tab = function(st){
		$scope.ann_st = st;
		if(st==0){
			$scope.ann_content='作业通知';
			$scope.ann_date = '2017-05-03';
		}
		else if(st == 1){
			$scope.ann_content='考试公告';
			$scope.ann_date = '2017-05-04';
		}
		else {
			$scope.ann_content='其他公告';
			$scope.ann_date = '2017-05-05';
		}
	}
	$scope.tipContent = function(num){
		var content ='我是'+ num + '年详情';
		alert(content);
	}
	
}])