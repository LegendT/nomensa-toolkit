// (function mainThemeScript($, Drupal) {
//   Drupal.behaviors.plStarter = {
//     attach(context) {
//       $('html', context).addClass('js');
//     },
//   };
// }(jQuery, Drupal));
"use strict";
// (function secondaryThemeScript($, Drupal) {
//   Drupal.behaviors.demo2 = {
//     attach(context) {
//       $('html', context).addClass('js2');
//     },
//   };
// }(jQuery, Drupal));
"use strict";
'use strict';

(function progressivecollapsiblesScript($, Drupal) {
  Drupal.behaviors.progressivecollapsibles = {
    attach: function attach(context) {
      $('.collapsible h3').each(function () {
        var $this = $(this);

        // create unique id for a11y relationship

        var id = 'collapsible-' + $this.index();

        // wrap the content and make it focusable

        $this.nextUntil('h3').wrapAll('<div id="' + id + '" aria-hidden="true">');
        var panel = $this.next();

        // Add the button inside the <h2> so both the heading and button semanics are read

        $this.wrapInner('<button aria-expanded="false" aria-controls="' + id + '">');
        var button = $this.children('button');

        // Toggle the state properties

        button.on('click', function () {
          var state = $(this).attr('aria-expanded') === 'false';
          $(this).attr('aria-expanded', state);
          panel.attr('aria-hidden', !state);
        });
      });
    }
  };
})(jQuery, Drupal);
//# sourceMappingURL=script.js.map
