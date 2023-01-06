const express = require("express")
var nodemailer = require('nodemailer');

var mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-gmail-password'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'yakovden4k@gmail.com',
  subject: 'Sending Email via Node.js',
  text: 'That was easy!'
};
  
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
