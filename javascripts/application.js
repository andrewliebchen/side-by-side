(function() {
  var paneContentHeight;

  paneContentHeight = function() {
    var contentHeight;
    contentHeight = $('.pane-content').outerHeight();
    return $('.pane-tertiary').css('min-height', contentHeight);
  };

  $(function() {
    $(document).on('click', '[data-pane-focus]', function(event) {
      var focusPane;
      focusPane = $(this).data('pane-focus');
      event.preventDefault();
      $('body').addClass("pane-focus-" + focusPane);
      return paneContentHeight();
    });
    return $(document).on('click', '[data-pane-close]', function(event) {
      var closePane;
      closePane = $(this).data('pane-close');
      event.preventDefault();
      return $('body').removeClass("pane-focus-" + closePane);
    });
  });

}).call(this);
