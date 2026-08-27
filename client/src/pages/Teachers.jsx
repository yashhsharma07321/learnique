import { motion } from 'framer-motion'
import { variants } from '../animations/variants'
import TeacherCard from '../components/TeacherCard'
import { useState, useEffect } from 'react'
import axios from '../api/axiosInstance'

const Teachers = () => {
  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTeachers()
  }, [])

  const fetchTeachers = async () => {
    try {
      const data = await axios.getTeachers()
      setTeachers(data)
    } catch (error) {
      console.error('Error fetching teachers:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants.fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-primary-400">Experts</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn from the best in the industry. Our experienced coaches are 
            dedicated to helping you achieve lasting transformation.
          </p>
        </motion.div>

        <motion.div
          variants={variants.staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teachers.map((teacher, index) => (
            <TeacherCard key={teacher._id} teacher={teacher} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Teachers
