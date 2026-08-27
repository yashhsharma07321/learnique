import { motion } from 'framer-motion'
import { variants } from '../animations/variants'
import { mail, phone, mapPin, clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 mb-6">
              Learnique
            </h2>
            <p className="text-gray-400 mb-6">
              Empowering individuals to achieve their full potential through premium 
              coaching, expert guidance, and transformative learning experiences.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-200"
                >
                  <span className="capitalize">{social}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Classes', 'Teachers', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Classes</h3>
            <ul className="space-y-3">
              {['Yoga & Fitness', 'Personal Development', 'Business Coaching', 'Mindfulness'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <mapPin className="text-primary-400 mt-1" size={20} />
                <span className="text-gray-400">
                  123 Education Street<br />
                  Learning City, LC 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <phone className="text-primary-400" size={20} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <mail className="text-primary-400" size={20} />
                <span className="text-gray-400">contact@learnique.com</span>
              </li>
              <li className="flex items-center gap-3">
                <clock className="text-primary-400" size={20} />
                <span className="text-gray-400">Mon-Fri: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Learnique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
