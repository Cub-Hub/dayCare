const Sequelize = require('sequelize')
const db = require('../db')

const Type = db.define('type', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
})

module.exports = Type