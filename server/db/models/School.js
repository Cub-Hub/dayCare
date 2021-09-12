const Sequelize = require('sequelize')
const db = require('../db')

const School = db.define('school', {
    id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
      },
    minLat: {
        type: Sequelize.DataTypes.DECIMAL,
        allowNull: false
    },
    maxLat: {
        type: Sequelize.DataTypes.DECIMAL,
        allowNull: false
    },
    minLon: {
        type: Sequelize.DataTypes.DECIMAL,
        allowNull: false
    },
    maxLon: {
        type: Sequelize.DataTypes.DECIMAL,
        allowNull: false
    }
})

module.exports = School