import React, { useState } from 'react'

const Login = () => {
   const [isNewUser, setIsNewUser] = useState(false)

   const loginSubmitHandler = () => {

   }

   return isNewUser ? (
      <div className="create-acc-div">
         <form id="createAcc-form">
            <label for="email">Email</label>
            <input
               name="email"
               id="email-create-input"
               type="email"
               placeholder="Enter a valid email"
            />

            <label for="names">Name(s)</label>
            <input
               name="names"
               id="createAcc-names-input"
               type="text"
               placeholder="Ex: 'Jack and Jill'"
            />

            <label for="password">Password</label>
            <input
               name="password"
               id="password-create-input"
               type="password"
               placeholder="At least 6 characters"
            />

            <label for="password2">Re-enter password</label>
            <input
               name="password2"
               id="password-create-input2"
               type="password"
               placeholder="Passwords must match"
            />
         </form>
         <button id="createAcc-btn" className="button-35">
            Create Account
         </button>

         <button
            id="createAcc-btn"
            className="button-35"
            onClick={() => {
               setIsNewUser(false)
            }}
         >
            Back to login
         </button>
      </div>
   ) : (
      <div className="login-form-div">
         <form id="login-form" className="login-form-div" onSubmit={loginSubmitHandler}>
            <input
               name="email"
               type="text"
               id="email-login-input"
               placeholder="email"
               className="login-input"
            />
            <input
               name="password"
               type="password"
               id="password-login-input"
               placeholder="password"
               className="login-input"
            />
            <button
               id="login-btn"
               className="button-35"
               type="submit"
            >
               Login
            </button>
         </form>
         <button
            id="new-user-btn"
            className="button-35"
            onClick={() => {
               setIsNewUser(true)
            }}
         >
            New User
         </button>
      </div>
   )
}

export default Login
