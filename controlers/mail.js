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
        to: userMail,
        subject: "this is test",
        text: userMessage,
    };

    transporter.sendMail(message,(err,info)=>{
        if(err){
            console.log("error in sending mail",err)
            return res.status(400).json({
                message:`error in sendin mail ${err}`
            })
        }else{
            console.log("sucessfully send the mail",info)
            return res.json({
                message:info
            })
        }
    })
}