const Sequelize = require('sequelize')
const db = require('../db')

const Group = db.define('group', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'Unset'
    }
})

module.exports = Group