//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Type = require('./models/Type')
const Student = require('./models/Student')
const Category = require('./models/Category')
const Checkin = require('./models/Checkin')
const School = require('./models/School')

//associations could go here!
User.belongsTo(Type)
Type.hasMany(User)

User.hasMany(Student)
Student.belongsTo(User)

Student.belongsTo(Category)
Category.hasMany(Student)

Student.hasMany(Checkin)
Checkin.belongsTo(Student)

School.hasMany(User)
User.belongsTo(School)

module.exports = {
  db,
  models: {
    User,
    Type,
    Category,
    Student,
    Checkin,
    School
  },
}
