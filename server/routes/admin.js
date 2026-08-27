const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/login', adminController.login)
router.post('/logout', authMiddleware, adminController.logout)
router.get('/profile', authMiddleware, adminController.getProfile)

// Admin routes
router.post('/classes', authMiddleware, adminController.addClass)
router.put('/classes/:id', authMiddleware, adminController.updateClass)
router.delete('/classes/:id', authMiddleware, adminController.deleteClass)

router.post('/teachers', authMiddleware, adminController.addTeacher)
router.put('/teachers/:id', authMiddleware, adminController.updateTeacher)
router.delete('/teachers/:id', authMiddleware, adminController.deleteTeacher)

router.get('/enrollments', authMiddleware, adminController.getEnrollments)

module.exports = router
