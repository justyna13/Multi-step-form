import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { FormStepSecond } from '@/components/organisms';

describe('FormStepSecond', () => {
  it('should render secondStep', () => {
    render(
      <FormStepSecond
        onBtnNextClicked={() => {}}
        onBtnPrevClicked={() => {}}
        testid={'multiStepForm-step-second'}
      />
    );
    const formSecondStep = screen.getByTestId('multiStepForm-step-second');
    expect(formSecondStep).toBeInTheDocument();
  });
});
