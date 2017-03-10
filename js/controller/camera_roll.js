/**
 * cameraコントローラー
 */
angular.module('cameraApp')
.controller('cameraRollCtrl', ['$rootScope', '$window', '$scope', '$location', '$timeout', '$http','$stateParams', '$state','util',
	function($rootScope, $window, $scope, $location, $timeout, $http, $stateParams, $state, util){
		$timeout(function(){
			$scope.pictureList = util.session().get('pictureList');
			$timeout(function(){
				// 撮影した画像を最初に表示させる
				$http({
	                method : 'GET',
	                url : "https://s3-us-west-2.amazonaws.com/jmason-reko/result/images/kenzo/test.jpg.csv"
	            }).success(function(data, status, headers, config) {
	                var textArray = data.split(/\r\n|\r|\n/);// CSVデータ
	                
					$scope.detailImage = "https://s3-us-west-2.amazonaws.com/jmason-reko/images/kenzo/test.jpg";
					$scope.group       = "我が人生JMAS";
//					$scope.category    = "test";
//					$scope.create      = detail.create;
//					$scope.date        = detail.date;
//					$scope.place       = detail.place;
//					$scope.comment     = detail.comment;
//					$scope.good        = detail.good;
//					$scope.bad         = detail.bad;
					$("#dummyButton").trigger("click");
	                
	            }).error(function(data, status, headers, config) {
	            });
				
				
			});
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