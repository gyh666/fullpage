$(function () {
	var windowHeight = $(window).height();
	// var flag = false;

	$(".next").click(function () {
		$.fn.fullpage.moveSectionDown();
	});

	$("#fullpage").fullpage({
		navigation: true,
		// loopBottom: true,
		// 第 2 屏
		afterLoad(anchorLink, index) {
			if (index == 2) {
				$(".next").fadeOut();
				$(".search").show().animate({
					"right": 370,
				}, 1500, function () {
					$(".search-words").animate({
						"opacity": 1
					}, 500, function () {
						$(".search").hide();
						$(".search-final").show().animate({
							"height": 30,
							"bottom": 452,
							"right": 250
						}, 1000, function () {
							flag = true;
						});
						$(".goods02").show().animate({
							"height": 218
						}, 1000);
						$(".words02").animate({
							"opacity": 1,
						}, 500, function () {
							$(".next").fadeIn();
						});
					});
				});
			}
		},
		// 3
		onLeave(index, nextIndex, direction) {
			$(".next").fadeOut();
			if (index == 2 && nextIndex == 3) {
				$(".shirt-move").show().animate({
					"bottom": -(windowHeight - 250),
					"width": 207,
					"left": 260
				}, 2000, function () {
					$(".img-a").animate({
						"opacity": 1
					}, 500, function () {
						$(".btn-a").animate({
							"opacity": 1
						}, 500, function () {
							$(".next").fadeIn();
						});
					});
				});
				$(".cover").show();
			}
			// 4
			if (index == 3 && nextIndex == 4) {
				$(".shirt-move").hide();
				$(".t1f").show().animate({
					"bottom": -(windowHeight - 250 + 50),
					"left": 260
				}, 2000, function () {
					$(".t1f").hide();
					$(".car-shirt").show();
					$(".car").animate({
						"left": "150%"
					}, 1500, "easeInOutBack", function () {
						$(".words04-a").animate({
							"opacity": 1
						}, 500);
						$(".info").show();
						$(".info-txt").animate({
							"opacity": 1
						}, 500, function () {
							$(".next").fadeIn();
						});
					});
				});
			}
			// 5
			if (index == 4 && nextIndex == 5) {
				$(".hand").animate({
					"bottom": 0
				}, 1500, function () {
					$(".mouse-a").animate({
						"opacity": 1
					}, 500);
					$(".t1f05").fadeIn().animate({
						"bottom": 70
					}, 1000, function () {
						$(".order05").animate({
							"bottom": 390
						}, 1000, function () {
							$(".next").fadeIn();
						});
						$(".words05").addClass("word-animation");
					});
				});
			}
			// 6
			if (index == 5 && nextIndex == 6) {
				$(".t1f05").animate({
					"bottom": -(windowHeight - 500),
					"left": "37%",
					"width": 65
				}, 1000, function () {
					$(this).hide();
				});
				$(".box").animate({
					"left": "35%"
				}, 1000, function () {
					$(this).animate({
						"bottom": 40
					}, 1000, function () {
						$(this).hide();
					});
					// 背景动画
					$(".section6").animate({
						"backgroundPositionX": "100%"
					}, 4000, function () {
						$(".address").show();
						$(".man").show().animate({
							"height": 305,
							"bottom": 116
						}, 1000, function () {
							$(this).animate({
								"right": 500
							}, 1000, function () {
								$(".door").animate({
									"opacity": 1
								}, 500, function () {
									$(".women").show().animate({
										"height": 290,
										"right": 350
									}, 1000, function () {
										$(".take").animate({
											"opacity": 1
										});
										$(".next").fadeIn();
									});
								});
							});
						});
					});
					$(".words06").show().animate({
						"left": "30%"
					}, 2000, "easeOutElastic");
				});
			}
			// 7
			if (index == 6 && nextIndex == 7) {
				setTimeout(function () {
					$(".star").animate({
						"width": 100
					}, 1500, function () {
						$(".good").show();
						$(".next").fadeIn();
					})
				}, 1000, );
			}
			//  8
			$(".begin-shopping").hover(function () {
				$(".btn08-a").toggle();
			});
			$(document).mousemove(function (event) {
				var x = event.pageX - $(".hand08").width() / 2;
				var y = event.pageY + 20;
				var minY = windowHeight - $(".hand08").height();
				if (y < minY) {
					y = minY;
				}
				$(".hand08").css({
					"left": x,
					"top": y
				});
			});
			$(".again").click(function () {
				$.fn.fullpage.moveTo(1);
				// 清楚行内样式，实现动画刷新
				$("img, .remove").attr("style", "");
			});
		}
	});
});