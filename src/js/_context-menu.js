function toggleContextMenu() {
	let btn = $('.js-context-btn');
	let menu = $('.js-context-menu');

	btn.click((e) => {
		e.preventDefault();
		menu.toggleClass('is-active');
	});
}

toggleContextMenu();