import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center">
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          scaleIn: {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
          },
        }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="inline-block mb-8"
        >
          <h1 className="text-12xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
            404
          </h1>
        </motion.div>
        
        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 text-lg mb-8">
          Oops! The page you're looking for has moved or doesn't exist.
        </p>
        
        <Link
          to="/"
          className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-200 inline-block"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  )
}

export default NotFound
