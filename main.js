/* require jQuery */

function navbar(){

  for ($i = 1; $i < $('section').length+1; $i++){
  
    if($('#item-' + ($i)).offset().top < window.pageYOffset ){
    	$('nav li').removeClass('active');
      $('#sectnav-' + ($i)).addClass('active');
      $('.active .bar').css('background', 'linear-gradient(#fff ' + ((window.pageYOffset-$('#item-' + ($i)).offset().top )/($('#item-' + ($i)).height()/100) - 1) +'%, #000 ' + ((window.pageYOffset-$('#item-' + ($i)).offset().top )/($('#item-' + ($i)).height()/100)) +'%)');
      
    }
  }
}

$(window).on('scroll',function(){
navbar();
});

$('nav li').on('click', function(){
  window.scrollTo(0, ($('#item-'+($(this).index()+1))).offset().top+1);
});