interface IFormStepFourth {
  testid: string;
  className?: string;
}

export const FormStepFourth: React.FC<IFormStepFourth> = ({testid}: IFormStepFourth) => {
  return (
    <div data-testid={testid}>element4</div>
  )
}
