import "@/components/molecules/FormSummary/FormSummary.scss"

export const FormSummary = () => {
  return (
    <div className="form-summary">
      <div className="form-summary__inner">
        <div className="form-summary__plan">
          <div>
            <p>Arcade (Monthly)</p>
            <span className="link">Change</span>
          </div>
          <span>+$9/mo</span>
        </div>
        <hr/>
        <div className="form-summary__add-ons">
          <div>
            <p>Online service</p>
            <span>+$1/mo</span>
          </div>
          <div>
            <p>Larger storage</p>
            <span>+$2/mo</span>
          </div>
        </div>
      </div>
      <div className="form-summary__total">
        <p>Total (per month/year)</p>
        <span>+$12/mo</span>
      </div>
    </div>
  )
}
