$(function () {
  $("#tab2").hide();
});
$(function () {
  $("#tabs-title-2").click(function () {
    $("#tabs-title-1").css("background-color: #ffffff;");
    $("#tabs-title-2").css("background-color: #E9ECEF;");
    $("#tab1").hide();
    $("#tab2").show();
  });
});
$(function () {
  $("#tabs-title-1").click(function () {
    $("#tabs-title-2").css("background-color: #ffffff;");
    $("#tabs-title-1").css("background-color: #E9ECEF;");
    $("#tab2").hide();
    $("#tab1").show();
    
  });
});
