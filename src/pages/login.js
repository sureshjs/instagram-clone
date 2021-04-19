import React, { lazy } from "react"

// =====================
// Login.js page
// =====================

// =====================
// Structure
// =====================
// - div (parent)
// 	- div (child)
// 	- div (child)
// 		- div (child of child)
// 		- div (child of child)


// A container div that holds children
// 	- div
// 		- image of src /images/iphone-with-profile.jpg & alt tag of "iPhone with Instagram app"

// 	- div to wrap the following children
// 		- div -> (another div to wrap the form (see below for further details of the form)
// 		- div -> a paragraph with a React router link that allows to the user to navigate to 'Sign up' - use the ROUTES file to link to this particular page

// A form for the user to login with a method of POST

// An input box for the user to enter their email address with a placeholder value of Email Address

// An input box for the user to enter their password with a placeholder value of Password

// A button so that the user can submit the form

// References:
// 	- Tailwind container: https://tailwindcss.com/docs/container
// 	- Tailwind flex: https://tailwindcss.com/docs/flex

import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom'
const SignUp = lazy(() => import('./signup'))

function Login() {
  return (
    <>
      <div className="container">
        <div className="img-container">
          <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
        </div>
        <div className="login-container">
          <div className="form">
            <form method="POST">
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login