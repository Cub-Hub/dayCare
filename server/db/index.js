//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Type = require('./models/Type')
const Subscription = require('./models/Subscription')

//associations could go here!
User.belongsTo(Type)
Type.hasMany(User)

Subscription.belongsTo(User)
User.hasMany(Subscription)


module.exports = {
  db,
  models: {
    User,
    Type,
    Subscription
  },
}
