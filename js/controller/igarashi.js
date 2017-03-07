/**
 * groupコントローラー
 */
angular.module('cameraApp')
.controller('igarashiCtrl', ['$window', '$scope', '$location', '$timeout', '$http', 
	function($window, $scope, $location, $timeout, $http){
		$timeout(function(){
			$("#headerTitle").text("いがらし");
		});
		
		
var countA = 0;
var countB = 0;

$scope.goodClick = function() {
	countA++;
    document.getElementById( "goodCount" ).innerHTML = countA
};
$scope.badClick = function() {
	countB++;
    document.getElementById( "badCount" ).innerHTML = countB;
};
	}
]);