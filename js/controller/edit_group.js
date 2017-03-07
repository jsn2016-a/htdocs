/**
 * groupコントローラー
 */
angular.module('cameraApp')
.controller('editGroupCtrl', ['$window', '$scope', '$location', '$timeout', '$http', '$state', 'util',
	function($window, $scope, $location, $timeout, $http, $state, util){
		$timeout(function(){
			$scope.headerTitle = util.session().get('groupName');
		});
	}
]);