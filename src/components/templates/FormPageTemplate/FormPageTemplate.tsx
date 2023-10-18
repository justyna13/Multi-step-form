import "@/components/templates/FormPageTemplate/FormPageTemplate.scss";
import { FormStepFirst, FormStepFourth, FormStepSecond, FormStepThird } from "@/components/organisms";
import { useState } from "react";

interface IDashboardPageTemplate {
  testid: string;
}

export const FormPageTemplate: React.FC<IDashboardPageTemplate> = ({
  testid
}: IDashboardPageTemplate) => {
  const [activeStep, setActiveStep] = useState('1');

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
  return (
    <div className="form-card" data-testid={testid}>
      <form className="multipstep-form">
        { renderActiveStep(activeStep)}
      </form>
    </div>
  );
};
