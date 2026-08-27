import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { menu, x } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const { scrollY } = useScroll()
  const navOpacity = useTransform(scrollY, [0, 50], [0, 1])
  const navY = useTransform(scrollY, [0, 50], [-50, 0])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Classes', path: '/classes' },
    { name: 'Teachers', path: '/teachers' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav
      style={{ opacity: navOpacity, y: navY }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
            Learnique
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className="px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full hover:from-primary-500 hover:to-primary-600 transition-all duration-200 shadow-lg hover:shadow-primary-500/25"
            >
              Admin
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-primary-400 focus:outline-none"
            >
              {isOpen ? <x size={28} /> : <menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-gray-300 hover:text-primary-400 hover:bg-gray-800 rounded-lg transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/admin"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 mt-4 text-center text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg hover:from-primary-500 hover:to-primary-600 transition-all duration-200"
          >
            Admin Login
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
