var extendStatics = Object.setPrototypeOf || {
	__proto__: []
}
instanceof Array && function(e, t) {
	e.__proto__ = t
} || function(e, t) {
	for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
}, __extends = function(e, t) {
	function n() {
		this.constructor = e
	}
	extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
}, __assign = Object.assign || function(e) {
	for (var t, n = 1, r = arguments.length; r > n; n++) {
		t = arguments[n];
		for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
	}
	return e
}, __rest = function(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (null != e && "function" == typeof Object.getOwnPropertySymbols)
		for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object
			.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
	return n
}, __decorate = function(e, t, n, r) {
	var o, i = arguments.length,
		a = 3 > i ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
	else
		for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (3 > i ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) ||
			a);
	return i > 3 && a && Object.defineProperty(t, n, a), a
}, __param = function(e, t) {
	return function(n, r) {
		t(n, r, e)
	}
}, __metadata = function(e, t) {
	return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
}, __awaiter = function(e, t, n, r) {
	function o(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e)
		})
	}
	return new(n || (n = Promise))(function(n, i) {
		function a(e) {
			try {
				c(r.next(e))
			} catch (t) {
				i(t)
			}
		}

		function s(e) {
			try {
				c(r["throw"](e))
			} catch (t) {
				i(t)
			}
		}

		function c(e) {
			e.done ? n(e.value) : o(e.value).then(a, s)
		}
		c((r = r.apply(e, t || [])).next())
	})
}, __generator = function(e, t) {
	function n(e) {
		return function(t) {
			return r([e, t])
		}
	}

	function r(n) {
		if (o) throw new TypeError("Generator is already executing.");
		for (; c;) try {
			if (o = 1, i && (a = 2 & n[0] ? i["return"] : n[0] ? i["throw"] || ((a = i["return"]) && a.call(i),
					0) : i.next) && !(a = a.call(i, n[1])).done) return a;
			switch (i = 0, a && (n = [2 & n[0], a.value]), n[0]) {
				case 0:
				case 1:
					a = n;
					break;
				case 4:
					return c.label++, {
						value: n[1],
						done: !1
					};
				case 5:
					c.label++, i = n[1], n = [0];
					continue;
				case 7:
					n = c.ops.pop(), c.trys.pop();
					continue;
				default:
					if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
						c = 0;
						continue
					}
					if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
						c.label = n[1];
						break
					}
					if (6 === n[0] && c.label < a[1]) {
						c.label = a[1], a = n;
						break
					}
					if (a && c.label < a[2]) {
						c.label = a[2], c.ops.push(n);
						break
					}
					a[2] && c.ops.pop(), c.trys.pop();
					continue
			}
			n = t.call(e, c)
		} catch (r) {
			n = [6, r], i = 0
		} finally {
			o = a = 0
		}
		if (5 & n[0]) throw n[1];
		return {
			value: n[0] ? n[1] : void 0,
			done: !0
		}
	}
	var o, i, a, s, c = {
		label: 0,
		sent: function() {
			if (1 & a[0]) throw a[1];
			return a[1]
		},
		trys: [],
		ops: []
	};
	return s = {
		next: n(0),
		"throw": n(1),
		"return": n(2)
	}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
		return this
	}), s
}, __exportStar = function(e, t) {
	for (var n in e) "default" === n || t.hasOwnProperty(n) || __createBinding(t, e, n)
}, __createBinding = Object.create ? function(e, t, n, r) {
	void 0 === r && (r = n), Object.defineProperty(e, r, {
		enumerable: !0,
		get: function() {
			return t[n]
		}
	})
} : function(e, t, n, r) {
	void 0 === r && (r = n), e[r] = t[n]
}, __values = function(e) {
	var t = "function" == typeof Symbol && Symbol.iterator,
		n = t && e[t],
		r = 0;
	if (n) return n.call(e);
	if (e && "number" == typeof e.length) return {
		next: function() {
			return e && r >= e.length && (e = void 0), {
				value: e && e[r++],
				done: !e
			}
		}
	};
	throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}, __read = function(e, t) {
	var n = "function" == typeof Symbol && e[Symbol.iterator];
	if (!n) return e;
	var r, o, i = n.call(e),
		a = [];
	try {
		for (;
			(void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
	} catch (s) {
		o = {
			error: s
		}
	} finally {
		try {
			r && !r.done && (n = i["return"]) && n.call(i)
		} finally {
			if (o) throw o.error
		}
	}
	return a
}, __spread = function() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
	return e
}, __spreadArrays = function() {
	for (var e = 0, t = 0, n = arguments.length; n > t; t++) e += arguments[t].length;
	for (var r = Array(e), o = 0, t = 0; n > t; t++)
		for (var i = arguments[t], a = 0, s = i.length; s > a; a++, o++) r[o] = i[a];
	return r
}, __await = function(e) {
	return this instanceof __await ? (this.v = e, this) : new __await(e)
}, __asyncGenerator = function(e, t, n) {
	function r(e) {
		h[e] && (u[e] = function(t) {
			return new Promise(function(n, r) {
				l.push([e, t, n, r]) > 1 || o(e, t)
			})
		})
	}

	function o(e, t) {
		try {
			i(h[e](t))
		} catch (n) {
			c(l[0][3], n)
		}
	}

	function i(e) {
		e.value instanceof __await ? Promise.resolve(e.value.v).then(a, s) : c(l[0][2], e)
	}

	function a(e) {
		o("next", e)
	}

	function s(e) {
		o("throw", e)
	}

	function c(e, t) {
		e(t), l.shift(), l.length && o(l[0][0], l[0][1])
	}
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var u, h = n.apply(e, t || []),
		l = [];
	return u = {}, r("next"), r("throw"), r("return"), u[Symbol.asyncIterator] = function() {
		return this
	}, u
}, __asyncDelegator = function(e) {
	function t(t, o) {
		n[t] = e[t] ? function(n) {
			return (r = !r) ? {
				value: __await(e[t](n)),
				done: "return" === t
			} : o ? o(n) : n
		} : o
	}
	var n, r;
	return n = {}, t("next"), t("throw", function(e) {
		throw e
	}), t("return"), n[Symbol.iterator] = function() {
		return this
	}, n
}, __asyncValues = function(e) {
	function t(t) {
		r[t] = e[t] && function(r) {
			return new Promise(function(o, i) {
				r = e[t](r), n(o, i, r.done, r.value)
			})
		}
	}

	function n(e, t, n, r) {
		Promise.resolve(r).then(function(t) {
			e({
				value: t,
				done: n
			})
		}, t)
	}
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var r, o = e[Symbol.asyncIterator];
	return o ? o.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), r = {}, t(
		"next"), t("throw"), t("return"), r[Symbol.asyncIterator] = function() {
		return this
	}, r)
}, __makeTemplateObject = function(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", {
		value: t
	}) : e.raw = t, e
}, __setModuleDefault = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	})
} : function(e, t) {
	e["default"] = t
}, __importStar = function(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (null != e)
		for (var n in e) Object.hasOwnProperty.call(e, n) && __createBinding(t, e, n);
	return __setModuleDefault(t, e), t
}, __importDefault = function(e) {
	return e && e.__esModule ? e : {
		"default": e
	}
}, __classPrivateFieldGet = function(e, t) {
	if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
	return t.get(e)
}, __classPrivateFieldSet = function(e, t, n) {
	if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
	return t.set(e, n), n
}, __reflect = function(e, t, n) {
	e.__class__ = t, n ? n.push(t) : n = [t], e.__types__ = e.__types__ ? n.concat(e.__types__) : n
};
! function(e) {
	function t(r) {
		if (n[r]) return n[r].exports;
		var o = n[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
	}
	var n = {};
	return t.m = e, t.c = n, t.d = function(e, n, r) {
		t.o(e, n) || Object.defineProperty(e, n, {
			enumerable: !0,
			get: r
		})
	}, t.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, t.t = function(e, n) {
		if (1 & n && (e = t(e)), 8 & n) return e;
		if (4 & n && "object" == typeof e && e && e.__esModule) return e;
		var r = Object.create(null);
		if (t.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & n && "string" != typeof e)
			for (var o in e) t.d(r, o, function(t) {
				return e[t]
			}.bind(null, o));
		return r
	}, t.n = function(e) {
		var n = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "", t(t.s = 0)
}([function(e, t, n) {
	n(1), n(2), n(0), n(3), n(4), n(5), n(6), n(7), n(8), n(9), n(10), n(11), n(12), n(13), n(14), n(15), n(16),
		n(17), n(18), n(19), n(20), n(21), n(22), n(23), n(24), n(25), n(26), n(27), n(28), n(29), n(30), n(31),
		n(32), n(33), n(34), n(35), n(36), n(37), n(38), n(39), n(40);
	var r = function(e) {
		function t() {
			return null !== e && e.apply(this, arguments) || this
		}
		return __extends(t, e), t.prototype.createChildren = function() {
			e.prototype.createChildren.call(this), egret.lifecycle.addLifecycleListener(function(e) {}),
				egret.lifecycle.onPause = function() {
					egret.ticker.pause()
				}, egret.lifecycle.onResume = function() {
					egret.ticker.resume()
				};
			var t = new AssetAdapter;
			egret.registerImplementation("eui.IAssetAdapter", t), egret.registerImplementation(
				"eui.IThemeAdapter", new ThemeAdapter), this.runGame()["catch"](function(e) {
				console.log(e)
			})
		}, t.prototype.runGame = function() {
			return __awaiter(this, void 0, void 0, function() {
				var e;
				return __generator(this, function(t) {
					switch (t.label) {
						case 0:
							return gamebase.XGame.SetupEngine(), [4, this
							.loadResource()];
						case 1:
							return t.sent(), this.createGameScene(), [4, platform
								.getUserInfo()
							];
						case 2:
							return e = t.sent(), [2]
					}
				})
			})
		}, t.prototype.loadResource = function() {
			return __awaiter(this, void 0, void 0, function() {
				var e, t;
				return __generator(this, function(n) {
					switch (n.label) {
						case 0:
							return n.trys.push([0, 5, , 6]), [4, RES.loadConfig(
								"resource/default.res.json", "resource/")];
						case 1:
							return n.sent(), [4, RES.loadGroup("loading")];
						case 2:
							return n.sent(), e = new LoadingUI(this.stage.stageWidth,
								this.stage.stageHeight), this.stage.addChild(e), [4,
								this.loadTheme()
							];
						case 3:
							return n.sent(), [4, RES.loadGroup("preload", 0, e)];
						case 4:
							return n.sent(), this.stage.removeChild(e), [3, 6];
						case 5:
							return t = n.sent(), console.error(t), [3, 6];
						case 6:
							return [2]
					}
				})
			})
		}, t.prototype.loadTheme = function() {
			var e = this;
			return new Promise(function(t, n) {
				var r = new eui.Theme("resource/default.thm.json", e.stage);
				r.addEventListener(eui.UIEvent.COMPLETE, function(e) {
					t(e)
				}, e)
			})
		}, t.prototype.createGameScene = function() {
			gamebase.XGame.SceneMgr.rootLayer = this, gamebase.XGame.SceneMgr.ToScene(new magicguess
				.StartScene, {
					diLv: gamebase.DifficultyLevel.General.Lv
				})
		}, t
	}(eui.UILayer);
	window.Main = r, __reflect(r.prototype, "Main", [])
}, function(e, t) {
	var n = function() {
		function e() {}
		return e.prototype.getAsset = function(e, t, n) {
			function r(r) {
				t.call(n, r, e)
			}
			if (RES.hasRes(e)) {
				var o = RES.getRes(e);
				o ? r(o) : RES.getResAsync(e, r, this)
			} else RES.getResByUrl(e, r, this, RES.ResourceItem.TYPE_IMAGE)
		}, e
	}();
	window.AssetAdapter = n, __reflect(n.prototype, "AssetAdapter", ["eui.IAssetAdapter"])
}, function(e, t) {
	var n = function(e) {
		function t(t, n) {
			var r = e.call(this) || this;
			return r.width = t, r.height = n, r.createView(), r
		}
		return __extends(t, e), t.prototype.createView = function() {
			var e = this.createBitmapByName("shanpan_qietu_png");
			this.height > 1560 && (e.height = this.height, e.width = this.height / (1560 / 720)), e
				.anchorOffsetX = e.width / 2, e.x = this.width / 2, e.y = this.height - e.height, this
				.addChild(e);
			var t = this.createBitmapByName("naoli_dihui_png");
			this.addChild(t), t.width = 646, t.height = 5, t.x = (this.width - t.width) / 2, t.y = (this
					.height - t.height) / 2 + 100, this.progress_img = this.createBitmapByName(
					"naoli_guang_png"), this.addChild(this.progress_img), this.progress_img.scale9Grid =
				new egret.Rectangle(36, 2, 36, 1), this.progress_img.width = 50, this.progress_img
				.height = 5, this.progress_img.x = t.x, this.progress_img.y = (this.height - this
					.progress_img.height) / 2 + 100;
			var n = new egret.TextField;
			n.textColor = 10277102, n.textAlign = "center", n.text = "加载中，若长时间未进入，请选择菜单重新进入小程序..", n
				.size = 20, n.width = this.width, n.x = 0, n.y = (this.height - this.progress_img
					.height) / 2 + 120, this.addChild(n)
		}, t.prototype.onProgress = function(e, t, n) {
			this.progress_img.width = 646 * (e / t)
		}, t.prototype.createBitmapByName = function(e) {
			var t = new egret.Bitmap,
				n = RES.getRes(e);
			return t.texture = n, t
		}, t
	}(egret.Sprite);
	window.LoadingUI = n, __reflect(n.prototype, "LoadingUI", ["RES.PromiseTaskReporter"])
}, function(e, t) {
	var n = function() {
		function e() {}
		return e.prototype.login = function(e) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(e) {
						return [2, {
							account: "test2@163.com",
							password: "123456"
						}]
					})
				})
			}, e.prototype.getUserInfo = function() {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(e) {
						return [2, {
							nickName: "username"
						}]
					})
				})
			}, e.prototype.setUserCloudStorage = function(e) {
				return __awaiter(this, void 0, void 0, function() {
					return __generator(this, function(e) {
						return [2]
					})
				})
			}, e.prototype.shareAppMessage = function() {}, e.prototype.getLocation = function() {}, e
			.prototype.createUserInfoButton = function() {}, e.prototype.destroyUserInfoButton =
		function() {}, e
	}();
	window.DebugPlatform = n, __reflect(n.prototype, "DebugPlatform", ["Platform"]), window.platform || (window
		.platform = new n)
}, function(e, t) {
	var n = function() {
		function e() {}
		return e.prototype.getTheme = function(e, t, n, r) {
			function o(e) {
				t.call(r, e)
			}

			function i(t) {
				t.resItem.url == e && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, i,
					null), n.call(r))
			}
			var a = this;
			if ("undefined" != typeof generateEUI) egret.callLater(function() {
				t.call(r, generateEUI)
			}, this);
			else if ("undefined" != typeof generateEUI2) RES.getResByUrl("resource/gameEui.json",
				function(e, n) {
					window.JSONParseClass.setData(e), egret.callLater(function() {
						t.call(r, generateEUI2)
					}, a)
				}, this, RES.ResourceItem.TYPE_JSON);
			else if ("undefined" != typeof generateJSON)
				if (e.indexOf(".exml") > -1) {
					var s = e.split("/");
					s.pop();
					var c = s.join("/") + "_EUI.json";
					generateJSON.paths[e] ? egret.callLater(function() {
						t.call(r, generateJSON.paths[e])
					}, this) : RES.getResByUrl(c, function(n) {
						window.JSONParseClass.setData(n), egret.callLater(function() {
							t.call(r, generateJSON.paths[e])
						}, a)
					}, this, RES.ResourceItem.TYPE_JSON)
				} else egret.callLater(function() {
					t.call(r, generateJSON)
				}, this);
			else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, i, null), RES.getResByUrl(e, o,
				this, RES.ResourceItem.TYPE_TEXT)
		}, e
	}();
	window.ThemeAdapter = n, __reflect(n.prototype, "ThemeAdapter", ["eui.IThemeAdapter"])
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function() {
			function t() {}
			return t.SetupEngine = function() {
				this.EventMgr = new e.EventManager, this.DataMgr = new e.DataManager, this.SceneMgr =
					new e.SceneManager, this.SoundMgr = new e.SoundManager
			}, t
		}();
		e.XGame = t, __reflect(t.prototype, "gamebase.XGame", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		e.DimenEnum = {
			A: {
				name: "记忆力",
				nameen: "MemoryPower",
				icon1: "zjm_rk_icon2_png",
				icon2: "yx_icon_xxl_png"
			},
			B: {
				name: "专注力",
				nameen: "AbsorbedPower",
				icon1: "zjm_rk_icon5_png",
				icon2: "yx_icon_gcl_png"
			},
			C: {
				name: "敏捷力",
				nameen: "AgilityPower",
				icon1: "zjm_rk_icon4_png",
				icon2: "yx_icon_czl_png"
			},
			D: {
				name: "推理力",
				nameen: "ReasoningPower",
				icon1: "zjm_rk_icon3_png",
				icon2: "yx_icon_ljl_png"
			},
			E: {
				name: "空间力",
				nameen: "SpacePower",
				icon1: "zjm_rk_icon6_png",
				icon2: "yx_icon_kjl_png"
			},
			F: {
				name: "计算力",
				nameen: "CalculationPower",
				icon1: "zjm_rk_icon1_png",
				icon2: "yx_icon_jsl_png"
			}
		}
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		e.EventEnum = {
			Ticker_Parse: "Ticker_Parse",
			Ticker_Resume: "Ticker_Resume",
			UI_Login: "UI_Login",
			UI_LoginSuc: "UI_LoginSuc",
			SYS_LoginSuc: "SYS_LoginSuc",
			UI_Settlement: "UI_Settlement",
			KeyBoard_KeyDown: "KeyBoard_KeyDown",
			UI_CloseGame: "UI_CloseGame",
			UI_GameGoon: "UI_GameGoon",
			UI_BacktoHall: "UI_BacktoHall",
			UI_SaveArenaSuccess: "UI_SaveArenaSuccess"
		}
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		e.DifficultyLevel = {
			General: {
				Lv: 0,
				Name: "General",
				Desc: "L1"
			},
			Medium: {
				Lv: 1,
				Name: "Medium",
				Desc: "L2"
			},
			Difficulty: {
				Lv: 2,
				Name: "Difficulty",
				Desc: "L3"
			}
		}
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		e.PlayModeEnum = {
			NormalMode: 1,
			ChallengeMode: 2
		}
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		e.ProtocolEnum = {
			Login: "login",
			Settlement: "settlement",
			SaveArenaEsports: "savearena"
		}
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		e.SoundEnum = {
			BGM: "bgm_mp3",
			BgMusic: "bg_mp3",
			Click: "clickbutton_mp3",
			OpenScene: "openwindow_mp3",
			Result: "result_mp3",
			Timer: "timer_mp3",
			WillEnd: "willend_mp3",
			Right: "right_mp3",
			Wrong: "wrong_mp3",
			Close: "closebutton_mp3",
			KeyNumber: "keynumber_mp3",
			ClickArena: "clickarena_mp3",
			IngameClick: "ingameclick_mp3"
		}
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function() {
			function e() {
				this._data = {}, this.initData()
			}
			return e.prototype.initData = function() {
				this._data = {
					baseinfo: {
						bgswitch: 1,
						effectswitch: 1,
						bgvol: 1,
						effectvol: 1
					},
					roledata: {
						uid: "",
						rid: "",
						rn: "",
						sex: 0,
						hi: "",
						bd: "",
						rank: "",
						star: 0,
						abp: 0,
						agp: 0,
						cp: 0,
						mc: "0",
						mp: 0,
						rp: 0,
						sp: 0,
						bp: 0
					}
				}
			}, Object.defineProperty(e.prototype, "baseinfo", {
				get: function() {
					return this._data.baseinfo
				},
				set: function(e) {
					this._data.baseinfo = e, this.SaveData()
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "roledata", {
				get: function() {
					return this._data.roledata
				},
				set: function(e) {
					this._data.roledata = e, this.SaveData()
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.SaveData = function(e) {
				void 0 === e && (e = !1), egret.localStorage.setItem("global", JSON.stringify(this
					._data))
			}, e
		}();
		e.DataManager = t, __reflect(t.prototype, "gamebase.DataManager", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function(e) {
			function t() {
				return e.call(this) || this
			}
			return __extends(t, e), t
		}(egret.EventDispatcher);
		e.EventManager = t, __reflect(t.prototype, "gamebase.EventManager", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function() {
			function e() {
				this._sceneArray = [], this.MaxIndex = 0
			}
			return e.prototype.ToScene = function(e, t) {
				void 0 === t && (t = null), null != t && e.updateData(t);
				for (var n = 0; n < this._sceneArray.length; n++) this.rootLayer.removeChild(this
					._sceneArray[n]);
				this._sceneArray.length = 0, this._sceneArray.push(e), this.rootLayer.addChild(e), this
					.MaxIndex = e.zIndex, e.width = e.stage.stageWidth, e.height = e.stage.stageHeight,
					this.currentScene = e
			}, e.prototype.OpenScene = function(e, t) {
				void 0 === t && (t = null), null != t && e.updateData(t), this.rootLayer.addChild(e), e
					.width = e.stage.stageWidth, e.height = e.stage.stageHeight, this.MaxIndex = e
					.zIndex, this._sceneArray.push(e), this.currentScene = e
			}, e.prototype.CloseScene = function(e) {
				var t = this._sceneArray.lastIndexOf(e);
				t >= 0 && null != e && (this.rootLayer.removeChild(e), this._sceneArray.splice(t, 1))
			}, e.prototype.CloseSceneByName = function(e) {
				var t = this.FindScene(e);
				this.CloseScene(t)
			}, e.prototype.FindScene = function(e) {
				for (var t = this._sceneArray.length - 1; t >= 0; t--) {
					var n = this._sceneArray[t];
					if (n.SceneName == e) return n
				}
				return null
			}, e.prototype.SetTop = function(e) {
				var t = this.FindScene(e);
				t && (t.zIndex = this.MaxIndex + 1)
			}, e.prototype.openUniqueScene = function(e, t) {
				var n = this.FindScene(e.SceneName);
				return n ? (null != t && n.updateData(t), n.zIndex = this.MaxIndex + 1, void(this
					.currentScene = e)) : void this.OpenScene(e, t)
			}, e
		}();
		e.SceneManager = t, __reflect(t.prototype, "gamebase.SceneManager", []);
		var n = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t.onComplete, t), t
					.addEventListener(egret.Event.REMOVED_FROM_STAGE, t.onRemoveFromStage, t), t
			}
			return __extends(t, e), t
		}(eui.Component);
		e.Scene = n, __reflect(n.prototype, "gamebase.Scene", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function() {
			function t() {}
			return t.prototype.onEffectComplete = function(t) {
				this.curEffectSource == e.SoundEnum.WillEnd && (this.curEffectSource = "")
			}, t.prototype.PlayBgMusic = function(t) {
				this.BgSoundChannel && this.BgSoundChannel.stop(), 1 == e.XGame.DataMgr.baseinfo
					.bgswitch && (this.BgSound = RES.getRes(t), this.BgSoundChannel = this.BgSound
					.play(), this.BgSoundChannel.volume = e.XGame.DataMgr.baseinfo.bgvol)
			}, t.prototype.StopBgMusic = function() {
				this.BgSoundChannel && this.BgSoundChannel.stop()
			}, t.prototype.StopEffectMusic = function() {
				this.EffectSoundChannel && this.EffectSoundChannel.stop(), this.curEffectSource == e
					.SoundEnum.WillEnd && (this.curEffectSource = "")
			}, t.prototype.PlayEffect = function(t) {
				this.EffectSoundChannel && this.curEffectSource != e.SoundEnum.WillEnd && this
					.EffectSoundChannel.stop(), 1 == e.XGame.DataMgr.baseinfo.effectswitch && this
					.curEffectSource != e.SoundEnum.WillEnd && (this.EffectSound = RES.getRes(t), this
						.curEffectSource = t, this.EffectSoundChannel = this.EffectSound.play(0, 1),
						this.EffectSoundChannel.volume = e.XGame.DataMgr.baseinfo.effectvol, this
						.EffectSoundChannel.once(egret.Event.SOUND_COMPLETE, this.onEffectComplete,
							this))
			}, t
		}();
		e.SoundManager = t, __reflect(t.prototype, "gamebase.SoundManager", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function() {
			function e() {}
			return e
		}();
		e.Protocal = t, __reflect(t.prototype, "gamebase.Protocal", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function(t) {
			function n(e) {
				var n = t.call(this) || this;
				return n.SceneName = "GameHelpSkin", n.gameName = "", n.gameDesc = "", n.guideIndex = 0, n
					.gameId = e, n.skinName = "resource/eui_skins/global/GameHelpSkin.exml", n
			}
			return __extends(n, t), n.prototype.onComplete = function() {
				var e = this;
				this.img_tip.visible = !1, this.gp_desccontainer.visible = !1, this.gp_loading
					.visible = !0, this.img_prevstep = this.gp_prevstep.getChildAt(0), this
					.img_nextstep = this.gp_nextstep.getChildAt(0), this.img_prevstep.visible = !1, this
					.img_nextstep.visible = !1;
				var t = RES.getRes("newbieguide_json"),
					n = Object.keys(t),
					r = n.find(function(t) {
						return t.split("_")[0].toString() === "" + e.gameId
					});
				if (!r) throw Error("未能找到游戏ID [" + this.gameId + "] 的配置信息");
				for (var o in t) {
					var i = t[o];
					console.log(o.substr(o.lastIndexOf("_") + 1) + "\n"), console.log(i.map(function(
					e) {
						return e.Desc
					}).join("\n")), console.log("\n")
				}
				var a = r.split("_");
				if (this.gameName = a[1], this.gameDesc = a[2], this.gameGuide = t[r], !this.gameGuide)
					throw Error("加载游戏ID [" + this.gameId + "] 新手指南失败");
				this.lbl_gamename.text = this.gameDesc + " - 游戏演示", RES.loadGroup(this.gameName +
					"_guide").then(function() {
					e.gp_loading.parent.removeChild(e.gp_loading), e.img_prevstep.filters = [e
							.getColorFilter()
						], e.img_nextstep.filters = [], e.img_tip.visible = !0, e.img_prevstep
						.visible = !0, e.img_nextstep.visible = !0, e.gp_desccontainer
						.visible = !0, e.lbl_desc.text = "";
					for (var t = 0; t < e.gameGuide.length; t++) {
						var n = e.gameGuide[t];
						n.Source = n.Source.replace(/(.*)\./, "$1_")
					}
					e.guideIndex === e.gameGuide.length - 1 && (e.img_nextstep.filters = [e
							.getColorFilter()
						]), e.loadStep(), e.img_close.addEventListener(egret.TouchEvent
							.TOUCH_TAP, e.onCloseScene, e), e.gp_prevstep.addEventListener(egret
							.TouchEvent.TOUCH_TAP, e.onPrevStep, e), e.gp_nextstep
						.addEventListener(egret.TouchEvent.TOUCH_TAP, e.onNextStep, e)
				});
				var s = RES.getRes("loading_json"),
					c = RES.getRes("loading_png"),
					u = new egret.MovieClipDataFactory(s, c),
					h = new egret.MovieClip(u.generateMovieClipData("loading"));
				h.anchorOffsetX = 153, h.anchorOffsetY = 165, h.x = this.stage.stageWidth / 2, h.y =
					this.stage.stageHeight / 2, this.gp_loading.removeChildren(), this.gp_loading
					.addChild(h), h.gotoAndPlay("jump", -1)
			}, n.prototype.onRemoveFromStage = function(e) {
				this.img_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseScene, this),
					this.gp_prevstep.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onPrevStep,
						this), this.gp_nextstep.removeEventListener(egret.TouchEvent.TOUCH_TAP, this
						.onNextStep, this)
			}, n.prototype.updateData = function(e) {}, n.prototype.onPrevStep = function() {
				0 !== this.guideIndex && (this.img_nextstep.filters.length > 0 && (this.img_nextstep
					.filters = []), this.guideIndex--, 0 === this.guideIndex && (this
					.img_prevstep.filters = [this.getColorFilter()]), this.loadStep())
			}, n.prototype.onNextStep = function() {
				this.guideIndex !== this.gameGuide.length - 1 && (this.img_prevstep.filters.length >
					0 && (this.img_prevstep.filters = []), this.guideIndex++, this.guideIndex ===
					this.gameGuide.length - 1 && (this.img_nextstep.filters = [this
					.getColorFilter()]), this.loadStep())
			}, n.prototype.loadStep = function() {
				var e = this.gameGuide[this.guideIndex];
				this.lbl_desc.text = e.Desc, this.img_step.source = e.Source
			}, n.prototype.getColorFilter = function() {
				var e = [.3, .6, 0, 0, 0, .3, .6, 0, 0, 0, .3, .6, 0, 0, 0, 0, 0, 0, 1, 0],
					t = new egret.ColorMatrixFilter(e);
				return t
			}, n.prototype.onCloseScene = function() {
				e.XGame.SceneMgr.CloseScene(this), RES.destroyRes(this.gameName)
			}, n
		}(e.Scene);
		e.GameHelp = t, __reflect(t.prototype, "gamebase.GameHelp", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function(t) {
			function n() {
				var e = t.call(this) || this;
				return e.gameName = "", e.score = 0, e.progressText = "", e.progressCurrent = 0, e
					.progressTotal = 0, e.levelName = "", e.levelMaxScore = 0, e.addEventListener(eui
						.UIEvent.REMOVED_FROM_STAGE, e.onRemoveFromStage, e), e.skinName =
					"resource/eui_skins/global/GameMenuSkin.exml", e
			}
			return __extends(n, t), n.prototype.createChildren = function() {
				t.prototype.createChildren.call(this), this.init(), this.img_menu.addEventListener(egret
					.TouchEvent.TOUCH_TAP, this.CloseGame, this)
			}, Object.defineProperty(n.prototype, "GameName", {
				get: function() {
					return this.gameName
				},
				set: function(e) {
					this.gameName = e, this.lbl_gamename.text = this.GameName
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(n.prototype, "Score", {
				get: function() {
					return this.score
				},
				set: function(e) {
					this.score = e, this.lbl_score.text = "" + this.score
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(n.prototype, "LevelMaxScore", {
				get: function() {
					return this.levelMaxScore
				},
				set: function(e) {
					this.levelMaxScore = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(n.prototype, "ProgressText", {
				get: function() {
					return this.ProgressText
				},
				set: function(e) {
					this.progressText = e, this.lbl_progress.text = this.progressText
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(n.prototype, "ProgressCurrent", {
				get: function() {
					return this.progressCurrent
				},
				set: function(e) {
					this.progressCurrent = e, this.img_progress.width = this.progressCurrent /
						this.progressTotal * 297
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(n.prototype, "ProgressTotal", {
				get: function() {
					return this.progressTotal
				},
				set: function(e) {
					this.progressTotal = e, this.img_progress.width = this.progressCurrent /
						this.progressTotal * 297
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(n.prototype, "LevelName", {
				get: function() {
					return this.levelName
				},
				set: function(e) {
					this.levelName = e, this.lbl_level.text = e
				},
				enumerable: !1,
				configurable: !0
			}), n.prototype.init = function() {
				this.lbl_gamename.text = this.gameName, this.lbl_score.text = "" + this.score, this
					.lbl_progress.text = this.progressText, this.lbl_level.text = this.levelName, this
					.img_progress.width = this.progressCurrent / this.progressTotal * 297
			}, n.prototype.AddScore = function(e, t, n) {
				var r = this;
				this.score != this.levelMaxScore && (this.levelMaxScore > 0 && this.score + e > this
					.levelMaxScore ? this.score = this.levelMaxScore : this.score += e, t ? t.bind(
						n) : (egret.Tween.removeTweens(this.lbl_addscore), this.lbl_addscore.text =
						"+" + e.toFixed(2), this.lbl_addscore.alpha = 1, this.lbl_addscore
						.visible = !0, this.lbl_addscore.y = 150, egret.Tween.get(this.lbl_addscore)
						.to({
							y: 25,
							alpha: .5
						}, 500).call(function() {
							r.lbl_addscore.visible = !1, r.lbl_addscore.y = 150, r.lbl_addscore
								.alpha = 1
						}, this)), this.lbl_score.text = "" + this.score.toFixed(2))
			}, n.prototype.SubtractScore = function(e, t, n) {
				var r = this;
				0 != this.score && (this.score - e < 0 ? this.score = 0 : this.score -= e, t ? t().bind(
					n) : (egret.Tween.removeTweens(this.lbl_addscore), this.lbl_addscore.text =
					"-" + e, this.lbl_addscore.alpha = 1, this.lbl_addscore.visible = !0, this
					.lbl_addscore.y = 150, egret.Tween.get(this.lbl_addscore).to({
						y: 25,
						alpha: .5
					}, 500).call(function() {
						r.lbl_addscore.visible = !1, r.lbl_addscore.y = 150, r.lbl_addscore
							.alpha = 1
					}, this)), this.lbl_score.text = "" + this.score)
			}, n.prototype.onRemoveFromStage = function() {
				egret.Tween.removeTweens(this.lbl_addscore)
			}, n.prototype.CloseGame = function() {
				e.XGame.SceneMgr.ToScene(new magicguess.StartScene, {})
			}, n
		}(eui.Component);
		e.GameMenu = t, __reflect(t.prototype, "gamebase.GameMenu", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function(e) {
			function t() {
				var t = e.call(this) || this;
				return t.addEventListener(eui.UIEvent.COMPLETE, t.onComplete, t), t.addEventListener(eui
						.UIEvent.REMOVED_FROM_STAGE, t.onRemoveFromStage, t), t.skinName =
					"resource/eui_skins/global/KeyBoardSkin.exml", t
			}
			return __extends(t, e), t.prototype.createChildren = function() {
				e.prototype.createChildren.call(this);
				for (var t = 0; t < this.gp_number.$children.length; t++) {
					var n = this.gp_number.$children[t];
					n.addEventListener(egret.TouchEvent.TOUCH_TAP, this.NumberTouch, this), n
						.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.NumberTouchBegin, this), n
						.addEventListener(egret.TouchEvent.TOUCH_END, this.NumberTouchEnd, this)
				}
				this.btn_del.addEventListener(egret.TouchEvent.TOUCH_TAP, this.DelTouch, this), this
					.btn_del.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.NumberTouchBegin,
					this), this.btn_del.addEventListener(egret.TouchEvent.TOUCH_END, this
						.NumberTouchEnd, this), this.btn_ok.addEventListener(egret.TouchEvent
						.TOUCH_BEGIN, this.NumberTouchBegin, this), this.btn_ok.addEventListener(egret
						.TouchEvent.TOUCH_END, this.NumberTouchEnd, this)
			}, t.prototype.onComplete = function() {}, t.prototype.GetInputValue = function() {
				return this.lbl_input.text
			}, t.prototype.Reset = function() {
				this.lbl_input.text = ""
			}, t.prototype.onRemoveFromStage = function() {
				for (var e = 0; e < this.gp_number.$children.length; e++) {
					var t = this.gp_number.$children[e];
					t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.NumberTouch, this), t
						.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.NumberTouchBegin, this),
						t.removeEventListener(egret.TouchEvent.TOUCH_END, this.NumberTouchEnd, this)
				}
				this.btn_del.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.DelTouch, this), this
					.btn_del.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.NumberTouchBegin,
						this), this.btn_del.removeEventListener(egret.TouchEvent.TOUCH_END, this
						.NumberTouchEnd, this), this.btn_ok.removeEventListener(egret.TouchEvent
						.TOUCH_BEGIN, this.NumberTouchBegin, this), this.btn_ok.removeEventListener(
						egret.TouchEvent.TOUCH_END, this.NumberTouchEnd, this)
			}, t.prototype.DelTouch = function() {
				if ("" != this.lbl_input.text) {
					var e = this.lbl_input.text;
					e = e.substring(0, e.length - 1), this.lbl_input.text = e
				}
			}, t.prototype.BindConfirmEvent = function(e, t) {
				this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP, e, t)
			}, t.prototype.unBindConfirmEvent = function(e, t) {
				this.btn_ok.removeEventListener(egret.TouchEvent.TOUCH_TAP, e, t)
			}, t.prototype.NumberTouchBegin = function(e) {
				var t = e.target;
				t.$children[0].scaleX = .9, t.$children[0].scaleY = .9
			}, t.prototype.NumberTouchEnd = function(e) {
				var t = e.target;
				t.$children[0].scaleX = 1, t.$children[0].scaleY = 1
			}, t.prototype.Lock = function() {
				this.gp_keyboard.touchChildren = !1
			}, t.prototype.UnLock = function() {
				this.gp_keyboard.touchChildren = !0
			}, t.prototype.NumberTouch = function(e) {
				if (!(this.lbl_input.text.length > 5)) {
					var t = e.target,
						n = Number(t.name.split("_")[1]);
					this.lbl_input.text += n.toString()
				}
			}, t
		}(eui.Component);
		e.KeyBoard = t, __reflect(t.prototype, "gamebase.KeyBoard", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function(t) {
			function n() {
				var e = t.call(this) || this;
				return e.KeyBoardValue = "", e.addEventListener(eui.UIEvent.COMPLETE, e.onComplete, e), e
					.addEventListener(eui.UIEvent.REMOVED_FROM_STAGE, e.onRemoveFromStage, e), e.skinName =
					"resource/eui_skins/global/KeyBoardPlusSkin.exml", e
			}
			return __extends(n, t), n.prototype.createChildren = function() {
				t.prototype.createChildren.call(this);
				for (var e = 0; e < this.gp_number.$children.length; e++) {
					var n = this.gp_number.$children[e];
					n.addEventListener(egret.TouchEvent.TOUCH_TAP, this.NumberTouch, this), n
						.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.NumberTouchBegin, this), n
						.addEventListener(egret.TouchEvent.TOUCH_END, this.NumberTouchEnd, this)
				}
				this.btn_del.addEventListener(egret.TouchEvent.TOUCH_TAP, this.DelTouch, this), this
					.btn_del.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.NumberTouchBegin,
					this), this.btn_del.addEventListener(egret.TouchEvent.TOUCH_END, this
						.NumberTouchEnd, this), this.btn_point.addEventListener(egret.TouchEvent
						.TOUCH_TAP, this.PointTouch, this), this.btn_point.addEventListener(egret
						.TouchEvent.TOUCH_BEGIN, this.NumberTouchBegin, this), this.btn_point
					.addEventListener(egret.TouchEvent.TOUCH_END, this.NumberTouchEnd, this), this
					.btn_ok.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.NumberTouchBegin, this),
					this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_END, this.NumberTouchEnd, this)
			}, n.prototype.PlayEffect = function(t) {
				e.XGame.SoundMgr.PlayEffect(e.SoundEnum.Click)
			}, n.prototype.onComplete = function() {}, n.prototype.GetInputValue = function() {
				return "" == this.KeyBoardValue ? "" : this.KeyBoardValue
			}, n.prototype.Reset = function() {
				this.KeyBoardValue = "", e.XGame.EventMgr.dispatchEventWith(e.EventEnum
					.KeyBoard_KeyDown, !1, {
						text: this.KeyBoardValue
					}, !1)
			}, n.prototype.onRemoveFromStage = function() {
				for (var e = 0; e < this.gp_number.$children.length; e++) {
					var t = this.gp_number.$children[e];
					t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.NumberTouch, this), t
						.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.NumberTouchBegin, this),
						t.removeEventListener(egret.TouchEvent.TOUCH_END, this.NumberTouchEnd, this)
				}
				this.btn_del.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.DelTouch, this), this
					.btn_del.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.NumberTouchBegin,
						this), this.btn_del.removeEventListener(egret.TouchEvent.TOUCH_END, this
						.NumberTouchEnd, this), this.btn_point.addEventListener(egret.TouchEvent
						.TOUCH_TAP, this.PointTouch, this), this.btn_point.removeEventListener(egret
						.TouchEvent.TOUCH_BEGIN, this.NumberTouchBegin, this), this.btn_point
					.removeEventListener(egret.TouchEvent.TOUCH_END, this.NumberTouchEnd, this), this
					.btn_ok.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.NumberTouchBegin,
						this), this.btn_ok.removeEventListener(egret.TouchEvent.TOUCH_END, this
						.NumberTouchEnd, this)
			}, n.prototype.DelTouch = function() {
				if (e.XGame.SoundMgr.PlayEffect(e.SoundEnum.Click), "" != this.KeyBoardValue) {
					var t = this.KeyBoardValue;
					t = t.substring(0, t.length - 1), this.KeyBoardValue = t, e.XGame.EventMgr
						.dispatchEventWith(e.EventEnum.KeyBoard_KeyDown, !1, {
							text: this.KeyBoardValue
						}, !1)
				}
			}, n.prototype.PointTouch = function() {
				e.XGame.SoundMgr.PlayEffect(e.SoundEnum.Click), this.KeyBoardValue.lastIndexOf(".") >=
					0 || "" == this.KeyBoardValue || (this.KeyBoardValue += ".", e.XGame.EventMgr
						.dispatchEventWith(e.EventEnum.KeyBoard_KeyDown, !1, {
							text: this.KeyBoardValue
						}, !1))
			}, n.prototype.MinusTouch = function() {
				e.XGame.SoundMgr.PlayEffect(e.SoundEnum.Click), this.KeyBoardValue.length > 0 || (this
					.KeyBoardValue += "-", e.XGame.EventMgr.dispatchEventWith(e.EventEnum
						.KeyBoard_KeyDown, !1, {
							text: this.KeyBoardValue
						}, !1))
			}, n.prototype.BindConfirmEvent = function(e, t) {
				this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP, this.PlayEffect, this), this
					.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP, e, t)
			}, n.prototype.unBindConfirmEvent = function(e, t) {
				this.btn_ok.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.PlayEffect, this), this
					.btn_ok.removeEventListener(egret.TouchEvent.TOUCH_TAP, e, t)
			}, n.prototype.NumberTouchBegin = function(e) {
				var t = e.target;
				t.$children[0].scaleX = .9, t.$children[0].scaleY = .9
			}, n.prototype.NumberTouchEnd = function(e) {
				var t = e.target;
				t.$children[0].scaleX = 1, t.$children[0].scaleY = 1
			}, n.prototype.Lock = function() {
				this.gp_keyboard.alpha = .3, this.gp_keyboard.touchChildren = !1
			}, n.prototype.UnLock = function() {
				this.gp_keyboard.alpha = 1, this.gp_keyboard.touchChildren = !0
			}, n.prototype.NumberTouch = function(t) {
				if (e.XGame.SoundMgr.PlayEffect(e.SoundEnum.KeyNumber), !(this.KeyBoardValue.length >
					6)) {
					var n = t.target,
						r = Number(n.name.split("_")[1]);
					this.KeyBoardValue += r.toString(), e.XGame.EventMgr.dispatchEventWith(e.EventEnum
						.KeyBoard_KeyDown, !1, {
							text: this.KeyBoardValue
						}, !1)
				}
			}, n
		}(eui.Component);
		e.KeyBoardPlus = t, __reflect(t.prototype, "gamebase.KeyBoardPlus", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function(t) {
			function n() {
				var e = t.call(this) || this;
				return e.SceneName = "ResultScene", e.skinName =
					"resource/eui_skins/global/ResultSceneSkin.exml", e
			}
			return __extends(n, t), n.prototype.onComplete = function() {
				this.initEvent(), egret.Tween.get(this.img_title).to({
					scaleX: 1,
					scaleY: 1
				}, 300), egret.Tween.get(this.gp_result).wait(300).to({
					horizontalCenter: 0
				}, 300)
			}, n.prototype.onRemoveFromStage = function(e) {
				this.removeEvent()
			}, n.prototype.updateData = function(e) {
				this.param = e, this.UpdataView()
			}, n.prototype.UpdataView = function() {
				this.lbl_score.text = this.param.score.toFixed(2) + " 分"
			}, n.prototype.initEvent = function() {
				this.btn_goon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ContinueGame, this)
			}, n.prototype.removeEvent = function() {
				this.btn_goon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ContinueGame, this)
			}, n.prototype.ContinueGame = function() {
				e.XGame.SceneMgr.ToScene(new magicguess.StartScene, {})
			}, n
		}(e.Scene);
		e.ResultScene = t, __reflect(t.prototype, "gamebase.ResultScene", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function() {
			function e() {}
			return e.PowerFilter = function() {
				var e = 3394815,
					t = .7,
					n = 50,
					r = 50,
					o = 4,
					i = 3,
					a = !1,
					s = !1,
					c = new egret.GlowFilter(e, t, n, r, o, i, a, s);
				return c
			}, e
		}();
		e.GrowFilters = t, __reflect(t.prototype, "gamebase.GrowFilters", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function() {
			function e() {}
			return e.BetweenTwoPoint = function(e, t, n) {
				var r = (t.y - e.y) / (t.x - e.x),
					o = Math.sin(Math.atan(r)),
					i = Math.cos(Math.atan(r)),
					a = Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y)),
					s = new egret.Point;
				return e.x == t.x && t.y < e.y ? (s.x = e.x, s.y = e.y - n * a) : e.x < t.x && e.y > t
					.y ? (s.x = e.x + i * n * a, s.y = e.y + o * n * a) : e.x < t.x && e.y > t.y ? (s
						.x = e.x + n * a, s.y = e.y) : e.x < t.x && e.y < t.y ? (s.x = e.x + i * n * a,
						s.y = e.y + o * n * a) : e.x == t.x && e.y < t.y ? (s.x = e.x, s.y = e.y + n *
						a) : e.x > t.x && e.y < t.y ? (s.x = e.x - i * n * a, s.y = e.y - o * n * a) : e
					.x > t.x && e.y == t.y ? (s.x = e.x + i * n * a, s.y = e.y + o * n * a) : e.x > t
					.x && e.y > t.y && (s.x = e.x - i * n * a, s.y = e.y - o * n * a), s
			}, e
		}();
		e.MathBase = t, __reflect(t.prototype, "gamebase.MathBase", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function() {
			function e() {
				this.pool = {}
			}
			return e.prototype.pop = function(e) {
				for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				null == this.pool[e] && (this.pool[e] = []);
				var r = this.pool[e];
				if (r.length > 0) return r.pop();
				var o, i = t.length,
					a = egret.getDefinitionByName(e);
				switch (i) {
					case 0:
						o = new a;
						break;
					case 1:
						o = new a(t[0]);
						break;
					case 2:
						o = new a(t[0], t[1]);
						break;
					case 3:
						o = new a(t[0], t[1], t[2]);
						break;
					case 4:
						o = new a(t[0], t[1], t[2], t[3]);
						break;
					case 5:
						o = new a(t[0], t[1], t[2], t[3], t[4])
				}
				return o.className = e, o
			}, e.prototype.push = function(e) {
				var t = e.className;
				return null == this.pool[t] ? void console.log("回收对象的数组不存在") : void this.pool[t].push(e)
			}, e.prototype.create = function(e, t) {
				for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
				for (var o = [], i = 0; t > i; i++) o.push(this.pop.apply(this, __spreadArrays([e],
				n)));
				for (i = 0; t > i; i++) this.push(o.pop())
			}, e.prototype.getLen = function(e) {
				return this.pool[e] ? this.pool[e].length : 0
			}, e.prototype.clear = function(e, t) {
				void 0 === t && (t = null), this.pool[e] && (t && this.dealFun(e, t), this.pool[e] =
					null, delete this.pool[e])
			}, e.prototype.dealFun = function(e, t) {
				if (this.pool[e])
					for (var n = this.pool[e], r = n.length, o = 0; r > o; o++) n[o][t] && n[o][t]()
			}, e
		}();
		e.objectPool = t, __reflect(t.prototype, "gamebase.objectPool", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function() {
			function e(e) {
				this.seed = e, this.seed || 0 == this.seed || (this.seed = (new Date).getTime())
			}
			return Object.defineProperty(e.prototype, "value", {
				get: function() {
					return this.range(0, 1)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "insideUnitCircle", {
				get: function() {
					var e = this.range(0, 360),
						t = this.range(0, 1),
						n = t * Math.cos(e * Math.PI / 180),
						r = t * Math.sin(e * Math.PI / 180);
					return new egret.Point(n, r)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onUnitCircle", {
				get: function() {
					var e = this.range(0, 360),
						t = Math.cos(e * Math.PI / 180),
						n = Math.sin(e * Math.PI / 180);
					return new egret.Point(t, n)
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.range = function(e, t) {
				this.seed || 0 == this.seed || (this.seed = (new Date).getTime()), t = t || 1, e = e ||
					0, this.seed = (9301 * this.seed + 49297) % 233280;
				var n = this.seed / 233280;
				return e + n * (t - e)
			}, Object.defineProperty(e, "value", {
				get: function() {
					return this.range(0, 1)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e, "insideUnitCircle", {
				get: function() {
					var e = this.range(0, 360),
						t = this.range(0, 1),
						n = t * Math.cos(e * Math.PI / 180),
						r = t * Math.sin(e * Math.PI / 180);
					return new egret.Point(n, r)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e, "onUnitCircle", {
				get: function() {
					var e = this.range(0, 360),
						t = Math.cos(e * Math.PI / 180),
						n = Math.sin(e * Math.PI / 180);
					return new egret.Point(t, n)
				},
				enumerable: !1,
				configurable: !0
			}), e.range = function(e, t) {
				this.seed || 0 == this.seed || (this.seed = (new Date).getTime()), t = t || 1, e = e ||
					0, this.seed = (9301 * this.seed + 49297) % 233280;
				var n = this.seed / 233280;
				return e + n * (t - e)
			}, e.GetArray = function(e, t, n) {
				for (var r = new Array; r.length < n;) {
					var o = Math.round(this.range(e, t));
					r.lastIndexOf(o) < 0 && r.push(o)
				}
				return r
			}, e.GetDiffenence = function(e, t, n) {
				for (var r = "";
					"" == r || Number(r) == n;) {
					var o = Math.round(this.range(e, t));
					r = o.toString()
				}
				return r
			}, e
		}();
		e.Random = t, __reflect(t.prototype, "gamebase.Random", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.gamebase;
	! function(e) {
		var t = function() {
			function e() {
				this.delta = 2654435769
			}
			return e.getInstance = function() {
				return e.instance || (e.instance = new e, e.instance.initInstance()), this.instance
			}, e.prototype.initInstance = function() {}, e.prototype.toUint8Array = function(e, t) {
				var n = e.length,
					r = n << 2;
				if (t) {
					var o = e[n - 1];
					if (r -= 4, r - 3 > o || o > r) return null;
					r = o
				}
				for (var i = new Uint8Array(r), a = 0; r > a; ++a) i[a] = e[a >> 2] >> ((3 & a) << 3);
				return i
			}, e.prototype.toUint32Array = function(e, t) {
				var n = e.length,
					r = n >> 2;
				0 !== (3 & n) && ++r;
				var o;
				t ? (o = new Uint32Array(r + 1), o[r] = n) : o = new Uint32Array(r);
				for (var i = 0; n > i; ++i) o[i >> 2] |= e[i] << ((3 & i) << 3);
				return o
			}, e.prototype.mx = function(e, t, n, r, o, i) {
				return (n >>> 5 ^ t << 2) + (t >>> 3 ^ n << 4) ^ (e ^ t) + (i[3 & r ^ o] ^ n)
			}, e.prototype.fixk = function(e) {
				if (e.length < 16) {
					var t = new Uint8Array(16);
					t.set(e), e = t
				}
				return e
			}, e.prototype.encryptUint32Array = function(e, t) {
				var n, r, o, i, a, s, c = e.length,
					u = c - 1;
				for (r = e[u], o = 0, s = 0 | Math.floor(6 + 52 / c); s > 0; --s) {
					for (o += this.delta, i = o >>> 2 & 3, a = 0; u > a; ++a) n = e[a + 1], r = e[a] +=
						this.mx(o, n, r, a, i, t);
					n = e[0], r = e[u] += this.mx(o, n, r, a, i, t)
				}
				return e
			}, e.prototype.decryptUint32Array = function(e, t) {
				var n, r, o, i, a, s, c = e.length,
					u = c - 1;
				for (n = e[0], s = Math.floor(6 + 52 / c), o = s * this.delta; 0 !== o; o -= this
					.delta) {
					for (i = o >>> 2 & 3, a = u; a > 0; --a) r = e[a - 1], n = e[a] -= this.mx(o, n, r,
						a, i, t);
					r = e[u], n = e[0] -= this.mx(o, n, r, a, i, t)
				}
				return e
			}, e.prototype.toBytes = function(e) {
				for (var t = e.length, n = new Uint8Array(3 * t), r = 0, o = 0; t > o; o++) {
					var i = e.charCodeAt(o);
					if (128 > i) n[r++] = i;
					else if (2048 > i) n[r++] = 192 | i >> 6, n[r++] = 128 | 63 & i;
					else {
						if (!(55296 > i || i > 57343)) {
							if (t > o + 1) {
								var a = e.charCodeAt(o + 1);
								if (56320 > i && a >= 56320 && 57343 >= a) {
									var s = ((1023 & i) << 10 | 1023 & a) + 65536;
									n[r++] = 240 | s >> 18, n[r++] = 128 | s >> 12 & 63, n[r++] = 128 |
										s >> 6 & 63, n[r++] = 128 | 63 & s, o++;
									continue
								}
							}
							throw new Error("Malformed string")
						}
						n[r++] = 224 | i >> 12, n[r++] = 128 | i >> 6 & 63, n[r++] = 128 | 63 & i
					}
				}
				return n.subarray(0, r)
			}, e.prototype.toShortString = function(e, t) {
				for (var n = new Uint16Array(t), r = 0, o = 0, i = e.length; t > r && i > o; r++) {
					var a = e[o++];
					switch (a >> 4) {
						case 0:
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
						case 6:
						case 7:
							n[r] = a;
							break;
						case 12:
						case 13:
							if (!(i > o)) throw new Error("Unfinished UTF-8 octet sequence");
							n[r] = (31 & a) << 6 | 63 & e[o++];
							break;
						case 14:
							if (!(i > o + 1)) throw new Error("Unfinished UTF-8 octet sequence");
							n[r] = (15 & a) << 12 | (63 & e[o++]) << 6 | 63 & e[o++];
							break;
						case 15:
							if (!(i > o + 2)) throw new Error("Unfinished UTF-8 octet sequence");
							var s = ((7 & a) << 18 | (63 & e[o++]) << 12 | (63 & e[o++]) << 6 | 63 & e[
								o++]) - 65536;
							if (!(s >= 0 && 1048575 >= s)) throw new Error(
								"Character outside valid Unicode range: 0x" + s.toString(16));
							n[r++] = s >> 10 & 1023 | 55296, n[r] = 1023 & s | 56320;
							break;
						default:
							throw new Error("Bad UTF-8 encoding 0x" + a.toString(16))
					}
				}
				return t > r && (n = n.subarray(0, r)), String.fromCharCode.apply(String, n)
			}, e.prototype.toLongString = function(e, t) {
				for (var n = [], r = new Uint16Array(65535), o = 0, i = 0, a = e.length; t > o && a >
					i; o++) {
					var s = e[i++];
					switch (s >> 4) {
						case 0:
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
						case 6:
						case 7:
							r[o] = s;
							break;
						case 12:
						case 13:
							if (!(a > i)) throw new Error("Unfinished UTF-8 octet sequence");
							r[o] = (31 & s) << 6 | 63 & e[i++];
							break;
						case 14:
							if (!(a > i + 1)) throw new Error("Unfinished UTF-8 octet sequence");
							r[o] = (15 & s) << 12 | (63 & e[i++]) << 6 | 63 & e[i++];
							break;
						case 15:
							if (!(a > i + 2)) throw new Error("Unfinished UTF-8 octet sequence");
							var c = ((7 & s) << 18 | (63 & e[i++]) << 12 | (63 & e[i++]) << 6 | 63 & e[
								i++]) - 65536;
							if (!(c >= 0 && 1048575 >= c)) throw new Error(
								"Character outside valid Unicode range: 0x" + c.toString(16));
							r[o++] = c >> 10 & 1023 | 55296, r[o] = 1023 & c | 56320;
							break;
						default:
							throw new Error("Bad UTF-8 encoding 0x" + s.toString(16))
					}
					if (o >= 65534) {
						var u = o + 1;
						n.push(String.fromCharCode.apply(String, r.subarray(0, u))), t -= u, o = -1
					}
				}
				return o > 0 && n.push(String.fromCharCode.apply(String, r.subarray(0, o))), n.join("")
			}, e.prototype.toString = function(e) {
				var t = e.length;
				return 0 === t ? "" : 1e5 > t ? this.toShortString(e, t) : this.toLongString(e, t)
			}, e.prototype.encrypt = function(e, t) {
				return "string" == typeof e && (e = this.toBytes(e)), "string" == typeof t && (t = this
						.toBytes(t)), void 0 === e || null === e || 0 === e.length ? e : this
					.toUint8Array(this.encryptUint32Array(this.toUint32Array(e, !0), this.toUint32Array(
						this.fixk(t), !1)), !1)
			}, e.prototype.encryptToString = function(e, t) {
				return this.encrypt(e, t).toString("base64")
			}, e.prototype.decrypt = function(e, t) {
				return "string" == typeof e && (e = e.toString()), "string" == typeof t && (t = this
						.toBytes(t)), void 0 === e || null === e || 0 === e.length ? e : this
					.toUint8Array(this.decryptUint32Array(this.toUint32Array(e, !1), this.toUint32Array(
						this.fixk(t), !1)), !0)
			}, e.prototype.decryptToString = function(e, t) {
				return this.toString(this.decrypt(e, t))
			}, e
		}();
		e.xxtea = t, __reflect(t.prototype, "gamebase.xxtea", [])
	}(n || (n = {})), window.gamebase = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		var t = function() {
			function t() {}
			return t.SetupEngine = function() {
				this.DataMgr = new e.DataManager
			}, t
		}();
		e.XGame = t, __reflect(t.prototype, "magicguess.XGame", [])
	}(n || (n = {})), window.magicguess = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		e.GameConst = {
			DataKey: "magicguess",
			ResEncryptKey: "H6^ytzol*862#ajx",
			TotalCardLowerLimit: 4,
			TotalCardUpperLimit: 6,
			EachOptionCardUpperLimit: 10,
			SingleCardTimeUpperLimit: 30,
			MaskCardSource: "mfccc_bg_mask_png",
			EmptyCardSource: "mfccc_empty_card_png",
			UseExistingActualQuesCardCount: !0
		}
	}(n || (n = {})), window.magicguess = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		e.GetValueTypeEnum = {
			None: -1,
			Random: 0,
			GivenRange: 1
		}
	}(n || (n = {})), window.magicguess = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		e.OptionTypeEnum = {
			None: -1,
			Answer: 0,
			Disturb: 1
		}
	}(n || (n = {})), window.magicguess = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		var t = function() {
			function t() {
				this._data = {}, this.initData()
			}
			return t.prototype.initData = function() {
				this._data = {}
			}, t.prototype.SaveData = function(t) {
				void 0 === t && (t = !1), egret.localStorage.setItem(e.GameConst.DataKey, JSON
					.stringify(this._data))
			}, t
		}();
		e.DataManager = t, __reflect(t.prototype, "magicguess.DataManager", [])
	}(n || (n = {})), window.magicguess = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		var t = function() {
			function t() {
				this.allCards = [], this.QuesCards = [], this.OptionCards = [], this.initData()
			}
			return t.prototype.initData = function() {
				var e = RES.getRes("magicguess.config_json");
				console.log("%c布局数据", "color: black", e), this.Layouts = e.Layouts;
				var t = 100;
				this.allCards = e.Cards.map(function(e) {
					return e.Id = t.toString(), e.Source = e.Source.replace(/(.*)\./, "$1_"),
						t++, e
				})
			}, t.prototype.updateConfig = function(e) {
				this.cfg = e
			}, t.prototype.GenerateQuestion = function() {
				if (!this.allCards.length) throw new Error("未定义卡片");
				this.resetData();
				for (var t, n = Array.from(new Array(this.cfg.TotalCardCount), function(e, t) {
							return t
						}), r = e.common.getIntRandom(this.cfg.QuesCardMinCount, this.cfg
							.TotalCardCount), o = this.cfg.TotalCardCount - r, i = e.ArrayHelper
						.GetRandomArrayElements(this.allCards, r), a = 0; a < i.length; a++) t = new e
					.Card, Object.assign(t, i[a]), t.GridIndex = e.ArrayHelper.GetRandomElement(n), this
					.QuesCards.push(t), e.ArrayHelper.Remove(n, t.GridIndex);
				for (var a = 0; o > a; a++) t = new e.Card, t.Source = e.GameConst.EmptyCardSource, t
					.Desc = "空卡片", t.GridIndex = e.ArrayHelper.GetRandomElement(n), this.QuesCards.push(
						t), e.ArrayHelper.Remove(n, t.GridIndex);
				this.QuesCards.sort(function(e, t) {
					return e.GridIndex - t.GridIndex
				});
				var s = this.QuesCards.filter(function(e) {
					return "空卡片" !== e.Desc
				});
				console.log("所有的卡片选项", this.QuesCards, "排除空卡片后的选项", s);
				for (var c, u, h = 1, a = 0; a < s.length; a++) {
					c = s[a], h = e.common.getIntRandom(1, this.cfg.EachOptionCardMaxCount);
					for (var l = 0; h > l; l++) u = e.common.deepClone(c), this.OptionCards.push(u)
				}
				this.OptionCards = e.common.randomArray(this.OptionCards), console.groupCollapsed(
						"%c选项卡片(按分布顺序，从上到下，从左到右)，共" + this.QuesCards.length + "个", "color: black"), this
					.QuesCards.forEach(function(e, t) {
						console.log(t + ". " + e.Desc + "(Id: " + e.Id + "，位置: " + e.GridIndex +
							")")
					}), console.groupEnd(), console.groupCollapsed("%c题目卡片(按出题顺序)，共" + this.OptionCards
						.length + "个", "color: black"), this.OptionCards.forEach(function(e, t) {
						console.log(t + ". " + e.Desc + "(Id: " + e.Id + ")")
					}), console.groupEnd()
			}, t.prototype.resetData = function() {
				this.QuesCards = [], this.OptionCards = []
			}, t
		}();
		e.LogicManager = t, __reflect(t.prototype, "magicguess.LogicManager", [])
	}(n || (n = {})), window.magicguess = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		var t = function() {
			function e() {
				this.Id = "", this.Source = "", this.Desc = "", this.GridIndex = -1
			}
			return e
		}();
		e.Card = t, __reflect(t.prototype, "magicguess.Card", [])
	}(n || (n = {})), window.magicguess = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		var t = function() {
			function e() {
				this.SingleScore = 10, this.TotalTime = 60, this.MaxScore = 9999, this.Rounds = 3, this
					.TotalCardCount = 4, this.QuesCardMinCount = 3, this.ActualQuesCardCount = 3, this
					.EnableRotate = !1, this.EachOptionCardMaxCount = 1, this.SingleCardTime = 1, this
					.FlipType = 1, this.DisposableFlipRatio = 1
			}
			return e
		}();
		e.Level = t, __reflect(t.prototype, "magicguess.Level", [])
	}(n || (n = {})), window.magicguess = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		var t = function() {
			function e() {
				this.PrevShape = null, this.CurrShape = null, this.Answer = null
			}
			return e
		}();
		e.Question = t, __reflect(t.prototype, "magicguess.Question", [])
	}(n || (n = {})), window.magicguess = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		var t = function() {
			function e(e, t) {
				this.Success = !1, this.Msg = "error", this.Success = e, this.Msg = t
			}
			return e
		}();
		e.Result = t, __reflect(t.prototype, "magicguess.Result", [])
	}(n || (n = {})), window.magicguess = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		var t = function(t) {
			function r() {
				var e = t.call(this) || this;
				return e.SceneName = "magicguess.MainScene", e.DimenId = "", e.originalcfg = [], e.cfg =
					new Array, e.currRound = 0, e.timeouts = [], e.difficultyLevel = gamebase
					.DifficultyLevel.General.Lv, e.roundQuesOptions = [], e.touchStatus = !1, e
					.operatedCards = [], e.optionCards = [], e.flipMemorySecond = 3, e.contactGap = 10, e
					.activeRange = 50, e.printLog = !1, e.gameFrameUrl = "https://localhost:8081/", e
					.skinName = "resource/eui_skins/MainScene.exml", e
			}
			return __extends(r, t), r.prototype.onComplete = function() {
				this.countDownTimer = new egret.Timer(1e3, 4), this.flipTipCountDownTimer = new egret
					.Timer(1e3, this.flipMemorySecond + 1), this.groupCentreCard.anchorOffsetX = this
					.groupCentreCard.width / 2, this.groupCentreCard.anchorOffsetY = this
					.groupCentreCard.height / 2, this.logicManager = new e.LogicManager, this
					.activeCardGroupIndexs = new Set, this.stageCentrePoint = new egret.Point(this.stage
						.stageWidth / 2, this.stage.stageHeight / 2), this.centreCardDistance =
					new egret.Point, this.answerMap = new Map, this.initEvent(), this
				.generateQuestion();
				try {
					window.parent.postMessage({
						status: "SceneLoadComplete",
						message: "",
						data: null
					}, this.gameFrameUrl)
				} catch (t) {}
				this.startGame()
			}, r.prototype.onRemoveFromStage = function(e) {
				this.removeEvent(), this.countDownTimer.stop();
				for (var t = 0; t < this.timeouts.length; t++) {
					var n = this.timeouts[t];
					clearTimeout(n)
				}
				egret.Tween.removeTweens(this.rect_mask), egret.Tween.removeTweens(this
						.imageAnswerFeedback), egret.Tween.removeTweens(this.imageCountDown), egret
					.Tween.removeTweens(this.groupCentreCard), egret.Tween.removeTweens(this
						.labelCountdownTip);
				for (var t = 0; t < this.containerArea.numChildren; t++) {
					var r = this.containerArea.getChildAt(t);
					egret.Tween.removeTweens(r)
				}
			}, r.prototype.updateData = function(e) {
				this.printLog = e.printLog, this.difficultyLevel = e.index - 1, this.printLog && console
					.log("当前等级", this.difficultyLevel), this.currCfg = e.level
			}, r.prototype.initView = function() {
				var e = [];
				e.push("关卡总时间(秒): " + this.currCfg.TotalTime), e.push("关卡最大分值: " + this.currCfg
						.MaxScore), e.push("总卡片数量: " + this.currCfg.TotalCardCount), e.push(
						"选项卡片最小数量: " + this.currCfg.QuesCardMinCount), e.push("每项选项卡片最大出题数量: " + this
						.currCfg.EachOptionCardMaxCount), e.push("单个卡牌思考和完成操作的消耗预估时长(秒): " + this
						.currCfg.SingleCardTime), e.push("启用旋转: " + this.currCfg.EnableRotate), this
					.printLog && console.log("%c\n当前关卡游戏配置", "color: black", e.join("，")), this
					.printLog && console.log("%c玩家当前等级", "color: black", "等级标识：" + this.currCfg
						.LevelIndex + "，等级名称：" + this.currCfg.LevelName), this.gamemenu.GameName =
					"魔法猜猜", this.gamemenu.Score = 0, this.gamemenu.LevelName = this.currCfg.LevelName,
					this.gamemenu.LevelMaxScore = this.currCfg.MaxScore, this.gamemenu.ProgressCurrent =
					100, this.gamemenu.ProgressTotal = 100, this.gamemenu.ProgressText = this
					.currRound + 1 + "/" + this.currCfg.Rounds, this.operationButtonLock(!0), this
					.resetLayout()
			}, r.prototype.startGame = function() {
				this.initView(), this.countDown()
			}, r.prototype.answerFeedback = function(e, t) {
				this.imageAnswerFeedback.source = "ty_" + (e ? "duigou" : "cuowu") + "_png", egret.Tween
					.removeTweens(this.imageAnswerFeedback), egret.Tween.get(this.imageAnswerFeedback)
					.to({
						scaleX: 10,
						scaleY: 10,
						visible: !0
					}, 1, egret.Ease.backIn).to({
						scaleX: 1,
						scaleY: 1
					}, 100, egret.Ease.quadIn).to({
						visible: !1
					}, 100, egret.Ease.quadIn).call(function() {
						var n = e ? gamebase.SoundEnum.Right : gamebase.SoundEnum.Wrong;
						gamebase.XGame.SoundMgr.PlayEffect(n), t()
					}, this)
			}, r.prototype.generateQuestion = function() {
				this.logicManager.updateConfig(this.currCfg), console.groupCollapsed("生成题目");
				for (var e = 0; e < this.currCfg.Rounds; e++) {
					console.groupCollapsed("第 " + (e + 1) + " 轮出题"), this.logicManager
					.GenerateQuestion(), console.groupEnd();
					var t = this.logicManager,
						r = t.QuesCards,
						o = t.OptionCards,
						i = new n(r, o);
					this.roundQuesOptions.push(i)
				}
				console.groupEnd();
				var a = this.roundQuesOptions.reduce(function(e, t) {
					return e + t.OptionCards.length
				}, 0);
				this.currCfg.SingleScore = 100 / a, this.printLog && console.log(
					"this.roundQuesOptions", this.roundQuesOptions), this.printLog && console.log(
					"所有回合总选项卡牌数", a, "单个卡片答对分数", this.currCfg.SingleScore)
			}, r.prototype.showQuestionCard = function() {
				var t = this;
				this.operationButtonLock(!0), this.answerMap.clear(), this.labelQuestion.text =
					"记住每个图形出现的位置";
				var n = setTimeout(function() {
					t.optionCards = t.roundQuesOptions[t.currRound].OptionCards;
					var n = !1;
					if (1 === t.currCfg.FlipType) {
						var r = 100 - 100 * t.currCfg.DisposableFlipRatio,
							o = e.common.getIntRandom(1, 100);
						t.printLog && console.log("一次性全翻的机率：" + 100 * t.currCfg
							.DisposableFlipRatio + "，逐个翻转的机率：" + r + "，随机机率：" + o +
							"，逐个翻转(" + o + " <= " + r + ")：" + (r >= o) + "，一次性全翻转(" + o +
							" > " + r + ")：" + (o > r)), r >= o && (n = !0)
					} else 2 === t.currCfg.FlipType && (n = !0);
					t.flipCard(n)
				}, 2e3);
				this.timeouts.push(n)
			}, r.prototype.flipCard = function(t) {
				var n = this;
				void 0 === t && (t = !1);
				var r = this.roundQuesOptions[this.currRound].QuesCards,
					o = Array.from(new Array(this.currCfg.TotalCardCount), function(e, t) {
						return t
					}),
					i = e.common.randomArray(o),
					a = 1e3;
				this.printLog && console.log("\n随机分批次显示卡片，位置先后顺序为：", i);
				for (var s = function(o) {
						var s = i[o],
							u = r.find(function(e) {
								return e.GridIndex === s
							}),
							h = c.containerArea.getChildAt(s),
							l = h.getChildAt(0),
							g = u.Source;
						u || console.error("卡片为空"), c.answerMap.set(u, []), egret.Tween
							.removeTweens(h);
						var d = egret.Tween.get(h);
						t && d.wait(o * (1900 + a)), d.to({
							scaleX: 0
						}, 100).call(function() {
							n.printLog && console.group("当前显示的卡片信息(位置：" + s + ")："), n
								.printLog && console.log("卡片标识(Id)", u.Id), n.printLog &&
								console.log("卡片描述", u.Desc), n.printLog && console.log(
									"卡片资源名称", u.Source), console.groupEnd(), l.source = g,
								gamebase.XGame.SoundMgr.PlayEffect(gamebase.SoundEnum
									.IngameClick)
						}, c).to({
							scaleX: 1
						}, 100), t ? d.wait(1500) : (d.wait(3e3), c.flipTipCountDownTimer
							.reset(), c.labelCountdownTip.text = "记忆倒计时 " + c.flipMemorySecond +
							"s", c.labelCountdownTip.visible = !0, c.labelCountdownTip.alpha =
							0, c.flipTipCountDownTimer.start(), egret.Tween.get(c
								.labelCountdownTip).to({
								alpha: 1
							}, 500)), d.to({
							scaleX: 0
						}, 100).call(function() {
							l.name = g, l.source = e.GameConst.MaskCardSource
						}, c).to({
							scaleX: 1
						}, 100).call(function() {
							if (o === i.length - 1) {
								n.centreCard = n.optionCards[0], n.printLog && console.log(
									"%c\n当前题目卡片(中心位置)", "color: black", n.centreCard
									.Desc + "(Id: " + n.centreCard.Id + ")", "正确的目标位置",
									r.find(function(e) {
										return e.Source === n.centreCard.Source
									}).GridIndex), n.optionCards.shift();
								var a = n.groupCentreCard.getChildAt(0);
								a.rotation = 0, a.source = n.centreCard.Source, n.currCfg
									.EnableRotate && e.common.getIntRandom(1, 100) > 50 && (
										a.rotation = e.ArrayHelper.GetRandomElement(Array
											.from(new Array(3), function(e, t) {
												return 90 * (t + 1)
											})));
								var s = 500;
								t || (s = 1500);
								var c = setTimeout(function() {
									n.groupCentreCard.scaleX = 1, n.groupCentreCard
										.scaleY = 1, n.groupCentreCard.x = n
										.stageCentrePoint.x, n.groupCentreCard.y = n
										.stageCentrePoint.y, n.groupCentreCard
										.visible = !0, gamebase.XGame.SoundMgr
										.PlayEffect(gamebase.SoundEnum.IngameClick),
										n.labelQuestion.text = "把图形拖到正确的位置", n
										.operationButtonLock(!1)
								}, s);
								n.timeouts.push(c)
							}
						}, c)
					}, c = this, u = 0; u < i.length; u++) s(u)
			}, r.prototype.debugShowAllCard = function() {
				for (var t, n, r, o = this, i = this.roundQuesOptions[this.currRound].QuesCards, a =
					0; a < i.length; a++) t = i[a], n = this.containerArea.getChildAt(t.GridIndex), r =
					n.getChildAt(0), r.name = t.Source, r.source = t.Source, this.answerMap.set(t, []);
				var s = this,
					c = setTimeout(function() {
						var n = i.filter(function(t) {
							return t.Source !== e.GameConst.EmptyCardSource
						});
						t = e.ArrayHelper.GetRandomElement(n), r = s.groupCentreCard.getChildAt(0),
							r.source = t.Source, o.groupCentreCard.scaleX = 1, o.groupCentreCard
							.scaleY = 1, o.groupCentreCard.x = o.stageCentrePoint.x, o
							.groupCentreCard.y = o.stageCentrePoint.y, o.groupCentreCard.visible = !
							0, gamebase.XGame.SoundMgr.PlayEffect(gamebase.SoundEnum.IngameClick), o
							.labelQuestion.text = "把图形拖到正确的位置", s.operationButtonLock(!1)
					}, 1e3);
				this.timeouts.push(c)
			}, r.prototype.onCentreCardTouchBegin = function(e) {
				gamebase.XGame.SoundMgr.PlayEffect(gamebase.SoundEnum.IngameClick), this.touchStatus = !
					0, this.centreCardDistance.x = e.stageX - this.groupCentreCard.x, this
					.centreCardDistance.y = e.stageY - this.groupCentreCard.y
			}, r.prototype.onCentreCardTouchMove = function(e) {
				if (this.touchStatus) {
					var t = e.stageX,
						n = e.stageY,
						r = t - this.centreCardDistance.x,
						o = n - this.centreCardDistance.y,
						i = this.groupCentreCard.width / 2,
						a = this.stage.stageWidth - this.groupCentreCard.width / 2,
						s = this.groupCentreCard.height / 2,
						c = this.stage.stageHeight - this.groupCentreCard.height / 2;
					i > r ? r = i : r > a && (r = a), s > o ? o = s : o > c && (o = c), egret.Tween.get(
						this.groupCentreCard, {
							loop: !0
						}).to({
						scaleX: .95,
						scaleY: .95
					}, 200).to({
						scaleX: 1,
						scaleY: 1
					}, 200), this.groupCentreCard.x = r, this.groupCentreCard.y = o;
					for (var u = 0; u < this.containerArea.numChildren; u++) {
						var h = this.containerArea.getChildAt(u);
						h.scaleX = 1, h.scaleY = 1, egret.Tween.removeTweens(h);
						var l = Math.abs(h.x - this.groupCentreCard.x) <= this.activeRange && Math.abs(h
							.y - this.groupCentreCard.y) <= this.activeRange;
						l ? (this.activeCardGroupIndexs.add(u), egret.Tween.get(h, {
							loop: !0
						}).to({
							scaleX: 1.1,
							scaleY: 1.1
						}, 200).to({
							scaleX: 1,
							scaleY: 1
						}, 200)) : this.activeCardGroupIndexs["delete"](u)
					}
				}
			}, r.prototype.onCentreCardTouchEnd = function(e) {
				this.touchStatus = !1;
				for (var t = 0; t < this.containerArea.numChildren; t++) {
					var n = this.containerArea.getChildAt(t);
					n.scaleX = 1, n.scaleY = 1, egret.Tween.removeTweens(n)
				}
				if (egret.Tween.removeTweens(this.groupCentreCard), this.activeCardGroupIndexs.size) {
					this.operationButtonLock(!0);
					var r = Array.from(this.activeCardGroupIndexs),
						o = r[r.length - 1];
					this.activeCardGroupIndexs.clear();
					var n = this.containerArea.getChildAt(o);
					return void this.cardSorption(n)
				}
				this.groupCentreCard.scaleX = 1, this.groupCentreCard.scaleY = 1, this.groupCentreCard
					.x = this.stageCentrePoint.x, this.groupCentreCard.y = this.stageCentrePoint.y
			}, r.prototype.onCentreCardTouchCancel = function(e) {
				this.onCentreCardTouchEnd(e)
			}, r.prototype.cardSorption = function(t) {
				var n = this,
					r = this.roundQuesOptions[this.currRound].QuesCards,
					o = t.getChildAt(0),
					i = r.find(function(e) {
						return e.Source === o.name
					}),
					a = this.answerMap.get(i),
					s = this.groupCentreCard.getChildAt(0);
				if (a) {
					this.centreCard = r.find(function(e) {
						return e.Source === s.source
					}), a.push(e.common.deepClone(this.centreCard)), this.printLog && console.log(
						"%c\n操作提示", "color: black", "已将 " + this.centreCard.Desc + " 卡片放置在 " + i
						.Desc + " 卡片容器内"), this.printLog && console.group("%c玩家答案数据",
						"color: black");
					var c = Array.from(this.answerMap.keys());
					c.sort(function(e, t) {
						return e.GridIndex - t.GridIndex
					}), c.forEach(function(e) {
						var t = n.answerMap.get(e);
						n.printLog && console.log("[选项卡片] " + e.Desc + "(位置：" + e.GridIndex +
							") -> [玩家答案] " + (t.length > 0 ? t.map(function(e) {
								return e.Desc
							}).join(",") : "暂无"))
					}), console.groupEnd();
					var u = 0 === this.optionCards.length;
					if (egret.Tween.get(this.groupCentreCard).to({
							x: t.x,
							y: t.y
						}, 200).to({
							scaleX: 0,
							scaleY: 0
						}, 200), egret.Tween.get(t).wait(400).to({
							scaleX: .9,
							scaleY: .9
						}, 200).to({
							scaleX: 1,
							scaleY: 1
						}, 200).call(function() {
							if (gamebase.XGame.SoundMgr.PlayEffect(gamebase.SoundEnum.IngameClick),
								!u) {
								n.centreCard = n.optionCards[0], n.optionCards.shift(), n
									.printLog && console.group("%c选项卡片(按分布顺序，从上到下，从左到右)，共" + r
										.length + "个", "color: black"), r.forEach(function(e, t) {
										n.printLog && console.log(t + ". " + e.Desc + "(Id: " +
											e.Id + "，位置: " + e.GridIndex + ")")
									}), console.groupEnd(), n.printLog && console.group(
										"%c剩余题目卡片(不含当前题目卡片)，共" + n.optionCards.length + "个",
										"color: black"), n.optionCards.length > 0 ? n.optionCards
									.forEach(function(e, t) {
										n.printLog && console.log(t + ". " + e.Desc + "(Id: " +
											e.Id + ")")
									}) : n.printLog && console.log("无"), console.groupEnd();
								var t = r.find(function(e) {
									return e.Source === n.centreCard.Source
								});
								n.printLog && console.log("%c\n当前题目卡片(中心位置)", "color: black", n
									.centreCard.Desc + "(Id: " + n.centreCard.Id + ")",
									"正确的目标位置", t.GridIndex);
								var o = n.groupCentreCard.getChildAt(0);
								o.rotation = 0, o.source = n.centreCard.Source, n.currCfg
									.EnableRotate && e.common.getIntRandom(1, 100) > 50 && (o
										.rotation = e.ArrayHelper.GetRandomElement(Array.from(
											new Array(3),
											function(e, t) {
												return 90 * (t + 1)
											}))), n.groupCentreCard.scaleX = 1, n.groupCentreCard
									.scaleY = 1, n.groupCentreCard.x = n.stageCentrePoint.x, n
									.groupCentreCard.y = n.stageCentrePoint.y, gamebase.XGame
									.SoundMgr.PlayEffect(gamebase.SoundEnum.IngameClick), n
									.labelQuestion.text = "把图形拖到正确的位置", n.operationButtonLock(!1)
							}
						}, this), u) {
						this.labelQuestion.text = "验证答案";
						var h = Array.from(this.answerMap.keys()),
							l = e.ArrayHelper.Split(h, 2),
							g = 500,
							d = 0;
						this.printLog && console.log("\n");
						for (var p = function(t) {
								for (var o = l[t], i = function(i) {
										var a = o[i],
											s = f.containerArea.getChildAt(a.GridIndex),
											c = s.getChildAt(0),
											u = Array.from(f.answerMap.get(a)),
											h = !1;
										if (h = a.Source !== e.GameConst.EmptyCardSource ? u
											.length && u.every(function(e) {
												return e.Source === a.Source
											}) : 0 === u.length, a.Source !== e.GameConst
											.EmptyCardSource && h) {
											d++;
											var p = f.currCfg.SingleScore * u.length;
											f.gamemenu.AddScore(p), f.printLog && console.log(
												"%c答案验证", "color: green", a.Desc + "(位置：" +
												a.GridIndex + ") 容器卡片完全匹配(共" + u.length +
												"个)，回答正确！分数 +" + p + "，当前分数为：" + f.gamemenu
												.Score)
										} else if (!h) {
											var m = u.filter(function(e) {
												return e.Source !== a.Source
											}).length;
											f.printLog && console.log("%c答案验证", "color: red", a
												.Desc + "(位置：" + a.GridIndex +
												") 容器卡片回答错误(共" + u.length + "个，正确" + (u
													.length - m) + "个，错误" + m +
												"个)！当前分数为：" + f.gamemenu.Score)
										}
										egret.Tween.get(s).wait(t * g).to({
											scaleX: 0
										}, 100).call(function() {
											var e = "",
												t = u.filter(function(e) {
													return e.Source !== a.Source
												});
											if (u.length && t.length) {
												var n = t[t.length - 1];
												e = n.Source
											} else e = c.name;
											c.source = e
										}, f).to({
											scaleX: 1
										}, 100).call(function() {
											if (a.Source !== e.GameConst
												.EmptyCardSource || a.Source === e
												.GameConst.EmptyCardSource && u.length
												) {
												var c = "ty_" + (h ? "duigou" :
													"cuowu") + "_png",
													g = new eui.Image(c);
												g.name = "imageFeedback", s.addChild(g),
													g.horizontalCenter = 0, g
													.verticalCenter = 0
											}
											if (t === l.length - 1 && i === o.length -
												1) {
												var p = d === r.filter(function(t) {
													return t.Source !== e
														.GameConst
														.EmptyCardSource
												}).length;
												n.answerFeedback(p, function() {
													n.labelQuestion.text =
													"请准备";
													var e = setTimeout(
													function() {
														n.resetData(), n
															.currRound ===
															n.currCfg
															.Rounds -
															1 ? n
															.endGame() :
															(n.currRound++,
																n
																.gamemenu
																.ProgressCurrent =
																100, n
																.gamemenu
																.ProgressTotal =
																100, n
																.gamemenu
																.ProgressText =
																n
																.currRound +
																1 +
																"/" + n
																.currCfg
																.Rounds,
																n
																.showQuestionCard()
																)
													}, 1e3);
													n.timeouts.push(e)
												})
											}
										}, f)
									}, a = 0; a < o.length; a++) i(a)
							}, f = this, m = 0; m < l.length; m++) p(m)
					}
				}
			}, r.prototype.operationButtonLock = function(e) {
				this.groupCentreCard.touchEnabled = !e
			}, r.prototype.resetData = function() {
				this.optionCards = [], this.operatedCards = [];
				for (var t = 0; t < this.containerArea.numChildren; t++) {
					var n = this.containerArea.getChildAt(t),
						r = n.getChildAt(0);
					r.source = e.GameConst.MaskCardSource, n.$children.length > 1 && n.removeChildAt(1)
				}
			}, r.prototype.resetLayout = function() {
				this.groupCentreCard.visible = !1, this.containerArea.removeChildren();
				var t = this.groupCentreCard.getChildAt(0);
				t.source = e.GameConst.EmptyCardSource;
				var n = this.logicManager.Layouts[this.currCfg.TotalCardCount];
				if (!n) throw new Error("加载配置失败");
				for (var r, o, i, a = 0; a < n.length; a++) i = n[a], o = new eui.Image(e.GameConst
						.MaskCardSource), o.percentWidth = 100, o.percentHeight = 100, o
					.horizontalCenter = 0, o.verticalCenter = 0, o.anchorOffsetX = o.width / 2, o
					.anchorOffsetY = o.height / 2, r = new eui.Group, r.name = "" + a, r.width = 153, r
					.height = 153, r.x = i.horizontalCenter + this.stageCentrePoint.x, r.y = i
					.verticalCenter + this.stageCentrePoint.y, r.anchorOffsetX = r.width / 2, r
					.anchorOffsetY = r.height / 2, r.touchEnabled = !1, r.touchChildren = !1, r
					.addChild(o), this.containerArea.addChild(r);
				this.containerArea.numChildren && (this.activeRange = this.containerArea.getChildAt(0)
					.width / 2 + this.groupCentreCard.width / 2 - this.contactGap)
			}, r.prototype.endGame = function() {
				var e = this;
				this.operationButtonLock(!0), this.printLog && console.log("当前分数为：" + this.gamemenu
					.Score), egret.Tween.removeTweens(this.groupCentreCard);
				for (var t = 0; t < this.containerArea.numChildren; t++) {
					var n = this.containerArea.getChildAt(t);
					egret.Tween.removeTweens(n)
				}
				gamebase.XGame.SoundMgr.PlayEffect(gamebase.SoundEnum.OpenScene), egret.Tween.get(this
					.rect_mask).to({
					width: this.stage.stageWidth
				}, 200).wait(2e3).call(function() {
					e.rect_mask.width = 0, gamebase.XGame.SceneMgr.ToScene(new gamebase
						.ResultScene, {
							score: e.gamemenu.Score
						});
					try {
						window.parent.postMessage({
							status: "GameOver",
							message: "Success",
							data: {
								score: Number(e.gamemenu.Score.toFixed(2))
							}
						}, e.gameFrameUrl)
					} catch (t) {}
				}, this)
			}, r.prototype.closeGame = function() {
				gamebase.XGame.SceneMgr.CloseScene(this), gamebase.XGame.EventMgr.dispatchEventWith(
					gamebase.EventEnum.UI_BacktoHall, !0, {
						dimenid: this.DimenId
					}, !1), RES.destroyRes("magicguess", !0)
			}, r.prototype.LevelGoon = function(e) {
				1 == e.data.ispass, this.startGame()
			}, r.prototype.countDown = function() {
				this.printLog && console.log(""), this.labelQuestion.text = "请准备", this.countDownTimer
					.reset(), this.countDownTimer.start()
			}, r.prototype.onTimer_CountDown = function() {
				var e = this.countDownTimer,
					t = e.currentCount,
					n = e.repeatCount,
					r = n - t;
				r > 0 && (this.printLog && console.log("%c准备时间倒计时", "color: black", "还剩 " + r + " 秒"),
					this.imageCountDown.source = "jp_sz" + r + "_png", egret.Tween.get(this
						.imageCountDown).to({
						scaleX: 5,
						scaleY: 5,
						visible: !0
					}, 1, egret.Ease.backIn).to({
						scaleX: 1,
						scaleY: 1
					}, 200, egret.Ease.quadIn).to({
						visible: !1
					}, 100, egret.Ease.quadIn).call(function() {
						gamebase.XGame.SoundMgr.PlayEffect(gamebase.SoundEnum.Timer)
					}, this))
			}, r.prototype.onTimerComplete_CountDown = function() {
				this.printLog && console.log("%c\n准备时间结束", "color: black", "游戏开始"), this.imageCountDown
					.visible = !1, this.showQuestionCard();
				try {
					window.parent.postMessage({
						status: "GameBegin",
						message: "",
						data: null
					}, this.gameFrameUrl)
				} catch (e) {}
			}, r.prototype.onTimer_FlipTipCountDown = function() {
				var e = this.flipTipCountDownTimer,
					t = e.currentCount,
					n = e.repeatCount,
					r = n - t;
				this.labelCountdownTip.text = "记忆倒计时 " + r + "s"
			}, r.prototype.onTimerComplete_FlipTipCountDown = function() {
				var e = this;
				egret.Tween.get(this.labelCountdownTip).to({
					alpha: 0
				}, 100).call(function() {
					e.labelCountdownTip.visible = !1
				}, this)
			}, r.prototype.initEvent = function() {
				gamebase.XGame.EventMgr.addEventListener(gamebase.EventEnum.UI_GameGoon, this.LevelGoon,
						this), gamebase.XGame.EventMgr.addEventListener(gamebase.EventEnum.UI_CloseGame,
						this.closeGame, this), this.countDownTimer.addEventListener(egret.TimerEvent
						.TIMER, this.onTimer_CountDown, this), this.countDownTimer.addEventListener(
						egret.TimerEvent.TIMER_COMPLETE, this.onTimerComplete_CountDown, this), this
					.flipTipCountDownTimer.addEventListener(egret.TimerEvent.TIMER, this
						.onTimer_FlipTipCountDown, this), this.flipTipCountDownTimer.addEventListener(
						egret.TimerEvent.TIMER_COMPLETE, this.onTimerComplete_FlipTipCountDown, this),
					this.groupCentreCard.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this
						.onCentreCardTouchBegin, this), this.groupCentreCard.addEventListener(egret
						.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onCentreCardTouchCancel, this), this
					.groupCentreCard.addEventListener(egret.TouchEvent.TOUCH_MOVE, this
						.onCentreCardTouchMove, this), this.groupCentreCard.addEventListener(egret
						.TouchEvent.TOUCH_END, this.onCentreCardTouchEnd, this)
			}, r.prototype.removeEvent = function() {
				gamebase.XGame.EventMgr.removeEventListener(gamebase.EventEnum.UI_GameGoon, this
						.LevelGoon, this), gamebase.XGame.EventMgr.removeEventListener(gamebase
						.EventEnum.UI_CloseGame, this.closeGame, this), this.countDownTimer
					.removeEventListener(egret.TimerEvent.TIMER, this.onTimer_CountDown, this), this
					.countDownTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this
						.onTimerComplete_CountDown, this), this.flipTipCountDownTimer
					.removeEventListener(egret.TimerEvent.TIMER, this.onTimer_FlipTipCountDown, this),
					this.flipTipCountDownTimer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this
						.onTimerComplete_FlipTipCountDown, this), this.groupCentreCard
					.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onCentreCardTouchBegin,
						this), this.groupCentreCard.removeEventListener(egret.TouchEvent
						.TOUCH_RELEASE_OUTSIDE, this.onCentreCardTouchCancel, this), this
					.groupCentreCard.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this
						.onCentreCardTouchMove, this), this.groupCentreCard.removeEventListener(egret
						.TouchEvent.TOUCH_END, this.onCentreCardTouchEnd, this)
			}, r
		}(gamebase.Scene);
		e.MainScene = t, __reflect(t.prototype, "magicguess.MainScene", []);
		var n = function() {
			function e(e, t) {
				this.QuesCards = [], this.OptionCards = [], this.QuesCards = e, this.OptionCards = t
			}
			return e
		}();
		e.RoundQues = n, __reflect(n.prototype, "magicguess.RoundQues", [])
	}(n || (n = {})), window.magicguess = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		var t = function(t) {
			function n() {
				var e = t.call(this) || this;
				return e.SceneName = "magicguess.StartScene", e.originalcfg = [], e.cfg = new Array, e
					.printLog = !1, e.skinName = "resource/eui_skins/StartScene.exml", e
			}
			return __extends(n, t), n.prototype.onComplete = function() {
				this.printLog = !1, this.initBtns()
			}, n.prototype.initBtns = function() {
				this.gp_btns.removeChildren();
				var e = RES.getRes("magicguess.level_json");
				this.printLog && console.log("%c关卡数据", "color: black", e), this.originalcfg = e, this
					.cfg = this.GetGameConfig(), this.printLog && console.log("%c\n游戏配置关卡配置",
						"color: black", this.cfg);
				for (var t = 0; t < e.length; t++) {
					var n = e[t],
						r = new eui.Image("jdt1_png");
					r.horizontalCenter = 0, r.verticalCenter = 0, r.width = 297, r.height = 60;
					var o = new eui.Label(n.levelname);
					o.size = 30, o.textAlign = "center", o.verticalAlign = "bottom", o.verticalCenter =
						0, o.left = 20, o.textColor = 16777215;
					var i = new eui.Group;
					i.verticalCenter = 0, i.left = 80, i.layout = new eui.HorizontalLayout;
					for (var a = 0; t + 1 > a; a++) {
						var s = new eui.Image("nli_xx_quan_png");
						s.horizontalCenter = 0, s.verticalCenter = 0, s.width = 20, s.height = 20, i
							.addChild(s)
					}
					var c = new eui.Group;
					c.name = "" + t, c.touchEnabled = !0, c.touchChildren = !1, c.percentWidth = 100, c
						.addChild(r), c.addChild(o), c.addChild(i), c.addEventListener(egret.TouchEvent
							.TOUCH_TAP, this.onBtnTap, this), this.gp_btns.addChild(c)
				}
			}, n.prototype.onBtnTap = function(t) {
				var n = t.target,
					r = parseInt(n.name);
				gamebase.XGame.SceneMgr.ToScene(new e.MainScene, {
					index: r,
					level: this.cfg[r],
					printLog: this.printLog
				})
			}, n.prototype.onRemoveFromStage = function(e) {
				this.removeEvent()
			}, n.prototype.updateData = function(e) {}, n.prototype.GetGameConfig = function() {
				var t = [];
				this.printLog && console.log("%c原始关卡配置", "color: black", this.originalcfg);
				for (var n = 0; n < this.originalcfg.length; n++) {
					var r = new e.Level;
					r.LevelIndex = n, r.LevelName = this.originalcfg[n].levelname;
					var o = this.originalcfg[n],
						i = o.rounds,
						a = o.singlescore,
						s = o.secondtimes,
						c = o.totalscore,
						u = o.specialobstacles,
						h = o.maxobstacle;
					r.Rounds = i, r.SingleScore = a, r.TotalTime = s, r.MaxScore = c;
					var l = u.split("|");
					r.EnableRotate = "1" === l[0], r.EachOptionCardMaxCount = parseInt(l[1]), r
						.EachOptionCardMaxCount < 1 ? r.EachOptionCardMaxCount = 1 : r
						.EachOptionCardMaxCount > e.GameConst.EachOptionCardUpperLimit && (r
							.EachOptionCardMaxCount = e.GameConst.EachOptionCardUpperLimit), r
						.SingleCardTime = parseFloat(l[2]), r.SingleCardTime < 0 ? r.SingleCardTime =
						1 : r.SingleCardTime > e.GameConst.SingleCardTimeUpperLimit && (r
							.SingleCardTime = e.GameConst.SingleCardTimeUpperLimit), r.FlipType =
						parseFloat(l[3]), [0, 1, 2].includes(r.FlipType) || (r.FlipType = 0), r
						.DisposableFlipRatio = parseFloat(l[4]), r.DisposableFlipRatio < 0 ? r
						.DisposableFlipRatio = 0 : r.DisposableFlipRatio > 1 && (r.DisposableFlipRatio =
							1);
					var g = h.split("|");
					r.TotalCardCount = parseInt(g[1]), r.TotalCardCount < e.GameConst
						.TotalCardLowerLimit ? r.TotalCardCount = e.GameConst.TotalCardLowerLimit : r
						.TotalCardCount > e.GameConst.TotalCardUpperLimit && (r.TotalCardCount = e
							.GameConst.TotalCardUpperLimit), r.QuesCardMinCount = parseInt(g[0]), r
						.QuesCardMinCount < 1 ? r.QuesCardMinCount = r.TotalCardCount - 1 : r
						.QuesCardMinCount > r.TotalCardCount && (r.QuesCardMinCount = r.TotalCardCount),
						t.push(r)
				}
				return t
			}, n.prototype.initEvent = function() {}, n.prototype.removeEvent = function() {}, n
		}(gamebase.Scene);
		e.StartScene = t, __reflect(t.prototype, "magicguess.StartScene", [])
	}(n || (n = {})), window.magicguess = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		var t = function() {
			function t() {}
			return t.IndexOf = function(e, t) {
				for (var n = 0; n < e.length; n++)
					if (e[n] == t) return n;
				return -1
			}, t.FirstOrDefault = function(e, t) {
				var n, r = 0;
				switch (typeof t) {
					case "number":
						n = 0;
						break;
					case "string":
						n = "";
						break;
					default:
						n = null
				}
				return r = e.findIndex(function(e) {
					return e === t
				}), r > -1 && (n = e[r]), n
			}, t.Remove = function(e, t) {
				var n = this.IndexOf(e, t);
				n > -1 && e.splice(n, 1)
			}, t.GetRandomElement = function(t) {
				var n = e.common.getIntRandom(0, t.length - 1);
				return t[n]
			}, t.GetRandomArrayElements = function(e, t) {
				for (var n, r, o = e.slice(0), i = e.length, a = i - t; i-- > a;) r = Math.floor((i +
					1) * Math.random()), n = o[r], o[r] = o[i], o[i] = n;
				return o.slice(a)
			}, t.Split = function(e, t) {
				for (var n = 0, r = []; n < e.length;) r.push(e.slice(n, n += t));
				return r
			}, t
		}();
		e.ArrayHelper = t, __reflect(t.prototype, "magicguess.ArrayHelper", [])
	}(n || (n = {})), window.magicguess = n
}, function(e, t) {
	var n, n = window.magicguess;
	! function(e) {
		var t = function() {
			function e() {}
			return e.getIntRandom = function(e, t) {
				return parseInt(gamebase.Random.range(e, t + .99).toString())
			}, e.isArray = function(e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			}, e.deepClone = function(e) {
				if ([null, void 0, 0 / 0, !1].includes(e)) return e;
				if ("object" != typeof e && "function" != typeof e) return e;
				var t = this.isArray(e) ? [] : {};
				for (var n in e) e.hasOwnProperty(n) && (t[n] = "object" == typeof e[n] ? this
					.deepClone(e[n]) : e[n]);
				return t
			}, e.random = function(e, t) {
				if (e >= 0 && t > 0 && t >= e) {
					var n = t - e + 1;
					return Math.floor(Math.random() * n + e)
				}
				return 0
			}, e.randomArray = function(e) {
				return void 0 === e && (e = []), e.sort(function() {
					return Math.random() - .5
				})
			}, e.parseRMB = function(e) {
				var t = Math.floor(parseFloat((100 * e).toString())) / 100;
				return t = Number(t.toFixed(1))
			}, e.guid = function() {
				return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
					var t = 16 * Math.random() | 0,
						n = "x" == e ? t : 3 & t | 8;
					return n.toString(16)
				}).toUpperCase()
			}, e
		}();
		e.common = t, __reflect(t.prototype, "magicguess.common", [])
	}(n || (n = {})), window.magicguess = n
}]);
