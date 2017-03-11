/**
 * ヘッダーコントローラー
 */
angular.module('cameraApp')
.controller('headerCtrl', ['$scope', '$stateParams', '$timeout', '$state', 'util',
	function($scope, $stateParams, $timeout, $state, util) {
		$timeout(function(){
			$scope.headerTitle = util.session().get('headerTitle');
			$scope.groupList   = util.session().get('groupList');
			
			$scope.close = function(){
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
			}
			
//			$('#drawer, .menuHeader').on('click',function(e){
//				if ($(e.target.parentElement).is('.inner')) {
//					//白い部分をクリックしてもメニューは表示されたままにする
//				}else{
//					if ($(e.target.parentElement).is('.sub')) {
//						return false;
//					}
//					$('#drawer .inner').animate({left:'-100%'},500);
//					$('#drawer').wait(500).fadeOut();
//					setTimeout(function(){
//						$("#operation").show().$("#confirmForm").show();
//					}, 700);
//					$('body').css({'height':'auto'});
//					$('#wrapper').attr({style:''});
//				}
//			});
//			
//			$(document).on('click','#drawer .inner .menu .local .sub>a',function(e){
//				if($(this).hasClass('open')){
//					$(this).removeClass('open');
//					$(this).next('ul').stop().slideUp();
//					return false;
//				}else{
//					$(this).addClass('open');
//					$(this).next('ul').stop().slideDown();
//					return false;
//				}
//			});
			
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