import { motion } from 'framer-motion'
import { variants } from '../animations/variants'

const Loader = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants.scaleIn}
      className="fixed inset-0 bg-gray-900 z-[100] flex items-center justify-center"
    >
      <div className="relative w-32 h-32">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute inset-0 rounded-full border-4 border-primary-500/30"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute inset-4 rounded-full border-4 border-secondary-500/30"
        />
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            rotate: { duration: 4, repeat: Infinity, ease: 'linear' },
          }}
          className="absolute inset-8 rounded-full border-4 border-purple-500/30"
        />
        <motion.div
          variants={variants.morph}
          animate="animate"
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
        >
          <span className="text-white font-bold text-2xl">L</span>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-8 text-gray-400 font-medium animate-pulse"
      >
        Loading Learnique...
      </motion.p>
    </motion.div>
  )
}

export default Loader
