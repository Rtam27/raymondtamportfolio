
const router = require('express').Router()
const nodemailer = require("nodemailer");

// const mongoose = require('mongoose');
// const User = require('../db/models/User')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'raytam2792@gmail.com',
      pass: 'Welcome#12'
    }
  });

module.exports = router


router.post('/', async (req, res, next) => {
    try{   
        // console.log('lol', req.body)
        const mailOptions = {
            from: `${req.body.Email}`,
            to: 'raytam2792@gmail.com',
            subject: `${req.body.Name} sent a message from ${req.body.Email}!`,
            text: `Name: ${req.body.Name} Email: ${req.body.Email}
            ${req.body.Content}`
          };

        console.log(mailOptions)

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          }); 
    }
    catch(err){
        next(err)
    }
})