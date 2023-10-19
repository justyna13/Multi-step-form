import "@/components/templates/FormPageTemplate/FormPageTemplate.scss";
import { FormStepFirst, FormStepFourth, FormStepSecond, FormStepThird } from "@/components/organisms";
import { useState } from "react";
import { FormNavigation } from "@/components/molecules";
import { FormProvider, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

interface IDashboardPageTemplate {
  testid: string;
}

export const FormPageTemplate: React.FC<IDashboardPageTemplate> = ({
                                                                     testid
                                                                   }: IDashboardPageTemplate) => {
  const [activeStep, setActiveStep] = useState('1');

  const methods = useForm({
    defaultValues: {name: "", email: "", phone: ""}
  });


  const renderActiveStep = (index: string) => {
    switch (index) {
      case '1':
        return <FormStepFirst
          testid={'form-step-first'}
          onBtnNextClicked={() => setActiveStep('2')}
        />
      case '2':
        return <FormStepSecond
          testid={'form-step-second'}
          onBtnPrevClicked={() => setActiveStep('1')}
          onBtnNextClicked={() => setActiveStep('3')}
        />
      case '3':
        return <FormStepThird
          testid={'form-step-third'}
          onBtnPrevClicked={() => setActiveStep('2')}
          onBtnNextClicked={() => setActiveStep('4')}
        />
      case '4':
        return <FormStepFourth
          testid={'form-step-fourth'}
          onBtnPrevClicked={() => setActiveStep('3')}
        />
    }
  }

  const submitData = (data: any) => {
    console.log(data, methods.formState.errors)
  }
  return (
    <div className="form-card" data-testid={testid}>
      <div className="form-wrapper">
        <FormNavigation testid={'form-navigation'}/>
        <div className="form-inner">
          <FormProvider {...methods}>
            <form className="multipstep-form" onSubmit={methods.handleSubmit(submitData)} noValidate>
              {renderActiveStep(activeStep)}
            </form>
          </FormProvider>
          <DevTool control={methods.control}/>
        </div>
      </div>
    </div>
  );
};
