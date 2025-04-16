$(document).ready(function() {
    $("#up").click(function(){
        $(".animate").animate({
            marginTop: "-=50px"
        });
    });

    $("#down").click(function(){
        $(".animate").animate({
            marginTop: "+=50px"
        });
    });

    $("#left").click(function(){
        $(".animate").animate({
            marginLeft: "-=50px"
        });
    });

    $("#right").click(function(){
        $(".animate").animate({
            marginLeft: "+=50px"
        });
    });

    $("#start").click(function(){
        $(".stop").animate({
            opacity: '1.0',
            height: '375px',
            width: '500px'
        }, 5000);
    });

    $("#stop").click(function(){
        $(".stop").stop();
      });

    $("#call").click(function(){
        $("#hide").hide("slow", function(){
            alert("The paragraph is now hidden");
        });
    });

    $("#effect").click(function() {
      $("#chain").css("color", "blue").fadeIn(1000, function(){
        $("#chain2").css("color", "blue").fadeIn(1000, function(){
            $("#chain3").css("color", "blue").fadeIn(1000);
        });
      });
    });
});