import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading, signup} = useSignup()

  const checkboxChanger = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-grotesk font-semibold text-dark'>
          Create an account <span className='text-primary'> Tubonge</span>
        </h1>

        <div className="divider"></div> 

        <form onSubmit={handleSubmit}>
          {/* Full name */}
          <div>
            <label className="label">
              <span className="label-text text-dark font-poppins">Full Name</span>
            </label>
            <input type="text"
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
              placeholder="Enter full name" 
              className="input input-bordered input-primary bg-light w-full max-w-xs text-dark font-poppins" />
          </div>
          {/* Username */}
          <div>
              <label className="label">
                <span className="label-text text-dark font-poppins">Username</span>
              </label>
              <input type="text"
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
               placeholder="Enter username" className="input input-bordered input-primary bg-light w-full max-w-xs text-dark font-poppins" />
          </div>
          {/*Email */}
          <div>
              <label className="label">
                <span className="label-text text-dark font-poppins">Email</span>
              </label>
              <input type="email"
              value={inputs.email}
              onChange={(e) => setInputs({...inputs, email: e.target.value})}
               placeholder="Enter your email" className="input input-bordered input-primary bg-light w-full max-w-xs text-dark font-poppins" />
          </div>
          {/* Password */}
          <div>
              <label className="label">
                <span className="label-text text-dark font-poppins">Password</span>
              </label>
              <input type="password"
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
               placeholder="Enter password" className="input input-bordered input-primary bg-light w-full max-w-xs text-dark font-poppins" />
          </div>
          {/* Confirm Password */}
          <div>
              <label className="label">
                <span className="label-text text-dark font-poppins">Confirm Password</span>
              </label>
              <input type="password"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
               placeholder="Confirm password" className="input input-bordered input-primary bg-light w-full max-w-xs text-dark font-poppins" />
          </div>

          {/* Gender Checkbox */}
          <GenderCheckbox onCheckboxChange={checkboxChanger} selectedGender={inputs.gender} />

          <div className='flex mt-5 items-center'>
            <button className="btn btn-md font-poppins text-light" disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign up" }
            </button>
            <Link to={'/login'} className="link link-hover text-dark text-sm ml-5 inline-block font-poppins">Already have an account?</Link>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignUp;