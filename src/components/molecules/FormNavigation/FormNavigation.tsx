import { FormStep } from "@/components/atoms";
import "@/components/molecules/FormNavigation/FormNavigation.scss";
import { FORM_STEPS } from "@/constants";
import { useMultiStepFormContext } from "@/store";

interface IFormNavigation {
  testid: string;
}

export const FormNavigation: React.FC<IFormNavigation> = ({
testid
}: IFormNavigation) => {
  const {state} = useMultiStepFormContext();

  type NavigationStep = {
    label: string;
    number: string;
    code: FORM_STEPS;
  };

  const navigationSteps: Array<NavigationStep> = [
    {
      label: "Your info",
      number: "1",
      code: FORM_STEPS.INFO,
    },
    {
      label: "Select plan",
      number: "2",
      code: FORM_STEPS.PLAN,
    },
    {
      label: "Add-ons",
      number: "3",
      code: FORM_STEPS.ADDITIONAL,
    },
    {
      label: "Summary",
      number: "4",
      code: FORM_STEPS.SUMMARY,
    }
  ]
  return (
    // add active step
    <div className="form-navigation" data-testid={testid}>
      {navigationSteps.map((step: NavigationStep) => (
        <FormStep
          key={step.number}
          isActive={(step.code == state.activeStep)}
          testid={`form-step-${step.number}`}
          label={step.label}
          number={step.number}
        />
      ))}
    </div>
  );
};
