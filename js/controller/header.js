/**
 * ヘッダーコントローラー
 */
angular.module('cameraApp')
.controller('headerCtrl', ['$scope', '$stateParams', '$timeout', '$state',
	function($scope, $stateParams, $timeout, $state) {
		var aa = $stateParams.test;
		$timeout(function(){
			var bb = $stateParams.test;
			$("#headerTitle").text("cameraRoll");

		});

		/*
		 * 画面遷移リンク押下
		 */
		$scope.transitionCamera = function(targetScreen, id){
			$state.go("camera", {test: "john"});
		};
		
		$scope.transitionGroup = function(targetScreen, id){
			$state.go("group");
		};

	}
]);