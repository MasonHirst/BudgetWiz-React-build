const { DataTypes } = require('sequelize')
const { sequelize } = require('../util/database')

const Category = sequelize.define('category', {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   category_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
   },
   category_budget: {
      type: DataTypes.FLOAT,
      allowNull: false,
   },
})

module.exports = { Category }
