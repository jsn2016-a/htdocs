/**
 * groupコントローラー
 */
angular.module('cameraApp')
.controller('addGroupCtrl', ['$window', '$scope', '$location', '$timeout', '$http', '$state',
	function($window, $scope, $location, $timeout, $http, $state){
		$timeout(function(){
			$("#headerTitle").text("グループ新規作成");
		});
	}
]);