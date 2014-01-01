paneContentHeight = ->
  contentHeight = $('.pane-content').outerHeight()
  $('.pane-tertiary').css('min-height', contentHeight)

$ ->

  $(document).on 'click', '[data-pane-focus]', (event) ->
    focusPane = $(@).data('pane-focus')
    event.preventDefault()
    $('body').addClass("pane-focus-#{focusPane}")
    paneContentHeight()

  $(document).on 'click', '[data-pane-close]', (event) ->
    closePane = $(@).data('pane-close')
    event.preventDefault()
    $('body').removeClass("pane-focus-#{closePane}")
