import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export const getClassess = async () => {
  const response = await api.get('/classes')
  return response.data
}

export const getTeachers = async () => {
  const response = await api.get('/teachers')
  return response.data
}

export const getTeacherById = async (id) => {
  const response = await api.get(`/teachers/${id}`)
  return response.data
}

export const enrollClass = async (enrollmentData) => {
  const response = await api.post('/enroll', enrollmentData)
  return response.data
}

export const contactFormSubmit = async (contactData) => {
  const response = await api.post('/contact', contactData)
  return response.data
}

export const adminLogin = async (credentials) => {
  const response = await api.post('/admin/login', credentials)
  return response.data
}

export const adminLogout = async () => {
  const response = await api.post('/admin/logout')
  return response.data
}

export const adminProfile = async () => {
  const response = await api.get('/admin/profile')
  return response.data
}

export const addClass = async (classData) => {
  const response = await api.post('/admin/classes', classData)
  return response.data
}

export const updateClass = async (id, classData) => {
  const response = await api.put(`/admin/classes/${id}`, classData)
  return response.data
}

export const deleteClass = async (id) => {
  const response = await api.delete(`/admin/classes/${id}`)
  return response.data
}

export const addTeacher = async (teacherData) => {
  const response = await api.post('/admin/teachers', teacherData)
  return response.data
}

export const updateTeacher = async (id, teacherData) => {
  const response = await api.put(`/admin/teachers/${id}`, teacherData)
  return response.data
}

export const deleteTeacher = async (id) => {
  const response = await api.delete(`/admin/teachers/${id}`)
  return response.data
}

export const getEnrollments = async () => {
  const response = await api.get('/admin/enrollments')
  return response.data
}

export default api
