import { SingleAddOn } from "@/components/organisms/FormStepThird/FormStepThird.tsx";

const withBasePath = (path: string) =>
  `${import.meta.env.VITE_APP_BASE_URL || ''}${path}`;

export const Slugs = {
  // Main pages
  FORM: withBasePath('/multiStepForm'),
  NOT_FOUND: '*'
};

export enum FORM_STEPS {
  INFO = "INFO",
  PLAN = "PLAN",
  ADDITIONAL = "ADDITIONAL ADD-ONS",
  SUMMARY = "SUMMARY"
}

export enum AVAILABLE_PLANS {
  ARCADE = "ARCADE",
  ADVANCED = "ADVANCED",
  PRO = "PRO"
}


export const availableAddOns: Array<SingleAddOn> = [
  {
    id: 1,
    name: "Online service",
    description: "Access to multiplayer games",
    pricePerMonth: 1,
    fieldName: "onlineService"
  },
  {
    id: 2,
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    pricePerMonth: 2,
    fieldName: "largeStorage"
  },
  {
    id: 3,
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    pricePerMonth: 2,
    fieldName: "customizableProfile"
  }
]
