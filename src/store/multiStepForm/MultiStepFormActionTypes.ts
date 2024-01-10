import { AVAILABLE_PLANS, FORM_STEPS, PAYMENT_PERIODS } from '@/constants';

export enum MultiStepFormActionType {
  SET_ACTIVE_STEP = 'SET_ACTIVE_STEP',
  CHANGE_PAYMENT_TYPE = 'CHANGE_PAYMENT_TYPE',
  UPDATE_STEP_INFO = 'UPDATE_STEP_INFO',
  UPDATE_STEP_PLAN = 'UPDATE_STEP_PLAN',
  UPDATE_STEP_ADDITIONAL = 'UPDATE_STEP_ADDITIONAL',
  UPDATE_PAYMENT_PERIOD = 'UPDATE_PAYMENT_PERIOD'
}
export interface IAction {
  type: MultiStepFormActionType;
}

export interface IPayloadAction extends IAction {
  payload: {
    activeStep: FORM_STEPS;
    name: string;
    email: string;
    phone: string;
    selectedPlan: AVAILABLE_PLANS | null;
    addOns: {
      onlineService: boolean;
      largeStorage: boolean;
      customizableProfile: boolean;
    };
    paymentPeriod: PAYMENT_PERIODS;
  };
}

export type MultiStepFormAction = IPayloadAction;
