/**
 * cameraコントローラー
 */
angular.module('cameraApp')
.controller('cameraRollCtrl', ['$rootScope', '$window', '$scope', '$location', '$timeout', '$http','$stateParams', 
	function($rootScope, $window, $scope, $location, $timeout, $http, $stateParams){
	$timeout(function(){
		$("#headerTitle").text("カメラロール画面");

	});
	}
]);