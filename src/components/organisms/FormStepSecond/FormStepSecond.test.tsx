import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { FormStepSecond } from '@/components/organisms';
import { IFormProvider, MultiStepFormProvider } from "@/store/multiStepForm/MultiStepFormProvider.tsx";


const formWrapper = ({ children }: IFormProvider) => (
  <MultiStepFormProvider>{children}</MultiStepFormProvider>
);

describe('FormStepSecond', () => {
  it('should render secondStep', () => {
    render(
      <FormStepSecond
        onBtnNextClicked={() => {}}
        onBtnPrevClicked={() => {}}
        testid={'multiStepForm-step-second'}
      />, { wrapper: formWrapper}
    );
    const formSecondStep = screen.getByTestId('multiStepForm-step-second');
    expect(formSecondStep).toBeInTheDocument();
  });
});
