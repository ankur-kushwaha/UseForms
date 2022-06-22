import { Divider } from "@adobe/react-spectrum";
import { Text } from "@adobe/react-spectrum";
import { Flex } from "@adobe/react-spectrum";
import React, { Children } from "react";

import { Input } from "../../formComponents/Input";
import { useForm } from "../../hooks/useForm";
import { formFields } from "./formField";
import { validations } from "./validations";

let FormContext = React.createContext();

export { FormContext };

function Form({ children }) {
  const [state, setState] = React.useState();

  return (
    <FormContext.Provider value={{ formData: state }}>
      {children}
    </FormContext.Provider>
  );
}

export const Form1 = ({ name }) => {
  const { errors, data, onAction } = useForm({
    defaultState: null,
    validations
    // customActions ---- can add custom actions
  });
  return (
    <Flex direction="column" gap="size-125">
      <Form>
        <Text>{name}</Text>
        <Input key={"name"} />
        <Input key={"age"} />
        <Divider />
      </Form>
    </Flex>
  );
};
