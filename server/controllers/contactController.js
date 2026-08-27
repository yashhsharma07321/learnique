const { sendContactEmail } = require('../utils/mailer')
const { TEACHER_EMAIL } = require('../config')

exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject: emailSubject, message } = req.body

    const contactSubject = `Contact Form: ${emailSubject}`
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4f46e5;">New Contact Message</h2>
        <p>Someone has sent you a message through the contact form:</p>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${emailSubject}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #fff; padding: 15px; border-radius: 5px;">${message}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        <p>Thank you for your attention!</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        <p style="color: #6b7280; font-size: 14px;">Learnique - Premium Coaching Platform</p>
      </div>
    `

    await sendContactEmail(TEACHER_EMAIL, contactSubject, html)

    res.status(200).json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Contact error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}
