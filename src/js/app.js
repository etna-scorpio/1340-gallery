// example of simple includes for js
//=include lib/jquery.min.js
//=include lib/object-fit.min.js
//=include _detectIE.js


$(document).ready(function() {
	//=include _context-menu.js
	detectIE();

	$(function () { objectFitImages('.js-fit-img') });
});

