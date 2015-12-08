/**
 *  Fixed nav scroller.
 */

'use strict';

(function (window, $, undefined) {
  $(document).ready(function () {
    return;
    var state = {
      isVisible: false,
      offset: 0,
      showHandler: null,
      hideHandler: null,
      isMobile: false
    };

    var $body = $(document.body),
        $window = $(window),
        $fixedNav = $('#top-header').find('nav'),
        $content = $('body'),
        $viewportWidth,
        $spacer;


    function setupNav() {
      state.offset = $content.get(0).offsetTop;

      $viewportWidth = $('body').outerWidth();
      if ($viewportWidth <= 520) {
        state.isMobile = true;
        state.offset = 0;
      }

      $('body #nav-spacer').remove();
      $spacer = $('<div/>').attr('id', 'nav-spacer').css({
        display: 'none',
        width: $fixedNav.width(),
        height: $fixedNav.height()
      });
      $fixedNav.after($spacer);

      showHandler.setup();
    }

    function showHandler (e) {
      if (window.scrollY > state.offset && !state.isVisible) {
        toggleNav();
        state.isVisible = true;
        showHandler.destroy();
        hideHandler.setup();
      }
    }

    showHandler.setup = function () {
      $window.on({'scroll touchmove': this});
    };

    showHandler.destroy = function () {
      $window.off({'scroll touchmove': this});
    };

    function hideHandler (e) {
      if (window.scrollY <= state.offset && state.isVisible) {
        toggleNav();
        state.isVisible = false;
        hideHandler.destroy();
        showHandler.setup();
      }
    }

    hideHandler.setup = function () {
      $window.on({'scroll touchmove': this});
    };

    hideHandler.destroy = function () {
      $window.off({'scroll touchmove': this});
    };

    function toggleNav() {
      if (state.isVisible && state.isMobile) {
        $spacer.hide();
        $fixedNav.removeClass('nav-fixed');
      }
      else if (!state.isVisible && state.isMobile) {
        $spacer.show();
        $fixedNav.addClass('nav-fixed');
      }
      else if (state.isVisible && !state.isMobile) {
        $spacer.hide();
        $fixedNav.removeClass('nav-fixed nav-fade-out');
      }
      else {
        $spacer.show();
        $fixedNav.addClass('nav-fixed nav-fade-in');
      }
    }

    if ($fixedNav.length && $content.length) {
      setupNav();
    }

    $window.on('resize', function() {
      setupNav();
    });

  });
})(window, jQuery);
