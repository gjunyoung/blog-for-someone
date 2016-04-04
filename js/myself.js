/**
 * Created by Administrator on 2016/3/19.
 */

//function changebg(a){
//
//    $(a).dropdown().on("click", function(e) {
//        $(".bg").css({
//            "background": "url('img/bgimg/wood.jpg')  fixed",
//            "-webkit-background-size": "contain",
//            "-moz-background-size": "contain",
//            "-o-background-size": "contain",
//            "background-size": "contain",
//            "color":"#fff",
//            "background-color":"#333",
//            "font-family": "'microsoft yahei' ,Arial,sans-serif"
//        });
//    });
//}
$("#mytab a").click(function(e){
    e.preventDefault();
    $(this).tab("show");
});

$("#menu a").css("font-size","1.5em");

$("#footer a").css("font-size","1em");

$(function(){

    $('#dropdown2').dropdown().on("click", function(e) {
        $(".bg").css({
            "background": "url('{{site.baseurl}}/img/bgimg/l1.jpg')  fixed",
            "-webkit-background-size": "contain",
            "-moz-background-size": "contain",
            "-o-background-size": "contain",
            "background-size": "contain",
            "color":"#fff",
            "background-color":"#333",
            "font-family": "'microsoft yahei' ,Arial,sans-serif"
        });
    });

    $('#dropdown3').dropdown().on("click", function(e) {
        $(".bg").css({
            "background": "url('{{site.baseurl}}/img/bgimg/nana.jpg') repeat ",
            "-webkit-background-size": "auto",
            "-moz-background-size": "auto",
            "-o-background-size": "auto",
            "background-size": "auto",
            "color":"#fff",
            "background-color":"#333",
            "font-family": "'microsoft yahei' ,Arial,sans-serif"
        });
    });

    $('#dropdown1').dropdown().on("click", function(e) {
        $(".bg").css({
            "background": "url('{{site.baseurl}}/img/bgimg/s2.jpg')  fixed",
            "-webkit-background-size": "contain",
            "-moz-background-size": "contain",
            "-o-background-size": "contain",
            "background-size": "contain",
            "color":"#fff",
            "background-color":"#333",
            "font-family": "'microsoft yahei' ,Arial,sans-serif"
        });
    });

    $('#dropdown4').dropdown().on("click", function(e) {
        $(".bg").css({
            "background": "url('{{site.baseurl}}/img/bgimg/star.jpg') no-repeat center fixed",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "color":"#fff",
            "background-color":"#333",
            "font-family": "'microsoft yahei' ,Arial,sans-serif"
        });
    });

    $('#dropdown5').dropdown().on("click", function(e) {
        $(".bg").css({
            "background": "url('{{site.baseurl}}/img/bgimg/sad.jpg')  fixed",
            "-webkit-background-size": "100% 100%",
            "-moz-background-size": "100% 100%",
            "-o-background-size": "100% 100%",
            "background-size": "100% 100%",
            "color":"#fff",
            "background-color":"#333",
            "font-family": "'microsoft yahei' ,Arial,sans-serif"
        });
    });

    $('#dropdown6').dropdown().on("click", function(e) {
        $(".bg").css({
            "background": "url('{{site.baseurl}}/img/bgimg/wood.jpg')  fixed",
            "-webkit-background-size": "auto",
            "-moz-background-size": "auto",
            "-o-background-size": "auto",
            "background-size": "auto",
            "color":"#fff",
            "background-color":"#333",
            "font-family": "'microsoft yahei' ,Arial,sans-serif"
        });
    });

});
