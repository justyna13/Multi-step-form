import { Header } from "@/components/atoms/Header/Header.tsx";

interface IFormStepSecond {
  testid: string;
  className?: string;
}

export const FormStepSecond: React.FC<IFormStepSecond> = ({testid}: IFormStepSecond) => {
  return (
    <div data-testid={testid}>
      <Header
        testid={'form-step-second-ttl'}
        title={'Select your plan'}
        description={'You have the option of monthly or yearly billing.'}
      />

      Arcade $9/mo Advanced $12/mo Pro $15/mo Monthly Yearly

      Go Back Next Step
    </div>
  )
}
