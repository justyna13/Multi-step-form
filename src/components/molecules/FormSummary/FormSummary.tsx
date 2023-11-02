import "@/components/molecules/FormSummary/FormSummary.scss"
import { MultiStepFormActionType, useMultiStepFormContext } from "@/store";
import { availableAddOns } from "@/constants/data.tsx";
import { FORM_STEPS } from "@/constants";
import { SingleAddOn } from "@/components/organisms/FormStepThird/FormStepThird.tsx";
import { availablePlans } from "@/constants/data.tsx";

export const FormSummary = () => {
  const { state, dispatch } = useMultiStepFormContext();

  const perMonth = true;
  const pricePerMonth = state.selectedPlan ?
    availablePlans.find(plan => (plan.id === state.selectedPlan))?.pricePerMonth
    : 0;
  const pricePerYear = pricePerMonth ? pricePerMonth * 12 : 0;
  const navigateToSecondStep = () => {
    dispatch({type: MultiStepFormActionType.SET_ACTIVE_STEP, payload: { activeStep: FORM_STEPS.PLAN }})
  }

  return (
    <div className="form-summary">
      <div className="form-summary__inner">
        <div className="form-summary__plan">
          <div>
            <p>{state.selectedPlan} (Monthly)</p>
            <span className="link" onClick={navigateToSecondStep}>Change</span>
          </div>
          {
            perMonth ? <span>+${pricePerMonth}/mo</span> : <span>+${pricePerYear}/year</span>
          }
        </div>
        {
          (Object.values(state.addOns)).filter(item => item).length ?
            <div className="form-summary__add-ons">
              {
                availableAddOns.map((item: SingleAddOn) => (
                  (state.addOns[item.fieldName]) ? (
                    <div key={item.id}>
                      <p>{item.name}</p>
                      <p>{state.addOns[item.fieldName]}</p>
                      <span>+${item.pricePerMonth}/mo</span>
                    </div>
                  ) : null
                ))
              }
            </div> : null
        }
      </div>
      <div className="form-summary__total">
        <p>Total (per month/year)</p>
        <span>+$12/mo</span>
      </div>
    </div>
  )
}
