/**
 * 共通機能
 */
angular.module('utility')
.factory('util', ['$rootScope', '$timeout', '$location', '$state', '$stateParams', 
	function($rootScope, $timeout, $location, $state, $stateParams){
		
	}
])


{ // セッション管理機能クラス
	SessionManager = function() {
		this.map = {};
	}
	
	// セッション情報設定メソッド
	SessionManager.prototype.set = function(key, val){
		this.map[key] = val;
	};
	// セッション情報取得メソッド
	SessionManager.prototype.get = function(key){
		return this.map[key];
	};
	// セッション情報削除メソッド
	SessionManager.prototype.remove = function(key){
		this.map[key] = null;
	};
	// セッション情報全削除メソッド
	SessionManager.prototype.removeAll = function(){
		this.map = {};
	};
}