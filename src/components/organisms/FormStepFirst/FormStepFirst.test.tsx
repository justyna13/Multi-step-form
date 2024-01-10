import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { FormStepFirst } from '@/components/organisms';

describe('FormStepFirst', () => {
  it('should render firstStep', () => {
    render(
      <FormStepFirst
        onBtnNextClicked={() => {}}
        testid={'multiStepForm-step-first'}
      />
    );
    const formFirstStep = screen.getByTestId('multiStepForm-step-first');
    expect(formFirstStep).toBeInTheDocument();
  });

  it('should be visible on render', () => {
    render(
      <FormStepFirst
        onBtnNextClicked={() => {}}
        testid={'multiStepForm-step-first'}
      />
    );
    const formFirstStep = screen.getByTestId('multiStepForm-step-first');
    expect(formFirstStep).not.toHaveClass('hidden');
  });
});
