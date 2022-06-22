import React from "react";
import { TextField } from "@adobe/react-spectrum";
import { FormContext } from "../forms/form1/Form1";

const ErrorMessage = ({ error }) => {
  if (!error) {
    return null;
  }
  return <div> {error}</div>;
};

export const Input = ({ key }) => {
  const { formData } = React.useContext(FormContext);

  console.log(formData);

  return (
    <TextField
      id={key}
      label={key}
      defaultValue={""}
      // onChange={onTextFieldChange}
      // errorMessage={<ErrorMessage error={error} />}
      // validationState={error ? "invalid" : "valid"}
    />
  );
};
