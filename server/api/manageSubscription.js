const env = require('../env')
const cors = require('cors')
process.env.STRIPE_SECRET_API = env.STRIPE_SECRET_API
process.env.STRIPE_PUBLISHABLE_API = env.STRIPE_PUBLISHABLE_API

const router = require('express').Router()                               
module.exports = router

const stripe = require('stripe')(process.env.STRIPE_SECRET_API)

const YOUR_DOMAIN = process.env.DOMAIN ||  'http://localhost:8080/'

router.post('/:sessionId', cors(), async (req, res, next)=>{
  const { sessionId } = req.params
  //console.log('AT API SESSION ID--->', sessionId)
  try {
      // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
      // Typically this is stored alongside the authenticated user in your database.
      const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);
      // This is the url to which the customer will be redirected when they are done
      // managing their billing with the portal.
      const returnUrl = YOUR_DOMAIN;
      const portalSession = await stripe.billingPortal.sessions.create({
        customer: checkoutSession.customer,
        return_url: returnUrl,
      })
      res.json({ "url": portalSession.url })
      // res.redirect(303, portalSession.url);
  } catch (err){
    console.log('MANAGE SUBSCRIPTION Err--->', err)
  }
})