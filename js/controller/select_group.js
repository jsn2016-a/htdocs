/**
 * groupコントローラー
 */
angular.module('cameraApp')
.controller('selectGroupCtrl', ['$window', '$scope', '$location', '$timeout', '$http', 
	function($window, $scope, $location, $timeout, $http){
		$timeout(function(){
			$("#headerTitle").text("グループ選択画面");
		});
	}
]);