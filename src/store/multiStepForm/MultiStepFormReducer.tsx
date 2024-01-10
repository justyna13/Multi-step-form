import { MultiStepFormActionType } from '@/store';
import { MultiStepFormAction } from '@/store/multiStepForm/MultiStepFormActionTypes.ts';
import { IMultiStepFormState } from '@/store/multiStepForm/MultiStepFormConextTypes.ts';

export const multiStepFormReducer = (
  state: IMultiStepFormState,
  action: MultiStepFormAction
) => {
  switch (action.type) {
    case MultiStepFormActionType.SET_ACTIVE_STEP:
      return { ...state, activeStep: action?.payload?.activeStep };
    case MultiStepFormActionType.CHANGE_PAYMENT_TYPE:
      return { ...state, paymentType: action?.payload?.paymentPeriod };
    case MultiStepFormActionType.UPDATE_STEP_INFO:
      return {
        ...state,
        name: action.payload?.name,
        email: action.payload?.email,
        phone: action.payload?.phone
      };
    case MultiStepFormActionType.UPDATE_STEP_PLAN:
      return { ...state, selectedPlan: action.payload?.selectedPlan };
    case MultiStepFormActionType.UPDATE_PAYMENT_PERIOD:
      return { ...state, paymentPeriod: action.payload?.paymentPeriod };
    case MultiStepFormActionType.UPDATE_STEP_ADDITIONAL:
      return { ...state, addOns: action.payload?.addOns };
    default:
      return { ...state };
  }
};
