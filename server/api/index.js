const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/create-checkout-session', require('./stripeCheckout'))
router.use('/create-checkout-session', require('./stripeSubscription'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
