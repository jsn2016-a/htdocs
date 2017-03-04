/**
 * groupコントローラー
 */
angular.module('cameraApp')
.controller('selectGroupCtrl', ['$window', '$scope', '$location', '$timeout', '$http', '$state',
	function($window, $scope, $location, $timeout, $http, $state){
		$timeout(function(){
			$("#headerTitle").text("グループ選択画面");
		});
		
		$scope.add = function(){
			$state.go("groupAdd");

		};
	}
]);