import React from 'react';

import { SinglePlanType } from '@/components/organisms/FormStepSecond/FormStepSecond.tsx';
import '@/components/molecules/Plan/Plan.scss';
import { AVAILABLE_PLANS } from '@/constants';

interface IPlan {
  item: SinglePlanType;
  testid: string;
  isSelected: boolean;
  onPlanSelected: (id: AVAILABLE_PLANS) => void;
}

export const Plan: React.FC<IPlan> = ({
  item,
  testid,
  isSelected,
  onPlanSelected
}: IPlan) => {
  return (
    <div
      className={`single-plan ${isSelected ? 'selected' : ''}`}
      onClick={() => onPlanSelected(item.id)}
      data-testid={testid}>
      {item.icon}
      <div>
        <p className="single-plan__ttl">{item.name}</p>
        <p className="single-plan__desc">${item.pricePerMonth}/mo</p>
      </div>
    </div>
  );
};
