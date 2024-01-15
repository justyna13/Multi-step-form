import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { FormStepFourth } from '@/components/organisms';
import {
  IFormProvider,
  MultiStepFormProvider
} from '@/store/multiStepForm/MultiStepFormProvider.tsx';

const formWrapper = ({ children }: IFormProvider) => (
  <MultiStepFormProvider>{children}</MultiStepFormProvider>
);

describe('FormStepFourth', () => {
  it('should match snapshot', () => {
    const view = render(
      <FormStepFourth
        onBtnPrevClicked={() => {}}
        onBtnConfirmClicked={() => {}}
        testid={'multiStepForm-step-fourth'}
      />,
      { wrapper: formWrapper }
    );
    expect(view).toMatchSnapshot();
  });

  it('should render fourthStep', () => {
    render(
      <FormStepFourth
        onBtnPrevClicked={() => {}}
        onBtnConfirmClicked={() => {}}
        testid={'multiStepForm-step-fourth'}
      />,
      { wrapper: formWrapper }
    );
    const formFourthStep = screen.getByTestId('multiStepForm-step-fourth');
    expect(formFourthStep).toBeInTheDocument();
  });
});
