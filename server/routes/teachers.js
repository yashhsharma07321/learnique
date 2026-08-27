const express = require('express')
const router = express.Router()
const teachersController = require('../controllers/teachersController')

router.get('/', teachersController.getAllTeachers)
router.get('/:id', teachersController.getTeacherById)

module.exports = router
