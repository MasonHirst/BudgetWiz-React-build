const { DataTypes } = require('sequelize')
const { sequelize } = require('../util/database')

const User = sequelize.define('user', {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
   },
   email: {
      type: DataTypes.STRING(50),
      allowNull: false
   },
   hashedPass: {
      type: DataTypes.STRING,
      allowNull: false
   },
   name: {
      type: DataTypes.STRING(50),
      allowNull: false
   }
})

module.exports = {User}