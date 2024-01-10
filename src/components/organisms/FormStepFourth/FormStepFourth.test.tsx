import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { FormStepFourth } from '@/components/organisms';

describe('FormStepFourth', () => {
  it('should render fourthStep', () => {
    render(
      <FormStepFourth
        onBtnPrevClicked={() => {}}
        testid={'multiStepForm-step-fourth'}
      />
    );
    const formFourthStep = screen.getByTestId('multiStepForm-step-fourth');
    expect(formFourthStep).toBeInTheDocument();
  });
});
