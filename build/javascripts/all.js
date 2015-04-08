
$(function() {                      
  $(".activate_g").click(function() { 
    $(this).addClass("nav_selected");
    $(".activate_t").removeClass("nav_selected")
    $(".timeline").removeClass("active").addClass("inactive");
    $(".grading_content").removeClass("inactive").addClass("active");         
  });
});

$(function() {                      
  $(".activate_t").click(function() {  
    $(this).addClass("nav_selected");
    $(".activate_g").removeClass("nav_selected")
    $(".grading_content").removeClass("active").addClass("inactive");
    $(".timeline").removeClass("inactive").addClass("active");          
  });
});
