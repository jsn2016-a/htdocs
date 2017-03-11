/**
 * cameraコントローラー
 */
angular.module('cameraApp')
.controller('cameraRollCtrl', ['$rootScope', '$window', '$scope', '$location', '$timeout', '$http','$stateParams', '$state','util',
	function($rootScope, $window, $scope, $location, $timeout, $http, $stateParams, $state, util){
		$timeout(function(){
//			$scope.pictureList = util.session().get('pictureList');
			$timeout(function(){
				if(!util.session().get("firstView")){
					// 撮影した画像を最初に表示させる
					$http({
		                method : 'GET',
		                url : "https://s3-us-west-2.amazonaws.com/jmason-reko/result/images/kenzo/test.jpg.csv"
		            }).success(function(data, status, headers, config) {
		                var resultCsvArray = data.split(/\r\n|\r|\n/);// CSVデータ
		                var categoryResult = [];
		                resultCsvArray.forEach(function(val,index,ar){
		                	categoryResult.push({
		                		"category":val.split(",")[1],
		                		"percent":val.split(",")[2],
		                	})
		                });
		                
						$scope.detailImage = "https://s3-us-west-2.amazonaws.com/jmason-reko/images/kenzo/test.jpg";
						$scope.group       = "我が人生JMAS";
						$scope.category    = resultCsvArray[0].split(",")[1];
						$scope.create      = "JMAS 太郎";
						$scope.date        = "2017.3.11";
						$scope.place       = "東京都港区海岸";
						$scope.comment     = "あんなこといいな。";
						$scope.good        = 0;
						$scope.bad         = 0;
						$scope.categoryResult = categoryResult;
						$("#dummyButton").trigger("click");
		                
						util.session().set("firstView", true);
						
						var newPicture = {
								"title":resultCsvArray[0].split(",")[1],
								"images":[{image:"https://s3-us-west-2.amazonaws.com/jmason-reko/images/kenzo/test.jpg",
										group:"教育実習",
										category:resultCsvArray[0].split(",")[1],
										create:"JMAS 太郎",
										date:"2017.3.11",
										place:"東京都港区海岸",
										comment:"あんなこといいな。",
										good:0,
										bad:0
									}]
							}
						var pictureList = util.session().get('pictureList');
						pictureList.unshift(newPicture);
						$scope.pictureList = pictureList;
//						$scope.pictureList.unshift(newPicture);
						util.session().set('pictureList', $scope.pictureList);
		            }).error(function(data, status, headers, config) {
		            });
					
//					$(".categoryTitle").on("click", function(){
//						alert("aa");
//					})

				}
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
			$scope.categoryResult = detail.categoryResult;

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