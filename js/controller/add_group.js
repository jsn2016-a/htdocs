/**
 * groupコントローラー
 */
angular.module('cameraApp')
.controller('addGroupCtrl', ['$window', '$scope', '$location', '$timeout', '$http', '$state', 'util',
	function($window, $scope, $location, $timeout, $http, $state, util){
		$timeout(function(){
			$scope.headerTitle = util.session().get('headerTitle');
		});
	}
]);