app.controller('grayController',['$scope',function($scope){
		$scope.grayTip = '作业界面';
	$scope.grayBtn = function(num){
		if( num == 0 ){
			$scope.grayTip = '作业界面';
		}
		else if( num == 1 ){
			$scope.grayTip = '公告界面';

		}
		else if( num == 2 ){
			$scope.grayTip = '答疑/统计界面';

		}
		else if( num == 3 ){
			$scope.grayTip = '我的界面';

		}
	}
}])