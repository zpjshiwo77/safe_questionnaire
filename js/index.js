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


	/**
	 * 页面初始化
	 */
	function pageInit() {
		if (loadingFlag && coinAnimeFlag) {
			icom.fadeOut(loadingBox);
			eventInit();
			// DevelopTest();
			monitor_handler();
		}
	}//end func

	/**
	 * 开发测试使用
	 */
	function DevelopTest() {
		loadingBox.hide();
		QABox.show();
	}

	/**
	 * 事件初始化
	 */
	function eventInit() {
		$(".limitBtn").on("touchend", limitClick);
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
