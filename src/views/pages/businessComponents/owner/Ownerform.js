/* eslint-disable prettier/prettier */
import React, { useState } from 'react'

function Ownerform(formData) {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, id, ...inputProps } = formData
  // onChange

  const handleFocus = (e) => {
    setFocused(true)
  }
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        className={inputProps.className}
        {...inputProps}
        // onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
      />
      <span className="errormessage">{errorMessage}</span>
    </div>
  )
}

export default Ownerform
