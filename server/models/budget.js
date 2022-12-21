const { DataTypes } = require('sequelize')
const { sequelize } = require('../util/database')

const Budget = sequelize.define('budget', {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
   },
   budget_name: {
      type: DataTypes.STRING(50),
      allowNull: false
   }
})

module.exports = {Budget}