import React from 'react';

import { IMultiStepFormContext } from '@/store/multiStepForm/MultiStepFormConextTypes.ts';

export const MultiStepFormContext = React.createContext<
  IMultiStepFormContext | undefined
>(undefined);

export const useMultiStepFormContext = () => {
  const context: IMultiStepFormContext | undefined =
    React.useContext(MultiStepFormContext);

  if (context === undefined) {
    throw new Error(
      'useMultiStepFormContext must be used within MultiStepFormProvider'
    );
  }

  return context;
};
