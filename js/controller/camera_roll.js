/**
 * cameraコントローラー
 */
angular.module('cameraApp')
.controller('cameraRollCtrl', ['$rootScope', '$window', '$scope', '$location', '$timeout', '$http','$stateParams', '$state',
	function($rootScope, $window, $scope, $location, $timeout, $http, $stateParams, $state){
	$timeout(function(){
		$("#headerTitle").text("カメラロール画面");

	});
	}
]);