import { motion } from 'framer-motion'
import { variants } from '../animations/variants'
import { users, book, star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants.fadeIn}
          className="space-y-8"
        >
          <motion.h1
            variants={variants.fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="block mb-2">Transform Your Life</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-purple-500 to-secondary-400">
              With Premium Coaching
            </span>
          </motion.h1>

          <motion.p
            variants={variants.fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
          >
            Unlock your full potential with expert guidance, personalized training, 
            and a supportive community dedicated to your success.
          </motion.p>

          <motion.div
            variants={variants.fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-primary-600 to-primary-700 rounded-full text-white shadow-xl shadow-primary-500/20 transition-all duration-300"
            >
              Enroll Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 text-lg font-semibold bg-gray-800 rounded-full text-white border border-gray-700 transition-all duration-300 hover:bg-gray-700"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            variants={variants.fadeInUp}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            {[
              { icon: users, value: '500+', label: 'Students' },
              { icon: book, value: '50+', label: 'Classes' },
              { icon: star, value: '98%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
