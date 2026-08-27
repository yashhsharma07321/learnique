import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { variants } from '../animations/variants'
import { useAuth } from '../context/AuthContext'
import {
  users, book, mail, logOut, 
  plus, edit, trash, calendar, dollarSign
} from 'lucide-react'
import Loader from '../components/Loader'
import axios from '../api/axiosInstance'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const { logout, checkAuth, user } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [loading, setLoading] = useState(true)
  
  const [classes, setClasses] = useState([])
  const [teachers, setTeachers] = useState([])
  const [enrollments, setEnrollments] = useState([])
  const [showAddClass, setShowAddClass] = useState(false)
  const [showAddTeacher, setShowAddTeacher] = useState(false)

  useEffect(() => {
    fetchData()
  }, [activeTab])

  const fetchData = async () => {
    try {
      if (activeTab === 'dashboard' || activeTab === 'classes') {
        const data = await axios.getClassess()
        setClasses(data)
      }
      if (activeTab === 'dashboard' || activeTab === 'teachers') {
        const data = await axios.getTeachers()
        setTeachers(data)
      }
      if (activeTab === 'dashboard' || activeTab === 'enrollments') {
        const data = await axios.getEnrollments()
        setEnrollments(data)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await logout()
    navigate('/admin')
  }

  const handleDeleteClass = async (id) => {
    if (!window.confirm('Are you sure you want to delete this class?')) return
    try {
      await axios.deleteClass(id)
      setClasses(prev => prev.filter(cls => cls._id !== id))
    } catch (error) {
      console.error('Error deleting class:', error)
    }
  }

  const handleDeleteTeacher = async (id) => {
    if (!window.confirm('Are you sure you want to delete this teacher?')) return
    try {
      await axios.deleteTeacher(id)
      setTeachers(prev => prev.filter(t => t._id !== id))
    } catch (error) {
      console.error('Error deleting teacher:', error)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex">
        <aside className="w-64 bg-gray-800/50 backdrop-blur-lg border-r border-gray-700 fixed h-screen">
          <div className="p-6">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 mb-8">
              Learnique
            </h2>
            
            <nav className="space-y-2">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: book },
                { id: 'classes', label: 'Classes', icon: book },
                { id: 'teachers', label: 'Teachers', icon: users },
                { id: 'enrollments', label: 'Enrollments', icon: mail },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-400 hover:bg-gray-700/50 hover:text-primary-400'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="absolute bottom-0 w-64 p-6 border-t border-gray-700">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/20 transition-all duration-200"
            >
              <logOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>

        <main className="flex-1 ml-64 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <p className="text-gray-400">
              Welcome back, {user?.email || 'Admin'}! Manage your content here.
            </p>
          </div>

          {activeTab === 'dashboard' && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={variants.fadeIn}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400 font-medium">Total Classes</h3>
                  <book className="text-primary-400" size={24} />
                </div>
                <div className="text-4xl font-bold text-white">{classes.length}</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400 font-medium">Total Teachers</h3>
                  <users className="text-secondary-400" size={24} />
                </div>
                <div className="text-4xl font-bold text-white">{teachers.length}</div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400 font-medium">Total Enrollments</h3>
                  <mail className="text-green-400" size={24} />
                </div>
                <div className="text-4xl font-bold text-white">{enrollments.length}</div>
              </div>
            </motion.div>
          )}

          {activeTab === 'classes' && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={variants.fadeIn}
            >
              <button
                onClick={() => setShowAddClass(true)}
                className="mb-6 px-6 py-3 bg-primary-600 rounded-xl text-white font-semibold hover:bg-primary-500 transition-all duration-200 flex items-center gap-2"
              >
                <plus size={20} />
                Add Class
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.map((cls, index) => (
                  <div key={cls._id} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{cls.title}</h3>
                        <span className="text-primary-400 text-sm">{cls.category}</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-gray-700 rounded-lg hover:bg-primary-600 transition-colors">
                          <edit size={16} />
                        </button>
                        <button 
                          onClick={() => handleDeleteClass(cls._id)}
                          className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/40 transition-colors"
                        >
                          <trash size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <users size={16} />
                        {cls.enrolled} students
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <calendar size={16} />
                        {cls.duration}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <dollarSign size={16} />
                        {cls.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'teachers' && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={variants.fadeIn}
            >
              <button
                onClick={() => setShowAddTeacher(true)}
                className="mb-6 px-6 py-3 bg-primary-600 rounded-xl text-white font-semibold hover:bg-primary-500 transition-all duration-200 flex items-center gap-2"
              >
                <plus size={20} />
                Add Teacher
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teachers.map((teacher, index) => (
                  <div key={teacher._id} className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{teacher.name}</h3>
                        <span className="text-primary-400 text-sm">{teacher.specialization}</span>
                      </div>
                      <button 
                        onClick={() => handleDeleteTeacher(teacher._id)}
                        className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/40 transition-colors"
                      >
                        <trash size={16} />
                      </button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <users size={16} />
                        {teacher.location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <mail size={16} />
                        {teacher.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'enrollments' && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={variants.fadeIn}
            >
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-900/50">
                        <th className="px-6 py-4 text-left text-gray-300 font-medium">Student</th>
                        <th className="px-6 py-4 text-left text-gray-300 font-medium">Class</th>
                        <th className="px-6 py-4 text-left text-gray-300 font-medium">Email</th>
                        <th className="px-6 py-4 text-left text-gray-300 font-medium">Phone</th>
                        <th className="px-6 py-4 text-left text-gray-300 font-medium">Message</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {enrollments.map((enrollment) => (
                        <tr key={enrollment._id} className="hover:bg-gray-700/30 transition-colors">
                          <td className="px-6 py-4 text-white font-medium">{enrollment.name}</td>
                          <td className="px-6 py-4 text-primary-400">{enrollment.className}</td>
                          <td className="px-6 py-4 text-gray-400">{enrollment.email}</td>
                          <td className="px-6 py-4 text-gray-400">{enrollment.phone}</td>
                          <td className="px-6 py-4 text-gray-400 max-w-xs truncate">{enrollment.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard
