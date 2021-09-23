const Sequelize = require('sequelize')
const db = require('../db')

const ActiveEmployee = db.define('activeEmployee', {
    date: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = ActiveEmployee