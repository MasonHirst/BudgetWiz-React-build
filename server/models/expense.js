const { DataTypes } = require('sequelize')
const { sequelize } = require('../util/database')

const Expense = sequelize.define('expense', {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
   },
   expense_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
   },
   expense_note: {
      type: DataTypes.STRING(455),
      allowNull: false
   }
})

module.exports = {Expense}