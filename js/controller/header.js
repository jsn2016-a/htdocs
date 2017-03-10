/**
 * ヘッダーコントローラー
 */
angular.module('cameraApp')
.controller('headerCtrl', ['$scope', '$stateParams', '$timeout', '$state', 'util',
	function($scope, $stateParams, $timeout, $state, util) {
		$timeout(function(){
			$scope.headerTitle = util.session().get('headerTitle');
			$scope.groupList   = util.session().get('groupList');
		});

		/*
		 * 画面遷移リンク押下
		 */
		$scope.transitionCamera = function(screenName){
			$scope.headerTitle = util.session().set('headerTitle', screenName);
			$scope.headerTitle = util.session().get('headerTitle');
			$state.go("camera");
		};
		
		$scope.transitionGroup = function(screenName){
			$scope.headerTitle = util.session().set('headerTitle', screenName);
			$scope.headerTitle = util.session().get('headerTitle');
			$state.go("group");
		};
		
		$scope.transitionEditGroup = function(screenName){
			$scope.headerTitle = util.session().set('headerTitle', screenName);
			$scope.headerTitle = util.session().get('headerTitle');
			$state.go("groupEdit");
		};

	}
]);