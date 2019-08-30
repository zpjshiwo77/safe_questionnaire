$(document).ready(function () {

	//-----------------------------------------定义和初始化变量----------------------------------------
	var loadBox = $('aside.loadBox');
	var articleBox = $('article');
	var windowScale = window.innerWidth / 750;
	var loadingBox = $("#loadingBox");
	var loadPer = loadingBox.find(".peopleBox");
	var numBox = loadingBox.find(".num");
	var loadingFlag = false, coinAnimeFlag = false;

	//----------------------------------------页面初始化----------------------------------------
	icom.init(init);//初始化
	icom.screenScrollUnable();//如果是一屏高度项目且在ios下，阻止屏幕默认滑动行为

	function init() {
		requestAnimationFrame(function () {
			if (os.screenProp < 0.54) articleBox.addClass("screen189");
			if (os.screenProp > 0.64) articleBox.addClass("screen159");
			load_handler();
		});
		// wxUser.init();
	}//edn func


	//----------------------------------------加载页面图片----------------------------------------
	function load_handler() {
		var loader = new PxLoader();
		loader.addImage('images/common/bg.jpg');
		loader.addImage('images/common/bgm_off.png');
		loader.addImage('images/common/bgm_on.png');
		loader.addImage('images/common/close.png');
		loader.addImage('images/common/logo.png');
		loader.addImage('images/common/mask.png');
		loader.addImage('images/common/turn_lock.png');
		loader.addImage('images/common/turn_no.png');
		loader.addImage('images/common/turn_phone.png');
		loader.addImage('images/common/turn_unlock.png');
		loader.addImage('images/common/turn_yes.png');
		loader.addImage('images/loadingBox/b.png');
		loader.addImage('images/loadingBox/bar.jpg');
		loader.addImage('images/loadingBox/bg.jpg');
		loader.addImage('images/loadingBox/c.png');
		loader.addImage('images/loadingBox/l.png');
		loader.addImage('images/loadingBox/mask.png');
		loader.addImage('images/loadingBox/w.png');

		for (var i = 0; i < 6; i++) {
			loader.addImage('images/people/load/'+i+'.png');
		}

		loader.addCompletionListener(function () {
			icom.fadeIn(articleBox);
			loadingBox.find(".people").gifOn({
				path: "images/people/load/",
				num: 6,
				speed: 150
			});
			load_more();
			// loadingFlag = true;
			// coinAnimeFlag = true;
			// pageInit();
			loader = null;
		});
		loader.start();
	}//end func

	function load_more() {
		var loader = new PxLoader();
		loader.addImage('images/share.jpg');
		loader.addImage('images/road_sence/c1.png');
		loader.addImage('images/road_sence/c2.png');
		loader.addImage('images/road_sence/c3.png');
		loader.addImage('images/road_sence/c4.png');
		loader.addImage('images/road_sence/mask.png');
		loader.addImage('images/road_sence/stair.jpg');
		loader.addImage('images/road_sence/4/1.png');
		loader.addImage('images/road_sence/4/2.png');
		loader.addImage('images/road_sence/4/3.png');
		loader.addImage('images/road_sence/4/4.png');
		loader.addImage('images/road_sence/4/m1.png');
		loader.addImage('images/road_sence/4/m2.png');
		loader.addImage('images/road_sence/4/m3.png');
		loader.addImage('images/road_sence/4/rocket/0.png');
		loader.addImage('images/road_sence/4/rocket/1.png');
		loader.addImage('images/road_sence/4/rocket/2.png');
		loader.addImage('images/road_sence/4/rocket/3.png');
		loader.addImage('images/road_sence/4/rocket/4.png');
		loader.addImage('images/road_sence/4/rocket/5.png');
		loader.addImage('images/road_sence/4/rocket/6.png');
		loader.addImage('images/road_sence/4/rocket/7.png');
		loader.addImage('images/road_sence/4/rocket/9.png');
		loader.addImage('images/road_sence/3/1.png');
		loader.addImage('images/road_sence/3/2.png');
		loader.addImage('images/road_sence/3/3.png');
		loader.addImage('images/road_sence/3/4.png');
		loader.addImage('images/road_sence/3/4_1.png');
		loader.addImage('images/road_sence/3/4_2.png');
		loader.addImage('images/road_sence/3/5.png');
		loader.addImage('images/road_sence/3/6.png');
		loader.addImage('images/road_sence/3/7.png');
		loader.addImage('images/road_sence/3/door4/0.png');
		loader.addImage('images/road_sence/3/door4/1.png');
		loader.addImage('images/road_sence/3/door4/2.png');
		loader.addImage('images/road_sence/3/door4/3.png');
		loader.addImage('images/road_sence/3/door4/4.png');
		loader.addImage('images/road_sence/3/door3/0.png');
		loader.addImage('images/road_sence/3/door3/1.png');
		loader.addImage('images/road_sence/3/door3/2.png');
		loader.addImage('images/road_sence/3/door3/3.png');
		loader.addImage('images/road_sence/3/door3/4.png');
		loader.addImage('images/road_sence/3/door2/0.png');
		loader.addImage('images/road_sence/3/door2/1.png');
		loader.addImage('images/road_sence/3/door2/2.png');
		loader.addImage('images/road_sence/3/door2/3.png');
		loader.addImage('images/road_sence/3/door2/4.png');
		loader.addImage('images/road_sence/3/door1/0.png');
		loader.addImage('images/road_sence/3/door1/1.png');
		loader.addImage('images/road_sence/3/door1/2.png');
		loader.addImage('images/road_sence/3/door1/3.png');
		loader.addImage('images/road_sence/3/door1/4.png');
		loader.addImage('images/road_sence/2/1.png');
		loader.addImage('images/road_sence/2/2.png');
		loader.addImage('images/road_sence/2/3.png');
		loader.addImage('images/road_sence/2/4.png');
		loader.addImage('images/road_sence/2/5.png');
		loader.addImage('images/road_sence/2/6.png');
		loader.addImage('images/road_sence/2/7.png');
		loader.addImage('images/road_sence/2/door3/0.png');
		loader.addImage('images/road_sence/2/door3/1.png');
		loader.addImage('images/road_sence/2/door3/2.png');
		loader.addImage('images/road_sence/2/door3/3.png');
		loader.addImage('images/road_sence/2/door3/4.png');
		loader.addImage('images/road_sence/2/door2/0.png');
		loader.addImage('images/road_sence/2/door2/1.png');
		loader.addImage('images/road_sence/2/door2/2.png');
		loader.addImage('images/road_sence/2/door2/3.png');
		loader.addImage('images/road_sence/2/door2/4.png');
		loader.addImage('images/road_sence/2/door1/0.png');
		loader.addImage('images/road_sence/2/door1/1.png');
		loader.addImage('images/road_sence/2/door1/2.png');
		loader.addImage('images/road_sence/2/door1/3.png');
		loader.addImage('images/road_sence/2/door1/4.png');
		loader.addImage('images/road_sence/1/1.png');
		loader.addImage('images/road_sence/1/2.png');
		loader.addImage('images/road_sence/1/3.png');
		loader.addImage('images/road_sence/1/4.png');
		loader.addImage('images/road_sence/1/5.png');
		loader.addImage('images/road_sence/1/6.png');
		loader.addImage('images/road_sence/1/7.png');
		loader.addImage('images/resultBox/d.jpg');
		loader.addImage('images/resultBox/light.jpg');
		loader.addImage('images/resultBox/tips.png');
		loader.addImage('images/QABox/next.png');
		loader.addImage('images/QABox/t1.png');
		loader.addImage('images/QABox/t2.png');
		loader.addImage('images/QABox/t3.png');
		loader.addImage('images/QABox/t4.png');
		loader.addImage('images/QABox/t5.png');
		loader.addImage('images/QABox/4/1.png');
		loader.addImage('images/QABox/4/1a.png');
		loader.addImage('images/QABox/4/2.png');
		loader.addImage('images/QABox/4/2a.png');
		loader.addImage('images/QABox/4/index.png');
		loader.addImage('images/QABox/3/1.png');
		loader.addImage('images/QABox/3/1a.png');
		loader.addImage('images/QABox/3/2.png');
		loader.addImage('images/QABox/3/2a.png');
		loader.addImage('images/QABox/3/3.png');
		loader.addImage('images/QABox/3/3a.png');
		loader.addImage('images/QABox/3/index.png');
		loader.addImage('images/QABox/3/t1.png');
		loader.addImage('images/QABox/3/t2.png');
		loader.addImage('images/QABox/3/t3.png');
		loader.addImage('images/QABox/2/1.png');
		loader.addImage('images/QABox/2/1a.png');
		loader.addImage('images/QABox/2/2.png');
		loader.addImage('images/QABox/2/2a.png');
		loader.addImage('images/QABox/2/3.png');
		loader.addImage('images/QABox/2/3a.png');
		loader.addImage('images/QABox/2/index.png');
		loader.addImage('images/QABox/1/1.png');
		loader.addImage('images/QABox/1/1a.png');
		loader.addImage('images/QABox/1/2.png');
		loader.addImage('images/QABox/1/2a.png');
		loader.addImage('images/QABox/1/3.png');
		loader.addImage('images/QABox/1/3a.png');
		loader.addImage('images/QABox/1/4.png');
		loader.addImage('images/QABox/1/4a.png');
		loader.addImage('images/QABox/1/5.png');
		loader.addImage('images/QABox/1/5a.png');
		loader.addImage('images/QABox/1/index.png');
		loader.addImage('images/QABox/1/t1.png');
		loader.addImage('images/QABox/1/t2.png');
		loader.addImage('images/QABox/1/t3.png');
		loader.addImage('images/QABox/1/t4.png');
		loader.addImage('images/people/ur/0.png');
		loader.addImage('images/people/ur/1.png');
		loader.addImage('images/people/ur/2.png');
		loader.addImage('images/people/ur/3.png');
		loader.addImage('images/people/ur/4.png');
		loader.addImage('images/people/ur/5.png');
		loader.addImage('images/people/ul/0.png');
		loader.addImage('images/people/ul/1.png');
		loader.addImage('images/people/ul/2.png');
		loader.addImage('images/people/ul/3.png');
		loader.addImage('images/people/ul/4.png');
		loader.addImage('images/people/ul/5.png');
		loader.addImage('images/people/u/0.png');
		loader.addImage('images/people/u/1.png');
		loader.addImage('images/people/u/2.png');
		loader.addImage('images/people/u/3.png');
		loader.addImage('images/people/u/4.png');
		loader.addImage('images/people/u/5.png');
		loader.addImage('images/people/r/0.png');
		loader.addImage('images/people/r/1.png');
		loader.addImage('images/people/r/2.png');
		loader.addImage('images/people/r/3.png');
		loader.addImage('images/people/r/4.png');
		loader.addImage('images/people/r/5.png');
		loader.addImage('images/people/l/0.png');
		loader.addImage('images/people/l/1.png');
		loader.addImage('images/people/l/2.png');
		loader.addImage('images/people/l/3.png');
		loader.addImage('images/people/l/4.png');
		loader.addImage('images/people/l/5.png');
		loader.addImage('images/indexBox/btn.png');
		loader.addImage('images/indexBox/rule.png');
		loader.addImage('images/indexBox/rulebtn.png');
		loader.addImage('images/indexBox/sence.png');
		loader.addImage('images/indexBox/title.png');
		loader.addImage('images/indexBox/airship/0.png');
		loader.addImage('images/indexBox/airship/1.png');
		loader.addImage('images/indexBox/airship/2.png');
		loader.addImage('images/indexBox/airship/3.png');
		loader.addImage('images/indexBox/airship/4.png');
		loader.addImage('images/indexBox/airship/5.png');
		loader.addImage('images/indexBox/airship/6.png');
		loader.addImage('images/indexBox/airship/7.png');
		loader.addImage('images/indexBox/airship/8.png');
		loader.addImage('images/indexBox/airship/9.png');
		loader.addImage('images/chose/ar.png');
		loader.addImage('images/chose/r1.png');
		loader.addImage('images/chose/r1a.png');
		loader.addImage('images/chose/r2.png');
		loader.addImage('images/chose/r2a.png');
		loader.addImage('images/chose/r3.png');
		loader.addImage('images/chose/r3a.png');
		loader.addImage('images/chose/select.png');
		loader.addImage('images/baseQABox/form.png');

		// 实际加载进度
		loader.addProgressListener(function (e) {
			var per = Math.round(e.completedCount / e.totalCount * 50);
			loadPer.css({ x: 2.5 * per / 100 + "rem" });
			numBox.html(1000 + parseInt(7888 * per / 100));
			// loadPer.css({x:3.2*per/100+"rem"});
		});

		loader.addCompletionListener(function () {
			load_timer(50);//模拟加载进度
			loader = null;
		});
		loader.start();

		// coinAnime();
	}//end func

	//模拟加载进度
	function load_timer(per) {
		per = per || 0;
		per += imath.randomRange(1, 3);
		per = per > 100 ? 100 : per;
		loadPer.css({ x: 2.5 * per / 100 + "rem" });
		numBox.html(1000 + parseInt(7888 * per / 100));
		// loadPer.css({x:3.2*per/100+"rem"});
		if (per == 100) {
			setTimeout(function () {
				loadingFlag = true;
				coinAnimeFlag = true;
				pageInit();
			}, 200);
		}
		else setTimeout(load_timer, 33, per);
	}//edn func

	//------------------------------页面逻辑代码-----------------------
	var roadBox = $("#roadBox");
	var indexBox = $("#indexBox");
	var ruleBox = $("#ruleBox");
	var baseQABox = $("#baseQABox");
	var resultBox = $("#resultBox");
	var QABox = $("#QABox");

	var iroadSence;
	var startAnswerFlag = false;
	var nextBtnFlag = true;

	var nowQSindex = 1;
	var nowQsitemIndex = 1;
	var answerInfo = {};
	var costSence = ["商场、便利店及餐饮类等中大型实体商户", "小摊贩、菜场、水果店等小型实体商店", "乘坐地铁、公交车、出租车", "停车场、ETC缴费", "挂号、买药等医院、医疗支付"];
	var choseSence = 0;

	var baseInfoBoxScroll = new IScroll('#baseInfoBox', {
		bounce: false,
		scrollbars: true,
		click: true
	});

	var qascroll1Scroll = new IScroll('#qascroll1', {
		bounce: false,
		scrollbars: true,
		click: true
	});

	var qascroll2Scroll = new IScroll('#qascroll2', {
		bounce: false,
		scrollbars: true,
		click: true
	});

	var qascroll3Scroll = new IScroll('#qascroll3', {
		bounce: false,
		scrollbars: true,
		click: true
	});

	/**
	 * 页面初始化
	 */
	function pageInit() {
		if (loadingFlag && coinAnimeFlag) {
			icom.fadeOut(loadingBox);
			indexBoxAnime();
			eventInit();
			// DevelopTest();
			monitor_handler();
		}
	}//end func

	/**
	 * 开发测试使用
	 */
	function DevelopTest() {
		// loadingBox.hide();
		// QABox.show();

		// roadSenceInit();
		// senceAnimeTest();
		// QABox.show();
		// scrollRefresh();

		// baseQABoxShow();

		resultBox.show();
	}

	/**
	 * 场景动画测试用
	 */
	function senceAnimeTest() {
		var num = 1;
		var sence = 1;
		articleBox.on("touchend", function () {
			if (!iroadSence.animeFlag) {
				var a = iroadSence["sence" + sence + "step" + num];
				a();
				num++;
				// num = 11;
				if (num > 10 && sence == 1) {
					num = 1;
					sence = 2;
				}
				else if (num > 8 && sence == 2) {
					num = 1;
					sence = 3;
				}
				else if (num > 6 && sence == 3) {
					num = 1;
					sence = 4;
				}
			}
		})
	}

	/**
	 * 事件初始化
	 */
	function eventInit() {
		$(".limitBtn").on("touchend", limitClick);

		indexBox.find(".startBtn").on("touchend", startAnswer);
		$(".ruleBtn").on("touchend", showRule);

		QABox.find(".ans").on("click", choseAnswer);
		QABox.find(".next").on("click", gotoNextQS);

		baseQABox.find(".itemName").on("click", openCareerItem);
		baseQABox.on("click", ".ans", choseBaseQAAns);
		$("#birthday").on('change', changeMarriageItem);
		$("#submitBtn").on("touchend", vefBaseInfo);
	}

	/**
	 * 显示基础调查页面
	 */
	function showBaseInfoBox() {
		var title = QABox.find(".title");
		icom.fadeOut($(".questionBox4"), 500, function () {
			title[0].src = "images/QABox/t5.png";
			icom.fadeIn(title);
		});

		var anifunc = iroadSence["sence4step2"];
		anifunc(function () {
			baseQABoxShow();
			icom.fadeOut(QABox);
			icom.fadeOut(roadBox);
		});
	}

	/**
	 * 滚动刷新
	 */
	function scrollRefresh(index) {
		if (index == 1) qascroll1Scroll.refresh();
		else if (index == 2) qascroll2Scroll.refresh();
		else if (index == 3) qascroll3Scroll.refresh();
	}

	/**
	 * 验证基础信息
	 */
	function vefBaseInfo() {
		var baseInfo = {
			name: $("#name").val(),
			phone: $("#phone").val(),
			sex: $("#sex").find(".act").text(),
			birthday: $("#birthday").val(),
			education: $("#education").val(),
			occupation: $("#career").find(".act").text(),
			city: $("#city").val(),
			maritalStatus: $("#marriage").find(".act").text(),
			isChildren: $("#hasChild").find(".act").text(),
			income: $("#income").val(),
			monthlyMoney: $("#cost").val()
		}

		if (baseInfo.name == "") icom.alert("请输入姓名");
		else if (!icom.checkStr(baseInfo.phone)) icom.alert("请输入正确的手机号");
		else if (baseInfo.sex == "") icom.alert("请选择性别");
		else if (baseInfo.birthday == "") icom.alert("请选择出生年月");
		else if (baseInfo.education == "") icom.alert("请选择学历");
		else if (baseInfo.occupation == "") icom.alert("请选择职业");
		else if (baseInfo.city == "") icom.alert("请选择城市");
		else if (baseInfo.maritalStatus == "") icom.alert("请选择婚姻状态");
		else if (baseInfo.isChildren == "") icom.alert("请选择是否有小孩");
		else if (baseInfo.income == "") icom.alert("请选择可支配收入");
		else if (baseInfo.monthlyMoney == "") icom.alert("请选择每月消费");
		else sendInfo(baseInfo);
	}

	/**
	 * 发送信息
	 */
	function sendInfo(baseInfo) {
		var data = $.extend(baseInfo, answerInfo);
		// console.log(data);
		API.sendInfo(data, function (data) {
			if (data.success || data.success == "true") {
				showResultBox();
			}
			else icom.alert(data.msg);
		})
	}

	/**
	 * 显示结果页面
	 */
	function showResultBox() {
		icom.fadeOut(baseQABox);
		resultBox.show();
	}

	/**
	 * 基础问答显示
	 */
	function baseQABoxShow() {
		baseQABox.show();
		baseInfoBoxScroll.refresh();
		yearSelectInit();
		citySelectInit();
	}

	/**
	 * 修改结婚徐选项
	 */
	function changeMarriageItem() {
		var year = parseInt($("#birthday").val());
		var sex = $("#sex").find(".act").text();
		var item = $("#marriage").children();
		item.removeClass('act');
		if (year >= 1999) {
			item.eq(1).hide();
			item.eq(2).hide();
		}
		else if (year >= 1997 && sex == "男") {
			item.eq(1).hide();
			item.eq(2).hide();
		}
		else {
			item.eq(1).show();
			item.eq(2).show();
		}
		baseInfoBoxScroll.refresh();
	}

	/**
	 * 年份选择初始化
	 */
	function yearSelectInit() {
		var cont = '';
		for (var i = 1939; i <= 2009; i++) {
			cont += '<option value="' + i + '" ' + (i == 1980 ? 'selected' : '') + '>' + i + '</option>'
		}
		$("#birthday").append(cont);
	}

	/**
	 * 城市选择初始化
	 */
	function citySelectInit() {
		var cont = '';
		for (var i = 0; i < cityData.length; i++) {
			var ele = cityData[i];
			cont += '<option value="' + ele.label + '">' + ele.label + '</option>';
		}
		$("#city").append(cont);
	}

	/**
	 * 选择基础问题的答案
	 */
	function choseBaseQAAns() {
		var that = $(this);
		var box = that.parents(".ansBox");
		box.find(".ans").removeClass('act');
		that.addClass('act');
	}

	/**
	 * 展开职业选择项
	 */
	function openCareerItem() {
		var that = $(this);
		var box = that.siblings('.box');
		baseQABox.find(".box").hide();
		box.show();
		baseInfoBoxScroll.refresh();
	}

	/**
	 * 显示活动规则
	 */
	function showRule() {
		icom.popOn(ruleBox)
	}

	/**
	 * 开始回答
	 */
	function startAnswer() {
		if (startAnswerFlag) {
			startAnswerFlag = false;

			var title = QABox.find(".title");

			title.show();
			QABox.show();
			roadSenceInit();
			icom.fadeOut(indexBox);

			for (var i = 1; i <= 4; i++) {
				for (var j = 1; j <= 10; j++) {
					if (i == 2 && j > 8) break;
					else if (i == 3 && j > 6) break;
					else if (i == 4 && j > 1) break;
					answerInfo['topic' + i + '_' + j] = "";
				}
			}

			setTimeout(function () {
				icom.fadeOut(title, 600, showNextQuestion);
			}, 1000);
		}
	}

	/**
	 * 选择答案
	 */
	function choseAnswer() {
		if (!iroadSence.animeFlag) {
			var btn = $(this);
			var box = btn.parents(".qabox");
			var type = box.attr("data-type");
			var val = box.attr("data-val");
			var actBtn = box.find(".act");

			if (type == "single") {
				if (actBtn.length == 0) {
					btn.addClass("act");
					if (val == "topic1_9") {
						var qs = box.attr("data-qs");
						answerInfo[val] += (answerInfo[val].length == 0 ? "" : "||") + qs + " - " + btn.text();
					}
					else answerInfo[val] = btn.text();
					setTimeout(function () {
						showNextQuestion(val);
					}, 500);
					// console.log(answerInfo);
				}
			}
			else {
				if (btn.hasClass("act")) {
					btn.removeClass("act");
				}
				else if (type == "more3") {
					if (actBtn.length < 3) {
						btn.addClass("act");
					}
				}
				else {
					btn.addClass("act");
				}
			}
		}
	}

	/**
	 * 回答下一题
	 */
	function gotoNextQS() {
		if (!iroadSence.animeFlag && nextBtnFlag) {
			var btn = $(this);
			var box = btn.parents(".qabox");
			var val = box.attr("data-val");
			var actBtn = box.find(".act");

			if (actBtn.length == 0) {
				icom.alert("至少选择一项");
				return;
			}

			actBtn.each(function () {
				answerInfo[val] += (answerInfo[val].length == 0 ? "" : "||") + $(this).text();
			});

			showNextQuestion(val);
			// console.log(answerInfo);

			nextBtnFlag = false;
			setTimeout(function () { nextBtnFlag = true }, 1000);
		}
	}

	/**
	 * 特殊的场景转换
	 */
	function senceSpTransition() {
		var type = icom.getQueryString('t');

		if (type) {
			var anifunc = iroadSence["sence1step12"];
			anifunc();
			setTimeout(function () {
				showNextTypeQs(3);
			}, 53000);
		}
		else {
			var anifunc = iroadSence["sence1step11"];
			anifunc();
			showNextTypeQs(3);
		}
	}

	/**
	 * 显示下一个问题
	 */
	function showNextQuestion(qsId) {
		if (nowQSindex == 1 && nowQsitemIndex == 1) {
			showFirstQs();
			nowQsitemIndex++;
		}
		else if (nowQSindex == 1 && nowQsitemIndex == 3) {
			if (answerInfo.topic1_2 == "没有使用过移动支付") {
				senceSpTransition();
			}
			else {
				var anifunc = iroadSence["sence" + nowQSindex + "step" + (nowQsitemIndex - 1)];
				anifunc();
				showNormalNextQs();
				nowQsitemIndex++;
			}
		}
		else if (nowQSindex == 1 && nowQsitemIndex == 9) {
			showSpNextQs();
		}
		else if (nowQSindex == 1 && nowQsitemIndex == 10) {
			var anifunc = iroadSence["sence1step10"];
			anifunc();
			showNextTypeQs(nowQSindex + 1);
		}
		else if (nowQSindex == 2 && nowQsitemIndex == 5) {
			var num = (answerInfo.topic2_4.split("一")).length - 1;
			if (num >= 3) $(".questionBox2 .qa5 .ans").eq(0).remove();
			var anifunc = iroadSence["sence" + nowQSindex + "step" + (nowQsitemIndex - 1)];
			anifunc();
			showNormalNextQs();
			nowQsitemIndex++;
		}
		else if (nowQSindex == 2 && nowQsitemIndex == 9) {
			var anifunc = iroadSence["sence2step8"];
			anifunc();
			showNextTypeQs(nowQSindex + 1);
		}
		else if (nowQSindex == 3 && nowQsitemIndex == 7) {
			var anifunc = iroadSence["sence3step6"];
			anifunc(function () {
				var anifunc = iroadSence["sence4step1"];
				anifunc();
			});
			showNextTypeQs(nowQSindex + 1);
		}
		else if (nowQSindex == 4 && nowQsitemIndex == 2) {
			showBaseInfoBox();
		}
		else {
			var anifunc = iroadSence["sence" + nowQSindex + "step" + (nowQsitemIndex - 1)];
			anifunc();
			showNormalNextQs();
			nowQsitemIndex++;
		}
	}

	/**
	 * 显示下一个大类的问题
	 */
	function showNextTypeQs(nextIndex, t) {
		var prebox = QABox.find(".questionBox" + nowQSindex);
		var nextbox = QABox.find(".questionBox" + nextIndex);
		var title = QABox.find(".title");
		var qs = nextbox.find(".qa1");
		var time = t || 4000;
		qs.show();

		icom.fadeOut(prebox, 500, function () {
			title[0].src = "images/QABox/t" + nextIndex + ".png";
			icom.fadeIn(title);
		})

		setTimeout(function () {
			icom.fadeOut(title, 500, function () {
				icom.fadeIn(nextbox);
				if (nextIndex == 3) scrollRefresh(3);
				nowQSindex = nextIndex;
				nowQsitemIndex = 2;
			});
		}, time);
	}

	/**
	 * 特殊的下一题
	 */
	function showSpNextQs() {
		var box = QABox.find(".questionBox" + nowQSindex);
		var index = imath.randomRange(0, costSence.length - 1);
		var sence = costSence[index];
		costSence.splice(index, 1);

		if (choseSence == 0) {
			var anifunc = iroadSence["sence1step" + (nowQsitemIndex - 1)];
			anifunc();
			var Prev = box.find(".qa" + (nowQsitemIndex - 1));
			var next = box.find(".qa" + nowQsitemIndex);
		}
		else if (choseSence < 3) {
			var Prev = box.find(".qa" + nowQsitemIndex);
			var next = box.find(".qa" + nowQsitemIndex);
		}
		else if (choseSence == 3) {
			nowQsitemIndex++;
			var anifunc = iroadSence["sence1step" + (nowQsitemIndex - 1)];
			anifunc();
			var Prev = box.find(".qa" + (nowQsitemIndex - 1));
			var next = box.find(".qa" + nowQsitemIndex);
		}
		icom.fadeOut(Prev, 500, function () {
			if (choseSence != 3) {
				next.find(".ans").removeClass("act");
				next.attr("data-qs", sence)
				next.find(".question").html("假设您在购买" + sence + "消费了10次，您使用移动支付的次数占多少次：<span>（单选）</span>");
				choseSence++;
			}
			icom.fadeIn(next, 500);
		});
	}

	/**
	 * 显示普通的下一题
	 */
	function showNormalNextQs() {
		var box = QABox.find(".questionBox" + nowQSindex);
		var Prev = box.find(".qa" + (nowQsitemIndex - 1));
		var next = box.find(".qa" + nowQsitemIndex);
		icom.fadeOut(Prev, 500, function () {
			icom.fadeIn(next, 500);
			if (nowQSindex == 1 && nowQsitemIndex == 9) {
				scrollRefresh(1);
			}
			else if (nowQSindex == 2 && nowQsitemIndex == 9) {
				scrollRefresh(2);
			}
		});
	}

	/**
	 * 显示第一个问题
	 */
	function showFirstQs() {
		var box = QABox.find(".questionBox1");
		var qs = box.find(".qa1");
		qs.show();
		icom.fadeIn(box);
	}

	/**
	 * 首页动画
	 */
	function indexBoxAnime() {
		var title = indexBox.find(".title");
		var sence = indexBox.find(".sence");
		var airship = indexBox.find(".airship");
		var startBtn = indexBox.find(".startBtn");

		indexBox.show();
		title.css({ scale: 0 })
			.transition({ scale: 1, opacity: 1 }, 800);
		sence.transition({ opacity: 1, delay: 600 }, 700);
		startBtn.transition({ opacity: 1, delay: 1100 }, 700, function () {
			startAnswerFlag = true;
		});

		airship.gifOn({
			path: "images/indexBox/airship/",
			num: 10,
			speed: 150
		});
	}

	/**
	 * 场景初始化
	 */
	function roadSenceInit() {
		roadBox.show();
		iroadSence = new roadSence();
	}

	/**
	 * 金币动画
	 */
	function coinAnime() {
		var num = 1000;

		var timer = setInterval(function () {
			num += 179;
			num = num > 8888 ? 8888 : num;
			numBox.html(num);
			if (num == 8888) {
				clearInterval(timer);
				coinAnimeFlag = true;
				pageInit();
			}
		}, 60);
	}

	/**
	 * 限制点击
	 */
	function limitClick() {
		$(".limitBtn").addClass('noPointer');
		setTimeout(function () { $(".limitBtn").removeClass('noPointer') }, 500);
	}//end func

	//----------------------------------------页面监测代码----------------------------------------
	function monitor_handler() {
		//		imonitor.add({obj:$('a.btnTest'),action:'touchstart',category:'default',label:'测试按钮'});
	}//end func
});//end ready
