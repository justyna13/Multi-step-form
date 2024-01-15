import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import * as router from 'react-router-dom';
import { afterEach, describe, expect } from 'vitest';

import { FormStepSecond } from '@/components/organisms';
import { AVAILABLE_PLANS } from '@/constants';
import {
  IFormProvider,
  MultiStepFormProvider
} from '@/store/multiStepForm/MultiStepFormProvider.tsx';

const spyOnNavigate = vi.spyOn(router, 'useNavigate');

const mockBtnPrevClicked = vi.fn();
const mockBtnNextClicked = vi.fn();

const formWrapper = ({ children }: IFormProvider) => (
  <MultiStepFormProvider>{children}</MultiStepFormProvider>
);

const mockRegister = vi.fn();

beforeEach(() => {
  vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual<object>('react-router-dom');
    return {
      ...actual,
      useNavigate: () => spyOnNavigate,
      useLocation: vi.fn()
    };
  });
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('FormStepSecond', () => {
  it('should render secondStep', () => {
    render(
      <FormStepSecond
        onBtnNextClicked={() => {}}
        onBtnPrevClicked={() => {}}
        testid={'multiStepForm-step-second'}
      />,
      { wrapper: formWrapper }
    );
    const formSecondStep = screen.getByTestId('multiStepForm-step-second');
    expect(formSecondStep).toBeInTheDocument();
  });

  it('should navigate to first step when onBtnPrevClicked', () => {
    render(
      <FormStepSecond
        onBtnNextClicked={mockBtnNextClicked}
        onBtnPrevClicked={mockBtnPrevClicked}
        testid={'multiStepForm-step-second'}
      />,
      { wrapper: formWrapper }
    );

    const prevBtn = screen.getByText('Go Back');
    act(() => {
      fireEvent.click(prevBtn);
    });

    expect(mockBtnPrevClicked).toBeCalledTimes(1);
  });

  it('should  react onBtnNextClicked when form valid', () => {
    vi.mock('react-hook-form', async () => {
      const actual = (await vi.importActual('react-hook-form')) as object;
      return {
        ...actual,
        useFormContext: vi.fn(() => ({
          register: mockRegister,
          formState: {
            errors: {}
          },
          watch: vi.fn(),
          getValues: vi.fn(() => {
            return {
              selectedPlan: AVAILABLE_PLANS.ARCADE
            };
          })
        }))
      };
    });

    render(
      <FormStepSecond
        onBtnNextClicked={mockBtnNextClicked}
        onBtnPrevClicked={mockBtnPrevClicked}
        testid={'multiStepForm-step-second'}
      />,
      { wrapper: formWrapper }
    );

    const nextBtn = screen.getByText('Next Step');
    act(() => {
      fireEvent.click(nextBtn);
    });

    expect(mockBtnNextClicked).toBeCalledTimes(1);
  });
});
