import { renderHook } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { AVAILABLE_PLANS, FORM_STEPS, PAYMENT_PERIODS } from '@/constants';
import {
  MultiStepFormActionType,
  MultiStepFormProvider,
  useMultiStepFormContext
} from '@/store';
import { IFormProvider } from '@/store/multiStepForm/MultiStepFormProvider.tsx';
import { multiStepFormReducer } from '@/store/multiStepForm/MultiStepFormReducer.tsx';

const formWrapper = ({ children }: IFormProvider) => (
  <MultiStepFormProvider>{children}</MultiStepFormProvider>
);

const initialState = {
  activeStep: FORM_STEPS.PLAN,
  formData: {
    name: '',
    email: '',
    phone: '',
    selectedPlan: AVAILABLE_PLANS.PRO,
    addOns: {
      onlineService: true,
      largeStorage: true,
      customizableProfile: true
    }
  },
  totalPrice: 0,
  paymentPeriod: PAYMENT_PERIODS.PER_MONTH
};

describe('MultiStepFormContext', () => {
  it('should throw error when using useMultiStepFormContext outside a provider', () => {
    try {
      renderHook(() => useMultiStepFormContext());
    } catch (error) {
      expect(error).toStrictEqual(
        Error(
          'useMultiStepFormContext must be used within MultiStepFormProvider'
        )
      );
    }
  });

  it('should not throw error when using useMultiStepFormContext inside a provider', () => {
    const { result } = renderHook(() => useMultiStepFormContext(), {
      wrapper: formWrapper
    });
    expect(result).toBeTruthy();
  });

  it('should SET_ACTIVE_STEP action update activeStep in state', () => {
    const action = {
      type: MultiStepFormActionType.SET_ACTIVE_STEP,
      payload: {
        activeStep: '2'
      }
    };

    const newState = multiStepFormReducer(initialState, action);
    expect(newState).toEqual({ ...initialState, activeStep: '2' });
  });

  it('should UPDATE_FORM_DATA action update formData in state', () => {
    const action = {
      type: MultiStepFormActionType.UPDATE_FORM_DATA,
      payload: {
        formData: {
          name: 'Test name'
        }
      }
    };

    const newState = multiStepFormReducer(initialState, action);
    expect(newState.formData.name).toEqual('Test name');
  });

  it('should UPDATE_TOTAL_PRICE action update totalPrice in state', () => {
    const action = {
      type: MultiStepFormActionType.UPDATE_TOTAL_PRICE
    };

    const newState = multiStepFormReducer(initialState, action);
    expect(newState.totalPrice).toEqual(20);
  });

  it('should UPDATE_PAYMENT_PERIOD action update paymentPeriod in state', () => {
    const action = {
      type: MultiStepFormActionType.UPDATE_PAYMENT_PERIOD,
      payload: {
        paymentPeriod: PAYMENT_PERIODS.PER_YEAR
      }
    };

    const newState = multiStepFormReducer(initialState, action);
    expect(newState.paymentPeriod).toEqual(PAYMENT_PERIODS.PER_YEAR);
  });

  it('should unknown action not modify the state', () => {
    const action = {
      type: 'UNKNOWN_ACTION' as MultiStepFormActionType,
      payload: {}
    };
    const newState = multiStepFormReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
