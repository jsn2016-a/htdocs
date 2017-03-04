/**
 * groupコントローラー
 */
angular.module('cameraApp')
.controller('ishizawaCtrl', ['$window', '$scope', '$location', '$timeout', '$http', 
	function($window, $scope, $location, $timeout, $http){
		$timeout(function(){
			$("#headerTitle").text("いしざわ");
		});
	}
]);