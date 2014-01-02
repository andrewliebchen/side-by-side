(function() {
  var paneContentHeight;

  paneContentHeight = function(content) {
    var contentHeight;
    contentHeight = $(content).find('.pane-content').outerHeight();
    return $('.pane-tertiary').css('min-height', contentHeight);
  };

  $(function() {
    $(document).on('click', '[data-pane-focus]', function(event) {
      var focusPane;
      focusPane = $(this).data('pane-focus');
      event.preventDefault();
      $('body').addClass("pane-focus-" + focusPane);
      return paneContentHeight(".pane-" + focusPane);
    });
    return $(document).on('click', '[data-pane-close]', function(event) {
      var closePane;
      closePane = $(this).data('pane-close');
      event.preventDefault();
      return $('body').removeClass("pane-focus-" + closePane);
    });
  });

}).call(this);
