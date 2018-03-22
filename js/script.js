$(function() {
  $(window).keydown(function(e) {
    var n = e.keyCode;
    var numList = [65, 73, 85, 69, 79, 77, 78];
    current = $.inArray(n, numList);
    console.log(current)
    if (current == -1) {
      console.log("non")
    } else if (current == 0) {
      $(".in_display").addClass("non_display");
      $("#a_image").removeClass("non_display");
      $(".in_display").removeClass("in_display");
      $("#a_image").addClass("in_display");
    } else if (current == 1) {
      $(".in_display").addClass("non_display");
      $("#i_image").removeClass("non_display");
      $(".in_display").removeClass("in_display");
      $("#i_image").addClass("in_display");
    } else if (current == 2) {
      $(".in_display").addClass("non_display");
      $("#u_image").removeClass("non_display");
      $(".in_display").removeClass("in_display");
      $("#u_image").addClass("in_display");
    } else if (current == 3) {
      $(".in_display").addClass("non_display");
      $("#e_image").removeClass("non_display");
      $(".in_display").removeClass("in_display");
      $("#e_image").addClass("in_display");
    } else if (current == 4) {
      $(".in_display").addClass("non_display");
      $("#o_image").removeClass("non_display");
      $(".in_display").removeClass("in_display");
      $("#o_image").addClass("in_display");
   } else if (current == 5 || current == 6) {
      $(".in_display").addClass("non_display");
      $("#n_image").removeClass("non_display");
      $(".in_display").removeClass("in_display");
      $("#n_image").addClass("in_display");
   }
    console.log(n);
  });
});
