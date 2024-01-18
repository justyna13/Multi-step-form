import AdvancedPlanIcon from '@/assets/icons/icon-advanced.svg?react';
import ArcadePlanIcon from '@/assets/icons/icon-arcade.svg?react';
import ProPlanIcon from '@/assets/icons/icon-pro.svg?react';
import { SinglePlanType } from '@/components/organisms/FormStepSecond/FormStepSecond.tsx';
import { SingleAddOn } from '@/components/organisms/FormStepThird/FormStepThird.tsx';
import { AVAILABLE_ADDONS, AVAILABLE_PLANS } from '@/constants/index.ts';

export const availablePlans: Array<SinglePlanType> = [
  {
    id: AVAILABLE_PLANS.ARCADE,
    name: 'Arcade',
    pricePerMonth: 9,
    pricePerYear: 84,
    icon: <ArcadePlanIcon />
  },
  {
    id: AVAILABLE_PLANS.ADVANCED,
    name: 'Advanced',
    pricePerMonth: 12,
    pricePerYear: 126,
    icon: <AdvancedPlanIcon />
  },
  {
    id: AVAILABLE_PLANS.PRO,
    name: 'Pro',
    pricePerMonth: 15,
    pricePerYear: 142,
    icon: <ProPlanIcon />
  }
];

export const availableAddOns: Array<SingleAddOn> = [
  {
    id: 1,
    name: 'Online service',
    description: 'Access to multiplayer games',
    pricePerMonth: 1,
    pricePerYear: 7,
    fieldName: AVAILABLE_ADDONS.ONLINE_SERVICE
  },
  {
    id: 2,
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    pricePerMonth: 2,
    pricePerYear: 16,
    fieldName: AVAILABLE_ADDONS.LARGE_STORAGE
  },
  {
    id: 3,
    name: 'Customizable Profile',
    description: 'Custom theme on your profile',
    pricePerMonth: 2,
    pricePerYear: 28,
    fieldName: AVAILABLE_ADDONS.CUSTOMIZABLE_PROFILE
  }
];
