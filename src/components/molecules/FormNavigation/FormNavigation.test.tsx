import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { FormNavigation } from '@/components/molecules';
import { MultiStepFormProvider } from '@/store';

describe('Navigation', () => {
  it('should render 4 steps', () => {
    render(
      <MultiStepFormProvider>
        <FormNavigation testid={'pages-navigation'} />
      </MultiStepFormProvider>
    );

    const firstStep = screen.getByTestId('pages-step-1');
    const secondStep = screen.getByTestId('pages-step-2');
    const thirdStep = screen.getByTestId('pages-step-3');
    const fourthStep = screen.getByTestId('pages-step-4');

    expect(firstStep).toBeInTheDocument();
    expect(secondStep).toBeInTheDocument();
    expect(thirdStep).toBeInTheDocument();
    expect(fourthStep).toBeInTheDocument();
  });
});
