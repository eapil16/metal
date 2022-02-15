'use strict';
document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('body').addEventListener('click', e => {
    if (e.target.closest('.date-filter')) {
        e.target.classList.toggle('active');
    }
  });

  $('select').styler({
		selectSearch: true,
	});

  $('[data-role=toggle-block]').each(function() {
		var $block = $(this);
		$block.on('click.toggle', '[data-role=toggle-btn]', function() {
			var $btn = $(this);
			var $data = $block.find('[data-role=toggle-data]');

			// toggle $btn
			$btn.toggleClass('shown');
			// show/hide $data
			$data.toggleClass('shown-block');
		});
	});

});