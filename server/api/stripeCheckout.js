const env = require('../env')
const cors = require('cors')
process.env.STRIPE_SECRET_API = env.STRIPE_SECRET_API
process.env.STRIPE_PUBLISHABLE_API = env.STRIPE_PUBLISHABLE_API


const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

const stripe = require('stripe')(process.env.STRIPE_SECRET_API)

const YOUR_DOMAIN = process.env.DOMAIN || 'http://localhost:8080/'

router.post('/', cors(), async (req, res, next)=>{
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'DayCare-Standard',
            },
            unit_amount: 19999,
          },
          quantity: 1,
        },
      ],
      payment_method_types: [ 'card' ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}checkout/success`,
      cancel_url: `${YOUR_DOMAIN}checkout/canceled`
    });
    //console.log('SESSION SINGLE PAYMENT--->', session)
    res.json({ "url": session.url })
  } catch (err){
    console.log('STRIPE POST Err--->', err)
  }
})

