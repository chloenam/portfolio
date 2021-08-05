;(function () {
  emailjs.init('user_bxn7Ozm4n4mFJUKM4KitX')
})()

window.addEventListener('load', () => {
  const form = document.querySelector('#contactForm')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    e.currentTarget.contact_number.value = (Math.random() * 100000) | 0

    emailjs
      .sendForm('service_ahiqd2i', 'template_jy0rnnr', e.currentTarget)
      .then(
        (response) => {
          console.log('메일 발송 성공', response.status, response.text)
          alert('문의 내용이 전송되었습니다.')
          form.reset()
        },
        (error) => {
          console.log('메일 발송 실패', error)
          alert('메일 발송에 실패했습니다.')
        }
      )
  })
})
