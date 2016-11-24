'use strict';

(function($, window, document) {
  $(document).ready(function () {
    // Protect email links from SPAM.
    $('.pfs').pfs();

    // Smooth scrolling
    $("[href^=#]").click(function(e) {
      e.preventDefault();
      var target = $(this).attr("href");
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 600);
    });
  });
})(jQuery, window, document);

(function ($) {
  $(document).ready(function() {
    $('.linkit-history-images').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  });
})(jQuery);
