const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userName: {
    type: Sequelize.STRING,
  },
  contact: {
    type: Sequelize.DOUBLE,
  },
  email: {
    type: Sequelize.STRING,
    unique: true, // Set the unique property to true
  },
});

module.exports = User;
