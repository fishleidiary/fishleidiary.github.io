// $(window).on('load', function(){
// 	$('.loading').fadeOut();	
// });

$(document).ready(function() {
$(".loading").fadeTo(1500, 0.6);


setTimeout(function(){$(".loading").attr({style:"display:none"}); }, 1300);

  });