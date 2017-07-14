import $ from 'jquery';
import './_context-menu';
import './_detectIE';
import objectFitImages from 'object-fit-images';
import AOS from 'aos';
import 'jquery-countdown';

objectFitImages('.js-fit-img');
AOS.init({
	duration: 500,
	easing: 'ease',
	offset: 200,
	disable: 'mobile'
});

$('#js-counter').countdown('11/01/2017', function(event) {
    $(this).html(event.strftime('%D days %H hours'));
 });
