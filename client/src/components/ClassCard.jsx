import { motion } from 'framer-motion'
import { variants } from '../animations/variants'
import { users, star, calendar, dollarSign } from 'lucide-react'

const ClassCard = ({ classData, index }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants.fadeIn}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10"
    >
      <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 rounded-bl-2xl text-sm font-semibold">
        {classData.category}
      </div>
      
      <div className="mb-6">
        <div className="flex items-center gap-1 text-secondary-400 mb-3">
          {[...Array(5)].map((_, i) => (
            <star key={i} size={16} fill="currentColor" />
          ))}
          <span className="ml-2 text-gray-400">({classData.rating})</span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">{classData.title}</h3>
        <p className="text-gray-400 line-clamp-2 mb-4">{classData.description}</p>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-gray-400">
          <users size={18} />
          <span>{classData.enrolled} students enrolled</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <calendar size={18} />
          <span>{classData.duration}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <dollarSign size={18} />
          <span className="text-2xl font-bold text-primary-400">{classData.price}</span>
        </div>
      </div>
      
      <button className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-200">
        Enroll Now
      </button>
    </motion.div>
  )
}

export default ClassCard
