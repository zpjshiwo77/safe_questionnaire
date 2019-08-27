$(document).ready(function () {

	//-----------------------------------------定义和初始化变量----------------------------------------
	var loadBox = $('aside.loadBox');
	var articleBox = $('article');
	var windowScale = window.innerWidth / 750;
	var loadingBox = $("#loadingBox");
	var loadPer = loadingBox.find(".peopleBox");
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
		wxUser.init();
	}//edn func


	//----------------------------------------加载页面图片----------------------------------------
	function load_handler() {
		var loader = new PxLoader();
		loader.addImage('images/common/turn_phone.png');

		loader.addCompletionListener(function () {
			icom.fadeIn(articleBox);
			// load_more();
			loadingFlag = true;
			coinAnimeFlag = true;
			pageInit();
			loader = null;
		});
		loader.start();
	}//end func

	function load_more() {
		var loader = new PxLoader();
		loader.addImage('images/common/turn_phone.png');

		// 实际加载进度
		loader.addProgressListener(function (e) {
			var per = Math.round(e.completedCount / e.totalCount * 50);
			loadPer.css({ x: 2.5 * per / 100 + "rem" });
			// loadPer.css({x:3.2*per/100+"rem"});
		});

		loader.addCompletionListener(function () {
			load_timer(50);//模拟加载进度
			loader = null;
		});
		loader.start();

		coinAnime();
	}//end func

	//模拟加载进度
	function load_timer(per) {
		per = per || 0;
		per += imath.randomRange(1, 3);
		per = per > 100 ? 100 : per;
		loadPer.css({ x: 2.5 * per / 100 + "rem" });
		// loadPer.css({x:3.2*per/100+"rem"});
		if (per == 100) {
			setTimeout(function () {
				loadingFlag = true;
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

	var baseInfoBoxScroll = new IScroll('#baseInfoBox', {
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
			// indexBoxAnime();
			eventInit();
			DevelopTest();
			monitor_handler();
		}
	}//end func

	/**
	 * 开发测试使用
	 */
	function DevelopTest() {
		// loadingBox.hide();
		// QABox.show();

		roadSenceInit();
		senceAnimeTest();
		QABox.show();
		swiperInit();

		// baseQABoxShow();

		// resultBox.show();
	}

	/**
	 * swiper初始化
	 */
	function swiperInit() {
		var qa8swiper = new Swiper('#qaswiper', {
			pagination: {
				el: '.swiper-pagination',
			},
		})
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

		baseQABox.find(".itemName").on("click", openCareerItem);
		baseQABox.on("click", ".ans", choseBaseQAAns);
		$("#birthday").on('change', changeMarriageItem);
		$("#submitBtn").on("touchend", vefBaseInfo);
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
		console.log(baseInfo);
		showResultBox();
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
		}
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
		var numBox = loadingBox.find(".num");
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
