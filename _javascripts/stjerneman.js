'use strict';

(function($, window, document) {
  $(document).ready(function () {
    // Protect email links from SPAM.
    $('.pfs').pfs();

    // Smooth scrolling
    $('[href^="#"]').click(function(e) {
      e.preventDefault();
      var target = $(this).attr("href");
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 600);
    });
  });
})(jQuery, window, document);

/**
 * POST 2016-01-07-all-about-linkit.md
 */
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

/**
 * PORTFOLIO maxlength-jquery.md
 */
(function ($) {
  $(document).ready(function() {
    $('#maxlenght-demo-textarea').maxlength();
    $('#maxlenght-demo-input').maxlength();
    $('#maxlenght-demo-trigger').maxlength({events: ['blur']});
    $('#maxlenght-demo-textarea-slide, #maxlenght-demo-input-slide').maxlength({slider: true});
  });
})(jQuery);
