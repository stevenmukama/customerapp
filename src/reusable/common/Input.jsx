import React from "react";
import { CInput, CInputGroup } from "@coreui/react";

const Input = ({ name, placeholder, autoComplete, type, field }) => (
  <CInputGroup className="mb-3">
    <CInput
      {...field}
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  </CInputGroup>
);
export default Input;
