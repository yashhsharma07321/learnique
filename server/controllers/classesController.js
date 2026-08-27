const Class = require('../models/Class')

exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find().sort({ createdAt: -1 })
    res.json(classes)
  } catch (error) {
    console.error('Error fetching classes:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.getClassById = async (req, res) => {
  try {
    const cls = await Class.findById(req.params.id)
    if (!cls) {
      return res.status(404).json({ message: 'Class not found' })
    }
    res.json(cls)
  } catch (error) {
    console.error('Error fetching class:', error)
    res.status(500).json({ message: 'Server error' })
  }
}
