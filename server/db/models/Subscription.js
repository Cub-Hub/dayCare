const Sequelize = require('sequelize')
const db = require('../db')

const Subscription = db.define('subscription', {
  sessionId: {
    type: Sequelize.STRING,
    unique: true
  }
})

module.exports = Subscription