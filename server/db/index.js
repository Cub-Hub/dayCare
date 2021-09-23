//this is the access point for all things database related!

const db = require('./db')

//testing out the mailchimp api. will organize/format later
const mailchimp = require("@mailchimp/mailchimp_marketing")
mailchimp.setConfig({
    apiKey: "00000xxxx0000x0x00xx00x00x00000-us6",
    server: "us6",
})


const User = require('./models/User')
const Type = require('./models/Type')

const Student = require('./models/Student')
const Category = require('./models/Category')
const Checkin = require('./models/Checkin')
const School = require('./models/School')
const Group = require('./models/Group')
const Clockin = require('./models/Clockin')
const Subscription = require('./models/Subscription')


//associations
User.belongsTo(Type)
Type.hasMany(User)


Subscription.belongsTo(User)
User.hasMany(Subscription)

User.hasMany(Student)
Student.belongsTo(User)

Student.belongsTo(Category)
Category.hasMany(Student)

Student.hasMany(Checkin)
Checkin.belongsTo(Student)

School.hasMany(User)
User.belongsTo(School)

School.hasMany(Student)
Student.belongsTo(School)

Student.belongsTo(Group)
Group.hasMany(Student)

User.belongsTo(Group)
Group.hasMany(User)

Group.belongsTo(School)
School.hasMany(Group)

Group.belongsTo(Category)
Category.hasMany(Group)

Clockin.belongsTo(User)
User.hasMany(Clockin)



module.exports = {
  db,
  models: {
    User,
    Type,
    Subscription,
    Category,
    Student,
    Checkin,
    School,
    Group,
    Clockin
  },
}
