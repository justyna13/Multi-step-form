import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { ReactComponent as ArcadePlanIcon } from '@/assets/icons/icon-arcade.svg';
import { Plan } from '@/components/molecules';
import { AVAILABLE_PLANS } from '@/constants';
import {
  IFormProvider,
  MultiStepFormProvider
} from '@/store/multiStepForm/MultiStepFormProvider.tsx';

const examplePlan = {
  id: AVAILABLE_PLANS.ARCADE,
  name: 'Arcade',
  pricePerMonth: 9,
  pricePerYear: 76,
  icon: <ArcadePlanIcon />
};

const formWrapper = ({ children }: IFormProvider) => (
  <MultiStepFormProvider>{children}</MultiStepFormProvider>
);

describe('Plan', () => {
  it('should match snapshot', () => {
    const view = render(
      <Plan
        testid="testid"
        item={examplePlan}
        isSelected={false}
        onPlanSelected={() => {}}
      />,
      { wrapper: formWrapper }
    );

    expect(view).toMatchSnapshot();
  });
});
