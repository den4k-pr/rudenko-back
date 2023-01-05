const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mg = require('mailgun-js');
const app = express();
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: ["http:localhost:3000", "https://mern-task-app-sc80.onrender.com"],
  })
)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/planes', require('./routes/planes'))
app.use('/api/painters', require('./routes/painters'))
app.use('/api/categories', require('./routes/categories'))

app.get('/', (req, res) => {
    res.send('Hellow world!')
});


dotenv.config();


const mailgun = () =>
  mg({
    apiKey: '52770730df12bb27417d278bc3808293-c2efc90c-c49be8f3',
    domain: 'sandbox966792d89f1c42af8ea4aca8c90c5006.mailgun.org',
  });


app.post('/api/email', (req, res) => {
  const { email, properties, paintersOption, CategoriesOption } = req.body;
  mailgun()
    .messages()
    .send(
      {
        from: `${email}`,
        to: 'denmemm@gmail.com',
        html: `<p>from: ${email}</p>
        <p>Message: ${properties}</p>
        <p>Category: ${CategoriesOption}</p>
        <p>Artist: ${paintersOption}</p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: 'Error in sending email' });
        } else {
          console.log(body);
          res.send({ message: 'Email sent successfully' });
        }
      }
    );
});

app.post('/api/busket', (req, res) => {
  const { phone, email, message } = req.body;
  mailgun()
    .messages()
    .send(
      {
        from: `${email}`,
        to: 'denmemm@gmail.com',
        html: `<p>from: ${email}</p>
        <p>phone: ${phone}</p>
        <p>email: ${email}</p>
        <p>message: ${message}</p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: 'Error in sending email' });
        } else {
          console.log(body);
          res.send({ message: 'Email sent successfully' });
        }
      }
    );
});

app.use(express.static(__dirname + '/assets'));

app.use(express.static(path.join(__dirname, "./build")));

app.get("/*", function (res, req) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});


mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://Den4ik_:frgX6V21e7ZugwE7@cluster0.pn5jxqp.mongodb.net/rudenko-art-pro?retryWrites=true&w=majority')

app.listen(port)

