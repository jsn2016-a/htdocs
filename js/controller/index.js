/**
 * indexコントローラー
 */
angular.module('cameraApp')
.controller('indexCtrl', ['$window', '$scope', '$state', '$location', '$timeout', '$http', 
	function($window, $scope, $state, $location, $timeout, $http){
		$state.go("camera");
	}
]);