import { Header } from "@/components/atoms/Header/Header.tsx";
import { Button } from "@/components/atoms/Button/Button.tsx";
import { useAppState } from "@/store/StoreProvider/StoreProvider.tsx";
import { useFormContext } from "react-hook-form";

interface IFormStepThird {
  testid: string;
  className?: string;
  onBtnNextClicked: () => void;
  onBtnPrevClicked: () => void;
}

export const FormStepThird: React.FC<IFormStepThird> = ({
  testid,
  onBtnPrevClicked,
  onBtnNextClicked
}: IFormStepThird) => {
  const [state, setState]: any = useAppState();
  const {
    getValues
  } = useFormContext();


  const saveData = () => {
    const stepFields = getValues();
    setState({...state, ...stepFields})
    console.log(stepFields)
    onBtnNextClicked();
  }

  return (
    <div data-testid={testid}>
      <Header
        testid={'multiStepForm-step-third-ttl'}
        title={'Pick add-ons'}
        description={'Add-ons help enhance your gaming experience. '}
      />

      Online service Access to multiplayer games +$1/mo Larger storage Extra 1TB of cloud save +$2/mo Customizable Profile Custom theme on your profile +$2/mo

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
          onClick={saveData}
        />
      </div>
    </div>
  )
}
