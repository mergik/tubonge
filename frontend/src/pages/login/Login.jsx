import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {loading, login} = useLogin()

  const handleSubmit = async(e) => {
    e.preventDefault()
    await login(username, password)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      {/* Logo */}
      <div className="navbar bg-dark rounded-t-lg">
        <div className="avatar">
          <div className="w-16 rounded">
            <img src="./src/assets/tubonge-icon.jpeg" />
          </div>
        </div>

        <h1 className="text-3xl mx-3 font-grotesk font-semibold text-light">Tubonge</h1>
      </div>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-grotesk font-semibold text-dark'>
          Login
          {/* <span className='text-purpleish'> Tubonge</span> */}
        </h1>

        <div className="divider"></div> 

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div>
              <label className="label">
                <span className="label-text text-dark font-poppins">Username</span>
              </label>
              <input type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
               placeholder="Enter username" className="input input-bordered input-primary bg-light w-full max-w-xs text-dark font-poppins" />
          </div>
          {/* Password */}
          <div>
              <label className="label">
                <span className="label-text text-dark font-poppins">Password</span>
              </label>
              <input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               placeholder="Enter password" className="input input-bordered input-primary bg-light w-full max-w-xs text-dark font-poppins" />
          </div>

          <div className='flex mt-5 items-center'>
            {/* Login Button */}
            <button className="btn btn-md mt-2 font-poppins bg-dark text-light hover:bg-purpleish" disabled={loading}>
              { loading ? <span className='loading loading-spinner'></span> : "Login" }
            </button>
            {/* To sign up link */}
            <Link to={'/signup'} className="link link-hover text-dark text-sm ml-5 inline-block font-poppins hover:text-purpleish">Don't have an account?</Link>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login;