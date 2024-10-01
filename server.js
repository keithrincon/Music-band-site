// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies

// Define the endpoint
app.post('/api/submit-quote', async (req, res) => {
  const { name, email, eventDetails } = req.body;

  // Validate received data
  if (!name || !email || !eventDetails) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Nodemailer setup
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable for email
      pass: process.env.EMAIL_PASS, // Use environment variable for password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your email to receive the quote requests
    subject: 'New Quote Request',
    text: `Name: ${name}\nEmail: ${email}\nEvent Details: ${eventDetails}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error sending email', error); // Log the error for debugging
    res.status(500).json({ error: 'Error sending email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
