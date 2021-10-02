const env = require('../env')
process.env.STRIPE_SECRET_API = env.STRIPE_SECRET_API
process.env.STRIPE_PUBLISHABLE_API = env.STRIPE_PUBLISHABLE_API

const router = require('express').Router()
module.exports = router

const stripe = require('stripe')(process.env.STRIPE_SECRET_API)

router.post('/', async(req, res, next)=>{
  try {
    const reportRun = await stripe.reporting.reportRuns.create({
      report_type: 'balance.summary.1',
      parameters: {
      interval_start: 1631260317,
      interval_end: 1632556317
      },
    });
    res.send(reportRun)
  } catch (err){
    console.log('download-Report ERROR--->',err)
  }
})