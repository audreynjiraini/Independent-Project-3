$(document).ready(function(){
    $(".bold-center").css("text-align", "center");
    $(".bold-center").css("font-weight", "bold");

    $(".hidden").css("text-align", "center");
    $(".hidden").css("margin", "5%");
    
    $(".hide1").click(function(){
      $("#hidden1").slideToggle("slow");
      $(".hide1").slideToggle("slow");
    });
    $("#hidden1").click(function(){
        $(".hide1").slideToggle("slow");
        $("#hidden1").hide();
      });

      $(".hide2").click(function(){
        $("#hidden2").slideToggle("slow");
        $(".hide2").slideToggle("slow");
      });
      $("#hidden2").click(function(){
          $(".hide2").slideToggle("slow");
          $("#hidden2").hide();
        });

        $(".hide3").click(function(){
            $("#hidden3").slideToggle("slow");
            $(".hide3").slideToggle("slow");
          });
          $("#hidden3").click(function(){
              $(".hide3").slideToggle("slow");
              $("#hidden3").hide();
            });

    
    $(document).ready(function(){
    $("#project4").mouseenter(function(){
      $("#overlay4").show();
    }).mouseleave(function(){
      $("#overlay4").hide();
    });

    $("#project3").mouseenter(function(){
        $("#overlay3").show();
    }).mouseleave(function(){
        $("#overlay3").hide();
    });

    $("#project2").mouseenter(function(){
        $("#overlay2").show();
    }).mouseleave(function(){
        $("#overlay2").hide();
    });

    $("#project1").mouseenter(function(){
        $("#overlay1").show();
    }).mouseleave(function(){
        $("#overlay1").hide();
    });
});

$(document).ready(function(){
    $("#project5").mouseenter(function(){
        $("#overlay5").show();
    }).mouseleave(function(){
        $("#overlay5").hide();
    });
  
    $("#project6").mouseenter(function(){
        $("#overlay6").show();
    }).mouseleave(function(){
        $("#overlay6").hide();
    });
  
    $("#project7").mouseenter(function(){
        $("#overlay7").show();
    }).mouseleave(function(){
        $("#overlay7").hide();
    });
  
    $("#project8").mouseenter(function(){
        $("#overlay8").show();
    }).mouseleave(function(){
        $("#overlay8").hide();
    });
});
});

$(document).ready(function(){
    $("form").submit(function(){
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();
        if($("input#name").val() && $("input#email").val() && $("textarea#message").val() !== "") {
            alert(name + ", we have recieved your message. Thank you for reaching out to us.");
        } else {
            alert("Please enter correct information on the appropriate fields and try again.");
        };
    });
});