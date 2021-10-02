const Sequelize = require('sequelize')
const db = require('../db')

const Activity = db.define('activity', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    note: {
        type: Sequelize.STRING,
    }
})

module.exports = Activity