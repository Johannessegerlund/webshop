$('#checkout-form').on('submit', (e) => {
  e.preventDefault()

  const email = $('#name').val().trim()
  const adress = $('#address').val().trim()
  const data = {
    email,
    adress
  }

  $.post('/SendItemRequest', data, function () {
    console.log('server recieved our data')
  })
})
