interface IFormStepThird {
  testid: string;
  className?: string;
}

export const FormStepThird: React.FC<IFormStepThird> = ({testid}: IFormStepThird) => {
  return (
    <div data-testid={testid}>element3</div>
  )
}
