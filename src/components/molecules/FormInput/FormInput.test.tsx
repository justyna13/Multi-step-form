import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect } from 'vitest';

import { FormInput } from '@/components/molecules';

const mockRegister = vi.fn();
beforeEach(() => {
  vi.mock('react-hook-pages', async () => {
    const actual = (await vi.importActual('react-hook-pages')) as object;
    return {
      ...actual,
      useFormContext: vi.fn(() => ({
        register: mockRegister,
        formState: {
          errors: { test: { type: 'required', message: 'Field is required' } }
        },
        watch: vi.fn()
      }))
    };
  });
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('FormInput', () => {
  it('should match snapshot', () => {
    const view = render(<FormInput label={'test'} name={'test'} />);
    expect(view).toMatchSnapshot();
  });

  it('should display error msg', () => {
    render(<FormInput label={'test'} name={'test'} />);
    const wrapper = screen.getByTestId(`form-input-test`);
    expect(wrapper).toHaveTextContent('Field is required');
  });
});
