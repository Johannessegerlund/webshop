const socket = window.io()

socket.on('message', function (message) {
  console.log('server' + message)
})

socket.on('index', function (data) {
  var slides = document.querySelectorAll('#slides .slide')
  var currentSlide = 0
  setInterval(nextSlide, 4000)

  function nextSlide () {
    slides[currentSlide].className = 'slide'
    currentSlide = (currentSlide + 1) % slides.length
    slides[currentSlide].className = 'slide showing'
  }
})
