import { Divider } from "@adobe/react-spectrum";
import { Text } from "@adobe/react-spectrum";
import { Flex } from "@adobe/react-spectrum";

import { Input } from "../../formComponents/Input";
import { useForm } from "../../hooks/useForm";
import { formFields } from "./formField";
import { validations } from "./validations";

export const Form2 = ({ name }) => {
  const { errors, data, onAction } = useForm({
    defaultState: null,
    validations
    // customActions ---- can add custom actions
  });
  return (
    <Flex direction="column" gap="size-125">
      <Text>{name}</Text>
      <Input
        label={formFields.NAME.label}
        id={formFields.NAME.id}
        onAction={onAction}
        error={errors[formFields.NAME.id]}
        value={data[formFields.NAME.id]}
      />
      <Input
        label={formFields.AGE.label}
        id={formFields.AGE.id}
        onAction={onAction}
        error={errors[formFields.AGE.id]}
        value={data[formFields.AGE.id]}
      />
    </Flex>
  );
};
