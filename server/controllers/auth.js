require('dotenv').config()
const { SECRET } = process.env
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { User } = require('../models/user')

const createToken = () => {
   const payload = { name, id }
   const options = { expiresIn: 'never'}
   return jwt.sign(payload, SECRET, options)
}

module.exports = {
   register: async (req, res) => {
      try {
         const { email, password, name } = req.body
         console.log(email, password, name)
         const foundUser = await User.findOne({where: {email: email}})
         if (foundUser) {
            console.log(`---------------`, foundUser)
            console.log('----------------------------------------email already exists')
            return res.status(401).send('email already exists')
         }
         // the above lines check to see if a username exists, and if it does, it ends the function and sends a response

         const salt = bcrypt.genSaltSync(10)
         const hash = bcrypt.hashSync(password, salt)
         // the above lines use bcrypt to hash the password, to make it secure and make sure we never store a user's password

         try {
            const newUser = await User.create({
               email,
               hashedPass: hash,
               name
            })
            console.log('---------------------------hopefully just created a user')

            const token = createToken(newUser.email, newUser.id)
            const exp = Date.now() + 1000 * 60 * 60 * 24 * 30
            // the line above takes the current time, adds 1 second (1000 ms), then multiplies by numbers that make it 2 days

            res.send({
               name: newUser.name,
               userId: newUser.id,
               token,
               exp
            })
         } catch (err) {
            console.log(`-------------------------------------- ${err}`)
         }

      } catch (err) {
         console.log(err)
         res.status(413).send(`register function initial try failed: ${err}`)
      }
   },


   login: async (req, res) => {
      console.log('login controller function')
   },
}