const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/create-checkout-session', require('./stripeCheckout'))
router.use('/create-checkout-session', require('./stripeSubscription'))
router.use('/addsession', require('./addSessionToUser'))
router.use('/getsessionid', require('./getSessionId'))
router.use('/create-portal-session', require('./manageSubscription'))

router.use('/students', require('./students'))

router.use('/parents', require('./parents'))

router.use('/employees', require('./employees'))

router.use('/admin', require('./admin'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
