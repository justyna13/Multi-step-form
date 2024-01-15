import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { AddOn } from '@/components/molecules';
import { SingleAddOn } from '@/components/organisms/FormStepThird/FormStepThird.tsx';
import {
  IFormProvider,
  MultiStepFormProvider
} from '@/store/multiStepForm/MultiStepFormProvider.tsx';

const exampleAddOn: SingleAddOn = {
  id: 1,
  name: 'test',
  pricePerMonth: 12,
  pricePerYear: 123,
  description: 'test desc',
  fieldName: 'onlineService'
};

const mockClickFn = vi.fn();

const formWrapper = ({ children }: IFormProvider) => (
  <MultiStepFormProvider>{children}</MultiStepFormProvider>
);

describe('AddOn', () => {
  it('should match snapshot', () => {
    const view = render(
      <AddOn testid={'test'} name="test" item={exampleAddOn} />,
      { wrapper: formWrapper }
    );

    expect(view).toMatchSnapshot();
  });

  it('should render disabled', () => {
    const view = render(
      <AddOn testid={'test'} name="test" item={exampleAddOn} disabled={true} />,
      { wrapper: formWrapper }
    );
    const input = view.container.querySelector('#add-on-1');
    expect(input).toHaveAttribute('disabled', '');
  });

  it('should render item texts', () => {
    render(<AddOn testid={'test-addon'} name="test" item={exampleAddOn} />, {
      wrapper: formWrapper
    });

    const addOnWrapper = screen.getByTestId('test-addon');

    expect(addOnWrapper).toHaveTextContent(exampleAddOn.name);
    expect(addOnWrapper).toHaveTextContent(exampleAddOn.description);
    expect(addOnWrapper).toHaveTextContent(`${exampleAddOn.pricePerMonth}`);
  });

  it('should react onClick', () => {
    render(<AddOn testid={'test'} name="test" item={exampleAddOn} />, {
      wrapper: formWrapper
    });

    // const addOnWrapper = screen.getByTestId('test');
    expect(mockClickFn).toBeCalledTimes(0);
    // todo
  });
});
