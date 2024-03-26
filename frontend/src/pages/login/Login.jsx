import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-grotesk font-semibold text-dark'>
          Login
        </h1>

        <div className="divider"></div> 

        <form>
          {/* Username */}
          <div>
              <label className="label">
                <span className="label-text text-dark font-poppins">Username</span>
              </label>
              <input type="text" placeholder="Enter username" className="input input-bordered input-primary bg-light w-full max-w-xs text-dark font-poppins" />
          </div>
          {/* Password */}
          <div>
              <label className="label">
                <span className="label-text text-dark font-poppins">Password</span>
              </label>
              <input type="password" placeholder="Enter password" className="input input-bordered input-primary bg-light w-full max-w-xs text-dark font-poppins" />
          </div>

          <div className='flex mt-5 items-center'>
          <button className="btn btn-md mt-2 font-poppins text-light">Login</button>
          <Link to={'/signup'} className="link link-hover text-dark text-sm ml-5 inline-block font-poppins">Don't have an account?</Link>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login;