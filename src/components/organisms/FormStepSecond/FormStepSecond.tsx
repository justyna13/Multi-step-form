interface IFormStepSecond {
  testid: string;
  className?: string;
}

export const FormStepSecond: React.FC<IFormStepSecond> = ({testid}: IFormStepSecond) => {
  return (
    <div data-testid={testid}>element2</div>
  )
}
