import React from "react";

export const FormContext = React.createContext<any | undefined>(undefined);

export const useFormContext = () => {
  const context = React.useContext(FormContext);

  if (context === undefined) {
    throw new Error("useFormContext must be used within FormProvider")
  }

  return context;
}
