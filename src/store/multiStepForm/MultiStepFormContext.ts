import React from "react";

export const MultiStepFormContext = React.createContext<any | undefined>(undefined);

export const useMultiStepFormContext = () => {
  const context = React.useContext(MultiStepFormContext);

  if (context === undefined) {
    throw new Error("useMultiStepFormContext must be used within MultiStepFormProvider")
  }

  return context;
}
