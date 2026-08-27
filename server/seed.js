const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Class = require('./models/Class')
const Teacher = require('./models/Teacher')
const Admin = require('./models/Admin')

const seedData = async () => {
  try {
    // Clear existing data
    await Class.deleteMany({})
    await Teacher.deleteMany({})
    await Admin.deleteMany({})

    // Create admin
    const adminPassword = await bcrypt.hash('admin123', 10)
    const admin = new Admin({
      email: 'admin@learnique.com',
      password: adminPassword,
      name: 'Learnique Admin',
    })
    await admin.save()
    console.log('Admin created')

    // Create classes
    const classes = [
      {
        title: 'Yoga & Fitness',
        description: 'Transform your body and mind with our comprehensive yoga and fitness programs designed for all levels. Improve flexibility, strength, and overall well-being through personalized routines and expert guidance.',
        category: 'Yoga & Fitness',
        enrolled: 150,
        rating: 4.9,
        duration: '12 weeks',
        price: '$299',
        image: '🧘',
        syllabus: ['Introduction to Yoga', 'Asana Practice', 'Breathing Techniques', 'Meditation', 'Nutrition Basics'],
      },
      {
        title: 'Personal Development',
        description: 'Unlock your full potential through personal growth, mindset transformation, and skill development. Build confidence, set meaningful goals, and create the life you deserve.',
        category: 'Personal Development',
        enrolled: 120,
        rating: 4.8,
        duration: '8 weeks',
        price: '$249',
        image: '🌟',
        syllabus: ['Goal Setting', 'Mindset Shift', 'Habit Building', 'Communication Skills', 'Self-Awareness'],
      },
      {
        title: 'Business Coaching',
        description: 'Take your business to the next level with expert coaching, strategy, and mentorship from industry leaders. Learn proven frameworks for growth, leadership, and success.',
        category: 'Business Coaching',
        enrolled: 80,
        rating: 4.9,
        duration: '16 weeks',
        price: '$499',
        image: '💼',
        syllabus: ['Business Strategy', 'Leadership Development', 'Marketing Essentials', 'Financial Planning', ' Scaling Your Business'],
      },
      {
        title: 'Mindfulness & Meditation',
        description: 'Cultivate inner peace and presence through mindfulness practices and meditation techniques. Reduce stress, improve focus, and enhance your overall quality of life.',
        category: 'Mindfulness',
        enrolled: 95,
        rating: 4.7,
        duration: '6 weeks',
        price: '$199',
        image: '🧘♀️',
        syllabus: ['Mindfulness Basics', 'Breathwork', 'Guided Meditation', 'Stress Management', 'Emotional Regulation'],
      },
      {
        title: 'Life Coaching',
        description: 'Navigate life\'s challenges with clarity and purpose. Work one-on-one with our expert coaches to overcome obstacles, make important decisions, and create a fulfilling life.',
        category: 'Life Coaching',
        enrolled: 110,
        rating: 4.8,
        duration: '12 weeks',
        price: '$399',
        image: '✨',
        syllabus: ['Life Vision', 'Value Clarification', 'Decision Making', 'Relationship Coaching', 'Work-Life Balance'],
      },
    ]

    const createdClasses = await Class.insertMany(classes)
    console.log(`${createdClasses.length} classes created`)

    // Create teachers
    const teachers = [
      {
        name: 'Sarah Johnson',
        email: 'sarah.j@learnique.com',
        specialization: 'Yoga & Wellness',
        bio: 'Certified yoga instructor with 10 years of experience. Passionate about helping students find balance and peace through yoga practice.',
        location: 'New York, NY',
        image: 'https://i.pravatar.cc/150?img=5',
        rating: 4.9,
        experience: '10 years',
        education: 'RYT-500 Certification',
      },
      {
        name: 'Michael Chen',
        email: 'michael.c@learnique.com',
        specialization: 'Business Coaching',
        bio: 'Entrepreneur and business strategist with 15 years of experience. Helped hundreds of businesses achieve sustainable growth.',
        location: 'San Francisco, CA',
        image: 'https://i.pravatar.cc/150?img=11',
        rating: 4.8,
        experience: '15 years',
        education: 'MBA, Stanford University',
      },
      {
        name: 'Emily Rodriguez',
        email: 'emily.r@learnique.com',
        specialization: 'Personal Development',
        bio: 'Life coach and speaker dedicated to helping individuals unlock their full potential and live purpose-driven lives.',
        location: 'Chicago, IL',
        image: 'https://i.pravatar.cc/150?img=9',
        rating: 4.9,
        experience: '8 years',
        education: 'Certified Life Coach',
      },
      {
        name: 'David Kim',
        email: 'david.k@learnique.com',
        specialization: 'Mindfulness & Meditation',
        bio: 'Mindfulness teacher and mental health advocate. Combines ancient wisdom with modern psychology for holistic well-being.',
        location: 'Austin, TX',
        image: 'https://i.pravatar.cc/150?img=3',
        rating: 4.7,
        experience: '7 years',
        education: 'Mental Health Counseling',
      },
      {
        name: 'Jessica Williams',
        email: 'jessica.w@learnique.com',
        specialization: 'Life Coaching',
        bio: 'Transformative life coach helping clients create clarity, purpose, and lasting change in all areas of their lives.',
        location: 'Miami, FL',
        image: 'https://i.pravatar.cc/150?img=24',
        rating: 4.8,
        experience: '6 years',
        education: 'Master Coach Training',
      },
    ]

    const createdTeachers = await Teacher.insertMany(teachers)
    console.log(`${createdTeachers.length} teachers created`)

    console.log('Seed data created successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Seed error:', error)
    process.exit(1)
  }
}

seedData()
