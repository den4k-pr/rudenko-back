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
app.use("/static", express.static(__dirname + "/assets"));
app.use('/api/planes', require('./routes/planes'))
app.use('/api/painters', require('./routes/painters'))
app.use('/api/categories', require('./routes/categories'))

app.get('/', (req, res) => {
    res.send('Hellow world!')
});


dotenv.config();


const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMIAN,
  });


// app.post('/api/email', (req, res) => {
//   const { email, properties } = req.body;
//   mailgun()
//     .messages()
//     .send(
//       {
//         from: `${email}`,
//         to: 'yakovden4k@gmail.com',
//         html: `<p>from: ${email}</p>
//         <p>Message: ${properties}</p>`,
//       },
//       (error, body) => {
//         if (error) {
//           console.log(error);
//           res.status(500).send({ message: 'Error in sending email' });
//         } else {
//           console.log(body);
//           res.send({ message: 'Email sent successfully' });
//         }
//       }
//     );
// });

var frt = {
  from: 'Ivan',
  to: 'yakovden4k@gmail.com',
  subject: 'Hellow world',
  text: 'nnn'
}
mailgun.messages().send(frt, function (error, body) {
  if (error) {
    console.log(error);
  }
  console.log(body);
})


app.use(express.static(__dirname + '/assets'));

app.use(express.static(path.join(__dirname, "./build")));

app.get("/*", function (res, req) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://Den4ik_:frgX6V21e7ZugwE7@cluster0.pn5jxqp.mongodb.net/rudenko-art-pro?retryWrites=true&w=majority')

app.listen(port)

