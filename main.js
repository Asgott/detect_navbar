/* require jQuery */
$(document).ready(function(){
  function navbar(){
    if($('#navbar-section').offset().top < window.pageYOffset){
      for ($i = 1; $i < $('section').length+1; $i++){
        
        if($('#item-' + ($i)).offset().top < window.pageYOffset ){
         $('nav li').removeClass('active');
         $('#sectnav-' + ($i)).addClass('active');
         $height = ($('#item-' + ($i)).height()/100);
         $('.active .bar').css('background', 'linear-gradient(#595959 ' + ((window.pageYOffset-$('#item-' + ($i)).offset().top )/$height - 1) +'%, rgba(89,89,89,0.1) ' + ((window.pageYOffset-$('#item-' + ($i)).offset().top )/$height) +'%)');
         
       }
     }
   }
   else{
     $('nav li').removeClass('active');
   }
 }

 $(window).on('scroll',function(){

  navbar();

  if($('#navbar-section').offset().top < window.pageYOffset){
    $('#navbar').addClass('inview');
  }else{
    $('#navbar').removeClass('inview');
  }


});

 $('nav li').on('click', function(){
   
  $('html, body').stop().animate({scrollTop:($('#item-'+($(this).index()+1))).offset().top+1}, 500);
  
});
});