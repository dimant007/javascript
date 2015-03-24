(function($){

 $.fn.slider = function (slider) {

    setInterval(function() {
        $('#slider1 ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('#slider1 ul li:first-child').appendTo('#slider1 ul');
            $('#slider1 ul').css('left', '');
        });

        $(".h-carousel-items").animate({left: "-222px"}, 200);
        setTimeout(function () {
            $(".h-carousel-items .b-carousel-block").eq(0).clone().appendTo(".h-carousel-items");
            $(".h-carousel-items .b-carousel-block").eq(0).remove();
            $(".h-carousel-items").css({"left":"0px"});
        }, 300);
    },  8000);

    var slideCount = $('#slider1 ul li').length;
    var slideWidth = $('#slider1 ul li').width();
    var slideHeight = $('#slider1 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider1').css({ width: slideWidth, height: slideHeight });

    $('#slider1 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider1 ul li:last-child').prependTo('#slider1 ul');

    function moveLeft() {
        $('#slider1 ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider1 ul li:last-child').prependTo('#slider1 ul');
            $('#slider1 ul').css('left', '');
        });

        $(".h-carousel-items .b-carousel-block").eq(-1).clone().prependTo(".h-carousel-items");
        $(".h-carousel-items").css({"left":"-222px"});
        $(".h-carousel-items").animate({left: "0px"}, 200);
        $(".h-carousel-items .b-carousel-block").eq(-1).remove();
    };

    function moveRight() {
        $('#slider1 ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('#slider1 ul li:first-child').appendTo('#slider1 ul');
            $('#slider1 ul').css('left', '');
        });

        $(".h-carousel-items").animate({left: "-222px"}, 200);
        setTimeout(function () {
            $(".h-carousel-items .b-carousel-block").eq(0).clone().appendTo(".h-carousel-items");
            $(".h-carousel-items .b-carousel-block").eq(0).remove();
            $(".h-carousel-items").css({"left":"0px"});
        }, 300);

    };

     $('.b-carousel-block:first-child').click(function () {
     $('#slider1 ul:first-child').animate({
         left: + slideWidth
     }, 500, function () {
         $('#slider1 ul li:first-child').appendTo('#slider1 ul:nth-child(2)');
         $('#slider1 ul:first-child').css('left', '');
     });

    $('a.control_prev').click(function () {
        moveLeft();
    });
    $('a.control_next').click(function () {
        moveRight();
    });
 };

})(jQuery);
