import { Header } from "@/components/atoms/Header/Header.tsx";
import { Button } from "@/components/atoms/Button/Button.tsx";
import { useAppState } from "@/store/StoreProvider/StoreProvider.tsx";
import { useFormContext } from "react-hook-form";

interface IFormStepSecond {
  testid: string;
  className?: string;
  onBtnNextClicked: () => void;
  onBtnPrevClicked: () => void;
}

export const FormStepSecond: React.FC<IFormStepSecond> = ({
  testid,
  onBtnNextClicked,
  onBtnPrevClicked
}: IFormStepSecond) => {
  const [state, setState]: any = useAppState();
  const {
    handleSubmit
  } = useFormContext();

  const saveData = (data: any) => {
    setState({...state, ...data})
    // console.log(data)
    onBtnNextClicked();
  }

  return (
    <div data-testid={testid}>
      <Header
        testid={'form-step-second-ttl'}
        title={'Select your plan'}
        description={'You have the option of monthly or yearly billing.'}
      />

      Arcade $9/mo Advanced $12/mo Pro $15/mo Monthly Yearly

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
          buttonText="Next Step"
          onClick={handleSubmit(saveData)}
        />
      </div>
    </div>
  )
}
