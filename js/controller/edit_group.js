/**
 * groupコントローラー
 */
angular.module('cameraApp')
.controller('editGroupCtrl', ['$window', '$scope', '$location', '$timeout', '$http', '$state', 'util',
	function($window, $scope, $location, $timeout, $http, $state, util){
		$timeout(function(){
			$scope.headerTitle  = util.session().get('groupName');
			$scope.categoryList = util.session().get('categoryList');
		});
		
		$scope.choice = function(index){
			if($scope.categoryList[index].disp){
				$scope.categoryList[index].disp = false;
			}else{
				$scope.categoryList[index].disp = true;
			}
		};
		
	}
]);