import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, eventDetails } = req.body;

    // Create reusable transporter object using your email service
    let transporter = nodemailer.createTransport({
      service: 'Gmail', // Use your email service (Gmail, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Your email from .env file
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password from .env file
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email from .env file
      subject: 'New Quote Request',
      text: `Name: ${name}\nEmail: ${email}\nEvent Details: ${eventDetails}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error sending email', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
