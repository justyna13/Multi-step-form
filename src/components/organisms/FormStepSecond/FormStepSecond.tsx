import React, { ReactElement, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button, Header, ToggleSwitch } from '@/components/atoms';
import { Plan } from '@/components/molecules';
import '@/components/organisms/FormStepSecond/FormStepSecond.scss';
import { AVAILABLE_PLANS, PAYMENT_PERIODS } from '@/constants';
import { availablePlans } from '@/constants/data.tsx';
import { MultiStepFormActionType, useMultiStepFormContext } from '@/store';

interface IFormStepSecond {
  testid: string;
  className?: string;
  onBtnNextClicked: () => void;
  onBtnPrevClicked: () => void;
}

export type SinglePlanType = {
  id: AVAILABLE_PLANS;
  name: string;
  pricePerMonth: number;
  icon: ReactElement;
};

export const FormStepSecond: React.FC<IFormStepSecond> = ({
  testid,
  onBtnNextClicked,
  onBtnPrevClicked
}: IFormStepSecond) => {
  const { state, dispatch } = useMultiStepFormContext();
  const { setValue } = useFormContext();
  const [paymentPeriodChecked, setPaymentPeriodChecked] = useState(
    state.paymentPeriod === PAYMENT_PERIODS.PER_YEAR
  );

  const saveData = () => {
    // const stepFields = getValues();
    onBtnNextClicked();
  };

  const updateSelectedPlan = (planId: AVAILABLE_PLANS) => {
    setValue('selectedPlan', planId);
    dispatch({
      type: MultiStepFormActionType.UPDATE_FORM_DATA,
      payload: {
        formData: {
          ...state.formData,
          selectedPlan: planId
        }
      }
    });
  };

  const handlePaymentPeriodChanged = () => {
    const updatedValue: boolean = !paymentPeriodChecked;
    setPaymentPeriodChecked(updatedValue);
    dispatch({
      type: MultiStepFormActionType.UPDATE_PAYMENT_PERIOD,
      payload: {
        paymentPeriod: updatedValue
          ? PAYMENT_PERIODS.PER_YEAR
          : PAYMENT_PERIODS.PER_MONTH
      }
    });
  };

  return (
    <div className="form-step--second" data-testid={testid}>
      <Header
        testid={'multiStepForm-step-second-ttl'}
        title={'Select your plan'}
        description={'You have the option of monthly or yearly billing.'}
      />
      <div className="plans-wr">
        {availablePlans.map((plan) => (
          <Plan
            key={plan.id}
            testid={`plan-${plan.id}`}
            item={plan}
            isSelected={plan.id === state.formData.selectedPlan}
            onPlanSelected={updateSelectedPlan}
          />
        ))}
      </div>

      <div className="plans-month-year-price-switcher">
        <ToggleSwitch
          name="paymentPeriod"
          onLabel="Yearly"
          offLabel="Monthly"
          checked={paymentPeriodChecked}
          onChange={handlePaymentPeriodChanged}
        />
      </div>

      <div className="step-bottom">
        <Button
          type="button"
          variant="prev"
          buttonText="Go Back"
          onClick={onBtnPrevClicked}
        />
        <Button
          type="button"
          variant="next"
          buttonText="Next Step"
          onClick={saveData}
        />
      </div>
    </div>
  );
};
