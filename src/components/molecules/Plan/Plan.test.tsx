import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { ReactComponent as ArcadePlanIcon } from '@/assets/icons/icon-arcade.svg';
import { Plan } from '@/components/molecules';
import { AVAILABLE_PLANS } from '@/constants';

const examplePlan = {
  id: AVAILABLE_PLANS.ARCADE,
  name: 'Arcade',
  pricePerMonth: 9,
  icon: <ArcadePlanIcon />
};

describe('Plan', () => {
  it('should match snapshot', () => {
    const view = render(
      <Plan
        testid="testid"
        item={examplePlan}
        isSelected={false}
        onPlanSelected={() => {}}
      />
    );

    expect(view).toMatchSnapshot();
  });
});
