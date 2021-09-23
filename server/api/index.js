const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))

router.use('/students', require('./students'))

router.use('/parents', require('./parents'))

router.use('/employees', require('./employees'))

router.use('/admin', require('./admin'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
