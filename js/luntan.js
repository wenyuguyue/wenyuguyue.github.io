$(document).ready(function() {
	//	$("#select").click(function(){
	$("#select>option:first").hide();
	//	})

	for(var i = 0; i < 4; i++) {
		var k = $("<div  class='kuangjia'></div>").html("<div class='zhuti'><p class = 'fl_l' >&nbsp;&nbsp;特别主题 </p><img class ='on_off fl_r' src = 'img/luntan/collapsed_no.gif'/></div>")
		$(".kuangjia").eq(i + 1).after(k);
	}
	$(".kuangjia").eq(2).children(":first").children().filter(":first").html("&nbsp;&nbsp;都市生活");
	$(".kuangjia").eq(3).children(":first").children().filter(":first").html("&nbsp;&nbsp;天府城市");
	$(".kuangjia").eq(4).children(":first").children().filter(":first").html("&nbsp;&nbsp;中华大地");
	$(".kuangjia").eq(5).children(":first").children().filter(":first").html("&nbsp;&nbsp;社区管理");

	data = [{
			"img": "img/luntan/logo-dsxq.jpg",
			"name": "都市闲情",
			"title": "主题: 8977, 帖数: 17万",
			"time": "最后发表: 2020-7-17 10:51"
		}, {
			"img": "img/luntan/logo-ydsk.jpg",
			"name": "运动时空",
			"title": "主题: 655, 帖数: 8532",
			"time": "最后发表: 2020-7-10 17:16"
		}, {
			"img": "img/luntan/logo-yysj.jpg",
			"name": "影音世界",
			"title": "主题: 2563, 帖数: 1万",
			"time": "最后发表: 2020-7-10 17:09"
		}, {
			"img": "img/luntan/logo-mslt.jpg",
			"name": "美食天地",
			"title": "主题: 3236, 帖数: 3万",
			"time": "最后发表: 2020-7-10 17:16"
		}, {
			"img": "img/luntan/logo-lysc.jpg",
			"name": "旅游收藏",
			"title": "主题: 1104, 帖数: 3988",
			"time": "最后发表: 2020-7-24 09:44"
		}]
		//		url: "js/a.json",
		//		success: function(data) {
	var m = $("<div class='mokuai'></div>");
	$(".kuangjia:eq(2)").append(m);
	$.each(data, function(k, v) {
		m.append('<dl class="xiaomokuai fl_l"><dt class="fl_l"><img src="img/luntan/logo-bbs.jpg"/></dt><dd class="fl_l"><h2><a href="#">装备交易</a></h2><p>主题: 2090, 帖数: 2万</p><p>	<a href="#">最后发表: 2020-7-10 17:19</a></p></dd></dl>')
		var n = m.children(":eq(" + k + ")");
		n.find("img").attr("src", v.img);
		n.children(":eq(1)").children(":eq(0)").find("a").text(v.name);
		n.children(":eq(1)").children(":eq(1)").text(v.title);
		n.children(":eq(1)").children(":eq(2)").find("a").text(v.time);
	});

	//		}

	//	$.ajax({
	//		url: "js/b.json",
	//		success: function(data) {
	data2 = [{
		"img": "img/luntan/logo-yb.jpg",
		"name": "517宜宾",
		"title": "主题: 139, 帖数: 1125",
		"time": "最后发表: 2019-7-18 11:52"
	}, {
		"img": "img/luntan/logo-dy.jpg",
		"name": "517德阳",
		"title": "主题: 385, 帖数: 3996",
		"time": "最后发表: 2020-7-10 17:09"
	}, {
		"img": "img/luntan/logo-ya.jpg",
		"name": "517雅安",
		"title": "主题: 1080, 帖数: 4万",
		"time": "最后发表: 2020-3-5 15:56"
	}, {
		"img": "img/luntan/logo-ab.jpg",
		"name": "517阿坝",
		"title": "主题: 369, 帖数: 4759",
		"time": "最后发表: 2017-4-25 14:03"
	}, {
		"img": "img/luntan/logo-dz.jpg",
		"name": "517达州",
		"title": "主题: 90, 帖数: 1105",
		"time": "最后发表: 2019-5-13 09:36"
	}, {
		"img": "img/luntan/logo-gy.jpg",
		"name": "517广元",
		"title": "主题: 140, 帖数: 1155",
		"time": "最后发表: 2019-5-13 09:36"
	}, {
		"img": "img/luntan/logo-ga.jpg",
		"name": "517广安",
		"title": "主题: 87, 帖数: 1028",
		"time": "最后发表: 2020-7-10 17:17"
	}, {
		"img": "img/luntan/logo-zy.jpg",
		"name": "517资阳",
		"title": "主题: 50, 帖数: 549",
		"time": "最后发表: 2020-8-13 17:09"
	}, {
		"img": "img/luntan/logo-my.jpg",
		"name": "517绵阳",
		"title": "主题: 357, 帖数: 1753",
		"time": "最后发表: 2020-7-10 17:14"
	}, {
		"img": "img/luntan/logo-pzh.jpg",
		"name": "517攀枝花",
		"title": "主题: 110, 帖数: 1010",
		"time": "最后发表: 2018-5-24 15:31"
	}, {
		"img": "img/luntan/logo-liangshan.jpg",
		"name": "517凉山",
		"title": "主题: 328, 帖数: 2375",
		"time": "最后发表: 2019-6-25 15:23"
	}, {
		"img": "img/luntan/logo-leshan.jpg",
		"name": "517乐山",
		"title": "主题: 687, 帖数: 5428",
		"time": "最后发表: 2019-5-13 09:36"
	}, {
		"img": "img/luntan/logo-nj.jpg",
		"name": "517内江",
		"title": "主题: 29, 帖数: 339",
		"time": "最后发表: 2019-9-17 14:05"
	}];

	var m = $("<div class='mokuai'></div>");
	$(".kuangjia:eq(3)").append(m);
	$.each(data2, function(k, v) {
		m.append('<dl class="xiaomokuai fl_l"><dt class="fl_l"><img src="img/luntan/logo-bbs.jpg"/></dt><dd class="fl_l"><h2><a href="#">装备交易</a></h2><p>主题: 2090, 帖数: 2万</p><p>	<a href="#">最后发表: 2020-7-10 17:19</a></p></dd></dl>')
		var n = m.children(":eq(" + k + ")");
		n.find("img").attr("src", v.img);
		n.children(":eq(1)").children(":eq(0)").find("a").text(v.name);
		n.children(":eq(1)").children(":eq(1)").text(v.title);
		n.children(":eq(1)").children(":eq(2)").find("a").text(v.time);
	});

	//		}
	//	});

	//	$.ajax({
	//		url: "js/c.json",
	//		success: function(data) {
	data3 = [{
		"img": "img/luntan/logo-bj.jpg",
		"name": "517北京",
		"title": "主题: 448, 帖数: 3153",
		"time": "最后发表: 2018-5-21 14:03"
	}, {
		"img": "img/luntan/logo-sh.jpg",
		"name": "517江浙沪",
		"title": "主题: 359, 帖数: 2625",
		"time": "最后发表: 2020-7-10 17:17"
	}, {
		"img": "img/luntan/logo-gz.jpg",
		"name": "517广东",
		"title": "主题: 351, 帖数: 3066",
		"time": "最后发表: 2020-8-25 10:04"
	}, {
		"img": "img/luntan/logo-hn.jpg",
		"name": "517海南",
		"title": "主题: 230, 帖数: 3890",
		"time": "最后发表: 2018-3-26 20:16"
	}, {
		"img": "img/luntan/logo-yn.jpg",
		"name": "517云南",
		"title": "主题: 629, 帖数: 8556",
		"time": "最后发表: 2019-6-25 15:21"
	}, {
		"img": "img/luntan/logo-cq.jpg",
		"name": "517重庆",
		"title": "主题: 426, 帖数: 5698",
		"time": "最后发表: 2020-7-10 17:18"
	}];
	var m = $("<div class='mokuai'></div>");
	$(".kuangjia:eq(4)").append(m);
	$.each(data3, function(k, v) {
		m.append('<dl class="xiaomokuai fl_l"><dt class="fl_l"><img src="img/luntan/logo-bbs.jpg"/></dt><dd class="fl_l"><h2><a href="#">装备交易</a></h2><p>主题: 2090, 帖数: 2万</p><p>	<a href="#">最后发表: 2020-7-10 17:19</a></p></dd></dl>')
		var n = m.children(":eq(" + k + ")");
		n.find("img").attr("src", v.img);
		n.children(":eq(1)").children(":eq(0)").find("a").text(v.name);
		n.children(":eq(1)").children(":eq(1)").text(v.title);
		n.children(":eq(1)").children(":eq(2)").find("a").text(v.time);
	});

	//	$.ajax({
	//		url: "js/d.json",
	//		success: function(data) {
	data4 = [{
		"img": "img/luntan/logo-bbs.jpg",
		"name": "站务管理",
		"title": "主题: 1165, 帖数: 1万",
		"time": "最后发表: 2019-3-26 16:19"
	}];
	var m = $("<div class='mokuai'></div>");
	$(".kuangjia:eq(5)").append(m);
	$.each(data4, function(k, v) {
		m.append('<dl class="xiaomokuai fl_l"><dt class="fl_l"><img src="img/luntan/logo-bbs.jpg"/></dt><dd class="fl_l"><h2><a href="#">装备交易</a></h2><p>主题: 2090, 帖数: 2万</p><p>	<a href="#">最后发表: 2020-7-10 17:19</a></p></dd></dl>')
		var n = m.children(":eq(" + k + ")");
		n.find("img").attr("src", v.img);
		n.children(":eq(1)").children(":eq(0)").find("a").text(v.name);
		n.children(":eq(1)").children(":eq(1)").text(v.title);
		n.children(":eq(1)").children(":eq(2)").find("a").text(v.time);
	});
	//
	//		}
	//	});

	$(".on_off").click(function() {
		if($(this).attr("src") == "img/luntan/collapsed_no.gif") {
			$(this).attr("src", "img/luntan/collapsed_yes.gif")
			$(this).parent().next().slideUp(1000);
		} else if($(this).attr("src") == "img/luntan/collapsed_yes.gif") {
			$(this).attr("src", "img/luntan/collapsed_no.gif")
			$(this).parent().next().slideDown(1000);
		}
	})

	var date = new Date();
	$("#time").html("GMT+8," + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes());

	$(window).scroll(function() {
		$("#scroll").attr("style", "left:" + ($(window).width() - 40) + "px")
		document.getElementById("qmenu").className = "hide";
		if($(document).scrollTop() <= 0) {
			$("#scroll").addClass("hide");
		} else {
			$("#scroll").removeClass("hide");
		}

	})
	$("#scroll").mouseover(function() {
		$("#scroll").css("background-position", "-40px top");
	})
	$("#scroll").mouseout(function() {
		$("#scroll").css("background-position", "left top");
	})

	$("#scroll").click(function() {
		window.scrollTo(0, 0);
	})

})

function showMenu() {

	if(document.getElementById("qmenu").className == "hide") {
		document.getElementById("qmenu").className = "show";
	} else {
		document.getElementById("qmenu").className = "hide";
	}
}