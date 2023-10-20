import { Header } from "@/components/atoms/Header/Header.tsx";
import { Button } from "@/components/atoms/Button/Button.tsx";
import { Plan } from "@/components/molecules/Plan/Plan.tsx";
import { ReactComponent as ArcadePlanIcon } from "@/assets/icons/icon-arcade.svg";
import { ReactComponent as AdvancedPlanIcon } from "@/assets/icons/icon-advanced.svg";
import { ReactComponent as ProPlanIcon } from "@/assets/icons/icon-pro.svg";
import { ReactElement } from "react";
import "@/components/organisms/FormStepSecond/FormStepSecond.scss";
import { MultiStepFormActionType, useMultiStepFormContext } from "@/store";

interface IFormStepSecond {
  testid: string;
  className?: string;
  onBtnNextClicked: () => void;
  onBtnPrevClicked: () => void;
}

export type SinglePlanType = {
  id: number;
  name: string;
  pricePerMonth: number;
  icon: ReactElement;
}

export const FormStepSecond: React.FC<IFormStepSecond> = ({
  testid,
  onBtnNextClicked,
  onBtnPrevClicked
}: IFormStepSecond) => {
  // const {
  //   getValues
  // } = useFormContext();
  // const [pricesPerMonth, setPricesPerMonth] = useState(true);
  const { state, dispatch } = useMultiStepFormContext();

  const availablePlans: Array<SinglePlanType> = [
    {
      id: 1,
      name: "Arcade",
      pricePerMonth: 9,
      icon: <ArcadePlanIcon />,
    },
    {
      id: 2,
      name: "Advanced",
      pricePerMonth: 12,
      icon: <AdvancedPlanIcon />,
    },
    {
      id: 3,
      name: "Pro",
      pricePerMonth: 15,
      icon: <ProPlanIcon />,
    }
  ]

  const saveData = () => {
    // const stepFields = getValues();
    // console.log(stepFields)
    onBtnNextClicked();
  }

  const updateSelectedPlan = (planId: number) => {
    console.log(planId)
    dispatch({type: MultiStepFormActionType.UPDATE_FORM_DATA, payload: {formData: {...state.formData, selectedPlan: planId}}})
  }

  return (
    <div className="form-step--second" data-testid={testid}>
      <Header
        testid={'multiStepForm-step-second-ttl'}
        title={'Select your plan'}
        description={'You have the option of monthly or yearly billing.'}
      />
      <div className="plans-wr">
        {availablePlans.map((plan) => (
          <Plan
            key={plan.id}
            testid={`plan-${plan.id}`}
            item={plan}
            isSelected={plan.id === state.formData.selectedPlan}
            onPlanSelected={updateSelectedPlan}
          />))}
      </div>

      <div className="plans-month-year-price-switcher">
        Monthly Yearly
      </div>

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
