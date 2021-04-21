import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

// # Challenge
// Manage input state validation before submitting

// Acceptance Criteria
//   - Store emailAddress, password, error in state
//   - Create a variable that can hold validate against input elements
//   - Use this variable as a source of truth to disable/enable the form button
//   - If the variable is not valid, use an opacity of 50 on the button; if the variable is valid, don't apply the opacity

// Hints
//   - you can use conditional template rendering tags for the opacity state
//   - useState

// References
//   - https://tailwindcss.com/docs/opacity
//   - https://reactjs.org/docs/hooks-state.html

function Login() {
  useEffect(() => {
    document.tile = "Login - Sinstagram";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isInvalid = email === "" || password === "";

  return (
    <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
      <div className='flex w-3/5'>
        <img
          src='/images/iphone-with-profile.jpeg'
          alt='iPhone with Instagram app'
        />
      </div>
      <div className='flex flex-col w-2/5'>
        <div className='flex flex-col items-center bg-white p-4 border mb-4'>
          <h1 className='flex justify-center w-full'>
            <img
              src='/images/logo.png'
              alt='Instagram'
              className='mt-2 w-6/12 mb-4'
            />
          </h1>

          <form method='POST'>
            <input
              aria-label='Enter your email address'
              className='text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2'
              type='text'
              placeholder='Email address'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <input
              aria-label='Enter your password'
              className='text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2'
              type='password'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={isInvalid}
              type='submit'
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-70 cursor-not-allowed"
              }`}>
              Log In
            </button>
          </form>
        </div>
        <div className='flex justify-center items-center flex-col w-full bg-white p-4 border'>
          <p className='text-sm'>
            <Link to={ROUTES.SIGN_UP} className='font-bold'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
