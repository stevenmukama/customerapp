/* eslint-disable prettier/prettier */
import React, { useState } from 'react'

function Textarea(textareaData) {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...inputProps } = textareaData

  const handleFocus = (e) => {
    setFocused(true)
  }
  return (
    <div className="formInput">
      <label>{label}</label>
      <textarea
        className={inputProps.className}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => setFocused(true)}
        focused={focused.toString()}
      />
      <span className="errormessage">{errorMessage}</span>
    </div>
  )
}

export default Textarea
