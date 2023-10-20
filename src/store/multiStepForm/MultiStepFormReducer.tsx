import { IMultiStepFormState } from "@/store/multiStepForm/MultiStepFormConextTypes.ts";
import { MultiStepFormActionType } from "@/store";
import {
  MultiStepFormAction
} from "@/store/multiStepForm/MultiStepFormActionTypes.ts";

export const multiStepFormReducer = (
  state: IMultiStepFormState,
  action: MultiStepFormAction,
) => {
  switch (action.type) {
    case MultiStepFormActionType.SET_ACTIVE_STEP:
      return {...state, activeStep: action?.payload?.activeStep};
    case MultiStepFormActionType.UPDATE_FORM_DATA:
      return {...state, formData: action?.payload?.formData};
    default:
      return {...state};
  }
}
