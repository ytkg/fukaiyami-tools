defaultImageMap = {
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

jagarikoImageMap = {
  49: "#a_image",
  50: "#ext_6",
  51: "#ext_7",
  52: "#ext_8",
  53: "#ext_9",
  54: "#ext_7",
  55: "#ext_10",
  56: "#ext_11",
  57: "#ext_12",
  48: "#ext_13",
  81: "#ext_14",
  87: "#ext_12",
  69: "#ext_15",
  82: "#ext_16",
  84: "#ext_2",
  89: "#ext_17",
  85: "#ext_19",
  73: "#ext_20",
  79: "#ext_21",
  80: "#ext_22",
  65: "#ext_23",
  83: "#ext_24",
  68: "#ext_25",
  70: "#ext_26",
  71: "#ext_26",
  72: "#ext_27",
  74: "#ext_3",
  75: "#ext_28",
  76: "#ext_29",
  90: "#ext_30",
  88: "#ext_31",
  67: "#n_image",
};

imageMapIndex = 0; 
imageMaps = [defaultImageMap, jagarikoImageMap];

function topView(className) {
  $(".in_display").removeClass("in_display");
  $(className).addClass("in_display");
} 

$(function() {
  $(window).keydown(function(e) {
    var n = e.keyCode;
    if ( n == 32 ) {
      imageMapIndex += 1;
      if (imageMapIndex == imageMaps.length) {
        imageMapIndex = 0;
      }
    } 

    if( n in imageMaps[imageMapIndex] ) {
      topView(imageMaps[imageMapIndex][n]);
    }
    console.log(n);
  });
});
