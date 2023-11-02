import "@/components/molecules/FormSummary/FormSummary.scss"
import { MultiStepFormActionType, useMultiStepFormContext } from "@/store";
import { availableAddOns, FORM_STEPS } from "@/constants";
import { SingleAddOn } from "@/components/organisms/FormStepThird/FormStepThird.tsx";

export const FormSummary = () => {
  const { state, dispatch } = useMultiStepFormContext();

  const navigateToSecondStep = () => {
    dispatch({type: MultiStepFormActionType.SET_ACTIVE_STEP, payload: { activeStep: FORM_STEPS.PLAN }})
  }
  return (
    <div className="form-summary">
      <div className="form-summary__inner">
        <div className="form-summary__plan">
          <div>
            <p>Arcade (Monthly)</p>
            <span className="link" onClick={navigateToSecondStep}>Change</span>
          </div>
          <span>+$9/mo</span>
        </div>
        <hr/>
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
        </div>
      </div>
      <div className="form-summary__total">
        <p>Total (per month/year)</p>
        <span>+$12/mo</span>
      </div>
    </div>
  )
}
