const express = require("express")
const routes = express.Router();

const {sendMail} = require('../controlers/mail')

routes.post("/sendmail", sendMail);
module.exports = routes;