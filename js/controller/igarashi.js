/**
 * groupコントローラー
 */
angular.module('cameraApp')
.controller('igarashiCtrl', ['$window', '$scope', '$location', '$timeout', '$http', 
	function($window, $scope, $location, $timeout, $http){
		$timeout(function(){
			$("#headerTitle").text("いがらし");
		});
	}
]);