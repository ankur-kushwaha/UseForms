// const formUtils = ({}) => {
//   const runValidations
// }

export const runValidations = (validations, formState) => {
  if (!formState) {
    return false;
  }
  const errors = {};
  for (let key in validations) {
    if (key && typeof validations[key]) {
      const error =
        typeof validations[key] === "function"
          ? validations[key](formState[key])
          : validations[key];

      if (error) {
        errors[key] = error;
      }
    }
  }

  return Object.keys(errors).length > 0 ? errors : undefined;
};
