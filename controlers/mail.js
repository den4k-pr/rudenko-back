const nodeMailer = require('nodemailer');

exports.sendMail = (req, res) => {
    console.log("req body", req.body);
    let userMail = req.body.userEmail;
    let userMessage = req.body.message;

    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        autj:{
            user: process.env.EMAIL,
            pass: process.env.PASWORD
        }
    })

    var message = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: process.env.PASWORD,
        text: process.env.PASWORD,
    };

    transporter.sendMail(message)
}
