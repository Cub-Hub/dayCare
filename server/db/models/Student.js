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
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  imgURL: {
    type: Sequelize.STRING,
    defaultValue: 'https://cub-hub.s3.us-east-2.amazonaws.com/generic.jpg',
  },
  isPending: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = Student;