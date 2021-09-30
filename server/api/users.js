const router = require('express').Router()
const { models: { User, School, Group }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [School, Group]
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
