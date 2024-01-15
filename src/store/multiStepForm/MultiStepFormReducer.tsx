import { PAYMENT_PERIODS } from '@/constants';
import { availableAddOns, availablePlans } from '@/constants/data.tsx';
import { MultiStepFormActionType } from '@/store';
import { MultiStepFormAction } from '@/store/multiStepForm/MultiStepFormActionTypes.ts';
import { IMultiStepFormState } from '@/store/multiStepForm/MultiStepFormConextTypes.ts';

export const multiStepFormReducer = (
  state: IMultiStepFormState,
  action: MultiStepFormAction
) => {
  switch (action.type) {
    case MultiStepFormActionType.SET_ACTIVE_STEP:
      return { ...state, activeStep: action.payload.activeStep };
    case MultiStepFormActionType.UPDATE_FORM_DATA:
      return { ...state, formData: action.payload.formData };
    case MultiStepFormActionType.UPDATE_PAYMENT_PERIOD:
      return { ...state, paymentPeriod: action.payload.paymentPeriod };
    case MultiStepFormActionType.UPDATE_TOTAL_PRICE: {
      const isPerMonth = state.paymentPeriod === PAYMENT_PERIODS.PER_MONTH;

      const selectedPlan = availablePlans.find(
        (plan) => plan.id === state.formData.selectedPlan
      );
      const selectedPlanPrice = selectedPlan
        ? isPerMonth
          ? selectedPlan.pricePerMonth
          : selectedPlan.pricePerYear
        : 0;

      let addOnsPrice = 0;
      const selectedAddons = Object.fromEntries(
        Object.entries(state.formData.addOns).filter(([, value]) => value)
      );
      Object.keys(selectedAddons).map((addOnFieldName) => {
        const addOnData = availableAddOns.find(
          (addOn) => addOn.fieldName === addOnFieldName
        );
        addOnsPrice += addOnData
          ? isPerMonth
            ? addOnData.pricePerMonth
            : addOnData.pricePerYear
          : 0;
      });

      const updatedTotal = selectedPlanPrice + addOnsPrice;

      return { ...state, totalPrice: updatedTotal };
    }
    default:
      return { ...state };
  }
};
