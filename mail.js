
const nodeMailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
  auth: {
    api_key: '3f2bcca5db3e8e77b3268a656ca549c3-8b34de1b-4e1ecfe2',
    domain: 'sandbox330e0a8db17c4099a8d2522a4fffe6d5.mailgun.org'
  }
}

const transporter = nodeMailer.createTransport(mailGun(auth))

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: 'johannessegerlund93@gmail.com',
    text,
    subject
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('error', error)
    } else {
      console.log('message sent', info)
    }
  })
}

module.exports = sendMail
