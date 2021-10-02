const router = require('express').Router()
const { models: { Subscription }} = require('../db')
module.exports = router

router.get('/:userId', async(req, res, next)=>{
  const userId = req.params.userId
  try {
    const session = await Subscription.findAll({
      where: {
        userId
      }
    })
    res.send(session)
  } catch (err){
    console.log(err)
  }
})