const Admin = require('../models/Admin')
const Class = require('../models/Class')
const Teacher = require('../models/Teacher')
const Enrollment = require('../models/Enrollment')
const { generateToken } = require('../utils/authUtils')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    const admin = await Admin.findOne({ email })
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const isMatch = await admin.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = generateToken(admin._id)

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.json({ 
      message: 'Login successful', 
      token,
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.logout = async (req, res) => {
  try {
    res.clearCookie('token')
    res.json({ message: 'Logged out successfully' })
  } catch (error) {
    console.error('Logout error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.getProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id).select('-password')
    res.json({ 
      message: 'Profile fetched successfully',
      admin,
      token: req.cookies.token,
    })
  } catch (error) {
    console.error('Profile error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.addClass = async (req, res) => {
  try {
    const cls = new Class(req.body)
    await cls.save()
    res.status(201).json(cls)
  } catch (error) {
    console.error('Add class error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.updateClass = async (req, res) => {
  try {
    const cls = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!cls) {
      return res.status(404).json({ message: 'Class not found' })
    }
    res.json(cls)
  } catch (error) {
    console.error('Update class error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.deleteClass = async (req, res) => {
  try {
    const cls = await Class.findByIdAndDelete(req.params.id)
    if (!cls) {
      return res.status(404).json({ message: 'Class not found' })
    }
    res.json({ message: 'Class deleted successfully' })
  } catch (error) {
    console.error('Delete class error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.addTeacher = async (req, res) => {
  try {
    const teacher = new Teacher(req.body)
    await teacher.save()
    res.status(201).json(teacher)
  } catch (error) {
    console.error('Add teacher error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' })
    }
    res.json(teacher)
  } catch (error) {
    console.error('Update teacher error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id)
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' })
    }
    res.json({ message: 'Teacher deleted successfully' })
  } catch (error) {
    console.error('Delete teacher error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 })
    res.json(enrollments)
  } catch (error) {
    console.error('Get enrollments error:', error)
    res.status(500).json({ message: 'Server error' })
  }
}
