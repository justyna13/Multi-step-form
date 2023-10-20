import { FORM_STEPS } from "@/constants";

export enum MultiStepFormActionType {
  SET_ACTIVE_STEP = "SET_ACTIVE_STEP",
  UPDATE_FORM_DATA = "UPDATE_FORM_DATA"
}
export interface IAction {
  type: MultiStepFormActionType
}

export interface IPayloadAction extends IAction {
  payload?: {
    activeStep?: FORM_STEPS;
    formData?: {
      name: string;
      email: string;
      phone: string;
      selectedPlan: any;
    }
  }
}

export type MultiStepFormAction = IPayloadAction;
