import { useCallback, useEffect, useState } from "react";
import { runValidations } from "../utils/formUtils";

import { useForm as useReactHookForm } from "react-hook-form";

export const useForm = ({ defaultState, validations, customActions }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useReactHookForm();

  function onAction() {}

  console.log(register("firstName"));

  return {
    data: {},
    errors,
    onAction
  };
};
