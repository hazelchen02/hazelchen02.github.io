var ctx = document.getElementById("chart1").getContext("2d");
var chartdata = {
	type: "line",
	data: {
		labels: ["106", "107", "108", "109", "110", "111 年"],
		datasets: [
			{
				label: "松山機場近六年國內航線進出旅客（萬人次）",
				data: [280, 297, 309, 266, 163, 250],
				fill: false,
				borderColor: "rgb(60, 98, 135)",
				tension: 0.1,
			}
		]
	},
	options: {}
};


var inView = false;

$(document).ready(function () {
	$(window).scroll(function () {
		var scrolled = $(window).scrollTop();
		var winh = $(window).height();
		var objpos = $("#chart1").offset().top;
		if (objpos < scrolled + winh * 0.5 && !inView) {
			new Chart(ctx, chartdata);
			inView = true;
			console.log("successful!!");
		}
	});
});


var ctx2 = document.getElementById("chart2").getContext("2d");
var chartdata2 = {
	type: "line",
	data: {
		labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
		datasets: [
			{
				label: "桃園國際機場客運量總計（萬人次）",
				data: [2329, 2675, 2641, 2927, 3221, 3580, 3847, 4230, 4488, 4654, 4869, 744, 91, 534, 2839],
				fill: false,
				borderColor: "rgb(60, 98, 135)",
				tension: 0.1,
			}
		]
	},
	options: {}
};

var inView2 = false;
$(document).ready(function () {
	$(window).scroll(function () {
		var scrolled = $(window).scrollTop();
		var winh = $(window).height();
		var objpos2 = $("#chart2").offset().top;
		if (scrolled > objpos2 - winh * 0.5 && !inView2) {
			new Chart(ctx2, chartdata2);
			inView2 = true;
			console.log("successful!!");
		}
	});
});
