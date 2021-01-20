var snows;
var w = 1200;
var h = 1100;
var x = 0;
var ls = [];
var ts = [];
var w1 = 0;
var paoma;
var setT;

function a() {
	for(var i = 0; i < 50; i++) {
		var sw = document.createElement("img");
		sw.setAttribute("class", "s");
		sw.style.position = "absolute";
		sw.setAttribute("src", "img/xlxs/snow" + (i % 4) + ".gif")
		sw.style.display = "block";
		document.body.appendChild(sw);
	}
	snows = document.getElementsByClassName("s");
	for(var i = 0; i < snows.length; i++) {
		ls.push(parseInt(Math.random() * w));
		ts.push(-Math.ceil(h * Math.random()));
	}
	snow();

	paoma = document.getElementById("pm");
	for(var gg = 1; gg < 17; gg++) {
		var img1 = document.createElement("div");
		img1.innerHTML = "<img src=\"img/xlxs/pa" + (gg % 10 + 1) + ".jpg\" width=\"90%\" height=\"90%\" onmouseover=\"stop(this)\" onmouseout=\"start(this)\"/>"
		img1.children[0].style.opacity = "0.5";
		paoma.appendChild(img1);
	}

	setT = setInterval("pa()", 10);

}

function snow() {
	x++;
	for(var i = 0; i < snows.length; i++) {
		ts[i] += 15;
		if(ts[i] > h) {
			ts[i] = 0;
		}
		var b = Math.random() > 0.5 ? 1 : 0;
		if(b == 1) {
			ls[i] += Math.random() * 10;
		}
		if(ls[i] <= 0) {
			ls[i] = w;
		} else if(ls[i] >= w) {
			ls[i] = 0;
		}
		snows[i].style.top = ts[i] + "px";
		snows[i].style.left = ls[i] + "px";
		snows[i].style.width = ((ts[i] / h) * 8) + 5 + "px";
		snows[i].style.height = ((ts[i] / h) * 8) + 5 + "px";

	}
	setTimeout("snow()", 100);
}

function change(o) {

	o.parentNode.parentNode.setAttribute("class", o.getAttribute("id"));

	//	o.parentNode.parentNode.style.background="url(img/xlxs/"+o.getAttribute("id")+".jpg)"
}

function pa() {
	w1--;
	if(w1 <= -1200) {
		w1 = 0;
	}

	paoma.style.left = w1 + "px";

}

function stop(o) {
	clearTimeout(setT);
	var xxx = document.getElementById("pm").children;
	var uu = event.clientX;
	o.style.opacity = "1";

}

function start(o) {
	setT = setInterval("pa()", 10);
	o.style.opacity = "0.5";
}