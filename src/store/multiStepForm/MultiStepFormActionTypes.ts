import { AVAILABLE_PLANS, FORM_STEPS, PAYMENT_PERIODS } from '@/constants';

export enum MultiStepFormActionType {
  SET_ACTIVE_STEP = 'SET_ACTIVE_STEP',
  UPDATE_FORM_DATA = 'UPDATE_FORM_DATA',
  UPDATE_PAYMENT_PERIOD = 'UPDATE_PAYMENT_PERIOD'
}

type TPayloadActiveStep = {
  activeStep: FORM_STEPS;
};

type TPayloadFormData = {
  formData: {
    name: string;
    email: string;
    phone: string;
    selectedPlan: AVAILABLE_PLANS | null;
    addOns: {
      onlineService: boolean;
      largeStorage: boolean;
      customizableProfile: boolean;
    };
  };
};

type TPayloadPaymentPeriod = {
  paymentPeriod?: PAYMENT_PERIODS;
};

export type TPayloadAction =
  | {
      type: MultiStepFormActionType.SET_ACTIVE_STEP;
      payload: TPayloadActiveStep;
    }
  | {
      type: MultiStepFormActionType.UPDATE_FORM_DATA;
      payload: TPayloadFormData;
    }
  | {
      type: MultiStepFormActionType.UPDATE_PAYMENT_PERIOD;
      payload: TPayloadPaymentPeriod;
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | any;

export type MultiStepFormAction = TPayloadAction;
