const router = require('express').Router()
const { models: { Group, Student, User, Category, School } } = require('../db')
module.exports = router

router.get('/groups', async (req, res, next) => {
  try {
    const groups = await Group.findAll({
        include: [Student, User, Category, School ]
    })
    res.json(groups)
  } catch (err) {
    next(err)
  }
})

