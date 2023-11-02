import { Header } from "@/components/atoms";
import { Button } from "@/components/atoms";
import { Plan } from "@/components/molecules";

import { ReactElement } from "react";
import "@/components/organisms/FormStepSecond/FormStepSecond.scss";
import { MultiStepFormActionType, useMultiStepFormContext } from "@/store";
import { AVAILABLE_PLANS } from "@/constants";
import { availablePlans } from "@/constants/data.tsx";

interface IFormStepSecond {
  testid: string;
  className?: string;
  onBtnNextClicked: () => void;
  onBtnPrevClicked: () => void;
}

export type SinglePlanType = {
  id: AVAILABLE_PLANS;
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


  const saveData = () => {
    // const stepFields = getValues();
    // console.log(stepFields)
    onBtnNextClicked();
  }

  const updateSelectedPlan = (planId: AVAILABLE_PLANS) => {
    dispatch({type: MultiStepFormActionType.UPDATE_STEP_PLAN, payload: {selectedPlan: planId}})
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
            isSelected={plan.id === state.selectedPlan}
            onPlanSelected={updateSelectedPlan}
          />))}
      </div>

      <div className="plans-month-year-price-switcher">
        Monthly Yearly
      </div>

      <div className="step-bottom">
        <Button
          type="button"
          variant="prev"
          buttonText="Go Back"
          onClick={onBtnPrevClicked}
        />
        <Button
          type="button"
           variant="next"
          buttonText="Next Step"
          onClick={saveData}
        />
      </div>
    </div>
  )
}
