const env = require('../env')
const cors = require('cors')
process.env.STRIPE_SECRET_API = env.STRIPE_SECRET_API
process.env.STRIPE_PUBLISHABLE_API = env.STRIPE_PUBLISHABLE_API

const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router
//sk_test_51JXpEdDRn3k8eEigPyFXomt1n14vDgurRZFvX8SrB4ZMgxoAseL3alRXIlkMI04chPsOoYog8kJMDN6k8fvwhiD300ozlfQZm1'
const stripe = require('stripe')(process.env.STRIPE_SECRET_API)

const YOUR_DOMAIN = 'http://localhost:8080'
//price: 'price_1JXz3UDRn3k8eEigd38orJMC',
//router.options('*', cors())

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
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      payment_method_types: [ 'card' ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/checkout/success`,
      cancel_url: `${YOUR_DOMAIN}/checkout/canceled`,
    });
    console.log('SESSION--->', session)
    res.json({ "url": session.url })
    //res.send('complete')

  } catch (err){
    console.log('STRIPE POST Err--->', err)
  }
})