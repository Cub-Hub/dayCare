const env = require('../env')
const axios = require('axios')
const parse = require('csv-parse')
process.env.STRIPE_SECRET_API = env.STRIPE_SECRET_API
process.env.STRIPE_PUBLISHABLE_API = env.STRIPE_PUBLISHABLE_API

const router = require('express').Router()
module.exports = router

const stripe = require('stripe')(process.env.STRIPE_SECRET_API)

router.post('/', async(req, res, next)=>{
  const { stripeUrl } = req.body
  try {
     const { data } = await axios.get(`${stripeUrl}`, {
      headers: {
        'Authorization': `Bearer ${process.env.STRIPE_SECRET_API}`
      } 
    })
    parse(data, {}, (err, _data)=>{
      //console.log(_data)
      res.send(_data)
    })
  } catch(err){
    console.log('opening-->', err)
  }
})