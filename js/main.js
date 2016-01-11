$(function() {
    
        
    var	$window = $(window),
    $body = $('body');
    
    $body.addClass('is-loading');

    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-loading');
        }, 100);
    });
    
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
