const express=require('express');
const nodemailer = require('nodemailer');
const Port=3008
require('dotenv').config()
const cors=require('cors')

const app=express();
app.use(express.json())
app.use(cors());

let bookingCounter=1;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PWD,
    },
    tls: {
      rejectUnauthorized: false,  
    }
});

app.post('/booktable', async (req, res) => {
    const { message, name, email, date, mob_no, seat } = req.body;
    const serialNo=bookingCounter++
    try {
        const mailOptions = await transporter.sendMail({
            from: process.env.USER,
            to: ['aswankappingal@gmail.com'],
            subject: 'TABLE BOOKED!',
            html: `
                <h2>Table Booking Details</h2>
                <table style="border-collapse: collapse; width: 100%;">
                    <tr>
                        <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Field</th>
                        <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Details</th>
                    </tr>
                     <tr>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Booking Serial Number</td>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${serialNo}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Name</td>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${name}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Email</td>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${email}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Date</td>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${date}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Mobile Number</td>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${mob_no}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Seat</td>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${seat}</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Message</td>
                        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${message}</td>
                    </tr>
                </table>
            `
        });
        
        console.log('Email sent', mailOptions.response);
        res.status(200).send({ message: "Email sent successfully" });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Failed to send email');
    }
});

















app.listen(Port,()=>{
    console.log('server connected at',Port);
    
})