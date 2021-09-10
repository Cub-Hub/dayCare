//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Type = require('./models/Type')
const Student = require('./models/Student')
const Category = require('./models/Category')

//associations could go here!
User.belongsTo(Type)
Type.hasMany(User)

User.hasMany(Student)
Student.belongsTo(User)

Student.belongsTo(Category)
Category.hasMany(Student)

module.exports = {
  db,
  models: {
    User,
    Type,
    Category,
    Student
  },
}
