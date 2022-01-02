const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'juanpablochoter@gmail.com',
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = (options) => transporter.sendMail(options, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`email enviado: ${info.response}`);
  }
});

module.exports = {
  sendEmail
};
