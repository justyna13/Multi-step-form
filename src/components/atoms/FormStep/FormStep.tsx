import "@/components/atoms/FormStep/FormStep.scss";

interface IFormStep {
  testid: string;
  isActive: boolean;
  label: string;
  number: string;
}

export const FormStep: React.FC<IFormStep> = ({
  testid,
  label,
  isActive,
  number
}: IFormStep) => {
  return (
    <div className={`form-step ${isActive ? 'active': ''}`} data-testid={testid}>
      <div className="form-step__number">{number}</div>
      <div>
        <span className="form-step__info">Step { number }</span><br/>
        <span className="form-step__title">{ label }</span>
      </div>
    </div>
  )
}
