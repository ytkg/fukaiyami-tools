function topView(className) {
  $(".in_display").removeClass("in_display");
  $(className).addClass("in_display");
} 

$(function() {
  $(window).keydown(function(e) {
    var n = e.keyCode;
    var imageMap = {
      65: "#a_image",
      73: "#i_image",
      85: "#u_image",
      69: "#e_image",
      79: "#o_image",
      77: "#n_image",
      78: "#n_image",
      49: "#ext_1",
      50: "#ext_2",
      51: "#ext_3",
      52: "#ext_4"
    };

    if( n in imageMap ) {
      topView(imageMap[n]);
    }
    console.log(n);
  });
});
