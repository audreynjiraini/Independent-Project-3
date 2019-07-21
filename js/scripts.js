$(document).ready(function(){
    $(".bold-center").css("text-align", "center");
    $(".bold-center").css("font-weight", "bold");

    $(".hidden").css("text-align", "center");
    $(".hidden").css("margin", "5%");

    $('.icon').hover(function(){
        
    })
    
    $(".hide1").click(function(){
      $("#hidden1").slideToggle("slow");
    });
    $(".hide2").click(function(){
        $("#hidden2").slideToggle("slow");
      });
      $(".hide3").click(function(){
        $("#hidden3").slideToggle("slow");
      });
  });