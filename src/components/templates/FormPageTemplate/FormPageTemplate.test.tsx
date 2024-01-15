import { render, screen } from '@testing-library/react';
import * as router from 'react-router-dom';
import { afterEach, describe, expect } from 'vitest';

import { FormPageTemplate } from '@/components/templates';
import {
  IFormProvider,
  MultiStepFormProvider
} from '@/store/multiStepForm/MultiStepFormProvider.tsx';

const mockSetState = vi.fn();
const mockRegister = vi.fn();
const mockHandleSubmit = vi.fn();
const spyOnNavigate = vi.spyOn(router, 'useNavigate');

beforeEach(() => {
  vi.mock('react', async () => {
    const actual = (await vi.importActual('react')) as object;
    return {
      ...actual,
      useState: () => [false, mockSetState]
    };
  });

  vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual<object>('react-router-dom');
    return {
      ...actual,
      useNavigate: () => spyOnNavigate,
      useLocation: vi.fn(() => ({
        state: {}
      }))
    };
  });

  vi.mock('react-hook-form', async () => {
    const actual = (await vi.importActual('react-hook-form')) as object;
    return {
      ...actual,
      useFormContext: vi.fn(() => ({
        register: mockRegister,
        formState: {
          errors: {}
        },
        handleSubmit: mockHandleSubmit,
        watch: vi.fn()
      }))
    };
  });
});

afterEach(() => {
  vi.clearAllMocks();
});

const formWrapper = ({ children }: IFormProvider) => (
  <MultiStepFormProvider>{children}</MultiStepFormProvider>
);

describe('FormPageTemplate', () => {
  it('should match snapshot', () => {
    const view = render(<FormPageTemplate testid={'test'} />, {
      wrapper: formWrapper
    });
    expect(view).toMatchSnapshot();
  });

  it('should show confirmation screen when submitted', () => {
    vi.mock('react', async () => {
      const actual = (await vi.importActual('react')) as object;
      return {
        ...actual,
        useState: () => [true, mockSetState]
      };
    });

    render(<FormPageTemplate testid={'test'} />, { wrapper: formWrapper });

    const wrapper = screen.getByTestId('test');
    expect(wrapper).toHaveTextContent('Thank');
  });

  // it('should show active step component', () => {
  //   render(<FormPageTemplate testid={'test'} />, { wrapper: formWrapper});
  //
  //   const form = screen.getByTestId('multistep-form');
  //
  //   fireEvent.submit(form);
  //   expect(mockHandleSubmit).toBeCalled();
  // });
});
