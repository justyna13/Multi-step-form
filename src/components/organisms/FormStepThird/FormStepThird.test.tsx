import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { FormStepThird } from '@/components/organisms';
import {
  IFormProvider,
  MultiStepFormProvider
} from '@/store/multiStepForm/MultiStepFormProvider.tsx';

const formWrapper = ({ children }: IFormProvider) => (
  <MultiStepFormProvider>{children}</MultiStepFormProvider>
);

describe('FormStepThird', () => {
  it('should render thirdStep', () => {
    render(
      <FormStepThird
        onBtnNextClicked={() => {}}
        onBtnPrevClicked={() => {}}
        testid={'multiStepForm-step-third'}
      />,
      { wrapper: formWrapper }
    );
    const formThirdStep = screen.getByTestId('multiStepForm-step-third');
    expect(formThirdStep).toBeInTheDocument();
  });
});
