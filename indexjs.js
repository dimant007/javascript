$(document).ready(function ($) {

    setInterval(function() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });

        $(".h-carousel-items").animate({left: "-222px"}, 200);
        setTimeout(function () {
            $(".h-carousel-items .b-carousel-block").eq(0).clone().appendTo(".h-carousel-items");
            $(".h-carousel-items .b-carousel-block").eq(0).remove();
            $(".h-carousel-items").css({"left":"0px"});
}, 300);
},  8000);

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });

        $(".h-carousel-items .b-carousel-block").eq(-1).clone().prependTo(".h-carousel-items");
        $(".h-carousel-items").css({"left":"-222px"});
        $(".h-carousel-items").animate({left: "0px"}, 200);
        $(".h-carousel-items .b-carousel-block").eq(-1).remove();
    };

    function moveRight() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });

        $(".h-carousel-items").animate({left: "-222px"}, 200);
        setTimeout(function () {
            $(".h-carousel-items .b-carousel-block").eq(0).clone().appendTo(".h-carousel-items");
            $(".h-carousel-items .b-carousel-block").eq(0).remove();
            $(".h-carousel-items").css({"left":"0px"});
        }, 300);

    };

    $('a.control_prev').click(function () {
        moveLeft();
    });
    $('a.control_next').click(function () {
        moveRight();
    });
});
