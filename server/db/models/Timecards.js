const Sequelize = require('sequelize')
const db = require('../db')

const Timecard = db.define('timecard', {
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clockin: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
})

module.exports = Timecard