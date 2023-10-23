import { AVAILABLE_PLANS, FORM_STEPS } from "@/constants";

export enum MultiStepFormActionType {
  SET_ACTIVE_STEP = "SET_ACTIVE_STEP",
  UPDATE_STEP_INFO = "UPDATE_STEP_INFO",
  UPDATE_STEP_PLAN = "UPDATE_STEP_PLAN",
  UPDATE_STEP_ADDITIONAL = "UPDATE_STEP_ADDITIONAL",
}
export interface IAction {
  type: MultiStepFormActionType
}

export interface IPayloadAction extends IAction {
  payload: {
    activeStep: FORM_STEPS;
    name: string;
    email: string;
    phone: string;
    selectedPlan: AVAILABLE_PLANS | null;
  }
}

export type MultiStepFormAction = IPayloadAction;
