(function($){
  $(function(){
    $('.parallax').parallax();
    $('.tooltipped').tooltip({delay: 50});
    $('.slider').slider({interval: 3600, transition:600});
    $('.collapsible').collapsible();
    $('a[href*=#]').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
             if ($target.length) {
                 var targetOffset = $target.offset().top-115;
                 $('html,body').animate({scrollTop: targetOffset}, 1000);
                 return false;
            }
       }
   });
  }); 
    
})(jQuery); 