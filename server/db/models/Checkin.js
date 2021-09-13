const Sequelize = require('sequelize')
const db = require('../db')

const Checkin = db.define('checkin', {
    date: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Checkin