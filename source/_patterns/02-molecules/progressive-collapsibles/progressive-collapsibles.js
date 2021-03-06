(function progressivecollapsiblesScript($) {
  $('.collapsible h3')
    .each(function () {
      const $this = $(this);

      // create unique id for a11y relationship

      const id = `collapsible-${$this.index()}`;

      // wrap the content and make it focusable

      $this.nextUntil('h3')
        .wrapAll(`<div id="${id}" aria-hidden="true">`);
      const panel = $this.next();

      // Add the button inside the <h2> so both the heading and button semanics are read

      $this.wrapInner(`<button aria-expanded="false" aria-controls="${id}">`);
      const button = $this.children('button');

      // Toggle the state properties

      button.on('click', function () {
        const state = $(this)
          .attr('aria-expanded') === 'false';
        $(this)
          .attr('aria-expanded', state);
        panel.attr('aria-hidden', !state);
      });
    });
}(jQuery));
