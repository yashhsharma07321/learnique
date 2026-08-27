const Enrollment = require('../models/Enrollment')
const { sendEnrollmentEmail } = require('../utils/mailer')
const { TEACHER_EMAIL } = require('../config')

exports.enrollClass = async (req, res) => {
  try {
    const { name, email, phone, className, message } = req.body

    const enrollment = new Enrollment({
      name,
      email,
      phone,
      className,
      message,
    })

    await enrollment.save()

    const subject = `New Enrollment: ${className}`
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4f46e5;">New Enrollment</h2>
        <p>A new student has enrolled in your class:</p>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Class:</strong> ${className}</p>
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        <p>Thank you for helping students achieve their goals!</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        <p style="color: #6b7280; font-size: 14px;">Learnique - Premium Coaching Platform</p>
      </div>
    `

    await sendEnrollmentEmail(TEACHER_EMAIL, subject, html)

    const confirmationSubject = 'Enrollment Confirmation - Learnique'
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4f46e5;">Enrollment Confirmed!</h2>
        <p>Thank you for enrolling in <strong>${className}</strong>.</p>
        <p>Our team will contact you shortly to confirm your enrollment.</p>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Class:</strong> ${className}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${message ? `<p><strong>Your Message:</strong> ${message}</p>` : ''}
        </div>
        <p>We look forward to helping you achieve your goals!</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        <p style="color: #6b7280; font-size: 14px;">Learnique - Premium Coaching Platform</p>
      </div>
    `

    await sendEnrollmentEmail(email, confirmationSubject, confirmationHtml)

    res.status(201).json({ 
      message: 'Enrollment successful!', 
      enrollmentId: enrollment._id 
    })
  } catch (error) {
    console.error('Enrollment error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}
