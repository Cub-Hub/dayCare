const env = require('../env')
process.env.STRIPE_SECRET_API = env.STRIPE_SECRET_API
process.env.STRIPE_PUBLISHABLE_API = env.STRIPE_PUBLISHABLE_API

const router = require('express').Router()
module.exports = router

const stripe = require('stripe')(process.env.STRIPE_SECRET_API)

router.get('/', async(req, res, next)=>{
  try {
    const reportRuns = await stripe.reporting.reportRuns.list({
      limit: 3,
    });
    res.send(reportRuns)
  } catch (err){
    console.log('reporting GET-FILE ERROR--->',err)
  }
})