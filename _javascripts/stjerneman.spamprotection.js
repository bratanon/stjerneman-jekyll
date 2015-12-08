/**
 *  Protect from SPAM.
 *
 *  By Emil Stjerneman / BratAnon
 */

'use strict';

(function ($) {
  $.fn.pfs = function() {
    return this.each(function() {
      $(':nth-child(2n)', this).text('@');
      $(this).after($("<a></a>").attr('href', 'mailto:' + encodeURIComponent($(this).text())).text($(this).text())).remove();
    });
  };
}(jQuery));
