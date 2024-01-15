import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { FormSummary } from '@/components/molecules';
import {
  IFormProvider,
  MultiStepFormProvider
} from '@/store/multiStepForm/MultiStepFormProvider.tsx';

const formWrapper = ({ children }: IFormProvider) => (
  <MultiStepFormProvider>{children}</MultiStepFormProvider>
);

describe('FormSummary', () => {
  test('should match snapshot', () => {
    const view = render(<FormSummary />, { wrapper: formWrapper });

    expect(view).toMatchSnapshot();
  });
});
