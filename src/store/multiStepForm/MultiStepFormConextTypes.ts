import { Dispatch } from 'react';

import { AVAILABLE_PLANS, FORM_STEPS, PAYMENT_PERIODS } from '@/constants';
import {
  IAction,
  IPayloadAction
} from '@/store/multiStepForm/MultiStepFormActionTypes.ts';

export interface IMultiStepFormState {
  activeStep?: FORM_STEPS;
  name: string;
  email: string;
  phone: string;
  selectedPlan: AVAILABLE_PLANS | null;
  addOns: {
    onlineService: boolean;
    largeStorage: boolean;
    customizableProfile: boolean;
  };
  totalPrice: number;
  currency: string;
  paymentPeriod: PAYMENT_PERIODS | null;
}

export interface IMultiStepFormContext {
  state: IMultiStepFormState;
  dispatch: Dispatch<IAction> | Dispatch<IPayloadAction>;
}
