const nodemailer = require('nodemailer')

let testEmailAccount = await nodemailer.createTestAccount()

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: testEmailAccount.user,
    pass: testEmailAccount.pass,
  },
})

let result = await transporter.sendMail({
  from: 'yakovden4k@gmail.com',
  to: 'yakovden4k@gmail.com',
  subject: 'yakovden4k@gmail.com',
  text: 'yakovden4k@gmail.com',
})

console.log(result)
