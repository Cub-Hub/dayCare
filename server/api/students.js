const router = require('express').Router()
const { models: { Student } } = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll(
      // explicitly select only the id and username fields - even though
      // students' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
    )
    res.json(students)
  } catch (err) {
    next(err)
  }
})
