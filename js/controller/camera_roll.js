/**
 * cameraコントローラー
 */
angular.module('cameraApp')
.controller('cameraRollCtrl', ['$rootScope', '$window', '$scope', '$location', '$timeout', '$http','$stateParams', '$state','util',
	function($rootScope, $window, $scope, $location, $timeout, $http, $stateParams, $state, util){
		$timeout(function(){
			$scope.pictureList = util.session().get('pictureList');
		});
	}
]);