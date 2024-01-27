import '@/components/templates/FormPageTemplate/FormPageTemplate.scss';
import { DevTool } from '@hookform/devtools';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormNavigation } from '@/components/molecules';
import {
  FormConfirmation,
  FormStepFirst,
  FormStepFourth,
  FormStepSecond,
  FormStepThird
} from '@/components/organisms';
import { AVAILABLE_PLANS, FORM_STEPS, PAYMENT_PERIODS } from '@/constants';
import { MultiStepFormActionType, useMultiStepFormContext } from '@/store';

interface IDashboardPageTemplate {
  testid: string;
}

interface IForm {
  name: string;
  email: string;
  phone: string;
  selectedPlan: AVAILABLE_PLANS | null;
  addOns: {
    onlineService: boolean;
    largeStorage: boolean;
    customizableProfile: boolean;
  };
  totalPrice: number;
  paymentPeriod: PAYMENT_PERIODS;
}

export const FormPageTemplate: React.FC<IDashboardPageTemplate> = ({
  testid
}: IDashboardPageTemplate) => {
  const { state, dispatch } = useMultiStepFormContext();
  const methods = useForm<IForm>({ mode: 'onChange' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const setActiveStep = (step: FORM_STEPS) => {
    dispatch({
      type: MultiStepFormActionType.SET_ACTIVE_STEP,
      payload: { activeStep: step }
    });
  };

  const submitData = async () => {
    const isFormInvalid = Object.keys(methods.formState.errors).length > 0;
    if (isFormInvalid) return;

    setIsFormSubmitted(true);
  };

  const renderActiveStep = (index: FORM_STEPS) => {
    switch (index) {
      case FORM_STEPS.INFO:
        return (
          <FormStepFirst
            testid={'multiStepForm-step-first'}
            onBtnNextClicked={() => setActiveStep(FORM_STEPS.PLAN)}
          />
        );
      case FORM_STEPS.PLAN:
        return (
          <FormStepSecond
            testid={'multiStepForm-step-second'}
            onBtnPrevClicked={() => setActiveStep(FORM_STEPS.INFO)}
            onBtnNextClicked={() => setActiveStep(FORM_STEPS.ADDITIONAL)}
          />
        );
      case FORM_STEPS.ADDITIONAL:
        return (
          <FormStepThird
            testid={'multiStepForm-step-third'}
            onBtnPrevClicked={() => setActiveStep(FORM_STEPS.PLAN)}
            onBtnNextClicked={() => setActiveStep(FORM_STEPS.SUMMARY)}
          />
        );
      case FORM_STEPS.SUMMARY:
        return (
          <FormStepFourth
            testid={'multiStepForm-step-fourth'}
            onBtnPrevClicked={() => setActiveStep(FORM_STEPS.ADDITIONAL)}
            onBtnConfirmClicked={() => submitData()}
          />
        );
    }
  };

  return (
    <div className="form-card" data-testid={testid}>
      <div className="form-wrapper">
        <FormNavigation testid={'multiStepForm-navigation'} />
        <div className="form-inner">
          {isFormSubmitted ? (
            <FormConfirmation />
          ) : (
            <FormProvider {...methods}>
              <form
                className="multipstep-form"
                data-testid={'multistep-pages'}
                onSubmit={methods.handleSubmit(submitData)}
                noValidate>
                {renderActiveStep(state.activeStep)}
              </form>
            </FormProvider>
          )}
          <DevTool control={methods.control} />
        </div>
      </div>
    </div>
  );
};
