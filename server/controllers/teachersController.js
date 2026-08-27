const Teacher = require('../models/Teacher')

exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().sort({ createdAt: -1 })
    res.json(teachers)
  } catch (error) {
    console.error('Error fetching teachers:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id)
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' })
    }
    res.json(teacher)
  } catch (error) {
    console.error('Error fetching teacher:', error)
    res.status(500).json({ message: 'Server error' })
  }
}
