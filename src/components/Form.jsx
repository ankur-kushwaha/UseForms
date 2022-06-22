import React from "react";
export const Form = ({ children }) => {
  return React.Children.map(children, (child) => React.cloneElement(child));
};
