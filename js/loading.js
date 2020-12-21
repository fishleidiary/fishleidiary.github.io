// $(window).on('load', function(){
// 	$('.loading').fadeOut();	
// });

$(document).ready(function() {
$(".loading").fadeTo(1200, 0.8);


setTimeout(function(){$(".loading").attr({style:"display:none"}); }, 1200);

  });