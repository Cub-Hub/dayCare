//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Type = require('./models/Type')

//associations could go here!
User.belongsTo(Type)
Type.hasMany(User)

module.exports = {
  db,
  models: {
    User,
    Type
  },
}
