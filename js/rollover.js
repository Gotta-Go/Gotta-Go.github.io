$(document).ready(function(){
    $("img.main").hover(
    function() {
    $(this).stop().animate({"opacity": "0"}, "slow");
    },
    function() {
    $(this).stop().animate({"opacity": "1"}, "slow");
    });
});