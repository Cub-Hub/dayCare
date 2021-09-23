const router = require('express').Router()
const { models: { Subscription }} = require('../db')
module.exports = router

router.post('/:userId/:sessionId', async (req, res, next)=>{
  const userId = req.params.userId
  const sessionId = req.params.sessionId
  try {
    await Subscription.create({ userId, sessionId })
    res.sendStatus(200)
  } catch(err){ 
    console.log(err)
  }
})