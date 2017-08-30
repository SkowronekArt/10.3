$(function() {
    var carouselList = $("#carousel ul"),
        carouselListItem = $("#carousel ul li"),
        firstItem = carouselList.find("li:first"),
        lastItem = carouselList.find("li:last");
    var arrows = $("#arrows p"),
        leftArrow = arrows.find("span:first"),
        rightArrow = arrows.find("span:last");
    var repeater = '';

    startCarousel();

    function startCarousel() {
        repeater = setInterval(function() {
            carouselList.find("li:first")
                        .clone()
                        .appendTo(carouselList);
            carouselList.animate({
                marginLeft: '-20%'
                },
                100,
                removeFirstSlide
            );
        },
        1000);
    }

//              on mouseOver
    $(arrows).mouseover(function() {
         clearInterval(repeater);
    });
    $(arrows).mouseout(startCarousel);


//              on click
    $(leftArrow).click(changeSlideToTheLeft);
    $(rightArrow).click(changeSlideToTheRight);


//              to the left
    function changeSlideToTheLeft() {
        carouselList.find("li:first")
                    .clone()
                    .appendTo(carouselList);
        carouselList.animate({
            marginLeft: '-20%'
        },
        100,
        removeFirstSlide
        );
    }
    function removeFirstSlide() {
        carouselList.find("li:first").remove();
        carouselList.css({
            marginLeft: 0
        });
    }

//              to the right
    function changeSlideToTheRight() {
        carouselList.find("li:last")
                    .clone()
                    .prependTo(carouselList);
        carouselList.css({
            marginLeft: '-20%'
        });
        carouselList.animate({
            marginLeft: 0
        },
        100,
        removeLastSlide
        );
    }
    function removeLastSlide() {
        carouselList.find("li:last").remove();
    }
});