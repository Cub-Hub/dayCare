const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/create-checkout-session', require('./stripeCheckout'))
router.use('/create-checkout-session', require('./stripeSubscription'))
router.use('/addsession', require('./addSessionToUser'))
router.use('/getsessionid', require('./getSessionId'))
router.use('/create-portal-session', require('./manageSubscription'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
