$(document).ready(function () {
    $(".super").hide();

    $("#hide").click(function () {
      $(".super").hide();
    });
  
    $("#show").click(function () {
      $(".super").show();
    });

    $(".pow").hide();

    $("#in").click(function(){
        $(".pow").fadeIn();
        $(".pow").fadeIn("fast");
    });

    $("#out").click(function(){
        $(".pow").fadeOut();
        $(".pow").fadeOut("fast");
    });

    $(".bang").hide();

    $("#up").click(function(){
        $(".bang").slideUp("fast");
    });

    $("#down").click(function(){
        $(".bang").slideDown("fast");
      });
  });