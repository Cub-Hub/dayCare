const Sequelize = require('sequelize')
const db = require('../db')

const Checkin = db.define('checkin', {
    time: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    }
})

module.exports = Checkin