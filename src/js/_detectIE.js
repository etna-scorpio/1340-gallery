function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  var trident = ua.indexOf('Trident/');
  var edge = ua.indexOf('Edge/');
  if (msie > 0 || trident > 0 || edge > 0) {
    $('body').addClass('is-ie');
  }

  // other browser
  return false;
}

detectIE();