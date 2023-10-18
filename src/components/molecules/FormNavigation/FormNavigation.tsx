import { FormStep } from "@/components/atoms";
import "@/components/molecules/FormNavigation/FormNavigation.scss";

interface IFormNavigation {
  testid: string;
}

export const FormNavigation: React.FC<IFormNavigation> = ({
testid
}: IFormNavigation) => {
  type NavigationStep = {
    label: string;
    number: string;
  }
  const navigationSteps: Array<NavigationStep> = [
    {
      label: "Your info",
      number: "1",
    },
    {
      label: "Select plan",
      number: "2"
    },
    {
      label: "Add-ons",
      number: "3"
    },
    {
      label: "Summary",
      number: "4"
    }
  ]
  return (
    // add active step
    <div className="form-navigation" data-testid={testid}>
      {navigationSteps.map((step: NavigationStep) => (
        <FormStep
          key={step.number}
          isActive={(step.number == '1')}
          testid={`form-step-${step.number}`}
          label={step.label}
          number={step.number}
        />
      ))}
    </div>
  );
};
