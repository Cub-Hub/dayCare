const env = require('../env')
process.env.STRIPE_SECRET_API = env.STRIPE_SECRET_API
process.env.STRIPE_PUBLISHABLE_API = env.STRIPE_PUBLISHABLE_API

const router = require('express').Router()
module.exports = router

const stripe = require('stripe')(process.env.STRIPE_SECRET_API)

router.get('/:id', async(req, res, next)=>{
  const { id } = req.params
  try {
    const reportRun = await stripe.reporting.reportRuns.retrieve( id );
    res.send(reportRun)
  } catch (err){
    console.log('reporting Run Id ERROR--->',err)
  }
})