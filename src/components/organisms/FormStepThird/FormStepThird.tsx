import { Header } from "@/components/atoms/Header/Header.tsx";

interface IFormStepThird {
  testid: string;
  className?: string;
}

export const FormStepThird: React.FC<IFormStepThird> = ({testid}: IFormStepThird) => {
  return (
    <div data-testid={testid}>
      <Header
        testid={'form-step-third-ttl'}
        title={'Pick add-ons'}
        description={'Add-ons help enhance your gaming experience. '}
      />

      Online service Access to multiplayer games +$1/mo Larger storage Extra 1TB of cloud save +$2/mo Customizable Profile Custom theme on your profile +$2/mo

      Go Back Next Step
    </div>
  )
}
