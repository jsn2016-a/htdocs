/**
 * indexコントローラー
 */
angular.module('cameraApp')
.controller('indexCtrl', ['$window', '$scope', '$state', '$location', '$timeout', '$http', 'util',
	function($window, $scope, $state, $location, $timeout, $http, util){
		util.session().set("firstView", false);
	
		var imageUrl = "images/photos/";
		/*
		 * デモ用項目定義
		 * カメラロール画面
		 */
		util.session().set("pictureList", [{
				"title":"Food",
				"images":[{image:imageUrl + "beatles@sgt_peppers.jpg",
						group:"教育実習",
						category:"Food",
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
==========================================================ここから
			{
				"title":"Food",
				"images":[{image:imageUrl + "IMG_0649.JPG",
						group:"教育実習",
						category:"Food",
						create:"Kenzo",
						date:"2016.12.30",
						place:"東京都港区海岸",
						comment:"Happy",
						good:3,
						bad:1
					},
				"images":[{image:imageUrl + "IMG_0050.jpg",
						group:"教育実習",
						category:"Food",
						create:"石澤",
						date:"2016.12.31",
						place:"東京",
						comment:"Cafe",
						good:1,
						bad:1
					},
				"images":[{image:imageUrl + "IMG_8723.JPG",
						group:"教育実習",
						category:"Food",
						create:"IGA",
						date:"2016.7.30",
						place:"江戸川区",
						comment:"Cfe",
						good:1,
						bad:0
					},
				"images":[{image:imageUrl + "IMG_4457.jpg",
						group:"教育実習",
						category:"Food",
						create:"Kishimoto",
						date:"2017.1.31",
						place:"東京都港区海岸",
						comment:"Marverous!!",
						good:1,
						bad:1
					},
				"images":[{image:imageUrl + "IMG_9130.JPG",
						group:"教育実習",
						category:"Food",
						create:"koijharu",
						date:"2016.11.22",
						place:"東京都港区海岸",
						comment:"",
						good:1,
						bad:3
					},
				"images":[{image:imageUrl + "IMG_4456.jpg",
						group:"教育実習",
						category:"Food",
						create:"須貝",
						date:"2017.1.30",
						place:"東京都港区海岸",
						comment:"I love the beatles!!",
						good:1,
						bad:0
					},
				"images":[{image:imageUrl + "IMG_0050.jpg",
						group:"教育実習",
						category:"Food",
						create:"石澤",
						date:"2016.12.30",
						place:"東京都港区海岸",
						comment:"I love the beatles!!",
						good:3,
						bad:1
					},
				"images":[{image:imageUrl + "IMG_8723.JPG",
						group:"教育実習",
						category:"Food",
						create:"Kenzo",
						date:"2017.2.22",
						place:"東京都港区海岸",
						comment:"!!",
						good:2,
						bad:0
					},
				"images":[{image:imageUrl + "2014-06-23 19.16.20.jpg",
						group:"教育実習",
						category:"Food",
						create:"Kojiharu",
						date:"2016.12.29",
						place:"東京都港区海岸",
						comment:"Cheers!!",
						good:1,
						bad:1
					},
				"images":[{image:imageUrl + "2014-07-01 00.56.52.jpg",
						group:"教育実習",
						category:"Food",
						create:"石澤",
						date:"2017.12.30",
						place:"東京都港区海岸",
						comment:"Enjoy",
						good:1,
						bad:1
					},
			{
				"title":"Leisure",
				"images":[{image:imageUrl + "FullSizeRender 42.jpg",
						group:"教育実習",
						category:"Leisure",
						create:"Kenzo",
						date:"2016.12.30",
						place:"東京都港区海岸",
						comment:"Happy",
						good:1,
						bad:0
					},
				"images":[{image:imageUrl + "IMG_8947.JPG",
						group:"教育実習",
						category:"Leisure",
						create:"石澤",
						date:"2016.12.31",
						place:"東京",
						comment:"Fun",
						good:2,
						bad:0
					},
				"images":[{image:imageUrl + "IMG_9062.JPG",
						group:"教育実習",
						category:"Leisure",
						create:"IGA",
						date:"2016.7.30",
						place:"江戸川区",
						comment:"Fun",
						good:2,
						bad:0
					},
				"images":[{image:imageUrl + "IMG_3679.JPG",
						group:"教育実習",
						category:"Leisure",
						create:"Kishimoto",
						date:"2017.1.31",
						place:"東京都港区海岸",
						comment:"Marverous!!",
						good:3,
						bad:0
					},
				"images":[{image:imageUrl + "IMG_4456.jpg",
						group:"教育実習",
						category:"Leisure",
						create:"koijharu",
						date:"2016.11.22",
						place:"東京都港区海岸",
						comment:"Fun",
						good:1,
						bad:0
					},
				"images":[{image:imageUrl + "IMG_8867.JPG",
						group:"教育実習",
						category:"Leisure",
						create:"須貝",
						date:"2017.1.30",
						place:"東京都港区海岸",
						comment:"Enjoy",
						good:1,
						bad:0
					},
				"images":[{image:imageUrl + "IMG_3261.JPG",
						group:"教育実習",
						category:"Leisure",
						create:"石澤",
						date:"2016.12.30",
						place:"東京都港区海岸",
						comment:"Enjoy",
						good:3,
						bad:0
					},
				"images":[{image:imageUrl + "IMG_3262.JPG",
						group:"教育実習",
						category:"Leisure",
						create:"Kenzo",
						date:"2017.2.22",
						place:"東京都港区海岸",
						comment:"!!",
						good:1,
						bad:0
					},
				"images":[{image:imageUrl + "IMG_9007.JPG",
						group:"教育実習",
						category:"Leisure",
						create:"Kojiharu",
						date:"2016.12.29",
						place:"東京都港区海岸",
						comment:"Super!",
						good:1,
						bad:0
					},
======================================================ここまで


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
			"title":"Food",
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