import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect } from 'vitest';

import { FormStepFirst } from '@/components/organisms';
import {
  IFormProvider,
  MultiStepFormProvider
} from '@/store/multiStepForm/MultiStepFormProvider.tsx';

const formWrapper = ({ children }: IFormProvider) => (
  <MultiStepFormProvider>{children}</MultiStepFormProvider>
);

const mockRegister = vi.fn();
const mockBtnNextClicked = vi.fn();

beforeEach(() => {
  vi.mock('react-hook-pages', async () => {
    const actual = (await vi.importActual('react-hook-pages')) as object;
    return {
      ...actual,
      useFormContext: vi.fn(() => ({
        register: mockRegister,
        formState: {
          errors: {
            name: { type: 'required', message: 'Name error' },
            email: { type: 'required', message: 'Email error' },
            phone: { type: 'required', message: 'Phone error' }
          }
        },
        watch: vi.fn(),
        trigger: vi.fn(() => false),
        getValues: () => {}
      }))
    };
  });
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('FormStepFirst', () => {
  it('should render firstStep', () => {
    render(
      <FormStepFirst
        onBtnNextClicked={() => {}}
        testid={'multiStepForm-step-first'}
      />,
      { wrapper: formWrapper }
    );
    const formFirstStep = screen.getByTestId('multiStepForm-step-first');
    expect(formFirstStep).toBeInTheDocument();
  });

  it('should be visible on render', () => {
    render(
      <FormStepFirst
        onBtnNextClicked={() => {}}
        testid={'multiStepForm-step-first'}
      />,
      { wrapper: formWrapper }
    );
    const formFirstStep = screen.getByTestId('multiStepForm-step-first');
    expect(formFirstStep).not.toHaveClass('hidden');
  });

  it('should show error msg on nextBtn click and pages invalid', () => {
    render(
      <FormStepFirst
        onBtnNextClicked={() => {}}
        testid={'multiStepForm-step-first'}
      />,
      { wrapper: formWrapper }
    );

    const nameField = screen.getByTestId('pages-input-name');
    expect(nameField).toBeInTheDocument();
    expect(nameField).toHaveTextContent('Name error');

    const emailField = screen.getByTestId('pages-input-email');
    expect(emailField).toBeInTheDocument();
    expect(emailField).toHaveTextContent('Email error');

    const phoneField = screen.getByTestId('pages-input-phone');
    expect(phoneField).toBeInTheDocument();
    expect(phoneField).toHaveTextContent('Phone error');
  });

  it('should not react onBtnNextClicked when error', () => {
    render(
      <FormStepFirst
        onBtnNextClicked={mockBtnNextClicked}
        testid={'multiStepForm-step-first'}
      />,
      { wrapper: formWrapper }
    );

    const nextBtn = screen.getByText('Next Step');
    expect(nextBtn).toBeInTheDocument();

    nextBtn.click();

    expect(mockBtnNextClicked).toBeCalledTimes(0);
  });
});
