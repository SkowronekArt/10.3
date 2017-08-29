$(function() {
    var carouselList = $("#carousel ul"),
        carouselListItem = $("#carousel ul li"),
        firstItem = carouselList.find("li:first"),
        lastItem = carouselList.find("li:last");
    var arrows = $("#arrows p"),
        leftArrow = arrows.find("span:first"),
        rightArrow = arrows.find("span:last");

    var repeater = '';
    $(arrows).mouseout(function(){
        repeater =  setInterval(function() {
            carouselList.find("li:first").clone().appendTo(carouselList);
            carouselList.css({
                'float': 'left'
            });

            carouselList.animate({
                marginLeft: '-20%'
                },
                moveFirstSlide
            );
        },
        1000);
    });
    $(arrows).mouseover(function() {
         clearInterval(repeater);
    });

    $(leftArrow).click(function() {
        changeSlideToTheLeft();
    });
    $(rightArrow).click(function() {
        changeSlideToTheRight();
    });

    function changeSlideToTheRight() {
        carouselList.find("li:last").clone().prependTo(carouselList);
        carouselList.css({
            'float': 'right'
        });
        carouselList.animate({
            marginRight: '-20%'
        },500,
        moveLastSlide()
        );
    }
    function moveLastSlide() {
        carouselList.find("li:last").remove();
        carouselList.css({
            marginRight: 0
        });
    }
    
    function changeSlideToTheLeft() {
        carouselList.find("li:first").clone().appendTo(carouselList);
        carouselList.css({
            'float': 'left'
        });
        carouselList.animate({
            marginLeft: '-20%'
        },
        moveFirstSlide
        );
    }
    function moveFirstSlide() {
        carouselList.find("li:first").remove();
        carouselList.css({
            marginLeft: 0
        }); 
    }
});