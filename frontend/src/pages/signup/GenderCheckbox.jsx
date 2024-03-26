import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex mt-2'>
        <div className="form-control">
            <label className="label cursor-pointer gap-2">
                <span className="label-text font-poppins text-dark">Male</span> 
                <input type="checkbox" className="checkbox checkbox-primary border-dark" />
            </label>
        </div>

        <div className="form-control">
            <label className="label cursor-pointer gap-2">
                <span className="label-text font-poppins text-dark">Female</span> 
                <input type="checkbox" className="checkbox checkbox-primary border-dark" />
            </label>
        </div>

    </div>
  )
}

export default GenderCheckbox;