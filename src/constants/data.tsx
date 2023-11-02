import { AVAILABLE_PLANS } from "@/constants/index.ts";
import { SinglePlanType } from "@/components/organisms/FormStepSecond/FormStepSecond.tsx";
import { ReactComponent as ArcadePlanIcon } from "@/assets/icons/icon-arcade.svg";
import { ReactComponent as AdvancedPlanIcon } from "@/assets/icons/icon-advanced.svg";
import { ReactComponent as ProPlanIcon } from "@/assets/icons/icon-pro.svg";
import { SingleAddOn } from "@/components/organisms/FormStepThird/FormStepThird.tsx";

export const availablePlans: Array<SinglePlanType> = [
  {
    id: AVAILABLE_PLANS.ARCADE,
    name: "Arcade",
    pricePerMonth: 9,
    icon: <ArcadePlanIcon />,
  },
  {
    id: AVAILABLE_PLANS.ADVANCED,
    name: "Advanced",
    pricePerMonth: 12,
    icon: <AdvancedPlanIcon />,
  },
  {
    id: AVAILABLE_PLANS.PRO,
    name: "Pro",
    pricePerMonth: 15,
    icon: <ProPlanIcon />,
  }
];

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
];
