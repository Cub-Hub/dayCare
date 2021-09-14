const router = require('express').Router()
const { models: { User, Student, Checkin, School }} = require('../db')
module.exports = router


router.get('/children/:id', async (req, res, next) => {
  try {
    const children = await Student.findAll({
      where: {userId: req.params.id}
    })
    res.json(children)
  } catch (err) {
    next(err)
  }
})

router.post('/checkin', async (req, res, next) => {
    try {
        const today = new Date()
        const dateStr = today.toDateString()

        const checked = await Promise.all([
            req.body.forEach((id) => {
                Checkin.create({date: dateStr, studentId: id})
            })
        ])

        res.send('checkin complete')
    } catch (err) {
        next(err)
    }
})

router.get('/school/:id', async (req, res, next) => {
  try {
    const school = await School.findOne({
      where: {id: req.params.id}
    })
    res.send(school)
  } catch (err) {
    next(err)
  }
})