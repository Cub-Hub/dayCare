const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Student;