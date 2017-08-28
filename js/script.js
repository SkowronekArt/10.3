
var carouselList = $("#carousel ul");

var firstItem = carouselList.find("li:first");
var lastItem = carouselList.find("li:last");

setInterval(changeSlide, 3000);



function changeSlide() {
	carouselList.find("li:first").clone().appendTo(carouselList);
	carouselList.animate({
		marginLeft: '-250px', width: '1750px', marginRight: '-250px'
		},
		1000,
		moveFirstSlide
	);
}
function moveFirstSlide() {

	carouselList.find("li:first").remove();
	carouselList.animate({
		marginLeft: '0', width: '1250px', marginRight: '0'
		},
		0
	);
}


 





/*
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
	cloneFirstSlide()
}


function cloneFirstSlide() {
$( "#carousel ul li" ).first().clone().prependTo( "ul" );
}
*/

