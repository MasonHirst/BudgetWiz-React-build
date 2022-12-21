const { Budget } = require('../models/budget')
const { Category } = require('../models/category')
const { Expense } = require('../models/expense')
const { Income } = require('../models/income')


module.exports = {
   newBudget: async (req, res) => {
      console.log('newBudget controller function')
   },


   newCategory: async (req, res) => {
      console.log('newCategory controller function')
   },


   logExpense: async (req, res) => {
      console.log('logExpense controller function')
   },


   logIncome: async (req, res) => {
      console.log('logIncome controller function')
   }
}