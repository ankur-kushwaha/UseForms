export const validations = {
  name: (value) => {
    return value?.length > 2 ? "Length must be less than 25 characters" : null;
  },
  age: (value) => {
    return value && value < 18 ? "Adults only" : null;
  }
};
