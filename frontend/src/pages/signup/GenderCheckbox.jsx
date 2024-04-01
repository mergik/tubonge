import React from 'react'

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className='flex mt-2'>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
                <span className="label-text font-poppins text-dark">Male</span> 
                <input type="checkbox"
                checked={selectedGender === 'male'}
                onChange={() => onCheckboxChange('male')}
                 className="checkbox checkbox-primary border-dark" />
            </label>
        </div>

        <div className="form-control">
            <label className={`label cursor-pointer gap-2 ${selectedGender === "female" ? "selected" : ""} `}>
                <span className="label-text font-poppins text-dark">Female</span> 
                <input type="checkbox"
                checked={selectedGender === 'female'}
                onChange={() => onCheckboxChange('female')}
                 className="checkbox checkbox-primary border-dark" />
            </label>
        </div>
        <div className="form-control">
            <label className={`label cursor-pointer gap-2 ${selectedGender === "other" ? "selected" : ""} `}>
                <span className="label-text font-poppins text-dark">Other</span> 
                <input type="checkbox"
                checked={selectedGender === 'other'}
                onChange={() => onCheckboxChange('other')}
                 className="checkbox checkbox-primary border-dark" />
            </label>
        </div>

    </div>
  )
}

export default GenderCheckbox;