/**
 * 
 */
//Dependencies
angular.module('cameraApp',[
	'ui.router',
])
// Routes
.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', 
	function($locationProvider, $stateProvider, $urlRouterProvider){
//		$locationProvider.html5Mode(true);
		
		// ルート(URL)設定
		$stateProvider
		.state('camera',{
			url: '/',
			title: "カメラロール",
			views: {
				'header': {
					templateUrl: 'view/header.html',
					controller: 'headerCtrl',
					params:  {test: null}
				},
				'container': {
					templateUrl: 'view/camera_roll.html',
					controller: 'cameraRollCtrl'
				},
				'footer': {
					templateUrl: 'view/footer.html',
					controller: 'footerCtrl'
				}
			}
		})
		.state('group',{
			url: '/select/group',
			title: "グループ選択",
			views: {
				'header': {
					templateUrl: 'view/header.html',
					controller: 'headerCtrl'
				},
				'container@': {
					templateUrl: 'view/select_group.html',
					controller: 'selectGroupCtrl'
				},
				'footer': {
					templateUrl: 'view/footer.html',
					controller: 'footerCtrl'
				}
			}
		})
		.state('igarashi',{
			url: '/igarashi',
			title: "いがらし",
			views: {
				'header': {
					templateUrl: 'view/header.html',
					controller: 'headerCtrl',
				},
				'container': {
					templateUrl: 'view/igarashi.html',
					controller: 'igarashiCtrl'
				},
				'footer': {
					templateUrl: 'view/footer.html',
					controller: 'footerCtrl'
				}
			}
		})
		.state('ishizawa',{
			url: '/ishizawa',
			title: "いしざわ",
			views: {
				'header': {
					templateUrl: 'view/header.html',
					controller: 'headerCtrl',
				},
				'container': {
					templateUrl: 'view/ishizawa.html',
					controller: 'ishizawaCtrl'
				},
				'footer': {
					templateUrl: 'view/footer.html',
					controller: 'footerCtrl'
				}
			}
		})
		.state('groupAdd',{
			url: '/add/group',
			views: {
				'header': {
					templateUrl: 'view/header.html',
					controller: 'headerCtrl',
				},
				'container': {
					templateUrl: 'view/add_group.html',
					controller: 'addGroupCtrl'
				},
				'footer': {
					templateUrl: 'view/footer.html',
					controller: 'footerCtrl'
				}
			}
		})
	}
])
;