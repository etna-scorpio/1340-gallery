'use strict';

function toggleContextMenu() {
	var btn = $('.js-context-btn');
	var menu = $('.js-context-menu');

	btn.click(function (e) {
		e.preventDefault();
		menu.toggleClass('is-active');
	});
}

toggleContextMenu();