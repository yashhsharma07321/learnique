import { motion } from 'framer-motion'
import { variants } from '../animations/variants'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ClassesSection />
      <FeaturesSection />
    </>
  )
}

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
            <Link
              to="/enroll"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-primary-600 to-primary-700 rounded-full text-white shadow-xl shadow-primary-500/20 transition-all duration-300"
            >
              Enroll Now
            </Link>
            <Link
              to="/about"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 text-lg font-semibold bg-gray-800 rounded-full text-white border border-gray-700 transition-all duration-300 hover:bg-gray-700"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div
            variants={variants.fadeInUp}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            {[
              { icon: '👥', value: '500+', label: 'Students' },
              { icon: '📚', value: '50+', label: 'Classes' },
              { icon: '⭐', value: '98%', label: 'Satisfaction' },
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

const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary-400">Learnique</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We're dedicated to empowering individuals through transformative 
              coaching and expert guidance. Our mission is to help you unlock 
              your full potential and achieve lasting success.
            </p>
            <p className="text-gray-400 text-lg">
              With our proven methods and expert coaches, you'll have everything 
              you need to reach your goals and transform your life.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary-500/20 rounded-3xl transform rotate-3" />
            <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-400 mb-4">
                To provide world-class coaching that transforms lives, fosters 
                personal growth, and enables individuals to achieve their highest 
                potential.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { icon: '🎯', title: 'Goals', desc: 'Achieve' },
                  { icon: '🚀', title: 'Success', desc: 'Unlock' },
                  { icon: '✨', title: 'Potential', desc: 'Realize' },
                  { icon: '🌟', title: 'Excellence', desc: 'Pursue' },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-gray-900/50 rounded-xl">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-bold text-white">{item.title}</div>
                    <div className="text-primary-400 text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ClassesSection = () => {
  const classes = [
    {
      title: 'Yoga & Fitness',
      description: 'Transform your body and mind with our comprehensive yoga and fitness programs designed for all levels.',
      image: '🧘',
      enrolled: 150,
      rating: 4.9,
      duration: '12 weeks',
      price: '$299',
    },
    {
      title: 'Personal Development',
      description: 'Unlock your full potential through personal growth, mindset transformation, and skill development.',
      image: '🌟',
      enrolled: 120,
      rating: 4.8,
      duration: '8 weeks',
      price: '$249',
    },
    {
      title: 'Business Coaching',
      description: 'Take your business to the next level with expert coaching, strategy, and mentorship from industry leaders.',
      image: '💼',
      enrolled: 80,
      rating: 4.9,
      duration: '16 weeks',
      price: '$499',
    },
  ]

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
            Our <span className="text-primary-400">Classes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our wide range of premium coaching classes designed to help 
            you achieve your goals and unlock your full potential.
          </p>
        </motion.div>

        <motion.div
          variants={variants.staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {classes.map((cls, index) => (
            <motion.div
              key={index}
              variants={variants.fadeIn}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              <div className="text-6xl mb-6">{cls.image}</div>
              <h3 className="text-2xl font-bold mb-2 text-white">{cls.title}</h3>
              <p className="text-gray-400 line-clamp-2 mb-6">{cls.description}</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-gray-400">
                  <span className="flex items-center gap-1">👥 {cls.enrolled} students</span>
                  <span className="text-secondary-400">⭐ {cls.rating}</span>
                </div>
                <div className="flex items-center justify-between text-gray-400">
                  <span>📅 {cls.duration}</span>
                  <span className="text-2xl font-bold text-primary-400">{cls.price}</span>
                </div>
              </div>
              <Link
                to="/enroll"
                className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-200"
              >
                Enroll Now
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            to="/classes"
            className="inline-block px-8 py-4 bg-gray-800 rounded-xl text-white font-semibold hover:bg-gray-700 transition-all duration-200"
          >
            View All Classes
          </Link>
        </div>
      </div>
    </section>
  )
}

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary-400">Learnique</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We offer the best coaching experience with expert guidance and proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🏆', title: 'Expert Coaches', desc: 'Learn from industry leaders and certified professionals with years of experience.' },
            { icon: '🎯', title: 'Personalized Approach', desc: 'Tailored programs designed specifically for your goals and needs.' },
            { icon: '📈', title: 'Proven Results', desc: 'Our methods have helped thousands achieve lasting transformation.' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 text-center hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
