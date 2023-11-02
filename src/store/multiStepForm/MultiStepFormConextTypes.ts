import { AVAILABLE_PLANS, FORM_STEPS, PAYMENT_TYPES } from "@/constants";

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
  totalPrice: number;
  currency: string;
  paymentType: PAYMENT_TYPES;
}
