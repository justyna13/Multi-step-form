import React from 'react';

import { FORM_STEPS, PAYMENT_PERIODS } from '@/constants';
import { IMultiStepFormState } from '@/store/multiStepForm/MultiStepFormConextTypes.ts';
import { MultiStepFormContext } from '@/store/multiStepForm/MultiStepFormContext.ts';
import { multiStepFormReducer } from '@/store/multiStepForm/MultiStepFormReducer.tsx';

interface IFormProvider {
  children: React.ReactNode;
}

const formInitialState: IMultiStepFormState = {
  activeStep: FORM_STEPS.PLAN,
  formData: {
    name: '',
    email: '',
    phone: '',
    selectedPlan: null,
    addOns: {
      onlineService: false,
      largeStorage: false,
      customizableProfile: false
    }
  },
  totalPrice: 0,
  currency: 'EUR',
  paymentPeriod: PAYMENT_PERIODS.PER_MONTH
};

export const MultiStepFormProvider: React.FC<IFormProvider> = ({
  children
}: IFormProvider) => {
  const [state, dispatch] = React.useReducer(
    multiStepFormReducer,
    formInitialState
  );

  const value = {
    state,
    dispatch
  };
  return (
    <MultiStepFormContext.Provider value={value}>
      {children}
    </MultiStepFormContext.Provider>
  );
};
