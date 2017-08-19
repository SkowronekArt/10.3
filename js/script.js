
var carouselList = $("#carousel ul");

setInterval(changeSlide, 3000);

function changeSlide() {
	carouselList.animate(
		{marginLeft: '-20%'},
		1000,
		moveFirstSlide
	);
}


function moveFirstSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	
	firstItem.insertAfter(lastItem);
	
	carouselList.animate(
		{marginLeft: '0'},
		0
	);
}