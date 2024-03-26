import React from 'react'
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-grotesk font-semibold text-dark'>
          Create an account
        </h1>

        <div className="divider"></div> 

        <form>
          {/* Full name */}
          <div>
            <label className="label">
              <span className="label-text text-dark font-poppins">Full Name</span>
            </label>
            <input type="text" placeholder="Enter full name" className="input input-bordered input-primary bg-light w-full max-w-xs text-dark font-poppins" />
          </div>
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
          {/* Confirm Password */}
          <div>
              <label className="label">
                <span className="label-text text-dark font-poppins">Confirm Password</span>
              </label>
              <input type="password" placeholder="Confirm password" className="input input-bordered input-primary bg-light w-full max-w-xs text-dark font-poppins" />
          </div>

          {/* Gender Checkbox */}
          <GenderCheckbox />

          <div className='flex mt-5 items-center'>
            <button className="btn btn-md font-poppins text-light">Sign up</button>
            <a href='#' className="link link-hover text-dark text-sm ml-5 inline-block font-poppins">Already have an account?</a>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignUp;