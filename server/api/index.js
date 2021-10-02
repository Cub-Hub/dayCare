const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/create-checkout-session', require('./stripeCheckout'))
router.use('/create-checkout-session', require('./stripeSubscription'))
router.use('/addsession', require('./addSessionToUser'))
router.use('/getsessionid', require('./getSessionId'))
router.use('/create-portal-session', require('./manageSubscription'))
router.use('/webhook', require('./stripeWebhooks'))
router.use('/v1/reporting/report_runs', require('./reportingRun'))
router.use('/v1/reporting/report_runs', require('./reportingRunId'))
router.use('/v1/reporting/report_runs', require('./reportingGetFile'))
router.use('/openreport', require('./openReport'))
router.use('/parentswhopaid/', require('./parentsWhoPaid'))

router.use('/students', require('./students'))

router.use('/schools', require('./schools'))

router.use('/parents', require('./parents'))

router.use('/employees', require('./employees'))

router.use('/admin', require('./admin'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
