const { DataTypes } = require('sequelize')
const { sequelize } = require('../util/database')

const Income = sequelize.define('income', {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   income_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
   },
   income_note: {
      type: DataTypes.STRING(455),
      allowNull: false,
   },
})

module.exports = { Income }
