(function() {
  $(function() {
    var contentHeight;
    contentHeight = $('.pane-content').outerHeight();
    return $('.pane-tertiary').css('min-height', contentHeight);
  });

}).call(this);
