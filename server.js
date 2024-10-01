import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors'; // Optional, if you're using CORS

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS if needed
app.use(express.json()); // For parsing application/json

// Email route
app.post('/api/send-email', (req, res) => {
  const { name, email, date, location, details } = req.body;

  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Change if using another email service
    auth: {
      user: 'your_email@gmail.com', // Your email
      pass: 'your_email_password_or_app_password', // Your password or app password
    },
  });

  // Email options
  const mailOptions = {
    from: email, // Email from the form
    to: 'keithrt3008@gmail.com', // Your email for receiving responses
    subject: `Booking Request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nDate: ${date}\nLocation: ${location}\nDetails: ${details}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
