$(document).ready ($) ->
  slideCount = $('#slider ul li').length
  slideWidth = $('#slider ul li').width()
  slideHeight = $('#slider ul li').height()
  sliderUlWidth = slideCount * slideWidth

  moveLeft = ->
    $('#slider ul').animate { left: -slideWidth }, 500, ->
      $('#slider ul li:last-child').prependTo '#slider ul'
      $('#slider ul').css 'left', ''
      return
    $('.h-carousel-items .b-carousel-block').eq(-1).clone().prependTo '.h-carousel-items'
    $('.h-carousel-items').css 'left': '-222px'
    $('.h-carousel-items').animate { left: '0px' }, 200
    $('.h-carousel-items .b-carousel-block').eq(-1).remove()
    return

  moveRight = ->
    $('#slider ul').animate { left: +slideWidth }, 500, ->
      $('#slider ul li:first-child').appendTo '#slider ul'
      $('#slider ul').css 'left', ''
      return
    $('.h-carousel-items').animate { left: '-222px' }, 200
    setTimeout (->
      $('.h-carousel-items .b-carousel-block').eq(0).clone().appendTo '.h-carousel-items'
      $('.h-carousel-items .b-carousel-block').eq(0).remove()
      $('.h-carousel-items').css 'left': '0px'
      return
    ), 300
    return

  $('#slider').css
    width: slideWidth
    height: slideHeight
  $('#slider ul').css
    width: sliderUlWidth
    marginLeft: -slideWidth
  $('#slider ul li:last-child').prependTo '#slider ul'
  $('a.control_prev').click ->
    moveLeft()
    return
  $('a.control_next').click ->
    moveRight()
    return
  return
