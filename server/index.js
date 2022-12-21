//! Imports
const express = require('express')
const cors = require('cors')
const server = express()
require('dotenv').config()

const {sequelize} = require('./util/database')
const seed = require('./util/seed')
const { User } = require('./models/user')
const { Budget } = require('./models/budget')
const { Category } = require('./models/category')
const { Income } = require('./models/income')
const { Expense } = require('./models/expense')


const { login, register } = require('./controllers/auth')
const { newBudget, newCategory, logExpense, logIncome } = require('./controllers/budgetActions')

//! Middleware
server.use(express.json())
server.use(cors())

//! Relationships
User.hasMany(Budget)
Budget.belongsTo(User)

Budget.hasMany(Category)
Category.belongsTo(Budget)

Category.hasMany(Expense)
Expense.belongsTo(Category)

Category.hasMany(Income)
Income.belongsTo(Category)

//! Endpoints
server.post('/login', login)
server.post('/register', register)

server.post('/addBudget', newBudget)
server.post('/addCategory', newCategory)
server.post('/logExpense', logExpense)
server.post('/logIncome', logIncome)


//! Server listen
sequelize
   .sync()
   // .sync({force: true})
   .then(() => seed())
const {PORT} = process.env
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))