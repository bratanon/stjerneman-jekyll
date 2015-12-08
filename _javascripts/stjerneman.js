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

    if (WOW !== undefined) {
      var wow = new WOW({
        boxClass: 'animation',
        animateClass: 'animated',
        offset: 0,
        mobile: true
      });

      wow.init();
    }
  });
})(jQuery, window, document);
