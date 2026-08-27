const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Yoga & Fitness', 'Personal Development', 'Business Coaching', 'Mindfulness', 'Life Coaching', 'Wellness'],
  },
  enrolled: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 4.5,
    min: 0,
    max: 5,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  syllabus: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Class', classSchema)
