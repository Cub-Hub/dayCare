const Sequelize = require('sequelize')
const db = require('../db')

const Clockin = db.define('clockin', {
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clockedin: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
})

module.exports = Clockin