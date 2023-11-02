import { AVAILABLE_PLANS, FORM_STEPS } from "@/constants";

export interface IMultiStepFormState {
  activeStep?: FORM_STEPS;
  name: string;
  email: string;
  phone: string;
  selectedPlan: AVAILABLE_PLANS | null;
  addOns: {
    onlineService: boolean,
    largeStorage: boolean,
    customizableProfile: boolean
  };
}
