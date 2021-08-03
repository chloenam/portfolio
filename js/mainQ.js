const main = $('.main')
const box = $('.box')
const item = $('.item')
const mask = $('.mask')
const sub = $('.subPage')
const prevBtn = $('.prev')

item.on('click', function () {
  const color = $(this).css('backgroundColor')
  console.log(color)
  const target = $(this).next()

  mask.css('backgroundColor', color)
  mask.addClass('on')

  setTimeout(function () {
    target.addClass('on')
  }, 500)
})

prevBtn.on('click', function () {
  sub.removeClass('on')

  setTimeout(function () {
    mask.removeClass('on')
  }, 500)
})
