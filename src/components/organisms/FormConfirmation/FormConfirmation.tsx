interface IFormConfirmation {
  testuid: string;
}

export const FormConfirmation: React.FC<IFormConfirmation> = ({testuid}: IFormConfirmation) => {
  return (
    <div data-testuid={testuid}>
      Thank you! Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need
      support, please feel free to email us at support@loremgaming.com.
    </div>
  )
}
