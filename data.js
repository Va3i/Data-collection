var hi = window.innerHeight - 50;
$(function () {
    $(window).on('resize', function (){
        if($(window).width() < 825){
            console.log("that is extreme");
            $(".left-side").css("margin-top", "40px");
        }else {
            $(".left-side").css({'margin-top': '20px', 'background' : 'crimson'});
        }
    });
    $('.menu').css("height", hi + "px");
}());