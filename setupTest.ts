import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

const mockRegister = vi.fn();
beforeEach(() => {
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
        getValues: vi.fn()
      }))
    };
  });
});

afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});
