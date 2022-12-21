const sequelize = require('sequelize')
const { Budget } = require('../models/budget')
const { Category } = require('../models/category')

const allBudgets = [
   {
      budget_name: 'January 2023',
      userId: 2
   },
   {
      budget_name: 'February 2023',
      userId: 2
   },
   {
      budget_name: 'January 2023',
      userId: 1
   },
   {
      budget_name: 'Bike Budget 2023',
      userId: 1
   },
]

const allCategories = [
   {
      category_name: 'food',
      category_budget: 120.00,
      budgetId: 1
   },
   {
      category_name: 'gas',
      category_budget: 240.00,
      budgetId: 1
   },
   {
      category_name: 'groceries',
      category_budget: 480.00,
      budgetId: 2
   },
   {
      category_name: 'movies',
      category_budget: 45.00,
      budgetId: 2
   },
   {
      category_name: 'food',
      category_budget: 12.50,
      budgetId: 3
   },
   {
      category_name: 'ice cream',
      category_budget: 650.00,
      budgetId: 4
   },
]

const seed = async () => {
   await Budget.bulkCreate(allBudgets)
   await Category.bulkCreate(allCategories)
}

module.exports = seed