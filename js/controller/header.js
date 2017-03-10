/**
 * ヘッダーコントローラー
 */
angular.module('cameraApp')
.controller('headerCtrl', ['$scope', '$stateParams', '$timeout', '$state', 'util',
	function($scope, $stateParams, $timeout, $state, util) {
		$timeout(function(){
			$scope.headerTitle = util.session().get('headerTitle');
			$scope.groupList   = util.session().get('groupList');
			
			$('#drawer, .menuHeader').on('click',function(e){
				if ($(e.target.parentElement).is('.inner')) {
					//白い部分をクリックしてもメニューは表示されたままにする
				}else{
					if ($(e.target.parentElement).is('.sub')) {
						return false;
					}
					$('#drawer .inner').animate({left:'-100%'},500);
					$('#drawer').wait(500).fadeOut();
					setTimeout(function(){
						$("#operation").show().$("#confirmForm").show();
					}, 700);
					$('body').css({'height':'auto'});
					$('#wrapper').attr({style:''});
				}
			});
			
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