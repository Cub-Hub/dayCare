const router = require('express').Router()
const { models: { Student, Checkin, School, User } } = require('../db')
module.exports = router

router.get('/checkins', async (req, res, next) => {
  try {
    const checkins = await Checkin.findAll({})
    res.json(checkins)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: [School, User]
    })
    res.json(students)
  } catch (err) {
    next(err)
  }
})

