const main = document.querySelectorAll('.main')
const box = document.querySelectorAll('.box')
const item = document.querySelectorAll('.item')
const mask = document.querySelector('.mask')
const sub = document.querySelectorAll('.subPage')
const subPrev = document.querySelector('.prev')

console.log(sub)

for (let i = 0; i < item.length; i++) {
  let color = window.getComputedStyle(item[i]).backgroundColor
  let subPage = item[i].nextElementSibling
  console.log(subPage)

  item[i].addEventListener('click', (e) => {
    e.preventDefault()

    mask.style.backgroundColor = color

    mask.classList.add('on')

    setTimeout(() => {
      subPage.classList.add('on')
    }, 500)
  })
}

subPrev.addEventListener('click', (e) => {
  e.preventDefault()

  sub.classList.remove('on')

  setTimeout(() => {
    mask.classList.remove('on')
  }, 500)
})
