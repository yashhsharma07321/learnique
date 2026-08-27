const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config()

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

const sendEnrollmentEmail = async (to, subject, html) => {
  const transporter = createTransporter()
  
  const mailOptions = {
    from: `"Learnique" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    return info
  } catch (error) {
    console.error('Email error:', error)
    throw error
  }
}

const sendContactEmail = async (to, subject, html) => {
  const transporter = createTransporter()
  
  const mailOptions = {
    from: `"Learnique" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    return info
  } catch (error) {
    console.error('Email error:', error)
    throw error
  }
}

module.exports = { sendEnrollmentEmail, sendContactEmail }
