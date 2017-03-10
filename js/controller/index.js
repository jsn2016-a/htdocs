/**
 * indexコントローラー
 */
angular.module('cameraApp')
.controller('indexCtrl', ['$window', '$scope', '$state', '$location', '$timeout', '$http', 'util',
	function($window, $scope, $state, $location, $timeout, $http, util){
		var imageUrl = "images/import_images/";
		/*
		 * デモ用項目定義
		 * カメラロール画面
		 */
		util.session().set("pictureList", [{
				"title":"Portlate",
				"images":[{image:imageUrl + "beatles@sgt_peppers.jpg",
						group:"教育実習",
						category:"Portlate",
						create:"石澤",
						date:"2017.12.30",
						place:"東京都港区海岸",
						comment:"I love the beatles!!",
						good:0,
						bad:0
					},
				    {image:imageUrl + "jimihendrix@axis.jpg",
						group:"教育実習",
						category:"Sport",
						create:"須貝",
						date:"2016.9.11",
						place:"桜上水",
						comment:"god",
						good:0,
						bad:0
					},
					{image:imageUrl + "test.png"},
				    {image:imageUrl + "prince@lovesexy.jpg"},
					{image:imageUrl + "red_hot@by_the_way.jpg"}]
			},
			{
				"title":"Landscape",
				"images":[{image:imageUrl + "beatles@sgt_peppers.jpg"},
				          {image:imageUrl + "jimihendrix@axis.jpg"},
						  {image:imageUrl + "nirvana@nevermind.jpg"},
				          {image:imageUrl + "prince@lovesexy.jpg"},
					      {image:imageUrl + "red_hot@by_the_way.jpg"}]
			}
		]);
		
		util.session().set("categoryList", [{
			"title":"Sport",
			"disp":true
		},
		{
			"title":"Landscape",
			"disp":true
		},
		{
			"title":"Portlate",
			"disp":true
		},
		{
			"title":"Group Photo",
			"disp":false
		},
		]);
		
		/*
		 * デモ用項目定義
		 * グループ選択
		 */
		util.session().set("groupList", [{
			"groupTitle":"Family",
			"events":[{eventTitle:"万葉クラブ"},
			          {eventTitle:"館林はとバスの旅"},
			          {eventTitle:"同期ディズニー"},
			          {eventTitle:"2015_DF会"},
			          {eventTitle:"2015_前期納会"},
			          {eventTitle:"VS専修戦"},
			          {eventTitle:"台湾旅行"},
			          {eventTitle:"卒業式"},
			          {eventTitle:"卒業後。。。"}]
		},
		{	
			"groupTitle":"Friend",
			"events":[{eventTitle:"最終日"},
			          {eventTitle:"合唱コン"}]
		},
		{
			"groupTitle":"我が人生JMAS",
			"events":[{eventTitle:"2014_ゼミ合宿"},
			          {eventTitle:"独・仏・西旅行"}]
		}
		]);
		//		util.session().set("groupList", [{
//				"groupTitle":"女ラク",
//				"events":[{eventTitle:"万葉クラブ"},
//				          {eventTitle:"館林はとバスの旅"},
//				          {eventTitle:"同期ディズニー"},
//				          {eventTitle:"2015_DF会"},
//				          {eventTitle:"2015_前期納会"},
//				          {eventTitle:"VS専修戦"},
//				          {eventTitle:"台湾旅行"},
//				          {eventTitle:"卒業式"},
//				          {eventTitle:"卒業後。。。"}]
//			},
//			{	
//				"groupTitle":"教育実習",
//				"events":[{eventTitle:"最終日"},
//				          {eventTitle:"合唱コン"}]
//			},
//			{	
//				"groupTitle":"ゼミ",
//				"events":[{eventTitle:"2014_ゼミ合宿"},
//				          {eventTitle:"独・仏・西旅行"}]
//			},
//			{	
//				"groupTitle":"JMAS同期",
//				"events":[{eventTitle:"スポッチャ"},
//				          {eventTitle:"日光旅行"}]
//			},
//			{	
//				"groupTitle":"プライベート",
//				"events":[{eventTitle:"いとこ結婚式"},
//				          {eventTitle:"ジブリ"},
//				          {eventTitle:"怪獣酒場"}]
//			},
//		]);
		
		/*
		 * ヘッダータイトル指定
		 */
		util.session().set("headerTitle", "All");
		
		$state.go("camera");

	}
]);