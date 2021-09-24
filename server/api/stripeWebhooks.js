const env = require('../env')
const cors = require('cors')
process.env.STRIPE_SECRET_API = env.STRIPE_SECRET_API
process.env.STRIPE_PUBLISHABLE_API = env.STRIPE_PUBLISHABLE_API
const express = require("express")
const router = require('express').Router()
module.exports = router

const stripe = require('stripe')(process.env.STRIPE_SECRET_API)

const YOUR_DOMAIN = 'http://localhost:8080'
//express.json({type: 'application/json'})
const endpointSecret = "whsec_bxl6gs5uArFJkHY5LVNCAxJUhlHBEQyN";

router.post('/', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('WEBHOOK API PAYMENT INTENT--->', paymentIntent)
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      console.log('WEBHOOK API PAYMENT METHOD--->', paymentMethod)
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
      return res.status(400)
  }
  // Return a response to acknowledge receipt of the event
  res.json({received: true});
});