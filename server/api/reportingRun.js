const env = require('../env')
process.env.STRIPE_SECRET_API = env.STRIPE_SECRET_API
process.env.STRIPE_PUBLISHABLE_API = env.STRIPE_PUBLISHABLE_API

const router = require('express').Router()
module.exports = router

const stripe = require('stripe')(process.env.STRIPE_SECRET_API)

router.post('/', async(req, res, next)=>{
  const monthStart = Math.round(((new Date()).getTime() - 259200000)/ 1000) 
  const monthEnd = Math.round(((new Date()).getTime() - 172800000)/ 1000) 
  console.log('YESTERDAY-->')
  try {
    const reportRun = await stripe.reporting.reportRuns.create({
      report_type: 'balance.summary.1',
      parameters: {
      interval_start: monthStart,
      interval_end: monthEnd,
      },
    });
    res.send(reportRun)
  } catch (err){
    console.log('download-Report ERROR--->',err)
  }
})
//Start-1631260317
//1632556317