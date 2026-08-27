import { motion } from 'framer-motion'
import { variants } from '../animations/variants'

const About = () => {
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
            About <span className="text-primary-400">Learnique</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're dedicated to empowering individuals through transformative 
            coaching and expert guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            variants={variants.slideIn}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="text-gray-400">
              At Learnique, our mission is to help individuals unlock their 
              full potential through personalized coaching, expert guidance, 
              and transformative learning experiences.
            </p>
            <p className="text-gray-400">
              We believe that everyone has unique strengths and talents waiting 
              to be discovered. Our goal is to provide the tools, support, and 
              mentorship needed to help you achieve your goals and reach new 
              heights of success.
            </p>
          </motion.div>

          <motion.div
            variants={variants.slideInRight}
            className="bg-gradient-to-br from-primary-900/20 to-purple-900/20 rounded-2xl p-8 border border-primary-500/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-gray-400 mb-6">
              To become the world's leading coaching platform, transforming 
              millions of lives through excellence in personal and professional 
              development.
            </p>
            <div className="space-y-4">
              {['Personal Growth', 'Professional Success', 'Life Balance', 'Sustainable Change'].map((value, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                    ✓
                  </div>
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={variants.fadeInUp}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: 'Expert Coaches', desc: 'Learn from industry leaders and certified professionals with years of experience.', icon: '✨' },
            { title: 'Personalized Approach', desc: 'Tailored programs designed specifically for your goals and needs.', icon: '🎯' },
            { title: 'Proven Results', desc: 'Our methods have helped thousands achieve lasting transformation.', icon: '🚀' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
