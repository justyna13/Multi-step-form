import '@/components/molecules/FormSummary/FormSummary.scss';
import { SingleAddOn } from '@/components/organisms/FormStepThird/FormStepThird.tsx';
import { FORM_STEPS, PAYMENT_PERIODS } from '@/constants';
import { availableAddOns, availablePlans } from '@/constants/data.tsx';
import { MultiStepFormActionType, useMultiStepFormContext } from '@/store';

export const FormSummary = () => {
  const { state, dispatch } = useMultiStepFormContext();

  const isPerMonth = state.paymentPeriod === PAYMENT_PERIODS.PER_MONTH;
  const selectedPlanData = availablePlans.find(
    (plan) => plan.id === state.formData.selectedPlan
  );
  const planPrice = isPerMonth
    ? selectedPlanData?.pricePerMonth
    : selectedPlanData?.pricePerYear;

  const navigateToSecondStep = () => {
    dispatch({
      type: MultiStepFormActionType.SET_ACTIVE_STEP,
      payload: { activeStep: FORM_STEPS.PLAN }
    });
  };

  return (
    <div className="form-summary" data-testid={'pages-summary'}>
      <div className="form-summary__inner">
        <div className="form-summary__plan">
          <div>
            <p>{state.formData.selectedPlan} (Monthly)</p>
            <span className="link" onClick={navigateToSecondStep}>
              Change
            </span>
          </div>
          <span>{isPerMonth ? `+${planPrice}/mo` : `+${planPrice}/year`}</span>
        </div>
        {Object.values(state.formData.addOns).filter((item) => item).length ? (
          <div className="form-summary__add-ons">
            {availableAddOns.map((item: SingleAddOn) =>
              state.formData.addOns[item.fieldName] ? (
                <div key={item.id}>
                  <p>{item.name}</p>
                  <p>{state.formData.addOns[item.fieldName]}</p>
                  <span>
                    {isPerMonth
                      ? `+${item.pricePerMonth}/mo`
                      : `+${item.pricePerYear}/year`}
                  </span>
                </div>
              ) : null
            )}
          </div>
        ) : null}
      </div>
      <div className="form-summary__total">
        <p>Total (per month/year)</p>
        <span>
          {isPerMonth
            ? `+$${state.totalPrice}/mo`
            : `+$${state.totalPrice}/year`}
        </span>
      </div>
    </div>
  );
};
