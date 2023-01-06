const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 8000;
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


app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http:localhost:3000", "https://mern-task-app-sc80.onrender.com"],
  })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(__dirname + "/assets"));
app.use('/api/planes', require('./routes/planes'))
app.use('/api/painters', require('./routes/painters'))
app.use('/api/categories', require('./routes/categories'))

app.get('/', (req, res) => {
    res.send('Hellow world!')
});

app.use(express.static(__dirname + '/assets'));

app.use(express.static(path.join(__dirname, "./build")));

app.get("/*", function (res, req) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

dotenv.config();



mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://Den4ik_:frgX6V21e7ZugwE7@cluster0.pn5jxqp.mongodb.net/rudenko-art-pro?retryWrites=true&w=majority')

app.listen(port)

