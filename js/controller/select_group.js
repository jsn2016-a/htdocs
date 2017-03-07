/**
 * groupコントローラー
 */
angular.module('cameraApp')
.controller('selectGroupCtrl', ['$window', '$scope', '$location', '$timeout', '$http', '$state', 'util',
	function($window, $scope, $location, $timeout, $http, $state, util){
		$timeout(function(){
			$scope.headerTitle = util.session().get('headerTitle');
			$scope.groupList   = util.session().get('groupList');
		});
		
		$scope.add = function(){
			util.session().set('headerTitle', 'グループ新規作成');
			$state.go("groupAdd");
		};
		
		$scope.edit = function(groupName){
			util.session().set('headerTitle', 'グループ編集');
			util.session().set('groupName', groupName);
			$state.go("groupEdit");
		};
	}
]);