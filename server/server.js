require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')

const classesRouter = require('./routes/classes')
const teachersRouter = require('./routes/teachers')
const enrollRouter = require('./routes/enroll')
const contactRouter = require('./routes/contact')
const adminRouter = require('./routes/admin')

const app = express()

app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

app.use('/api/classes', classesRouter)
app.use('/api/teachers', teachersRouter)
app.use('/api/enroll', enrollRouter)
app.use('/api/contact', contactRouter)
app.use('/api/admin', adminRouter)

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app
