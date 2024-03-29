import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { FormPage } from '@/pages';
import {
  IFormProvider,
  MultiStepFormProvider
} from '@/store/multiStepForm/MultiStepFormProvider.tsx';

const formWrapper = ({ children }: IFormProvider) => (
  <MultiStepFormProvider>{children}</MultiStepFormProvider>
);

describe('Form Page', () => {
  it('should match snapshot', () => {
    const view = render(<FormPage />, { wrapper: formWrapper });

    expect(view).toMatchSnapshot();
  });
});
