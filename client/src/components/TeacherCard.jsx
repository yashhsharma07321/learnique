import { motion } from 'framer-motion'
import { variants } from '../animations/variants'
import { star, mapPin, mail } from 'lucide-react'

const TeacherCard = ({ teacher, index }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants.fadeIn}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary-500/30">
            <img
              src={teacher.image || '/placeholder-teacher.jpg'}
              alt={teacher.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-4 border-gray-800" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{teacher.name}</h3>
          <p className="text-primary-400">{teacher.specialization}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-1 text-secondary-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <star key={i} size={16} fill="currentColor" />
        ))}
        <span className="ml-2 text-gray-400 text-sm">({teacher.rating} rating)</span>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-gray-400">
          <mapPin size={16} />
          <span>{teacher.location}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <mail size={16} />
          <span>{teacher.email}</span>
        </div>
      </div>
      
      <div className="bg-gray-900/50 rounded-xl p-4 mb-6">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">About</h4>
        <p className="text-gray-400 text-sm line-clamp-3">{teacher.bio}</p>
      </div>
      
      <button className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-200">
        View Profile
      </button>
    </motion.div>
  )
}

export default TeacherCard
