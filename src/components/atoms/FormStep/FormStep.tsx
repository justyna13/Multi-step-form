interface IFormStep {
  testid: string;
}

export const FormStep: React.FC<IFormStep> = ({
  testid
}: IFormStep) => {
  return (
    <div data-testid={testid}>element</div>
  )
}
