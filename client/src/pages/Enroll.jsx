import { useState } from 'react'
import { motion } from 'framer-motion'
import { variants } from '../animations/variants'
import axios from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'

const Enroll = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    className: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.className.trim()) newErrors.className = 'Class selection is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)
    try {
      await axios.enrollClass(formData)
      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', className: '', message: '' })
      setTimeout(() => {
        setSuccess(false)
        navigate('/')
      }, 3000)
    } catch (error) {
      console.error('Enrollment error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
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
            <span className="text-primary-400">Enroll</span> Now
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your life? Fill out the form below to get started 
            on your journey with Learnique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div variants={variants.slideIn}>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
              {success ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Enrollment Successful!</h3>
                  <p className="text-gray-400">Thank you for enrolling. We'll contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-900 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-900 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="className" className="block text-sm font-medium text-gray-300 mb-2">
                      Select Class
                    </label>
                    <select
                      id="className"
                      name="className"
                      value={formData.className}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-900 border ${errors.className ? 'border-red-500' : 'border-gray-700'} rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all`}
                    >
                      <option value="">Choose a class...</option>
                      <option value="Yoga & Fitness">Yoga & Fitness</option>
                      <option value="Personal Development">Personal Development</option>
                      <option value="Business Coaching">Business Coaching</option>
                      <option value="Mindfulness">Mindfulness</option>
                      <option value="Life Coaching">Life Coaching</option>
                    </select>
                    {errors.className && <p className="text-red-500 text-sm mt-1">{errors.className}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : 'Submit Enrollment'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div variants={variants.slideInRight}>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary-900/30 to-purple-900/30 rounded-2xl p-8 border border-primary-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Why Enroll with Learnique?</h3>
                <div className="space-y-4">
                  {[
                    'Expert coaching from certified professionals',
                    'Personalized learning path tailored to your goals',
                    'Small class sizes for maximum attention',
                    'Lifetime access to course materials',
                    'Community support and accountability',
                    'Money-back satisfaction guarantee',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        ✓
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Have Questions?</h3>
                <p className="text-gray-400 mb-6">
                  Our team is here to help you find the perfect program. 
                  Contact us for more information or to schedule a consultation.
                </p>
                <a href="/contact" className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors">
                  Contact us →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Enroll
