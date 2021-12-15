import React from "react";
import { useField } from "formik";
import Input from "./common/Input";
import FormError from "./common/FormError";
import Label from "./common/Label";

const FormInput = ({ name, type, placeholder, autoComplete }) => {
  const [field, meta] = useField(name);
  return (
    <>
      <Label text={placeholder} />
      <Input
        field={field}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      {meta.touched && meta.error ? <FormError text={meta.error} /> : null}
    </>
  );
};

export default FormInput;
