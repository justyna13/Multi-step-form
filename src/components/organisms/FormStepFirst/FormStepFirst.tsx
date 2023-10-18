interface IFormStepFirst {
  testid: string;
  className?: string;
}

export const FormStepFirst: React.FC<IFormStepFirst> = ({testid}: IFormStepFirst) => {
  return (
    <div data-testid={testid}>element1</div>
  )
}
