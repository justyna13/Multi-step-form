import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { FormStepThird } from '@/components/organisms';

describe('FormStepThird', () => {
  it('should render thirdStep', () => {
    render(
      <FormStepThird
        onBtnNextClicked={() => {}}
        onBtnPrevClicked={() => {}}
        testid={'multiStepForm-step-third'}
      />
    );
    const formThirdStep = screen.getByTestId('multiStepForm-step-third');
    expect(formThirdStep).toBeInTheDocument();
  });
});
