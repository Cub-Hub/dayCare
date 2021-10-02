const env = require('../env')
const cors = require('cors')
process.env.STRIPE_SECRET_API = env.STRIPE_SECRET_API
process.env.STRIPE_PUBLISHABLE_API = env.STRIPE_PUBLISHABLE_API

const router = require('express').Router()
module.exports = router

const stripe = require('stripe')(process.env.STRIPE_SECRET_API)

const YOUR_DOMAIN = process.env.DOMAIN || 'http://localhost:8080/'

router.post('/subscription', cors(), async (req, res, next)=>{
  try {
    const prices = await stripe.prices.list({
      lookup_keys: [req.body.lookup_key],
      expand: ['data.product'],
    });
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: 'auto',
      payment_method_types: ['card'],
      line_items: [
        {
          price: prices.data[0].id,
          // For metered billing, do not pass quantity
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${YOUR_DOMAIN}checkout/subscriptionsuccess`,
      cancel_url: `${YOUR_DOMAIN}checkout/subscriptioncanceled`,
    });
    //console.log('SUBSCIPTION SESSION--->', session)
    res.json({ "url": session.url, "sessionId": session.id })
  } catch (err){
    console.log('STRIPE SUBSCRIPTION Err--->', err)
  }
})