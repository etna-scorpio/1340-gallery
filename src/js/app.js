// example of simple includes for js
//=include lib/jquery.min.js
//=include lib/object-fit.min.js
//=include _detectIE.js

// var wow = require('./wowjs');

// new WOW().init();



$(document).ready(function() {
	//=include _context-menu.js

	detectIE();
	objectFitImages('.js-fit-img');
});

