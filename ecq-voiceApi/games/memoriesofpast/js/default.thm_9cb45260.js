window.skins=window.skins||{};
window.skins.memoriesofpast=window.skins.memoriesofpast||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/global/GameHelpSkin.exml'] = window.GameHelpSkin = (function (_super) {
	__extends(GameHelpSkin, _super);
	function GameHelpSkin() {
		_super.call(this);
		this.skinParts = ["img_step","gp_imgpack","gp_prevstep","gp_nextstep","lbl_desc","gp_desccontainer","img_tip","img_close","lbl_gamename","gp_loading"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = GameHelpSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.gp_desccontainer_i(),this.img_tip_i(),this._Group2_i(),this.gp_loading_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "nl_bjtu-sy_png";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 306;
		t.left = 0;
		t.right = 0;
		t.top = 190;
		t.elementsContent = [this.gp_imgpack_i(),this.gp_prevstep_i(),this.gp_nextstep_i()];
		return t;
	};
	_proto.gp_imgpack_i = function () {
		var t = new eui.Group();
		this.gp_imgpack = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.img_step_i()];
		return t;
	};
	_proto.img_step_i = function () {
		var t = new eui.Image();
		this.img_step = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = 0;
		return t;
	};
	_proto.gp_prevstep_i = function () {
		var t = new eui.Group();
		this.gp_prevstep = t;
		t.bottom = 0;
		t.left = 0;
		t.top = 0;
		t.touchChildren = false;
		t.percentWidth = 49;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 20;
		t.rotation = 180;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "js_next_png";
		t.verticalCenter = 0;
		t.width = 38;
		return t;
	};
	_proto.gp_nextstep_i = function () {
		var t = new eui.Group();
		this.gp_nextstep = t;
		t.bottom = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.percentWidth = 49;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 20;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "js_next_png";
		t.verticalCenter = 0;
		t.width = 38;
		return t;
	};
	_proto.gp_desccontainer_i = function () {
		var t = new eui.Group();
		this.gp_desccontainer = t;
		t.bottom = 20;
		t.height = 214;
		t.horizontalCenter = 0;
		t.visible = true;
		t.width = 660;
		t.elementsContent = [this._Rect1_i(),this.lbl_desc_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = -2;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.scaleY = 1;
		t.strokeAlpha = 0;
		t.top = 2;
		t.visible = true;
		return t;
	};
	_proto.lbl_desc_i = function () {
		var t = new eui.Label();
		this.lbl_desc = t;
		t.fontFamily = "Arial";
		t.percentHeight = 95;
		t.horizontalCenter = 0;
		t.lineSpacing = 3;
		t.size = 25;
		t.text = "将相同色块用线条连接起来，并填满所有方格";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 95;
		return t;
	};
	_proto.img_tip_i = function () {
		var t = new eui.Image();
		this.img_tip = t;
		t.bottom = 30;
		t.height = 50;
		t.horizontalCenter = 292;
		t.source = "common_tip_png";
		t.width = 50;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.left = 23;
		t.right = 22;
		t.top = 18;
		t.elementsContent = [this._Image4_i(),this.img_close_i(),this.lbl_gamename_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(225,26,225,27);
		t.source = "top_di_png";
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.left = 0;
		t.source = "yblx_fh_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_gamename_i = function () {
		var t = new eui.Label();
		this.lbl_gamename = t;
		t.fontFamily = "shsCN";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "过去的记忆 - 游戏演示";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gp_loading_i = function () {
		var t = new eui.Group();
		this.gp_loading = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	return GameHelpSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/global/GameMenuSkin.exml'] = window.GameMenuSkin = (function (_super) {
	__extends(GameMenuSkin, _super);
	function GameMenuSkin() {
		_super.call(this);
		this.skinParts = ["img_menu","lbl_gamename","lbl_score","lbl_addscore","gp_bean","lbl_leveltype","img_progress","lbl_progress","lbl_level","gp_level"];
		
		this.elementsContent = [this._Group6_i()];
	}
	var _proto = GameMenuSkin.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Group1_i(),this._Group5_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.left = 23;
		t.right = 22;
		t.top = 33;
		t.elementsContent = [this._Image1_i(),this.img_menu_i(),this.lbl_gamename_i(),this._Image2_i(),this._Label1_i(),this.lbl_score_i(),this.lbl_addscore_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(225,26,225,27);
		t.source = "top_di_png";
		return t;
	};
	_proto.img_menu_i = function () {
		var t = new eui.Image();
		this.img_menu = t;
		t.left = 0;
		t.source = "yblx_fh_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_gamename_i = function () {
		var t = new eui.Label();
		this.lbl_gamename = t;
		t.fontFamily = "shsCN";
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "过去的记忆";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.right = 196;
		t.source = "top_fenge_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "shsCN";
		t.right = 121;
		t.size = 30;
		t.text = "分数";
		t.textColor = 0XE8BA3D;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_score_i = function () {
		var t = new eui.Label();
		this.lbl_score = t;
		t.fontFamily = "shsCN";
		t.right = 20;
		t.size = 30;
		t.textColor = 0X2FF5E5;
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_addscore_i = function () {
		var t = new eui.Label();
		this.lbl_addscore = t;
		t.fontFamily = "shsCN";
		t.right = 20;
		t.size = 35;
		t.text = "+0";
		t.visible = false;
		t.y = 150;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.left = 23;
		t.right = 22;
		t.top = 100;
		t.elementsContent = [this.gp_bean_i(),this._Group3_i(),this.gp_level_i()];
		return t;
	};
	_proto.gp_bean_i = function () {
		var t = new eui.Group();
		this.gp_bean = t;
		t.height = 38;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 380;
		t.elementsContent = [this.lbl_leveltype_i(),this._Group2_i()];
		return t;
	};
	_proto.lbl_leveltype_i = function () {
		var t = new eui.Label();
		this.lbl_leveltype = t;
		t.fontFamily = "shsCN";
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x222533;
		t.text = "次数";
		t.textColor = 0XEEE7E7;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 22;
		t.width = 301;
		t.x = 70;
		t.elementsContent = [this._Image3_i(),this.img_progress_i(),this.lbl_progress_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "jdt1_png";
		return t;
	};
	_proto.img_progress_i = function () {
		var t = new eui.Image();
		this.img_progress = t;
		t.left = 2;
		t.scale9Grid = new egret.Rectangle(143,6,8,6);
		t.source = "jdt2_png";
		t.verticalCenter = 0;
		t.width = 0;
		return t;
	};
	_proto.lbl_progress_i = function () {
		var t = new eui.Label();
		this.lbl_progress = t;
		t.fontFamily = "shsCN";
		t.horizontalCenter = 0;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x222533;
		t.textColor = 0XEEE7E7;
		t.verticalCenter = 0;
		return t;
	};
	_proto.gp_level_i = function () {
		var t = new eui.Group();
		this.gp_level = t;
		t.height = 38;
		t.right = 0;
		t.verticalCenter = 0;
		t.width = 130;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image4_i(),this.lbl_level_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "top_douzi_png";
		return t;
	};
	_proto.lbl_level_i = function () {
		var t = new eui.Label();
		this.lbl_level = t;
		t.fontFamily = "shsCN";
		t.horizontalCenter = 0;
		t.size = 26;
		t.textColor = 0XEEE7E7;
		t.verticalCenter = 0;
		return t;
	};
	return GameMenuSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/global/ResultSceneSkin.exml'] = window.ResultSceneSkin = (function (_super) {
	__extends(ResultSceneSkin, _super);
	function ResultSceneSkin() {
		_super.call(this);
		this.skinParts = ["img_title","lbl_oldrank","lbl_score","gp_result","btn_goon","gp_container"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = ResultSceneSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this._Rect1_i(),this.gp_container_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "backgrond1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.4;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.gp_container_i = function () {
		var t = new eui.Group();
		this.gp_container = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.img_title_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto.img_title_i = function () {
		var t = new eui.Image();
		this.img_title = t;
		t.anchorOffsetX = 230;
		t.anchorOffsetY = 55;
		t.height = 110;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.source = "js_bt0_png";
		t.width = 460;
		t.y = 219;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.y = 286;
		t.elementsContent = [this._Image2_i(),this.gp_result_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 250;
		t.source = "js_hengfu_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.gp_result_i = function () {
		var t = new eui.Group();
		this.gp_result = t;
		t.bottom = 0;
		t.horizontalCenter = -918;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.lbl_oldrank_i(),this.lbl_score_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "justify";
		return t;
	};
	_proto.lbl_oldrank_i = function () {
		var t = new eui.Label();
		this.lbl_oldrank = t;
		t.fontFamily = "shsCN";
		t.size = 50;
		t.text = "你的得分";
		t.textAlign = "center";
		t.textColor = 0xFFD149;
		t.verticalAlign = "bottom";
		t.y = 0;
		return t;
	};
	_proto.lbl_score_i = function () {
		var t = new eui.Label();
		this.lbl_score = t;
		t.fontFamily = "shsCN";
		t.size = 80;
		t.text = "0 分";
		t.textAlign = "center";
		t.textColor = 0xFFD149;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 235;
		t.height = 76;
		t.horizontalCenter = 0;
		t.width = 538;
		t.elementsContent = [this.btn_goon_i()];
		return t;
	};
	_proto.btn_goon_i = function () {
		var t = new eui.Group();
		this.btn_goon = t;
		t.anchorOffsetX = 122;
		t.anchorOffsetY = 38;
		t.height = 76;
		t.horizontalCenter = 0;
		t.touchChildren = false;
		t.width = 244;
		t.y = 38;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 122;
		t.anchorOffsetY = 38;
		t.horizontalCenter = 0;
		t.source = "js_btn_jxyx_png";
		t.verticalCenter = 0;
		return t;
	};
	return ResultSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainScene.exml'] = window.skins.memoriesofpast.MainSceneSkin = (function (_super) {
	__extends(MainSceneSkin, _super);
	function MainSceneSkin() {
		_super.call(this);
		this.skinParts = ["previewArea","timerSecondLabel","timerGroup","mainArea","containerArea","imageNo","imageYes","operationArea","labelQuestion","questionArea","imageCountDown","imageAnswerFeedback","gamemenu","rect_mask","gp_container"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group6_i()];
	}
	var _proto = MainSceneSkin.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.gp_container_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "backgrond1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gp_container_i = function () {
		var t = new eui.Group();
		this.gp_container = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i(),this._Image2_i(),this.containerArea_i(),this.operationArea_i(),this.questionArea_i(),this.imageCountDown_i(),this.imageAnswerFeedback_i(),this.gamemenu_i(),this.rect_mask_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.height = 1000;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 550;
		t.y = 220;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 118.5;
		t.anchorOffsetY = 112.5;
		t.skewX = 0;
		t.skewY = 0;
		t.source = "gqji_g5_03_png";
		t.visible = false;
		return t;
	};
	_proto.containerArea_i = function () {
		var t = new eui.Group();
		this.containerArea = t;
		t.height = 756.073;
		t.left = 0;
		t.right = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = true;
		t.elementsContent = [this.previewArea_i(),this.timerGroup_i(),this.mainArea_i()];
		return t;
	};
	_proto.previewArea_i = function () {
		var t = new eui.Group();
		this.previewArea = t;
		t.horizontalCenter = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i(),this._Group1_i(),this._Group2_i(),this._Label2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "上一个图形";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 104.7;
		t.name = "shapeGroup0";
		t.width = 104.7;
		t.x = -276;
		t.y = 114;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "gqjy_bghuip_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "ss_default_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 104.7;
		t.name = "shapeGroup1";
		t.width = 104.7;
		t.x = 186;
		t.y = 204;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "gqjy_btnliang_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "ss_default_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "当前图形";
		t.textColor = 0xFFFFFF;
		return t;
	};
	_proto.timerGroup_i = function () {
		var t = new eui.Group();
		this.timerGroup = t;
		t.height = 104.7;
		t.horizontalCenter = 0;
		t.top = 68;
		t.width = 104.7;
		t.elementsContent = [this._Image7_i(),this.timerSecondLabel_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "jp_yuan_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.timerSecondLabel_i = function () {
		var t = new eui.Label();
		this.timerSecondLabel = t;
		t.horizontalCenter = 0;
		t.text = "3.00";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto.mainArea_i = function () {
		var t = new eui.Group();
		this.mainArea = t;
		t.bottom = 0;
		t.height = 1000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 650;
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 349;
		t.name = "shapeGroup0";
		t.width = 349;
		t.x = -296;
		t.y = 114;
		t.elementsContent = [this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "gqjy_bghuip_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 73;
		t.anchorOffsetY = 73;
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.source = "ss_default_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 349;
		t.name = "shapeGroup1";
		t.width = 349;
		t.x = 186;
		t.y = 204;
		t.elementsContent = [this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "gqjy_bghuip_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 73;
		t.anchorOffsetY = 73;
		t.horizontalCenter = 0;
		t.source = "ss_default_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 349;
		t.name = "shapeGroup2";
		t.width = 349;
		t.x = 667;
		t.y = 114;
		t.elementsContent = [this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "gqjy_bghuip_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 73;
		t.anchorOffsetY = 73;
		t.horizontalCenter = 0;
		t.source = "ss_default_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.operationArea_i = function () {
		var t = new eui.Group();
		this.operationArea = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 300;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.imageNo_i(),this.imageYes_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 50;
		return t;
	};
	_proto.imageNo_i = function () {
		var t = new eui.Image();
		this.imageNo = t;
		t.name = "No";
		t.source = "gqjy_btn1_png";
		return t;
	};
	_proto.imageYes_i = function () {
		var t = new eui.Image();
		this.imageYes = t;
		t.name = "Yes";
		t.source = "gqjy_btn2_png";
		return t;
	};
	_proto.questionArea_i = function () {
		var t = new eui.Group();
		this.questionArea = t;
		t.bottom = 20;
		t.height = 93;
		t.horizontalCenter = 0;
		t.visible = true;
		t.width = 593;
		t.elementsContent = [this._Image14_i(),this.labelQuestion_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "gqjy_bgs_png";
		t.top = 0;
		return t;
	};
	_proto.labelQuestion_i = function () {
		var t = new eui.Label();
		this.labelQuestion = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 25;
		t.text = "这个图形与之前那个一样吗？";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 0;
		t.verticalAlign = "middle";
		t.wordWrap = true;
		return t;
	};
	_proto.imageCountDown_i = function () {
		var t = new eui.Image();
		this.imageCountDown = t;
		t.fillMode = "scale";
		t.horizontalCenter = 0;
		t.name = "3";
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(11,10,12,11);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jp_sz3_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.imageAnswerFeedback_i = function () {
		var t = new eui.Image();
		this.imageAnswerFeedback = t;
		t.fillMode = "scale";
		t.horizontalCenter = 0;
		t.name = "3";
		t.scale9Grid = new egret.Rectangle(11,10,12,11);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ty_duigou_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.gamemenu_i = function () {
		var t = new gamebase.GameMenu();
		this.gamemenu = t;
		t.horizontalCenter = 0;
		t.top = 0;
		return t;
	};
	_proto.rect_mask_i = function () {
		var t = new eui.Rect();
		this.rect_mask = t;
		t.alpha = 0.2;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.width = 0;
		return t;
	};
	return MainSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/StartScene.exml'] = window.skins.memoriesofpast.StartSceneSkin = (function (_super) {
	__extends(StartSceneSkin, _super);
	function StartSceneSkin() {
		_super.call(this);
		this.skinParts = ["img_help","gp_btns","containerArea","rect_mask","gp_container"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group17_i()];
	}
	var _proto = StartSceneSkin.prototype;

	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.touchEnabled = true;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.gp_container_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "backgrond1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gp_container_i = function () {
		var t = new eui.Group();
		this.gp_container = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.containerArea_i(),this.rect_mask_i()];
		return t;
	};
	_proto.containerArea_i = function () {
		var t = new eui.Group();
		this.containerArea = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = true;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this.gp_btns_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 200;
		t.elementsContent = [this._Image2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "s_icon_gqdjy_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 350;
		t.width = 500;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Label1_i(),this.img_help_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 80;
		t.text = "过去的记忆";
		t.textAlign = "center";
		t.textColor = 0xFFD149;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_help_i = function () {
		var t = new eui.Image();
		this.img_help = t;
		t.bottom = 0;
		t.right = -30;
		t.source = "yx_yxjc_png";
		return t;
	};
	_proto.gp_btns_i = function () {
		var t = new eui.Group();
		this.gp_btns = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 150;
		t.width = 300;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group4_i(),this._Group6_i(),this._Group8_i(),this._Group10_i(),this._Group12_i(),this._Group14_i(),this._Group16_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image3_i(),this._Label2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "jdt1_png";
		t.verticalCenter = 0;
		t.width = 297;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.left = 20;
		t.size = 30;
		t.text = "L1";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.left = 70;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image5_i(),this._Label3_i(),this._Group5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "jdt1_png";
		t.verticalCenter = 0;
		t.width = 297;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.left = 20;
		t.size = 30;
		t.text = "L2";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.left = 70;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image8_i(),this._Label4_i(),this._Group7_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "jdt1_png";
		t.verticalCenter = 0;
		t.width = 297;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.left = 20;
		t.size = 30;
		t.text = "L3";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.left = 70;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image12_i(),this._Label5_i(),this._Group9_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "jdt1_png";
		t.verticalCenter = 0;
		t.width = 297;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.left = 20;
		t.size = 30;
		t.text = "L4";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.left = 70;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image17_i(),this._Label6_i(),this._Group11_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "jdt1_png";
		t.verticalCenter = 0;
		t.width = 297;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.left = 20;
		t.size = 30;
		t.text = "L5";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.left = 70;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout5_i();
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i()];
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image23_i(),this._Label7_i(),this._Group13_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "jdt1_png";
		t.verticalCenter = 0;
		t.width = 297;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.left = 20;
		t.size = 30;
		t.text = "L6";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.left = 70;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout6_i();
		t.elementsContent = [this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i()];
		return t;
	};
	_proto._HorizontalLayout6_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image30_i(),this._Label8_i(),this._Group15_i()];
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.horizontalCenter = 0;
		t.source = "jdt1_png";
		t.verticalCenter = 0;
		t.width = 297;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.left = 20;
		t.size = 30;
		t.text = "L7";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.left = 70;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout7_i();
		t.elementsContent = [this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i()];
		return t;
	};
	_proto._HorizontalLayout7_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "nli_xx_quan_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto.rect_mask_i = function () {
		var t = new eui.Rect();
		this.rect_mask = t;
		t.alpha = 0.2;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.width = 0;
		return t;
	};
	return StartSceneSkin;
})(eui.Skin);