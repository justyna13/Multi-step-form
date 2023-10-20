import { FORM_STEPS } from "@/constants";

export interface IMultiStepFormState {
  activeStep?: FORM_STEPS;
  formData?: {
    name: string;
    email: string;
    phone: string;
    selectedPlan: any;
  }
}
