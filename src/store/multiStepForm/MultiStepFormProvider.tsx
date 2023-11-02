import React from 'react';
import { MultiStepFormContext } from '@/store/multiStepForm/MultiStepFormContext.ts';
import { IMultiStepFormState } from "@/store/multiStepForm/MultiStepFormConextTypes.ts";
import { multiStepFormReducer } from "@/store/multiStepForm/MultiStepFormReducer.tsx";
import { FORM_STEPS } from "@/constants";

interface IFormProvider {
  children: React.ReactNode;
}

const formInitialState: IMultiStepFormState = {
  activeStep: FORM_STEPS.ADDITIONAL,
  name: "",
  email: "",
  phone: "",
  selectedPlan: null,
  addOns: {
    onlineService: false,
    largeStorage: false,
    customizableProfile: false,
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
