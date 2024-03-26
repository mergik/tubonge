import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-grotesk font-semibold text-dark'>
          Login
        </h1>

        <div className="divider"></div> 

        <form>
          <div>
              <label className="label">
                <span className="label-text text-dark font-poppins">Username</span>
              </label>
              <input type="text" placeholder="Enter username" className="input input-bordered input-primary bg-light w-full max-w-xs text-dark font-poppins" />
          </div>

          <div>
              <label className="label">
                <span className="label-text text-dark font-poppins">Password</span>
              </label>
              <input type="password" placeholder="Enter password" className="input input-bordered input-primary bg-light w-full max-w-xs text-dark font-poppins" />
          </div>

          <a href='#' className="link link-hover text-dark text-sm mt-2 inline-block">Don't have an account?</a>
          
          <div>
          <button className="btn btn-md mt-2 font-poppins text-light">Login</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login;