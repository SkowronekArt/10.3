var carouselList = $("#carousel ul");
$(function(){


	setInterval(function(changeSlide) {
		carouselList.animate({'marginLeft':-400}, 500, (function(moveFirstSlide) {

			var firstItem = carouselList.find("li:first");
			var lastItem = carouselList.find("li:last");
			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});

		}), 1000);
	});	
});