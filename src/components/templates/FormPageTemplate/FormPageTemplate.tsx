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
  const [activeStep] = useState('1');

  const methods = useForm({
    defaultValues: {name: "", email: "", phone: ""}
  });


  const renderActiveStep = (index: string) => {
    switch (index) {
      case '1':
        return <FormStepFirst testid={'form-step-first'} />
      case '2':
        return <FormStepSecond testid={'form-step-second'} />
      case '3':
        return <FormStepThird testid={'form-step-third'} />
      case '4':
        return <FormStepFourth testid={'form-step-fourth'} />
    }
  }

  const submitData = (data: any) => {
    console.log(data, methods.formState.errors)
  }
  return (
    <div className="form-card" data-testid={testid}>
      <div className="form-wrapper">
        <FormNavigation testid={'form-navigation'} />
        <div className="form-inner">
          <FormProvider {...methods}>
            <form className="multipstep-form" onSubmit={methods.handleSubmit(submitData)} noValidate>
              { renderActiveStep(activeStep)}
            </form>
          </FormProvider>
          <DevTool control={methods.control} />
        </div>
      </div>
    </div>
  );
};
