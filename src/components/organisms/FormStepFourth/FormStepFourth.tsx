import { Header } from '@/components/atoms';
import { Button } from '@/components/atoms';
import { FormSummary } from '@/components/molecules';

interface IFormStepFourth {
  testid: string;
  className?: string;
  onBtnPrevClicked: () => void;
  onBtnConfirmClicked: () => void;
}

export const FormStepFourth: React.FC<IFormStepFourth> = ({
  testid,
  onBtnPrevClicked,
  onBtnConfirmClicked
}: IFormStepFourth) => {
  return (
    <div data-testid={testid}>
      <Header
        testid={'multiStepForm-step-fourth-ttl'}
        title={'Finishing up'}
        description={'Double-check everything looks OK before confirming.'}
      />
      <FormSummary />
      <div className="step-bottom">
        <Button
          type="button"
          variant="prev"
          buttonText="Go Back"
          onClick={onBtnPrevClicked}
        />
        <Button
          type="submit"
          variant="next"
          buttonText="Confirm"
          onClick={onBtnConfirmClicked}
        />
      </div>
    </div>
  );
};
