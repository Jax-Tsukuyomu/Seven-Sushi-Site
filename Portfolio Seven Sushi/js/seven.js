$(document).ready(function(){
    $("#menu").click(function(){
        $("#menunav").animate({width:"100%"});
        $("#menunav li").css({"display":"block"});
    })
    $("#menunav li").click(function(){
        $("#menunav").animate({width:"0%"});
        $("#menunav li").css({"display":"none"});
    })
});
