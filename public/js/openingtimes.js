$(document).ready(function() {
  var weekday = new Date().getDay();
  // Mo - Fr
  if (weekday >= 1 && weekday <= 7) {
    $('.opening-box').eq(weekday-1).addClass('today');
  }
});
