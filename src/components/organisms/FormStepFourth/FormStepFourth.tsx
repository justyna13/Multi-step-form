import { Header } from "@/components/atoms/Header/Header.tsx";

interface IFormStepFourth {
  testid: string;
  className?: string;
}

export const FormStepFourth: React.FC<IFormStepFourth> = ({testid}: IFormStepFourth) => {
  return (
    <div data-testid={testid}>
      <Header
        testid={'form-step-fourth-ttl'}
        title={'Finishing up'}
        description={'Double-check everything looks OK before confirming.'}
      />

      Total (per month/year)


      Go Back Confirm
    </div>
  );

}
