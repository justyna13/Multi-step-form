import React from 'react';
import { FormContext } from '@/store/form/FormContext.ts';
import { IFormState } from "@/store/form/FormConextTypes.ts";
import { formReducer } from "@/store/form/FormReducer.tsx";

interface IFormProvider {
  children: React.ReactNode;
}

const formInitialState: IFormState = {
  name: "",
  email: "",
  phone: "",
}

export const FormProvider: React.FC<IFormProvider> = ({
  children
}: IFormProvider) => {
  const [state, dispatch] = React.useReducer(formReducer, formInitialState);


  const value = {
    state,
    dispatch
  }
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
