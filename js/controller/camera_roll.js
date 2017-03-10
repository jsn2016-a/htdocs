/**
 * cameraコントローラー
 */
angular.module('cameraApp')
.controller('cameraRollCtrl', ['$rootScope', '$window', '$scope', '$location', '$timeout', '$http','$stateParams', '$state','util',
	function($rootScope, $window, $scope, $location, $timeout, $http, $stateParams, $state, util){
		$timeout(function(){
			$scope.pictureList = util.session().get('pictureList');
		});
		
		// 表示中のモーダル位置を保存
		var dispParentIndex;
		var dispChildIndex;
		
		// モーダル開いたとき
		$scope.showDetail = function(parentIndex, index){
			dispParentIndex = parentIndex;
			dispChildIndex = index;
			$scope.categoryName = $scope.pictureList[dispParentIndex].title;
			
			var detail = $scope.pictureList[dispParentIndex].images[dispChildIndex];
			$scope.detailImage = detail.image;
			$scope.group       = detail.group;
			$scope.category    = detail.category;
			$scope.create      = detail.create;
			$scope.date        = detail.date;
			$scope.place       = detail.place;
			$scope.comment     = detail.comment;
			$scope.good        = detail.good;
			$scope.bad         = detail.bad;
		}
		
		$scope.goodClick = function() {
			$scope.good++;
			$scope.pictureList[dispParentIndex].images[dispChildIndex].good = $scope.good;
			util.session().set('pictureList', $scope.pictureList);
		};
		$scope.badClick = function() {
			$scope.bad++;
			$scope.pictureList[dispParentIndex].images[dispChildIndex].bad = $scope.bad;
			util.session().set('pictureList', $scope.pictureList);
		};
	}
]);