// $(window).on('load', function(){
// 	$('.loading').fadeOut();	
// });

$(document).ready(function() {
$(".loading").fadeTo(500, 0.7);


setTimeout(function(){$(".loading").attr({style:"display:none"}); }, 400);

  });