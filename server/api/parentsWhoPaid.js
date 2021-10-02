const router = require('express').Router()
const { models: { User, Subscription }} = require('../db')
module.exports = router

router.get('/', async (req, res, next)=>{
  try {
    const subscriptions = await Subscription.findAll({
      include: [User]
    })
    res.send(subscriptions)
  } catch (err){
      console.log('paid error-->', err)
  }
})