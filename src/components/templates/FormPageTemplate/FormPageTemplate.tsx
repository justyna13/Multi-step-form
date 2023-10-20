import "@/components/templates/FormPageTemplate/FormPageTemplate.scss";
import { FormStepFirst, FormStepFourth, FormStepSecond, FormStepThird } from "@/components/organisms";
import { FormNavigation } from "@/components/molecules";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FORM_STEPS } from "@/constants";
import { MultiStepFormActionType, useMultiStepFormContext } from "@/store";

interface IDashboardPageTemplate {
  testid: string;
}

export const FormPageTemplate: React.FC<IDashboardPageTemplate> = ({
  testid
}: IDashboardPageTemplate) => {
  const { state, dispatch } = useMultiStepFormContext();
  const methods = useForm({mode: "onChange"});

  const setActiveStep = (step: FORM_STEPS) => {
    dispatch({type: MultiStepFormActionType.SET_ACTIVE_STEP, payload: { activeStep: step }})
  }

  const renderActiveStep = (index: FORM_STEPS) => {
    switch (index) {
      case (FORM_STEPS.INFO):
        return <FormStepFirst
          testid={'multiStepForm-step-first'}
          onBtnNextClicked={() => setActiveStep(FORM_STEPS.PLAN)}
        />
      case (FORM_STEPS.PLAN):
        return <FormStepSecond
          testid={'multiStepForm-step-second'}
          onBtnPrevClicked={() => setActiveStep(FORM_STEPS.INFO)}
          onBtnNextClicked={() => setActiveStep(FORM_STEPS.ADDITIONAL)}
        />
      case (FORM_STEPS.ADDITIONAL):
        return <FormStepThird
          testid={'multiStepForm-step-third'}
          onBtnPrevClicked={() => setActiveStep(FORM_STEPS.PLAN)}
          onBtnNextClicked={() => setActiveStep(FORM_STEPS.SUMMARY)}
        />
      case (FORM_STEPS.SUMMARY):
        return <FormStepFourth
          testid={'multiStepForm-step-fourth'}
          onBtnPrevClicked={() => setActiveStep(FORM_STEPS.ADDITIONAL)}
        />
    }
  }

  const submitData = (data: any) => {
    console.log(data, methods.formState.errors)
  }
  return (
    <div className="form-card" data-testid={testid}>
      <div className="form-wrapper">
        <FormNavigation testid={'multiStepForm-navigation'}/>
        <div className="form-inner">
          <FormProvider {...methods}>
            <form className="multipstep-form" onSubmit={methods.handleSubmit(submitData)} noValidate>
              {renderActiveStep(state.activeStep)}
            </form>
          </FormProvider>
          <DevTool control={methods.control}/>
        </div>
      </div>
    </div>
  );
};
