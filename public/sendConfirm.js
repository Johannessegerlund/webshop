// const nodeMailer = require('nodemailer')

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

// // // const mailGun = require('nodemailer-mailgun-transport')
// // $(document).ready(function () {
// //   $('#checkout-form').submit(function (e) {
// //     const name = document.getElementById('name')
// //     const adress = document.getElementById('address')

// //     if (!name.value || !adress.value) {
// //     // alertify.error('Please check your entries')
// //       return false
// //     } else {
// //       $.ajax({

// //         method: 'POST',
// //         url: '//formspree.io/johannessegerlund93@gmail.com',
// //         data: $('#contact-form').serialize(),
// //         datatype: 'json'
// //       })
// //       e.preventDefault()
// //       $(this).get(0).reset()
// //       console.log('working')
// //     // alertify.success('Message sent')
// //     }
// //   })
// // })

// $(document).ready(function () {
//   $('#checkout-form').on('submit', function (e) {
//     e.preventDefault()

//     // get the name field value
//     var name = $('#name').val()
//     // get the name field value
//     var email = $('#address').val()

//     // pretend we don't need validation

//     // send to formspree
//     $.ajax({
//       url: 'https://formspree.io/johannessegerlund93@gmail.com',
//       method: 'POST',
//       data: {
//         name: name,
//         _replyto: email,
//         email: email,
//         _subject: 'My Form Submission'
//       },
//       dataType: 'json',
//       success: function () {
//         console.log('success')
//       }

//     })
//   })
// })
