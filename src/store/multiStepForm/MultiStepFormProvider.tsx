import React from 'react';
import { MultiStepFormContext } from '@/store/multiStepForm/MultiStepFormContext.ts';
import { IMultiStepFormState } from "@/store/multiStepForm/MultiStepFormConextTypes.ts";
import { multiStepFormReducer } from "@/store/multiStepForm/MultiStepFormReducer.tsx";
import { FORM_STEPS } from "@/constants";

interface IFormProvider {
  children: React.ReactNode;
}

const formInitialState: IMultiStepFormState = {
  activeStep: FORM_STEPS.INFO,
  formData: {
    name: "",
    email: "",
    phone: "",
  }
}

export const MultiStepFormProvider: React.FC<IFormProvider> = ({
  children
}: IFormProvider) => {
  const [state, dispatch] = React.useReducer(multiStepFormReducer, formInitialState);


  const value = {
    state,
    dispatch
  }
  return <MultiStepFormContext.Provider value={value}>{children}</MultiStepFormContext.Provider>;
};
