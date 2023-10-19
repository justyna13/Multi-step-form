import { Header } from "@/components/atoms/Header/Header.tsx";
import { Button } from "@/components/atoms/Button/Button.tsx";
import { useFormContext } from "react-hook-form";
import { useAppState } from "@/store/StoreProvider/StoreProvider.tsx";

interface IFormStepFourth {
  testid: string;
  className?: string;
  onBtnPrevClicked: () => void;
}

export const FormStepFourth: React.FC<IFormStepFourth> = ({
  testid,
  onBtnPrevClicked
}: IFormStepFourth) => {
  const [state, setState]: any = useAppState();
  const {
    handleSubmit
  } = useFormContext();


  const submitForm = (data: any) => {
    setState({...state, ...data})
    // console.log(data)
  }

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
          type="button"
          className={`btn-next`}
          buttonText="Confirm"
          onClick={handleSubmit(submitForm)}
        />
      </div>
    </div>
  );

}
