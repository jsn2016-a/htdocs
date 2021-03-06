/**
 * 共通機能
 */
angular.module('utility', ['pascalprecht.translate'])
.constant('constants', {
	// 論理属性定義
	'logicalType' : {
		'type_nationalId' : {
			itemLength : '10',
			itemMaxLen : '10',
			itemMinLen : '10',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : '半角数字'
		},
		'type_password' : {
			itemLength : '12',
			itemMaxLen : '12',
			itemMinLen : '6',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : '半角英数'
		},
		'type_credential_id' : {
			itemLength : '12',
			itemMaxLen : '12',
			itemMinLen : '12',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : '半角英数'
		},
		'type_security_code' : {
			itemLength : '6',
			itemMaxLen : '6',
			itemMinLen : '6',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : '半角数字'
		},
		'type_account_number' : {
			itemLength : '7',
			itemMaxLen : '7',
			itemMinLen : '7',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : '半角数字'
		},
		'type_grid_challenge' : {
			itemLength : '1',
			itemMaxLen : '1',
			itemMinLen : '1',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : '半角英数'
		},
		'type_sender_name' : {
			itemLength : '',
			itemMaxLen : '48',
			itemMinLen : '',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : '入力可能文字'
		},
		'type_beneficiary_name' : {
			itemLength : '',
			itemMaxLen : '48',
			itemMinLen : '',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : '入力可能文字'
		},
		'type_amount' : {
			itemLength : '',
			itemMaxLen : '12',
			itemMinLen : '',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : '半角数字'
		},
		'type_bank' : {
			itemLength : '',
			itemMaxLen : '30',
			itemMinLen : '',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : 'ひらがな、カナ、英字'
		},
		'type_branch' : {
			itemLength : '',
			itemMaxLen : '30',
			itemMinLen : '',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : 'ひらがな、カナ、英字'
		},
		'type_casaDate' : {
			itemLength : '',
			itemMaxLen : '10',
			itemMinLen : '',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : '半角数字/'
		},
		'type_pin' : {
			itemLength : '4',
			itemMaxLen : '4',
			itemMinLen : '4',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : '半角数字'
		},
		'type_new_FtLimit' : {
			itemLength : '',
			itemMaxLen : '7',
			itemMinLen : '',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : '半角数字'
		},
		'type_email' : {
			itemLength : '',
			itemMaxLen : '50',
			itemMinLen : '5',
			itemIntLen : '',
			itemDecLen : '',
			itemFormat : 'メールアドレス'
		}
	},
	// 入力項目属性定義
	'inputItemType' : {
		'label_nationalid' : 'type_nationalId',
		'label_password' : 'type_password',
		'label_old_password' : 'type_password',
		'label_new_password' : 'type_password',
		'label_credential_id' : 'type_credential_id',
		'label_security_code' : 'type_security_code',
		'label_account_number' : 'type_account_number',
		'label_grid_challenge_value1' : 'type_grid_challenge',
		'label_grid_challenge_value2' : 'type_grid_challenge',
		'label_grid_challenge_value3' : 'type_grid_challenge',
		'label_transfer_client_name' : 'type_sender_name',
		'label_transfer_payee_name' : 'type_beneficiary_name',
		'label_transfer_amount_money' : 'type_amount',
		'label_bank_name' : 'type_bank',
		'label_branch_name' : 'type_branch',
		'label_beginDate' : 'type_casaDate',
		'label_endDate'   : 'type_casaDate',
		'label_pin'   : 'type_pin',
		'label_amount_money' : 'type_amount',
		'label_ftLimit_amount' : 'type_new_FtLimit',
		'label_email' : 'type_email',
		'label_chk_email' : 'type_email',
	},
	// 各画面定義(パンくず用)
	'viewSettings' : {
		'TP0001' : {title:'残高を確認する',				state:'top',									parent:null},
		'AI0001' : {title:'口座情報',					state:'top.account_info',						parent:'TP0001'},
		'AI0002' : {title:'入出金明細',				state:'top.account_activity',					parent:'TP0001'},
		'TR0001' : {title:'振込を行う',				state:'top.transfer_top',						parent:null},
		'TR0002' : {title:'振込',					state:'top.transfer_beneficiary_list',			parent:'TR0001'},
		'TR0003' : {title:'振込',					state:'top.transfer_input_account',				parent:'TR0001'},
		'TR0004' : {title:'振込',					state:'',										parent:'TR0001'},
		'TR0005' : {title:'振込',					state:'',										parent:'TR0001'},
		'TR0006' : {title:'振込',					state:'top.transfer_input_amount',				parent:'TR0001'},
		'TR0007' : {title:'振込',					state:'top.transfer_confirm',					parent:'TR0001'},
		'TR0009' : {title:'振込',					state:'top.transfer_complete',					parent:'TR0001'},
		'TR0010' : {title:'振込状況の照会・取消',		state:'',										parent:'TR0001'},
		'TR0011' : {title:'振込先登録口座の確認・削除',	state:'',										parent:'TR0001'},
		'FD0001' : {title:'外貨普通預金のお取り引き',	state:'top.fx_top',								parent:null},
		'FD0002' : {title:'外貨普通預金',				state:'top.fx_input',							parent:'FD0001'},
		'FD0003' : {title:'外貨普通預金',				state:'top.fx_confirm',							parent:'FD0001'},
		'FD0004' : {title:'外貨普通預金',				state:'top.fx_complete',						parent:'FD0001'},
		'PW0001' : {title:'パワーダイレクトパスワード変更',	state:'top.userSettings_pass_input',			parent:'RG0001'},
		'PW0003' : {title:'パワーダイレクトパスワード変更',	state:'top.userSettings_pass_complete',			parent:'RG0001'},
		'RG0001' : {title:'登録情報を確認する',			state:'top.userSettings_top',					parent:null},
		'SA0001' : {title:'スマホ認証端末の登録・解除',	state:'top.userSettings_spAuth_register',		parent:'RG0001'},
		'SA0002' : {title:'スマホ認証端末の登録・解除',	state:'top.userSettings_spAuth_input',			parent:'RG0001'},
		'SA0004' : {title:'スマホ認証端末の登録・解除',	state:'top.userSettings_spAuth_complete',		parent:'RG0001'},
		'SA0005' : {title:'スマホ認証端末の登録・解除',	state:'top.userSettings_spAuth_delete',			parent:'RG0001'},
		'SA0007' : {title:'スマホ認証端末の登録・解除',	state:'top.userSettings_spAuth_completeDelete',	parent:'RG0001'},
		'EM0001' : {title:'通知Eメールの登録・変更',		state:'top.mail_register_change',					parent:'RG0001'},
		'EM0002' : {title:'通知Eメールの登録・変更',		state:'top.mail_confirm',							parent:'RG0001'},
		'EM0003' : {title:'通知Eメールの登録・変更',		state:'top.mail_complete',							parent:'RG0001'},
		'LM0001' : {title:'振込限度額の変更',			state:'top.userSettings_transferLimits_input',		parent:'RG0001'},
		'LM0002' : {title:'振込限度額の変更',			state:'top.userSettings_transferLimits_confirm',	parent:'RG0001'},
		'LM0003' : {title:'振込限度額の変更',			state:'top.userSettings_transferLimits_complete',	parent:'RG0001'},
		'LG0004' : {title:'',						state:'top.logout_confirm',							parent:null},
		'LG0005' : {title:'',						state:'top.logout_complete',							parent:null},
	},
	// ユーティリティ 画面共通項目設定メソッド用
	'commonViewItemInfo' : {
		'PLG0001' : {body_class:'login',active_nav:'',		active_loc:'',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MLG0001' : {body_class:'login',active_nav:'',		active_loc:'',	footer_content_path:'', cvEv:''},
		'PLG0004' : {body_class:'',		active_nav:'',		active_loc:'',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MLG0004' : {body_class:'',		active_nav:'',		active_loc:'',	footer_content_path:'', cvEv:''},
		'PLG0005' : {body_class:'',		active_nav:'',		active_loc:'',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MLG0005' : {body_class:'',		active_nav:'',		active_loc:'',	footer_content_path:'', cvEv:''},
		'PCS9999' : {body_class:'',		active_nav:'',		active_loc:'',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MCS9999' : {body_class:'',		active_nav:'',		active_loc:'',	footer_content_path:'', cvEv:''},
		'PTP0001' : {body_class:'top',	active_nav:'gn01',	active_loc:'0',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MTP0001' : {body_class:'top',	active_nav:'gn01',	active_loc:'0',	footer_content_path:'', cvEv:''},
		'PTP0002' : {body_class:'',		active_nav:'',		active_loc:'',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MTP0002' : {body_class:'',		active_nav:'',		active_loc:'',	footer_content_path:'', cvEv:''},
		'PAI0001' : {body_class:'',		active_nav:'gn01',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MAI0001' : {body_class:'',		active_nav:'gn01',	active_loc:'1',	footer_content_path:'', cvEv:''},
		'PAI0002' : {body_class:'',		active_nav:'gn01',	active_loc:'2',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MAI0002' : {body_class:'',		active_nav:'gn01',	active_loc:'2',	footer_content_path:'', cvEv:''},
		'PTR0001' : {body_class:'',		active_nav:'gn02',	active_loc:'0',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MTR0001' : {body_class:'',		active_nav:'gn02',	active_loc:'0',	footer_content_path:'', cvEv:''},
		'PTR0002' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MTR0002' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'', cvEv:''},
		'PTR0003' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:'event30'},
		'MTR0003' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'', cvEv:'event30'},
		'PTR0004' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MTR0004' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'', cvEv:''},
		'PTR0005' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MTR0005' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'', cvEv:''},
		'PTR0006' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MTR0006' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'', cvEv:''},
		'PTR0007' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MTR0007' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'', cvEv:''},
		'PTR0009' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:'event31'},
		'MTR0009' : {body_class:'',		active_nav:'gn02',	active_loc:'1',	footer_content_path:'', cvEv:'event31'},
		'PTR0010' : {body_class:'',		active_nav:'gn02',	active_loc:'2',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MTR0010' : {body_class:'',		active_nav:'gn02',	active_loc:'2',	footer_content_path:'', cvEv:''},
		'PTR0011' : {body_class:'',		active_nav:'gn02',	active_loc:'3',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MTR0011' : {body_class:'',		active_nav:'gn02',	active_loc:'3',	footer_content_path:'', cvEv:''},
		'PPW0001' : {body_class:'',		active_nav:'gn04',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MPW0001' : {body_class:'',		active_nav:'gn04',	active_loc:'1',	footer_content_path:'', cvEv:''},
		'PPW0003' : {body_class:'',		active_nav:'gn04',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MPW0003' : {body_class:'',		active_nav:'gn04',	active_loc:'1',	footer_content_path:'', cvEv:''},
		'PFD0001' : {body_class:'',		active_nav:'gn03',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MFD0001' : {body_class:'',		active_nav:'gn03',	active_loc:'1',	footer_content_path:'', cvEv:''},
		'PFD0002' : {body_class:'',		active_nav:'gn03',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:'event32'},
		'MFD0002' : {body_class:'',		active_nav:'gn03',	active_loc:'1',	footer_content_path:'', cvEv:'event32'},
		'PFD0003' : {body_class:'',		active_nav:'gn03',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MFD0003' : {body_class:'',		active_nav:'gn03',	active_loc:'1',	footer_content_path:'', cvEv:''},
		'PFD0004' : {body_class:'',		active_nav:'gn03',	active_loc:'1',	footer_content_path:'images/powercall_pc.png', cvEv:'event33'},
		'MFD0004' : {body_class:'',		active_nav:'gn03',	active_loc:'1',	footer_content_path:'', cvEv:'event33'},
		'PRG0001' : {body_class:'',		active_nav:'gn04',	active_loc:'0',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MRG0001' : {body_class:'',		active_nav:'gn04',	active_loc:'0',	footer_content_path:'', cvEv:''},
		'PSA0001' : {body_class:'',		active_nav:'gn04',	active_loc:'4',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MSA0001' : {body_class:'',		active_nav:'gn04',	active_loc:'4',	footer_content_path:'', cvEv:''},
		'PSA0002' : {body_class:'',		active_nav:'gn04',	active_loc:'4',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MSA0002' : {body_class:'',		active_nav:'gn04',	active_loc:'4',	footer_content_path:'', cvEv:''},
		'PSA0004' : {body_class:'',		active_nav:'gn04',	active_loc:'4',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MSA0004' : {body_class:'',		active_nav:'gn04',	active_loc:'4',	footer_content_path:'', cvEv:''},
		'PSA0005' : {body_class:'',		active_nav:'gn04',	active_loc:'4',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MSA0005' : {body_class:'',		active_nav:'gn04',	active_loc:'4',	footer_content_path:'', cvEv:''},
		'PSA0007' : {body_class:'',		active_nav:'gn04',	active_loc:'4',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MSA0007' : {body_class:'',		active_nav:'gn04',	active_loc:'4',	footer_content_path:'', cvEv:''},
		'PEM0001' : {body_class:'',		active_nav:'gn04',	active_loc:'2',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MEM0001' : {body_class:'',		active_nav:'gn04',	active_loc:'2',	footer_content_path:'', cvEv:''},
		'PEM0002' : {body_class:'',		active_nav:'gn04',	active_loc:'2',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MEM0002' : {body_class:'',		active_nav:'gn04',	active_loc:'2',	footer_content_path:'', cvEv:''},
		'PEM0003' : {body_class:'',		active_nav:'gn04',	active_loc:'2',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MEM0003' : {body_class:'',		active_nav:'gn04',	active_loc:'2',	footer_content_path:'', cvEv:''},
		'PLM0001' : {body_class:'',		active_nav:'gn04',	active_loc:'3',	footer_content_path:'images/powercall_pc.png', cvEv:'event34'},
		'MLM0001' : {body_class:'',		active_nav:'gn04',	active_loc:'3',	footer_content_path:'', cvEv:'event34'},
		'PLM0002' : {body_class:'',		active_nav:'gn04',	active_loc:'3',	footer_content_path:'images/powercall_pc.png', cvEv:''},
		'MLM0002' : {body_class:'',		active_nav:'gn04',	active_loc:'3',	footer_content_path:'', cvEv:''},
		'PLM0003' : {body_class:'',		active_nav:'gn04',	active_loc:'3',	footer_content_path:'images/powercall_pc.png', cvEv:'event35'},
		'MLM0003' : {body_class:'',		active_nav:'gn04',	active_loc:'3',	footer_content_path:'', cvEv:'event35'},
	},
	// 通貨名称
	'currencyType' : {
		'USD' : '米ドル',
		'EUR' : 'ユーロ',
		'CAD' : 'カナダ・ドル',
		'AUD' : '豪ドル',
		'NZD' : 'NZドル',
		'GBP' : '英ポンド',
		'HKD' : '香港ドル',
		'SGD' : 'シンガポール・ドル',
		'ZAR' : '南アフリカ・ランド',
		'NOK' : 'ノルウェー・クローネ',
		'CNY' : '人民元',
		'TRY' : 'トルコ・リラ',
		'BRL' : 'ブラジル・レアル',
	},
	// アダプターのtimeout値
	'timeoutOneMinute' : '450000',
	// 一日の振込上限額
	'ftLimitAmount' : '2000000',
	// セッションタイムアウト値
	'sessionKeepTime' : '10000',
	// AdobeAnalytics連携用共通URL
	'adobeCommonUrl' : '/apps/services/www/SFC/desktopbrowser/default'
});