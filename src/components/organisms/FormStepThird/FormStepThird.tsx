import { Header } from "@/components/atoms/Header/Header.tsx";
import { Button } from "@/components/atoms/Button/Button.tsx";
import { useFormContext } from "react-hook-form";
import { useMultiStepFormContext } from "@/store";
import { AddOn } from "@/components/molecules/AddOn/AddOn.tsx";
import "@/components/organisms/FormStepThird/FormStepThird.scss";

interface IFormStepThird {
  testid: string;
  className?: string;
  onBtnNextClicked: () => void;
  onBtnPrevClicked: () => void;
}

export type SingleAddOn = {
  id: number;
  name: string;
  pricePerMonth: number;
  description: string;
}

export const FormStepThird: React.FC<IFormStepThird> = ({
  testid,
  onBtnPrevClicked,
  onBtnNextClicked
}: IFormStepThird) => {
  const {
    getValues
  } = useFormContext();
  const {state, dispatch} = useMultiStepFormContext();

  const saveData = () => {
    const stepFields = getValues();
    console.log(state, dispatch)
    console.log(stepFields)
    onBtnNextClicked();
  }

  const availableAddOns: Array<SingleAddOn> = [
    {
      id: 1,
      name: "Online service",
      description: "Access to multiplayer games",
      pricePerMonth: 1
    },
    {
      id: 2,
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      pricePerMonth: 2,
    },
    {
      id: 3,
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      pricePerMonth: 2,
    }
  ]

  return (
    <div className="form-step--third" data-testid={testid}>
      <Header
        testid={'multiStepForm-step-third-ttl'}
        title={'Pick add-ons'}
        description={'Add-ons help enhance your gaming experience. '}
      />

      {availableAddOns.map(item => (
        <AddOn testid={`add-on-${item.id}`} item={item} key={item.id} />
      ))}

      <div className="step-bottom">
        <Button
          type="button"
          className={`btn-prev`}
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
