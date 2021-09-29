const env = require('../env')
const axios = require('axios')
process.env.STRIPE_SECRET_API = env.STRIPE_SECRET_API
process.env.STRIPE_PUBLISHABLE_API = env.STRIPE_PUBLISHABLE_API

const router = require('express').Router()
module.exports = router

const stripe = require('stripe')(process.env.STRIPE_SECRET_API)

router.post('/', async(req, res, next)=>{
  const { stripeUrl } = req.body
  console.log('undefined URL--------------------->', stripeUrl)
  try {
     const { data } = await axios.get(`${stripeUrl}`, {
      headers: {
        'Authorization': `Bearer ${process.env.STRIPE_SECRET_API}`
      } 
    })
    console.log('AHHHHHH----->>', data)
    res.send(data)
  } catch(err){
    console.log('opening-->', err)
  }
})