import { Header } from "@/components/atoms/Header/Header.tsx";
import { Button } from "@/components/atoms/Button/Button.tsx";

interface IFormStepFourth {
  testid: string;
  className?: string;
  onBtnPrevClicked: () => void;
}

export const FormStepFourth: React.FC<IFormStepFourth> = ({
  testid,
  onBtnPrevClicked
}: IFormStepFourth) => {
  return (
    <div data-testid={testid}>
      <Header
        testid={'form-step-fourth-ttl'}
        title={'Finishing up'}
        description={'Double-check everything looks OK before confirming.'}
      />

      Total (per month/year)


      <div className="step-bottom">
        <Button
          type="button"
          className={`btn-next`}
          buttonText="Go Back"
          onClick={onBtnPrevClicked}
        />
        <Button
          type="submit"
          className={`btn-next`}
          buttonText="Confirm"
        />
      </div>
    </div>
  );

}
